import React, {
  ReactElement,
  FunctionComponent,
  useContext,
  useEffect,
  ReactNode,
  useRef,
  RefObject,
  useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import styled, { ThemeContext } from 'styled-components';

const FADE_TIME = 250;

export interface ModalProps {
  /**
   * The content to be displayed within the modal
   */
  children: ReactNode;
  /**
   * Identifies the element that provides the modal
   */
  ariaLabelledBy: string;
  /**
   * Function that closes the modal by flipping the isVisible value to false
   * This is passed to our background component to be called when the user
   * clicks away
   */
  closeHandler?: () => void;
  /**
   * Whether or not the modal should be visible on the package
   * This will be controlled by the parent component, likely via useState
   */
  isVisible: boolean;
  /** Specifies the ref of the Modal */
  forwardRef?: RefObject<HTMLDivElement>;
}

/**
 * A translucent background that will appear behind the modal, obscuring the
 * regular content of the page. Clicking this background will invoke the
 * onClick handler from the parent component.
 *
 * The modal-fade-* classes are used by react-transition-group to control the
 * fade in/out effects.
 */
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  &.modal-fade-appear {
    opacity: 0;
    visibility: hidden;
  }
  &.modal-fade-appear-active {
    opacity: 1;
    visibility: visible;
    transition: opacity ${FADE_TIME}ms;
  }
  &.modal-fade-appear-done {
    visibility: visible;
    opacity: 1;
  }
  &.modal-fade-enter {
    opacity: 0;
    visibility: hidden;
  }
  &.modal-fade-enter-active {
    opacity: 1;
    visibility: visible;
    transition: opacity ${FADE_TIME}ms;
  }
  &.modal-fade-enter-done {
    visibility: visible;
    opacity: 1;
  }
  &.modal-fade-exit {
    opacity: 1;
    visibility: visible;
  }
  &.modal-fade-exit-active {
    opacity: 0;
    visibility: visible;
    transition: opacity ${FADE_TIME}ms;
  }
  &.modal-fade-exit-done {
    visibility: hidden;
    opacity: 0;
  }
`;

/**
 * Defines the modal's basic styles. We're intentionally being minimal with the
 * styling so that the Modal component can primarily be concerned with the
 * behavior of the component, and most of the look and feel can be left up to
 * the children.
 */
const StyledModal = styled.div`
  background-color: ${({ theme }): string => theme.color.background.light};
  border: ${({ theme }): string => theme.border.light};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 40em;
  max-height: 100%;
  visibility: inherit;
`;

/**
 * Invisible element to manage keyboard tabbing.
 * Placing FocusSentinels before and after the modal
 * content keeps focus trapped within the modal.
 */
const FocusSentinel = styled.div`
  width: 0;
  height: 0;
  overflow: hidden;
  outline: none;
`;

/**
 * @component Modal
 * A dialog style popup that can be used to alert the user to new information,
 * or to display additional editing fields/content. While open, the background
 * will be obscured and scrolling will be disabled.
 */
declare type Modal = ReactElement<ModalProps>;
const Modal: FunctionComponent<ModalProps> = ({
  isVisible,
  children,
  closeHandler,
  ariaLabelledBy,
  forwardRef,
}): ReactElement => {
  const theme = useContext(ThemeContext);

  // If the ref is not provided, create one since it is used below
  const backupRef: React.RefObject<HTMLDivElement> = useRef(null);
  const finalForwardRef = forwardRef != null ? forwardRef : backupRef;

  // Tracks the element that was focused before the modal opened so focus
  // can be restored when the modal closes
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Encompasses all of the elements that can be focused on by the user
  // If you set the index of an element to -1, that element can also be focused
  const focusables = 'button, [href], input, select, textarea,'
            + ' [tabindex]:not([tabindex="-1"])';

  /**
   * Disable background scrolling while the modal is visible and restore the
   * body's overflow style when the modal closes or unmounts.
   */
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    }

    return (): void => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  /**
   * On open, save the currently focused element so it can be restored when
   * the modal closes. Actual focus-into-modal happens in onEntered below,
   * after the CSS transition has made the elements visible and focusable.
   * On close, restore focus to the element that was focused before opening.
   */
  useEffect(() => {
    if (!isVisible) return undefined;

    previousFocusRef.current = document.activeElement as HTMLElement | null;

    return (): void => {
      previousFocusRef.current?.focus();
    };
  }, [isVisible]);

  const [mouseDownOnModal, setMouseDownOnModal] = useState(false);

  return createPortal((
    <CSSTransition
      appear
      classNames="modal-fade"
      in={isVisible}
      timeout={FADE_TIME}
      onEntered={(): void => {
        const modal = finalForwardRef.current;
        if (!modal) return;
        const firstFocusable = modal.querySelector<HTMLElement>(
          `${focusables}:not([data-focus-sentinel="true"])`
        );
        // focusVisible: true forces the browser to show the :focus-visible
        // ring even though focus is being set programmatically (which would
        // otherwise keep the browser in "pointer" mode and suppress the ring).
        const focusOptions = { focusVisible: true } as FocusOptions;
        if (firstFocusable) {
          firstFocusable.focus(focusOptions);
        } else {
          modal.focus(focusOptions);
        }
      }}
    >
      <ModalBackdrop
        key="modal-backdrop"
        onClick={(evt): void => {
          // Don't close modal if user pressed down inside modal but released outside
          if (!mouseDownOnModal) {
            closeHandler?.();
          }
          evt.stopPropagation();
          setMouseDownOnModal(false);
        }}
      >
        {isVisible && (
          <StyledModal
            role="dialog"
            aria-labelledby={ariaLabelledBy}
            aria-modal="true"
            tabIndex={-1}
            onMouseDown={(): void => {
              setMouseDownOnModal(true);
            }}
            onMouseUp={(): void => {
              setMouseDownOnModal(false);
            }}
            onClick={(evt): void => { evt.stopPropagation(); }}
            theme={theme}
            ref={finalForwardRef}
          >
            <FocusSentinel
              data-focus-sentinel="true"
              tabIndex={0}
              aria-hidden="true"
              onFocus={(): void => {
                const modal = finalForwardRef.current;
                if (!modal) return;
                const focusableElements = Array.from(
                  modal.querySelectorAll<HTMLElement>(focusables)
                ).filter((element) => !element.hasAttribute('disabled')
                  && element.dataset.focusSentinel !== 'true');
                const lastFocusable = focusableElements[
                  focusableElements.length - 1
                ];
                if (lastFocusable) {
                  lastFocusable.focus();
                }
              }}
            />
            { children }
            <FocusSentinel
              data-focus-sentinel="true"
              tabIndex={0}
              aria-hidden="true"
              onFocus={(): void => {
                const modal = finalForwardRef.current;
                if (!modal) return;
                const focusableElements = Array.from(
                  modal.querySelectorAll<HTMLElement>(focusables)
                ).filter((element) => !element.hasAttribute('disabled')
                  && element.dataset.focusSentinel !== 'true');
                const firstFocusable = focusableElements[0];
                if (firstFocusable) {
                  firstFocusable.focus();
                }
              }}
            />
          </StyledModal>
        )}
      </ModalBackdrop>
    </CSSTransition>
  ), document.body);
};

export default Modal;

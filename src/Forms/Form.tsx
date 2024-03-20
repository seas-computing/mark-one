import React, {
  FunctionComponent,
  FormEventHandler,
  FormEvent,
  ReactNode,
  ReactElement,
} from 'react';
import styled from 'styled-components';
import { fromTheme } from '../Theme';

export interface FormProps {
  /** The id of the form */
  id: string;
  /** A label that specifies the purpose of the form */
  label: string;
  /** Handler attached to the onSubmit handler */
  submitHandler?: FormEventHandler<HTMLFormElement>
  /** The form elements */
  children: ReactNode[];
}

const StyledForm = styled.form`
  margin: ${fromTheme('ws', 'small')};
`;

const Form: FunctionComponent<FormProps> = (props): ReactElement => {
  const {
    id,
    label,
    submitHandler,
    children,
  } = props;
  return (
    <StyledForm
      id={id}
      aria-label={label}
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitHandler(e);
      }}
    >
      {children}
    </StyledForm>
  );
};

Form.defaultProps = {
  submitHandler: () => {},
};

export default Form;

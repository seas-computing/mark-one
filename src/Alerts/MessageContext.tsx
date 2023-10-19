import { createContext, Reducer } from 'react';
/**
 * Global message provider
 */

export const MessageContext = createContext(null);

/**
 * Possible types of message to display to the user
 */

export enum MESSAGE_TYPE {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
}

/**
 * Possible actions to take on the message queue
 */

export enum MESSAGE_ACTION {
  PUSH = 'PUSH',
  CLEAR = 'CLEAR',
}

/**
 * Used for displaying messages on the client
 */

export class AppMessage {
  public readonly variant: MESSAGE_TYPE;

  public readonly text: string;

  /**
   * Create a new application message. By default, sets the message priority to
   * "info", but alternativae values can be passed in as the second parameter.
   */

  public constructor(
    message: string,
    variant: MESSAGE_TYPE = MESSAGE_TYPE.INFO
  ) {
    this.variant = variant;
    this.text = message;
  }
}

/**
 * handles queueing logic for the top-level app component
 */

/**
 * Defines the state of the message reducer
 */

export interface MessageReducerState {
  queue: AppMessage[];
  currentMessage: AppMessage;
}

/**
 * Defines that kinds of actions that can be accepted by the reducer
 */

export interface MessageReducerAction {
  type: MESSAGE_ACTION;
  message?: AppMessage;
}

export const messageReducer:
Reducer<MessageReducerState, MessageReducerAction> = (
  state,
  action
): MessageReducerState => {
  const { currentMessage, queue } = state;
  switch (action.type) {
    case (MESSAGE_ACTION.PUSH): {
      if (!currentMessage) {
        return ({
          ...state,
          currentMessage: action.message,
        });
      }
      const newQueue = [...queue, action.message];
      return {
        ...state,
        queue: newQueue,
      };
    }
    case (MESSAGE_ACTION.CLEAR): {
      const nextQueue = [...queue];
      const nextMessage = nextQueue.shift();
      return {
        queue: nextQueue,
        currentMessage: nextMessage,
      };
    }
    default:
      return state;
  }
};

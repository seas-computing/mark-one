import { createContext, Context, Reducer } from 'react';

/**
 * Global message provider
 */

export const MessageContext: Context<Function> = createContext(null);

/**
 * handles queueing logic for the top-level app component
 */


export const messageReducer:
Reducer<MessageReducerState, MessageReducerAction> = (
  state,
  action
): MessageReducerState => {
  const { currentMessage, queue } = state;
  switch (action.type) {
    case (): {
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
    case (''): {
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

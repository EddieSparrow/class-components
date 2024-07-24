import { configureStore } from '@reduxjs/toolkit';

type State = {
  counter: number;
};

export type IncrementAction = {
  type: 'increment';
};

export type DecrementAction = {
  type: 'decrement';
};

export type Action = IncrementAction | DecrementAction;

const InitialState: State = {
  counter: 0,
};

export const reducer = (state = InitialState, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1,
      };
      break;
    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1,
      };
      break;
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});

import { ChangeEvent, createContext, useReducer, useCallback } from "react";

type StateType = {
  count: number;
  text: string;
};

export const initialState: StateType = {
  count: 0,
  text: "",
};

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: StateType, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload || "" };
    default:
      throw new Error("Action type not found");
  }
};

const useCounterContext = (initialState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  }, []);

  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    []
  );

  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });
  }, []);

  return { state, increment, decrement, handleTextInput };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: UseCounterContextType = {
  state: initialState,
  increment: () => {},
  decrement: () => {},
  handleTextInput: () => {},
};

export const CounterContext =
  createContext<UseCounterContextType>(initContextState);

export const CounterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { state, increment, decrement, handleTextInput } =
    useCounterContext(initialState);

  return (
    <CounterContext.Provider
      value={{ state, increment, decrement, handleTextInput }}
    >
      {children}
    </CounterContext.Provider>
  );
};

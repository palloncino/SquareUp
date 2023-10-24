import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

type ContextProviderProps = {children: ReactNode};

type State = {data: string};

type CTXType = {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
};

let initialState: State = {data: ''};

const CTX = createContext<CTXType | undefined>(undefined);

const ContextProvider = ({children}: ContextProviderProps) => {
  const [state, setState] = useState<State>(initialState);
  return <CTX.Provider value={{state, setState}}>{children}</CTX.Provider>;
};

export {CTX, ContextProvider};

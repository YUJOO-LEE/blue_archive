import { createContext, useReducer, PropsWithChildren, useState, Dispatch, SetStateAction } from 'react';

interface Action {
  type: string,
  curPage: number
}

interface ContextType {
  state: number;
  dispatch: ({type, curPage}: Action) => void;
  IsLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>> | null;
}

export const ScrollContext = createContext<ContextType>({
  state: 0,
  dispatch: () => {},
  IsLoading: false,
  setIsLoading: null
});

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case 'NEXT':
      return action.curPage + 1;
    case 'PREV':
      return action.curPage - 1;
    default:
      return state;
  }
};

const ScrollIndexProvider = ({ children }: PropsWithChildren) => {
  const [IsLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, 1);

  return (
    <ScrollContext.Provider value={{ state, dispatch, IsLoading, setIsLoading}}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollIndexProvider;
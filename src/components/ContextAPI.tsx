import { createContext, useReducer, PropsWithChildren, useEffect, useState } from 'react';

interface Action {
  type: string,
  curPage: number
}

interface ContextType {
  state: number;
  dispatch: ({type, curPage}: Action) => void;
  IsLoading: boolean;
}

export const ScrollContext = createContext<ContextType>({
  state: 0,
  dispatch: () => {},
  IsLoading: false,
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
  const [state, dispatch] = useReducer(reducer, 0);

  useEffect(() => {
    const pageHeight = window.innerHeight;

    setIsLoading(true);

    setTimeout(() => {
      window.scrollTo({
        top: pageHeight * (state - 1),
        left: 0,
      });

      setIsLoading(false);
    }, 1000);
  }, [state]);

  console.log(IsLoading);
  return (
    <ScrollContext.Provider value={{ state, dispatch, IsLoading}}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollIndexProvider;
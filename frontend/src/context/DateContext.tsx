import { ReactNode, createContext, useState } from "react";

type dateContextProps = {
  children: ReactNode;
};

export const dateContext = createContext<any>({
  date: new Date(),
  toogleDate: () => {},
});
export const DateProvider = ({ children }: dateContextProps) => {
  const [date, setDate] = useState(new Date());

  return (
    <dateContext.Provider value={{ date, setDate }}>
      {children}
    </dateContext.Provider>
  );
};

import { ReactNode, createContext, useState } from "react";

type userContextProps = {
  children: ReactNode;
};

export const userContext = createContext<any>({
  date: new Date(),
  toogleDate: () => {},
});
export const UserProvider = ({ children }: userContextProps) => {
  const [date, setDate] = useState(new Date());

  return (
    <userContext.Provider value={{ date, setDate }}>
      {children}
    </userContext.Provider>
  );
};

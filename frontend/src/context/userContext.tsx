import { ReactNode, createContext, useState } from "react";

type userContextProps = {
  children: ReactNode;
};

export const userContext = createContext<any>({
  user: "",
  toogleUser: () => {},
});
export const UserProvider = ({ children }: userContextProps) => {
  const [user, setUser] = useState("");

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

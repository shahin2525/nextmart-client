import { currentUser } from "@/services/auth/registration";
import { IUser } from "@/types";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
interface IUserProviderValues {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async () => {
    const user = await currentUser();
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [setLoading]);

  return (
    <UserContext.Consumer value={{ user, loading, setLoading, setUser }}>
      {children}
    </UserContext.Consumer>
  );
};
export default UserProvider;

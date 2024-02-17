"use client";
import React from "react";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);

type iUserContext = {
  user?: User | null;
  loading?: boolean;
};
type Props = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext({} as iUserContext);

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState<User | undefined>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({} as User);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

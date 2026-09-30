import {
  createContext,
  useContext,
  useState
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    const savedUser =
      localStorage.getItem("shopzone-user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  function loginAsGuest() {

    const guestUser = {
      id: "guest",
      name: "Guest User",
      role: "guest"
    };

    setUser(guestUser);

    localStorage.setItem(
      "shopzone-user",
      JSON.stringify(guestUser)
    );
  }

  function logout() {

    setUser(null);

    localStorage.removeItem(
      "shopzone-user"
    );
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    loginAsGuest,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
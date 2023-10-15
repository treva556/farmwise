




import { createContext, useState, useContext } from 'react';

const UserContext = createContext();


export const useAuth = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useAuth must be used within a UserProvider');
    }
    return context;
  };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};




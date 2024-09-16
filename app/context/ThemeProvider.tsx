import React, {createContext, useState, useContext, ReactNode} from 'react';

export interface ITheme {
  primary: string;
}

export const green: ITheme = {
  primary: 'green',
};

export const blue: ITheme = {
  primary: 'blue',
};

interface ThemeContextType {
  theme: ITheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: blue,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ITheme>(green);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'green' ? 'blue' : 'green'));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

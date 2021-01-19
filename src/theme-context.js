import React, { useEffect, useState } from 'react'

const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white'
  },
  light: {
    backgroundColor: 'white',
    color: 'black'
  }
}

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {}
}
export const ThemeContext = React.createContext(initialState)

const ThemeProvider=({children})=>{
    const [dark, setDark]= useState(false);

    useEffect(()=>{
        const isDark= localStorage.getItem('dark') === true ;
        setDark(isDark);
    },[dark])

    const toggle=()=>{
        const isDark = !dark
        localStorage.setItem('dark',JSON.stringify(isDark));
        setDark(isDark);
    }
    const theme=dark ? themes.dark : themes.light;
    return (
        <ThemeContext.Provider value={{theme,dark,toggle}}>
        {children}
    </ThemeContext.Provider>
    );

}

export default ThemeProvider;
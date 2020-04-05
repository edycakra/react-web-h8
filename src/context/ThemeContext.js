import React from 'react'

export const themes = {
    white: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    black: {
        foreground: "#ffffff",
        background: "#222222"
    }
}

export default React.createContext({
    theme: 'white',
    setTheme: () => {}
})
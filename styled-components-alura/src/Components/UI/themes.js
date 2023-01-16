import { 
    lightBackground, 
    lightBackgroundText, 
    lightContent, darkBackground, 
    darkBackgroundText, 
    darkContent } from "./variables";

    export const lightTheme = {
        body: lightBackground,
        text: lightBackgroundText,
        inside: lightContent,
        filter: ''
    }

    export const darkTheme = {
        body: darkBackground,
        text: darkBackgroundText,
        inside: darkContent,
        filter: 'invert(100%)'
    }
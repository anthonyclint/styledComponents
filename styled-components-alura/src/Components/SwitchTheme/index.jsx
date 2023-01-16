/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import ThemeOn from '../../assets/images/themeOn.svg';
import ThemeOff from '../../assets/images/themeOff.svg';
import { Icon } from "../UI";

const lightMode = <Icon src={ ThemeOn } alt='Tema Claro' />;
const darkMode = <Icon src={ ThemeOff } alt='Tema Escuro' />;

export default ( ({ theme }) => (theme ? darkMode : lightMode));

import React, { useState } from 'react';
import './App.css';
import { Menu } from "./Components/Menu/Menu";

export const App = () => {

  return (
    <>
      <Menu items={["Фильмы", "Сериалы", "Люди", "Вход", "Регистрация"]} />
    </>
  );
}

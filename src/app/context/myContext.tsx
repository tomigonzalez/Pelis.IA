"use client";
import React, { createContext, useState, ReactNode } from "react";

// Define la interfaz para el contexto
interface MyContextProps {
  myValue: string;
  setMyValue: (value: string) => void;
}

// Crea el contexto con un valor inicial
const MyContext = createContext<MyContextProps | undefined>(undefined);

// Define el proveedor del contexto
export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [myValue, setMyValue] = useState<string>("Valor inicial");

  return (
    <MyContext.Provider value={{ myValue, setMyValue }}>
      {children}
    </MyContext.Provider>
  );
};

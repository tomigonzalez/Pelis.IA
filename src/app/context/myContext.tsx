"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

// Define la interfaz para el contexto
interface MyContextProps {
  answers: string[];
  setAnswers: (newAnswers: string[]) => void;
}

// Crea el contexto con un valor inicial
const MyContext = createContext<MyContextProps | undefined>(undefined);

// Define el proveedor del contexto
export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<string[]>([]);

  return (
    <MyContext.Provider value={{ answers, setAnswers }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext debe usarse dentro de MyProvider");
  }
  return context;
};

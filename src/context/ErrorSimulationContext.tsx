'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ErrorSimulationContextType {
  simulateErrors: boolean;
  setSimulateErrors: (value: boolean) => void;
}

const ErrorSimulationContext = createContext<ErrorSimulationContextType | undefined>(undefined);

export function ErrorSimulationProvider({ children }: { children: ReactNode }) {
  const [simulateErrors, setSimulateErrors] = useState(false);

  return (
    <ErrorSimulationContext.Provider value={{ simulateErrors, setSimulateErrors }}>
      {children}
    </ErrorSimulationContext.Provider>
  );
}

export function useErrorSimulation() {
  const context = useContext(ErrorSimulationContext);
  if (context === undefined) {
    throw new Error('useErrorSimulation must be used within an ErrorSimulationProvider');
  }
  return context;
}

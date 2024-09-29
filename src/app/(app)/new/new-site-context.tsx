"use client";

import { createContext, useState, useContext } from "react";

// @ts-expect-error
const NewSiteContext = createContext();

// TODO define type for thiss
export const useNewSiteContext = (): any => {
  const context = useContext(NewSiteContext);
  if (!context) {
    throw new Error("useStep must be used within a StepProvider");
  }
  return context;
};

export const NewSiteContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // FIX THIS
  const [step, setStep] = useState(0);
  const [businessSearchResults, setBusinessSearchResults] = useState<any[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<any>();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <NewSiteContext.Provider
      value={{
        step,
        nextStep,
        prevStep,
        businessSearchResults,
        setBusinessSearchResults,
        selectedBusiness,
        setSelectedBusiness
      }}
    >
      {children}
    </NewSiteContext.Provider>
  );
};

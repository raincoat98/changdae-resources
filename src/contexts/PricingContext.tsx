import React, { createContext, useContext, useState, ReactNode } from "react";

interface PricingContextType {
  isPricingVisible: boolean;
  isContactVisible: boolean;
  togglePricingVisibility: () => void;
  toggleContactVisibility: () => void;
  setPricingVisibility: (visible: boolean) => void;
  setContactVisibility: (visible: boolean) => void;
}

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export const usePricing = () => {
  const context = useContext(PricingContext);
  if (context === undefined) {
    throw new Error("usePricing must be used within a PricingProvider");
  }
  return context;
};

interface PricingProviderProps {
  children: ReactNode;
}

export const PricingProvider: React.FC<PricingProviderProps> = ({
  children,
}) => {
  const [isPricingVisible, setIsPricingVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  const togglePricingVisibility = () => {
    setIsPricingVisible(!isPricingVisible);
  };

  const toggleContactVisibility = () => {
    setIsContactVisible(!isContactVisible);
  };

  const setPricingVisibility = (visible: boolean) => {
    setIsPricingVisible(visible);
  };

  const setContactVisibility = (visible: boolean) => {
    setIsContactVisible(visible);
  };

  return (
    <PricingContext.Provider
      value={{
        isPricingVisible,
        isContactVisible,
        togglePricingVisibility,
        toggleContactVisibility,
        setPricingVisibility,
        setContactVisibility,
      }}
    >
      {children}
    </PricingContext.Provider>
  );
};

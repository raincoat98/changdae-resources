import React, { createContext, useContext, useState, ReactNode } from "react";

interface PricingContextType {
  isPricingVisible: boolean;
  togglePricingVisibility: () => void;
  setPricingVisibility: (visible: boolean) => void;
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
  const [isPricingVisible, setIsPricingVisible] = useState(true);

  const togglePricingVisibility = () => {
    setIsPricingVisible(!isPricingVisible);
  };

  const setPricingVisibility = (visible: boolean) => {
    setIsPricingVisible(visible);
  };

  return (
    <PricingContext.Provider
      value={{
        isPricingVisible,
        togglePricingVisibility,
        setPricingVisibility,
      }}
    >
      {children}
    </PricingContext.Provider>
  );
};

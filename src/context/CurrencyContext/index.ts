import React, { ReactNode } from "react";
import { Currency } from "../../config/currency";

export interface ICurrencyContextProviderProps {
    children: ReactNode;
}

export interface ICurrencyContext {
    currentCurrency: ICurrencyOption;
    setCurrency: (currency: ICurrencyOption) => void;
    currencies: ICurrencyOption[];
}

export type ICurrencyOption = {
    label: keyof typeof Currency;
    value: Currency;
}
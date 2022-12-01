import { createContext, useContext, useState } from "react";
import { Currency } from "../../config/currency";
import { ICurrencyContextProviderProps, ICurrencyContext, ICurrencyOption } from "./index";

const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);
export const useCurrencyContext = () => useContext(CurrencyContext);

const useCurrencyContextValue = () => {
    const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(
        () => ({
            currentCurrency: { value: Currency.USD, label: "USD" },
            currencies: [
                { value: Currency.USD, label: "USD" },
                { value: Currency.EUR, label: "EUR" },
                { value: Currency.GBR, label: "GBR" },
            ],
            setCurrency: (currentCurrency: ICurrencyOption) => {
                setCurrencyContext((ctx: any) => ({
                    ...ctx,
                    currentCurrency,
                }));
            },
        }));
       return currencyContext;
};

export const useCurrencyContextProvider = () =>
    useContext<ICurrencyContext>(CurrencyContext);

export const CurrencyContextProvider = ({children}: ICurrencyContextProviderProps) => {
    return (
        <CurrencyContext.Provider value={useCurrencyContextValue()}>
            {children}
        </CurrencyContext.Provider>
    );
};

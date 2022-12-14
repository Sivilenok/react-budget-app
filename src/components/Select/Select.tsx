import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const CustomSelect = () => {
    const { currentCurrency, currencies, setCurrency } = useCurrencyContext();

    const handleSelect = (option: SingleValue<typeof currentCurrency>) => {
        if (option) {
            setCurrency(option);
        }
    };

    return (
        <Select
            options={currencies}
            onChange={handleSelect}
            value={currentCurrency}
            isSearchable={false}
        />
    );   
};

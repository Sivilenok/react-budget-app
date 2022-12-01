import React from "react";
import { StyledSpentCard } from "./styles";
import { createContext, ReactNode, useContext, useState } from "react";
import { useBudgetContext } from "../../context/BudgeContext/BudgetContext";

export const SpentCard = () => {
  return <StyledSpentCard>Spent so far:</StyledSpentCard>;
};

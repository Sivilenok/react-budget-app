import React from "react";
import { StyledSpentCard } from "./styles";
import { createContext, ReactNode, useContext, useState } from "react";
import { useBudgetContext } from "../../context/BudgeContext/BudgetContext";

export const SpentCard = () => {
  const { spending } = useBudgetContext();
  return <StyledSpentCard>Spent so far: {spending}</StyledSpentCard>;
};

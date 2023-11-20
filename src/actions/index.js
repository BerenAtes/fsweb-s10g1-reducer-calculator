export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const RESET = "RESET";
export const MEMORY_PLUS = "MEMORY_PLUS";
export const MEMORY_RECALL = "MEMORY_RECALL";
export const MEMORY_RESET = "MEMORY_RESET";

export const addOne = () => {
  return { type: ADD_ONE };
};
export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const reset = () => {
  return { type: RESET };
};

export const memoryPlus = () => {
  return { type: MEMORY_PLUS };
};
export const memorySave = () => {
  return { type: MEMORY_RECALL };
};

export const memoryReset = () => {
  return { type: MEMORY_RESET };
};

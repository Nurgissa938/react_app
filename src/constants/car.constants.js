export const FUEL_TYPES = {
  PETROL: { value: "petrol", label: "Бензин" },
  DIESEL: { value: "diesel", label: "Дизель" },
  ELECTRIC: { value: "electric", label: "Электрический" },
};

export const TRANSMISSION_TYPES = {
  AUTOMATIC: { value: "automatic", label: "Автомат" },
  MANUAL: { value: "manual", label: "Механика" },
};

export const getFuelLabel = (value) =>
  Object.values(FUEL_TYPES).find((f) => f.value === value)?.label;

export const getTransmissionLabel = (value) =>
  Object.values(TRANSMISSION_TYPES).find((t) => t.value === value)?.label;

import type { BaseLocation } from "@/types";

export const HEADQUARTERS: BaseLocation = {
  city: "Salvador",
  state: "Bahia",
  region: "Nordeste",
  country: "Brasil",
  isHeadquarters: true,
};

export const OPERATING_AREAS: BaseLocation[] = [
  HEADQUARTERS,
  { city: "Nordeste", state: "BR", region: "Nordeste", country: "Brasil" },
];

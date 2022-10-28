import { atom } from "recoil";

export const partsTotalWeightAtom = atom<number>({
  key: "partsTotalWeight",
  default: 0,
});

export const shifterWeightAtom = atom<number | null>({
  key: "shifterWeight",
  default: null,
});

export const reardWeightAtom = atom<number>({
  key: "reardWeight",
  default: 0,
});

export const frontdWeightAtom = atom<number>({
  key: "frontdWeight",
  default: 0,
});

export const cranksWeightAtom = atom<number>({
  key: "creanksWeight",
  default: 0,
});

export const cassWeightAtom = atom<number>({
  key: "cassWeight",
  default: 0,
});

export const chainWeightAtom = atom<number>({
  key: "chainWeight",
  default: 0,
});

export const brakesWeightAtom = atom<number>({
  key: "brakesWeight",
  default: 0,
});

export const totalWeightAtom = atom<number>({
  key: "totalWeight",
  default: 0,
});

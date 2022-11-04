import { atom, selector } from "recoil";

interface IParts {
  id: number;
  weight: number;
}

export const shifterWeightAtom = atom<IParts>({
  key: "shifterWeight",
  default: { id: 0, weight: 0 },
});

export const reardWeightAtom = atom<IParts>({
  key: "reardWeight",
  default: { id: 0, weight: 0 },
});

export const frontdWeightAtom = atom<IParts>({
  key: "frontdWeight",
  default: { id: 0, weight: 0 },
});

export const cranksWeightAtom = atom<IParts>({
  key: "creanksWeight",
  default: { id: 0, weight: 0 },
});

export const cassWeightAtom = atom<IParts>({
  key: "cassWeight",
  default: { id: 0, weight: 0 },
});

export const chainWeightAtom = atom<IParts>({
  key: "chainWeight",
  default: { id: 0, weight: 0 },
});

export const brakesWeightAtom = atom<IParts>({
  key: "brakesWeight",
  default: { id: 0, weight: 0 },
});

export const partsTotalWeightAtom = atom<number>({
  key: "partsTotalWeight",
  default: 0,
});

export const tabStateAtom = atom<number>({
  key: "tabState",
  default: 1,
});

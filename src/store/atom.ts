import { atom } from "recoil";

export const partsWeightAtom = atom<number>({
  key: "partsWeight",
  default: 0,
});

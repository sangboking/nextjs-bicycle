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

export const partsTotalSelector = selector({
  key: "partsTotalSelector",
  get: ({ get }) => {
    const shifter = get(shifterWeightAtom);
    const rearD = get(reardWeightAtom);
    const frontD = get(frontdWeightAtom);
    const cranks = get(cranksWeightAtom);
    const cass = get(cassWeightAtom);
    const chain = get(chainWeightAtom);
    const brakes = get(brakesWeightAtom);

    const total =
      shifter.weight +
      rearD.weight +
      frontD.weight +
      cranks.weight +
      cass.weight +
      chain.weight +
      brakes.weight;
    return total;
  },
});

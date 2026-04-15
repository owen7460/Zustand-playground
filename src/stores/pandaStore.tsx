import { create } from "zustand";

interface Panda {
  panda: number;
  bornPanda: () => void;
  setPanda: () => void;
}

const usePandaStore = create<Panda>((set) => ({
  panda: 0,
  bornPanda: () => set((state) => ({ panda: state.panda + 1 })),
  setPanda: () => set(() => ({ panda: 0 })),
}));

export default usePandaStore;

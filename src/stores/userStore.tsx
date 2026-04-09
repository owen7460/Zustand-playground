import { create } from "zustand";

interface UserStore {
  name: string;
  grade: number;
  incrementGrade: () => void;
  decrementGrade: () => void;
  resetGrade: () => void;
  getGrade: () => number;
}

const useUserStore = create<UserStore>((set, get) => ({
  name: "Owen",
  grade: 1,

  incrementGrade: () => set((state) => ({ grade: state.grade + 1 })),

  decrementGrade: () => set((state) => ({ grade: state.grade - 1 })),

  resetGrade: () => set({ grade: 0 }),

  getGrade: () => get().grade,
}));

export default useUserStore;

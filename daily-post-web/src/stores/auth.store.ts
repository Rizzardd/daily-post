import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type AuthState = {
  accessToken: string | null;
};

type AuthActions = {
  updateAccessToken: (accessToken: string) => void;
  clearAccessToken: () => void;
};

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  immer((set) => ({
    accessToken: localStorage.getItem("auth:acess_token"),
    updateAccessToken: (accessToken: string) =>
      set((state) => {
        state.accessToken = accessToken;
        localStorage.setItem("auth:acess_token", accessToken);
      }),
    clearAccessToken: () =>
      set((state) => {
        state.accessToken = null;
        localStorage.removeItem("auth:acess_token");
      }),
  }))
);

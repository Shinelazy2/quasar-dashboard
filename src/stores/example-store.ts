import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export type User = {
  loginId: string;
  at: string;
  rt: string;
};

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: [] as User[],
  }),
  actions: {
    //
    loginUser(loginId: string, at: string, rt: string) {
      this.user.push({
        loginId,
        at,
        rt,
      });
    },
    joinUser(loginId: string, at: string, rt: string) {
      this.user.push({
        loginId,
        at,
        rt,
      });
    },
    findLoginUser() {
      console.log(
        '🚀 ~ file: authStore.ts ~ line 23 ~ findLoginUser ~ user',
        this.user
      );
    },
  },
  getters: {
    //
  },
});

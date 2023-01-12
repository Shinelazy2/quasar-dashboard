import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type User = {
  loginId: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: [] as User[],
  }),
  actions: {
    //
    loginUser(loginId: string) {
      this.user.push({
        loginId,
      })
    },
    joinUser(loginId: string) {
      this.user.push({
        loginId,
      })
    },
    findLoginUser() {
      console.log(
        '🚀 ~ file: authStore.ts ~ line 23 ~ findLoginUser ~ user',
        this.user,
      )
    },
  },
  getters: {
    //
  },
})

import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    pending: true
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async getUsers() {
      const { data: users, pending } = await useApiFetch('/users', {
        method: "get"
      });

      this.users = users.value;
      this.pending = pending.value;
    }
  },
})
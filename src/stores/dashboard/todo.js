import { defineStore } from 'pinia'

import * as s$todo from '@/sevices/dashboard/todo'

export const useListStore = defineStore({
  id: 'todo',
  // state is same as data in options api
  state: () => ({
    list: [],
  }),
  actions: {
    async a$list() {
      try {
        // object destructure
        const { data } = await s$todo.list()
        this.list = data;
      } catch (e) {
        console.error('actions todo list error', e);
        this.list = [];
        throw e;
      }
    },
    async a$add(data) {
      try {
        await s$todo.add(data)
        await this.a$list()
      } catch ({ message, error }) {
        throw message ?? error
      }
    },
    async removeIndex(index) {
      try {
        await s$todo.del(id)
        await this.a$list()
      } catch ({ message, error }) {
        throw message ?? error
      }
      this.list = this.list.filter((val, idx) => index !== idx)
    },
    editIndex(index, data) {
      this.list[index] = data
    }
  },
  getters: {
    g$list: ({ list }) => list,
    getDetail: ({ list }) => {
      return (index) => list[index]
    }
  }
})

export default useListStore;
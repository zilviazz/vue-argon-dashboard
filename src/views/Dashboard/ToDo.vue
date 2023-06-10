<script>
import { mapActions, mapState } from 'pinia';
import d$todo from '@/stores/dashboard/todo'

export default {
    name: 'ToDo',
    computed: {
        ...mapState(d$todo, ['g$list']),
    },
    methods: {
        ...mapActions(d$todo, ['a$list']),
        async getList() {
            try {
                await this.a$list();
            } catch (e) {
                console.error('method getlist error', e);
            }
        }
    },
    async created() {
        await this.getList();
    }
};
</script>
<template>
    <!-- <div>
        <ol>
            <li v-for="(item, index) in g$list" :key="index">{{ item }}</li>
        </ol>
    </div> -->
    <div>
    <table border="1px">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <ComponentTable :data="g$list" :fields="fields" />
      </div>
    </div>
  </div>
</template>

<script>
import ComponentTable from "../../components/ComponentTable.vue"

import d$todo from "../../stores/dashboard/todo";
import { mapActions, mapState } from "pinia";

export default {
  name: "tables",
  components: {
    ComponentTable,
  },
  data() {
    return {
      fields: [
          'id',
          'title',
          'createdAt',
          'completed',
          'description',
        ]
    };
  },
  computed :{
    ...mapState(d$todo, ['g$list'])
  },
  async created(){
    await this.a$list();
  },
  methods :{
    ...mapActions(d$todo, ['a$list'])
  }
};
</script>



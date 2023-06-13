<script>
import ArgonButton from '../components/ArgonButton.vue';

export default {
  name: 'BaseTable',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    actions: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
  },
  components: {
    ArgonButton
  },
}
</script>

<template>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <template v-for="(column, index) in columns" :key="index">
          <th>{{ column }}</th>
        </template>
      </tr>
    </thead>
    <tbody>
      <template v-for="(row, i) in data" :key="i">
        <tr>
          <template v-for="column in columns" :key="column">
            <td>{{ row[column] }}</td>
          </template>
          <template v-if="actions.length">
            <td>
              <template v-for="(action, key) in actions" :key="key">
                <argon-button @click="$emit(`${action.event}`, row)">
                  {{ action.title }}
                </argon-button>
              </template>
            </td>
            <!-- <td>
                <argon-button @click="updateData(item, data)">Edit</argon-button>
                <argon-button color="danger" @click="() => removeIndex(index)">Delete</argon-button>
            </td> -->
          </template>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style lang="scss">
table {
    background-color: white;
  th,
  td {
    // border: 1px solid black;
    border-collapse: collapse;
  }
}
</style>
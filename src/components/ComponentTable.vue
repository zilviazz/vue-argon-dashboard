<template>
<div>
    <router-link to="/dashboard/form">
        <argon-button >New Task</argon-button>
    </router-link>
  </div>
<br>
<table id="tableComponent" class="table table-bordered table-striped">
    <thead>
    <tr>
        <!-- loop through each value of the fields to get the table header -->
        <th  v-for="field in fields" :key='field' @click="sortTable(field)" > 
        {{field}} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
        </th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>
        <!-- Loop through the list get the each student data -->
        <tr v-for="item in data" :key="item">
            <td v-for="field in fields" :key='field'>{{item[field]}}</td>
            <td>
                <argon-button @click="updateData(item, data)">Edit</argon-button>
                <argon-button color="danger" @click="deleteData(index)">Delete</argon-button>
            </td>
        </tr>
    </tbody>
    </table> 
    </template>

    <script>
    // import "bootstrap/dist/css/bootstrap.min.css";
    import ArgonButton from "../components/ArgonButton.vue";
    import { useListStore } from '../stores/dashboard/todo';
    import { mapActions } from "pinia";
    import { baseApi } from "@/plugins/axios";
    import axios from "axios";


    export default {
    name: 'ComponentTable',
    props:{
        data:{
            type: Array,
        },
        fields:{
            type: Array,
        }
    }, 
    components:{
        ArgonButton
    }, 
    methods:{
        deleteData(id) {
            console.log(id)
            axios.delete(`https://be.tautan.tk/api/todo/${id.id}`)
            .then(response => {
            console.log(response.data);
            })
            .catch(error => {
            console.error(error);
            });
        }, 
//   setup() {
//     const store = useListStore;
//     const { deleteItem } = mapActions(store, ['removeItem']);

//     return {
//       list: store.list,
//       deleteItem
//     };
//   }
    },
    
    
    // setup() {
    //     const listStore = useListStore();
    //     const dataList = listStore.getAllData;

    //     const deleteData = async (id) => {
    //     await listStore.deleteData(id);
    //     };
    //     const { updateData } = mapActions({
    //     updateData: dataStore.updateData
    //     });

    //     return {
    //     dataList,
    //     deleteData,
    //     updateData
    //     };
    // }
    }
</script>

<style>
.table {
    background-color: white;
}

</style>
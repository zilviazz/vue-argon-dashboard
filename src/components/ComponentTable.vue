<template>
<div>
    <argon-button >Tambah</argon-button>
</div>
<br>
<table id="tableComponent" class="table table-bordered table-striped">
    <thead>
    <!-- <tr>Tabel</tr> -->
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
        <tr v-for="item in data" :key='item'>
            <td v-for="field in fields" :key='field'>{{item[field]}}</td>
            <td>
                <argon-button>Edit</argon-button>
                <argon-button color="danger">Delete</argon-button>
            </td>
        </tr>
    </tbody>
    </table> 
    </template>

    <script>
    // import "bootstrap/dist/css/bootstrap.min.css";
    import ArgonButton from "../components/ArgonButton.vue";

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
    }
    }
</script>

<style>
.table {
    background-color: white;
}

</style>
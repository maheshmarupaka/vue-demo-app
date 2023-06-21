<template lang="">
    <div style="margin-top: 10%;">
    <div class="searchBar">
     <!-- Filter Search -->
     <div class="input-group mb-5">
       <input type="search" class="form-control" v-model='searchQueryName' placeholder="Student's Name" aria-label="Recipient's username" aria-describedby="button-addon2">
       <input type="search" class="form-control" v-model='searchQueryCourse' placeholder="Course Name" aria-label="Recipient's username" aria-describedby="button-addon2">
     </div>
    </div>
        <table id="tableComponent" class="table table-bordered table-striped">
            <thead>
                <tr>
                <!-- loop through each value of the fields to get the table header -->
                <th>
					<label class="form-checkbox">
                        <input type="checkbox" v-model="selectAll" @click="select">
                        <i class="form-icon"></i>
                    </label>
                </th>
                <th  v-for="field in fields" :key='field' @click="sortTable(field)" > 
                    {{field}} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
                </th>
                </tr>
            </thead>
            <tbody>
                <!-- Loop through the list get the each student data -->
                <tr v-for="item in filteredList" :key='item'>
                <label class="form-checkbox">
                    <input type="checkbox" :value="item.id" v-model="selected">
                    <i class="form-icon"></i>
                </label>
                 <td v-for="field in fields" :key='field'>{{item[field]}}</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>
<script setup>
import {ref,computed} from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import { sortBy} from 'lodash';
const studentData = ref( [
      {ID:"01", Name: "Abiola Esther", Course:"Computer Science", Gender:"Female", Age:"17"},
     {ID:"02", Name: "Robert V. Kratz", Course:"Philosophy", Gender:"Male", Age:'19'},
      {ID:"03", Name: "Kristen Anderson", Course:"Economics", Gender:"Female", Age:'20'},
     {ID:"04", Name: "Adam Simon", Course:"Food science", Gender:"Male", Age:'21'},
      {ID:"05", Name: "Daisy Katherine", Course:"Business studies", Gender:"Female", Age:'22'},  
    ])
const fields = ref([
    'ID','Name','Course','Gender','Age'
])
const searchQueryName = ref('')
const searchQueryCourse = ref('')
// a value to check for sort
let sort = ref(false);
let updatedList = ref([])
// a function to sort the table
const sortTable = (col) => {
    sort.value = true
    // Use of _.sortBy() method
    updatedList.value = sortBy(studentData.value,col)
    studentData.value = updatedList.value
  }
  const filteredList = computed(() => {
  return studentData.value.filter((sData) => {
    return (
    // converts the query and value to lower case  index
        sData.Name.toLowerCase().indexOf(searchQueryName.value.toLowerCase()) != -1  &&
        sData.Course.toLowerCase().indexOf(searchQueryCourse.value.toLowerCase()) != -1
       )
       })
    })
</script>
<style lang="">
    
</style>
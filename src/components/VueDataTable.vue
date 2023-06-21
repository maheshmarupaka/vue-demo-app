<!-- <script setup>
import Vue3Datatable  from '@bhplugin/vue3-datatable';

const columns = [
  {
    name: 'Name',
    data: 'name',
  },
  {
    name: 'Age',
    data: 'age',
  },
  {
    name: 'Country',
    data: 'country',
  },
];

const data = [
  {
    name: 'John Doe',
    age: 30,
    country: 'United States',
  },
  {
    name: 'Jane Doe',
    age: 25,
    country: 'Canada',
  },
  {
    name: 'Peter Smith',
    age: 40,
    country: 'United Kingdom',
  },
];

const options = {
  pageLength: 10,
  filter: true,
  sort: true,
  pagination: true,
  select: true,
  selectCheckboxes: true,
  export: {
    excel: true,
    csv: true,
    json: true,
  },
};

const table = new Vue3Datatable ({
  el: '#table',
  columns,
  data,
  options,
});
</script>

<style>
.table {
  width: 100%;
}

.table th,
.table td {
  padding: 10px;
}

.table th {
  background-color: #f9f9f9;
}

.table .selected {
  background-color: #ccc;
}
</style>
<template>

<div id="table">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in table.data" :key="index">
        <td>{{ row.name }}</td>
        <td>{{ row.age }}</td>
        <td>{{ row.country }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template> -->

<template>
    <div>
      <input type="text" v-model="search" placeholder="Search" />
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" v-model="selectAll" />
            </th>
            <th v-for="column in columns" :key="column">
              {{ column }}
              <button @click="sort(column)">Sort</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredItems" :key="item.id">
            <td>
              <input type="checkbox" v-model="selectedItems" :value="item" />
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.age }}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>Showing {{ visibleItems.length }} of {{ items.length }} entries</p>
        <button @click="exportData('excel')">Export Excel</button>
        <button @click="exportData('csv')">Export CSV</button>
        <button @click="exportData('json')">Export JSON</button>
      </div>
      <div>
        <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, computed } from 'vue';
//   import { exportToExcel, exportToCSV, exportToJSON } from './exportUtils';
  
const items = reactive([
        { id: 1, name: 'John Doe', email: 'john@example.com', age: 25 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 30 },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35 },
        // Add more items as needed
      ]);
const columns = ['Name', 'Email', 'Age'];
const search = reactive('');
      const selectedItems = reactive([]);
  
      let sortColumn = reactive('');
      let sortOrder = reactive(1);
  
      let currentPage = reactive(1);
      const pageSize = 5;
  
      const filteredItems = computed(() => {
        return items.slice(0).filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      });
  
      const sortedItems = computed(() => {
        if (sortColumn) {
          return filteredItems.value.slice(0).sort((a, b) => {
            const fieldA = a[sortColumn].toLowerCase();
            const fieldB = b[sortColumn].toLowerCase();
            if (fieldA < fieldB) {
              return -1 * sortOrder;
            }
            if (fieldA > fieldB) {
              return 1 * sortOrder;
            }
            return 0;
          });
        }
        return filteredItems.value;
      });
  
      const visibleItems = computed(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return sortedItems.value.slice(startIndex, endIndex);
      });
  
      const totalPages = computed(() =>
        Math.ceil(sortedItems.value.length / pageSize)
      );
  
      const selectAll = computed({
        get() {
          return selectedItems.length === visibleItems.value.length;
        },
        set(value) {
          selectedItems.splice(0, selectedItems.length);
          if (value) {
            selectedItems.push(...visibleItems.value);
          }
        },
      });
  
      const sort = (column) => {
        if (sortColumn === column) {
          sortOrder *= -1;
        } else {
          sortColumn = column;
          sortOrder = 1;
        }
      };
  
      const previousPage = () => {
        if (currentPage > 1) {
          currentPage--;
        }
      };
  
      const nextPage = () => {
        if (currentPage < totalPages.value) {
          currentPage++;
        }
      };
  
      const exportData = (format) => {
        // let exportedData = sortedItems.value;
        if (format === 'excel') {
        //   exportToExcel(exportedData);
        } else if (format === 'csv') {
        //   exportToCSV(exportedData);
        } else if (format === 'json') {
        //   exportToJSON(exportedData);
        }
      };
  </script>
  
  <style>
  table {
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 8px;
    border: 1px solid black;
  }
  
  button {
    margin: 4px;
  }
  </style>
  

<!-- <template lang="">
    <div>
        <DataTable :data="data"  class="display">
    <thead>
        <tr>
            <th>First</th>
            <th>Second</th>
        </tr>
    </thead>
</DataTable>
    </div>
</template>
<script setup>
import DataTable from 'datatables.net-vue3'
import Select from 'datatables.net-select';
import {ref} from 'vue'
 DataTable.use(Select);

const data = ref([
  [1, 2],
  [3, 4],
]);
</script>
<style lang="">
    
</style> -->




<!-- vue-data-table-net -->
<!-- <template>
    <div>
      <vdtnet-table
        :columns="columns"
        :data="data"
        :options="options"
        @edit="editItem"
        @delete="deleteItem"
      ></vdtnet-table>
    </div>
  </template>
<script setup>
import 'jquery/dist/jquery.min.js'; // Import the jQuery library
import 'datatables.net/js/jquery.dataTables.min.js'; // Import the DataTables library
import VdtnetTable  from 'vue-datatables-net'; // Import the vue-datatables-net wrapper
import {ref} from 'vue'

const  columns = ref([
        // Define your columns here
        { title: 'Name', data: 'name' },
        { title: 'Age', data: 'age' },
        // ...add more columns as needed
      ])
const data =ref([
        // Add your data here
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        // ...add more data rows as needed
      ])
const options = ref({
        // Customize DataTables options here
        // Example options:
        searching: true, // Enable the search filter
        paging: true, // Enable pagination
        lengthChange: true, // Allow changing the number of items per page
        ordering: true, // Enable column sorting
        info: true, // Show table information
        dom: 'Bfrtip', // Show additional buttons for export etc.
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print'], // Enable export options
      })
const editItem = (item)=> {
      // Handle edit action
      return item
    }
const deleteItem = (item)=> {
      // Handle delete action
      return item
    }
</script>
<style lang="">
    
</style> -->
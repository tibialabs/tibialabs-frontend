<template>
  <div
    v-bind:style="{
      maxWidth: '700px',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '16px',
    }"
  >
    <b-table
      :responsive="true"
      :striped="true"
      :bordered="true"
      :small="true"
      :hover="true"
      id="my-table"
      :busy.sync="isBusy"
      :items="getDataFromAPI"
      :fields="fields"
      :rows="22"
      :per-page="22"
      :current-page="1"
      responsive="sm"
    ></b-table>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { BootstrapVue } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

export default {
  data() {
    return {
      isBusy: false,
      perPage: 3,
      currentPage: 1,
      rows: 10,
      fields: [
        {
          key: 'id',
          label: 'ID',
          class: 'text-center',
          thStyle: 'width 50px',
        },
        {
          key: 'name',
          label: 'Creature',
          class: 'text-center',
          thStyle: 'width 150px',
        },
        {
          key: 'date',
          label: 'Date',
          class: 'text-center',
          thStyle: 'width 100px',
        },
      ],
    }
  },
  methods: {
    getDataFromAPI() {
      this.isBusy = true
      let promise = axios.get(
        'https://api.tibialabs.com/v2/boostedcreatures.json'
      )
      return promise
        .then(data => {
          //   console.log(data)
          const items = data.data.boostedcreatures.data
          this.isBusy = false
          return items
        })
        .catch(error => {
          this.isBusy = false
          return []
        })
    },
  },
}
</script>

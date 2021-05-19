import axios from 'axios'
import Vue from 'vue'

let API_URL = process.env.VUE_APP_API_URL
const devInstance = createInstance(API_URL)

function createInstance(baseURL) {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    //   Authorization: `Bearer ${localStorage.token}`,
    },
  })
}

export default {
  install() {
    Vue.prototype.$http = devInstance
  },
}
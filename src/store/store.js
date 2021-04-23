import OpenWeather from "./module/open-weather-api";
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    OpenWeather,
  },
});
export default store;

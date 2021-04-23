import { createStore } from "vuex";
import * as service from "./service";

const state = {
  citiesWeather: {},
  cityWeather: {},
};

const getters = {
  citiesWeather: (state) => {
    return state.citiesWeather.list;
  },
  cityWeather: (state) => {
    return state.cityWeather;
  },
};

const actions = {
  async fetchWeatherForCities({ commit }) {
    const response = await service.fetchWeatherForCities();
    commit("addWeatherForCities", response);
  },
  async fetchWeatherForCity({ commit }, { cityId }) {
    const response = await service.fetchWeatherForCity(cityId);
    commit("addWeatherForCity", response);
  },
};

const mutations = {
  addWeatherForCities: (state, weather) => {
    state.citiesWeather = weather;
  },
  addWeatherForCity: (state, weather) => {
    state.cityWeather = weather;
  },
};

const store = createStore({
  state,
  mutations,
  actions,
  getters,
});
export default store;

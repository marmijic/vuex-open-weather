<template>
  <div class="weathers-wrapper">
    <div
      class="city-weather"
      v-for="(cityWeather, index) in citiesWeather"
      v-bind:key="index"
    >
      <p class="city-name">{{ cityWeather.name }}</p>
      <img
        :src="
          'http://openweathermap.org/img/w/' +
            cityWeather?.weather[0].icon +
            '.png'
        "
        alt=""
      />
      <p class="temperature">{{ cityWeather?.main?.temp }} &#8451;</p>
      <div class="temperatue"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchWeatherForCity"]),
  },
  computed: {
    citiesWeather() {
      return this.$store.getters.citiesWeather;
    },
  },
  created() {
    this.fetchWeatherForCity();
  },
};
</script>

<style scoped>
.weathers-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.city-weather {
  background: #ffffff;
  border-radius: 3px;
  border: 1px solid #59656f;
  box-sizing: border-box;
  width: 150px;
  margin-right: 15px;
}

.city-weather > p {
  color: #2c4251;
}

.city-weather:last-child {
  margin-right: 0;
}
</style>

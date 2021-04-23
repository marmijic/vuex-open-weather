<template>
  <div class="weathers-wrapper">
    <div
      class="city-weather"
      v-for="(cityWeather, index) in citiesWeather"
      v-bind:key="index"
      v-on:click="navigateTo(cityWeather.id)"
    >
      <p class="city-name">
        <b>{{ cityWeather.name }}</b>
      </p>
      <div class="weather">
        <img
          :src="
            'http://openweathermap.org/img/w/' +
              cityWeather?.weather[0].icon +
              '.png'
          "
          :alt="cityWeather.name"
        />
        <p class="temperature">{{ cityWeather?.main?.temp }} &#8451;</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchWeatherForCities"]),
    navigateTo(cityId) {
      this.$router.push({
        path: `/forecast/${cityId}`,
      });
    },
  },
  computed: {
    citiesWeather() {
      return this.$store.getters.citiesWeather;
    },
  },
  created() {
    this.fetchWeatherForCities();
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
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 6px;
  border: 1px solid #59656f;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  margin-right: 15px;
  cursor: pointer;
}

.city-weather p {
  color: #2c4251;
  font-size: 25px;
}

.city-weather > .weather {
  display: flex;
  align-items: center;
}

.city-weather > .weather > img {
  height: 80px;
}

.city-weather > .weather > p {
  font-weight: bold;
}

.city-weather:last-child {
  margin-right: 0;
}

.city-weather:hover {
  border-color: #e6e6ea;
  background-color: #f4f4f8;
}

.city-weather:last-child {
  margin-right: 0;
}
</style>

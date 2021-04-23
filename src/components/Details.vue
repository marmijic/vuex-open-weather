<template>
  <div class="details-wrapper">
    <h1 class="city-name">{{ weather?.city?.name }}</h1>
    <div class="forecast-wrapper">
      <div
        class="forecast"
        v-for="(forecast, index) in weather.list"
        v-bind:key="index"
      >
        <p class="time">{{ forecast?.dt_txt }}</p>
        <p class="temperature">{{ forecast?.main?.temp }} &#8451;</p>
        <img
          :src="
            'http://openweathermap.org/img/w/' +
              forecast?.weather[0].icon +
              '.png'
          "
          :alt="weather?.city?.name"
        />
        <p class="description">{{ forecast?.weather[0].description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Details",
  methods: {
    ...mapActions(["fetchWeatherForCity"]),
  },
  computed: {
    weather() {
      return this.$store.getters.cityWeather;
    },
  },
  beforeMount() {
    const { id } = this.$route.params;
    this.fetchWeatherForCity({ cityId: id });
  },
};
</script>

<style scoped>
.forecast-wrapper {
  max-width: 991px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.forecast {
  width: 25%;
}
</style>

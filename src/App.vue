<template>
  <div class="router-wrapper">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: 100%;
}
.router-wrapper {
  background-image: url("./assets/clouds.jpg");
  height: 100%;
  min-height: 100vh;
  padding: 50px 0;
}
</style>

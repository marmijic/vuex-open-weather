import axios from "axios";

const zagrebId = 3337532;
const osijekId = 3193935;
const rijekaId = 3191648;
const splitId = 3190261;
const dubrovnikId = 3201047;
const zadarId = 3186952;
const varazdinId = 3188383;

export async function fetchWeatherForCities() {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_URL}/group?id=${zagrebId},${osijekId},${rijekaId},${splitId},${dubrovnikId},${zadarId},${varazdinId}&appid=${process.env.VUE_APP_API_KEY}&units=metric`
    );
    return response.data;
  } catch (e) {
    console.error("Failed to fetch weather for cities", e);
  }
}

export async function fetchWeatherForCity(cityId) {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_URL}/forecast?id=${cityId}&appid=${process.env.VUE_APP_API_KEY}&units=metric`
    );
    return response.data;
  } catch (e) {
    console.error("Failed to fetch weather city", e);
  }
}

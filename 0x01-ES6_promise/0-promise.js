function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call
    setTimeout(() => {
      resolve("Response from API");
    }, 2000);
  });
}

export default getResponseFromAPI;

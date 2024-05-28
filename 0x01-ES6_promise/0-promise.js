function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulating an API response
        const success = true;
        if (success) {
            resolve("API call succeeded");
        } else {
            reject("API call failed");
        }
    });
}

export default getResponseFromAPI;


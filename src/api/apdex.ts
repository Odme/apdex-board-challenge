const apdex = () => ({
  getApdex: async () => {
    const url = new URL('https://witbooking-public-app-assets.s3.eu-west-1.amazonaws.com/host-app-data.json');
    return fetch(url);
  },
});

export default apdex;

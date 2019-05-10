
export default {
  requestInterceptors: [
    {
      success: config => config,
      error: error => Promise.reject(error),
    },
  ],

  responseInterceptors: [
    {
      success: config => config,
      error: error => Promise.reject(error),
    },
  ],
};

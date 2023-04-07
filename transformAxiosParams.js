export default ({
   auth = true,
   data,
   options = {},
   sendData = false,
   url = '',
}) => {
   const lang = localStorage.getItem('i18nextLng') || 'uz';
   const token = localStorage.getItem('token');
   const headers = auth ? { Authorization: `Bearer ${token}` } : {};
   const baseURL =
      process.env.NODE_ENV === 'development'
         ? process.env.REACT_APP_TEST_API_URL
         : process.env.REACT_APP_API_URL;
   const newOptions = {
      baseURL,
      headers,
      params: { lang },
      withCredentials: true,
      ...options,
   };
   const params = sendData ? [url, newOptions] : [url, data, newOptions];
   return params;
};

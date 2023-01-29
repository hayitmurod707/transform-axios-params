const getOptions = (auth = true) => {
	const token = localStorage.getItem("token");
	const headers = auth ? { Authorization: `Bearer ${token}` } : {};
	const baseURL =
		process.env.NODE_ENV === "development"
			? process.env.REACT_APP_TEST_API_URL
			: process.env.REACT_APP_API_URL;
	const lang = localStorage.getItem("i18nextLng") || "uz";
	return {
		baseURL,
		headers,
		params: { lang },
	};
};
export default getOptions;

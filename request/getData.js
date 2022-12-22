import axios from "axios";
import getOptions from "./getOptions";
import middleware from "./middleware";
axios.interceptors.request.use(
	config => config,
	e => Promise.reject(e)
);
axios.interceptors.response.use(
	response => response,
	error => middleware(error)
);
const getData = async ({ url, options, auth }) => {
	try {
		const data = await axios.get(url, { ...getOptions(auth), ...options });
		return { data, error: {}, status: "SUCCESS" };
	} catch (error) {
		return { data: {}, error, status: "ERROR" };
	}
};
export default getData;

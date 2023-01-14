import toast from "react-toastify";
const middleware = error => {
	if (typeof error?.toJSON === "function") {
		const e = error?.toJSON();
		toast.warning(e?.message);
		if (process.env.NODE_ENV === "development") {
			console.log(e);
		}
	}
	return Promise.reject(error);
};
export default middleware;

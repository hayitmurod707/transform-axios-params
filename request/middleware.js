import toast from 'react-toastify';
const middleware = error => {
  if (typeof error?.toJSON === 'function') {
    const e = error?.toJSON();
    if (e?.message === 'Network Error') {
      const message =
        localStorage.getItem('i18nextLng') === 'ru'
          ? 'Сетевая ошибка'
          : 'Tarmoq xatoligi';
      toast.warning(message);
    }
    if (process.env.NODE_ENV === 'development') {
      console.log(e);
    }
  }
  return Promise.reject(error);
}
export default middleware
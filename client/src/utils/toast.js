import { toast as toastify } from "react-toastify";

const config = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const toast = {
  success(msg) {
    toastify.success(msg, config);
  },
  error(msg) {
    toastify.error(msg, config);
  },
  warning(msg) {
    toastify.warn(msg, config);
  },
  info(msg) {
    toastify.info(msg, config);
  },
};

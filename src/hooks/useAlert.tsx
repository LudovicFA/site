import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });
  const showAlert = ({ text, show, type = "danger" }: {text: string, show:boolean, type: string}) =>
    setAlert({
      show,
      text,
      type,
    });
  const hideAlert = () =>
    setAlert({
      show: false,
      text: "",
      type: "danger",
    });

  return { alert, showAlert, hideAlert };
};

export default useAlert;

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
const Spinner = () => {
  const [message,setMessage]=useState("")
  const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
  setTimeout(() => {
    setMessage("Aguarde un momento...")
  }, 4000);
  return <>
  <Spin indicator={antIcon} size="large" />
  <p className="is-size-4">{message}</p>
  </>
};
export default Spinner;

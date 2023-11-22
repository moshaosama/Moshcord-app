import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import ForgetPass from "./ForgetPass";

function Route_pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/ForgetPassword" element={<ForgetPass />}></Route>
      </Routes>
    </div>
  );
}
export default Route_pages;

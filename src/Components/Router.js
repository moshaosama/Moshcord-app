import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import ForgetPass from "./ForgetPass";
import Addnumber from "./Number";
import Chat from "./Chat";

function Route_pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/ForgetPassword" element={<ForgetPass />}></Route>
        <Route path="/Add Number" element={<Addnumber />}></Route>
        <Route path="/Add Number/Chats" element={<Chat />}></Route>
      </Routes>
    </div>
  );
}
export default Route_pages;

import { Form } from "react-bootstrap";
import Api from "./Api";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddMessage } from "../Store/Reducer/MessageSlice";

function Chat() {
  const [Message, setMessage] = useState("");
  const state = useSelector((state) => state.Message);
  const date = new Date();
  const displayTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const Dispatch = useDispatch();
  console.log(state);
  return (
    <>
      <div
        id="NavbarChats"
        className="bg-dark w-25 p-4 text-light"
        style={{ height: "44.2pc" }}
      >
        <p>Chats</p>
        <hr />
        <div
          className="btn btn-light w-100"
          style={{
            fontWeight: "bolder",
            height: "49px",
          }}
          onClick={() => {
            document.getElementById("Chats").style.display = "block";
          }}
        >
          <img
            className="Img1"
            src="https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/336079467_1977797772559867_6414657154636989072_n.jpg?stp=dst-jpg_s851x315&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DqYnpUrGWEsAX_wZ4WT&_nc_ht=scontent.fcai22-2.fna&oh=00_AfAdD4GuAzsn3ceygfz-NJcH6scTr_r1cQVy83lGwUYOqw&oe=65641C40"
          />
          {Api.Phone}
        </div>
      </div>
      <div
        id="Chats"
        style={{
          position: "absolute",
          left: "24pc",
          top: "0px",
          backgroundColor: "#DDD",
          width: "72pc",
          padding: "10px",
          height: "65px",
          fontWeight: "bolder",
          height: "44.2pc",
          display: "none",
        }}
      >
        <div>
          <div>
            <img
              className="Img2"
              src="https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/336079467_1977797772559867_6414657154636989072_n.jpg?stp=dst-jpg_s851x315&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DqYnpUrGWEsAX_wZ4WT&_nc_ht=scontent.fcai22-2.fna&oh=00_AfAdD4GuAzsn3ceygfz-NJcH6scTr_r1cQVy83lGwUYOqw&oe=65641C40"
            />
            {Api.Phone} (You)
            <p>Message Yourself</p>
          </div>
          <div id="Scroll" style={{ overflow: "scroll", height: "39pc" }}>
            {state?.map((el) => {
              return (
                <>
                  <div
                    style={{
                      backgroundColor: "darkseagreen",
                      width: "20pc",
                      borderRadius: "10px",
                      padding: "10px",
                      height: "5pc",
                      marginTop: "10px",
                    }}
                  >
                    <h1 style={{ fontSize: "20px" }}>{el?.message}</h1>
                    <p>{el.Time}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div style={{ position: "absolute", left: "0pc", bottom: "0px" }}>
          <Form>
            <Form.Control
              type="text"
              placeholder="Type a Message"
              style={{ width: "65pc" }}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div
              className="btn btn-success"
              id="Send"
              style={{ position: "absolute", left: "66pc", top: "0pc" }}
              onClick={() => {
                Dispatch(
                  AddMessage({
                    id: state.length + 1,
                    message: Message,
                    Time: displayTime,
                  })
                );
              }}
            >
              Send
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
export default Chat;

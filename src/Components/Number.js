import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Api from "./Api";

function Addnumber() {
  const [Phone, setPhone] = useState("");
  const Navigation = useNavigate();
  return (
    <Container
      style={{
        width: "45pc",
        margin: "5vh",
        padding: "5vh",
        position: "relative",
        left: "20pc",
      }}
    >
      <div>
        <p className="text-primary" style={{ fontWeight: "bolder" }}>
          Moshcord App
        </p>
      </div>
      <div className="p-5 text-center">
        <h1>Add Your Phone Number</h1>
      </div>

      <div>
        <Form>
          {/* Form 2 */}
          <div className="mt-3">
            <Form.Label>
              Add Phone Number <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              style={{ width: "25pc" }}
              onChange={(e) => setPhone(e.target.value)}
            />
            <p
              id="ErrorNum"
              className="text-danger m-2"
              style={{ fontWeight: "bolder", display: "none" }}
            >
              Your Phone Number is Empty
            </p>
          </div>
          <div
            className="btn btn-primary mt-4"
            onClick={() => {
              if (Phone == "") {
                document.getElementById("ErrorNum").style.display = "block";
                setTimeout(() => {
                  document.getElementById("ErrorNum").style.display = "none";
                }, 2000);
              } else {
                Api.Phone = Phone;
                Navigation("/Add Number/Chats");
              }
            }}
          >
            Continue
          </div>
        </Form>
      </div>
    </Container>
  );
}
export default Addnumber;

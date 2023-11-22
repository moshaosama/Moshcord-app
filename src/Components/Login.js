import { Container, Form } from "react-bootstrap";

import { Link } from "react-router-dom";
import Api from "./Api";
import { useState } from "react";
import Swal from "sweetalert2";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(Api?.Email);
  console.log(Api?.Password);
  return (
    <Container
      style={{
        width: "45pc",
        margin: "5vh",
        padding: "5vh",
      }}
    >
      <div>
        <p className="text-primary" style={{ fontWeight: "bolder" }}>
          Moshcord App
        </p>
      </div>
      <div className="p-5 text-center">
        <h1>Welcome back!</h1>
        <p>We're so excited to see you again!</p>
      </div>

      <div>
        <Form>
          <div>
            <Form.Label>
              Email or Phone Number <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              id="Email"
              type="text"
              style={{ width: "25pc" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p
              id="ErrorEmail1"
              className="text-danger m-2"
              style={{ fontWeight: "bolder", display: "none" }}
            >
              Your Email is Not Correct
            </p>
            <p
              id="ErrorEmail2"
              className="text-danger m-2"
              style={{ fontWeight: "bolder", display: "none" }}
            >
              Your Email is Empty
            </p>
          </div>
          {/* Form 2 */}
          <div className="mt-3">
            <Form.Label>
              Password <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              id="Password"
              type="text"
              style={{ width: "25pc" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p
              id="ErrorPass1"
              className="text-danger m-2"
              style={{ fontWeight: "bolder", display: "none" }}
            >
              Your Password is Not Correct
            </p>
            <p
              id="ErrorPass2"
              className="text-danger m-2"
              style={{ fontWeight: "bolder", display: "none" }}
            >
              Your Password is Empty
            </p>
          </div>
          <div className="mt-2">
            <Link className="text-decoration-none" to={"ForgetPassword"}>
              Forget Your Password?
            </Link>
          </div>
          <div
            className="btn btn-primary mt-4"
            style={{ width: "15pc" }}
            onClick={() => {
              if (email == "") {
                document.getElementById("ErrorEmail2").style.display = "block";
                setTimeout(() => {
                  document.getElementById("ErrorEmail2").style.display = "none";
                }, 2000);
                if (password == "") {
                  document.getElementById("ErrorPass2").style.display = "block";
                  setTimeout(() => {
                    document.getElementById("ErrorPass2").style.display =
                      "none";
                  }, 2000);
                }
              } else if (password == "") {
                document.getElementById("ErrorPass2").style.display = "block";
                setTimeout(() => {
                  document.getElementById("ErrorPass2").style.display = "none";
                }, 2000);
                if (email != Api?.Email) {
                  document.getElementById("ErrorEmail1").style.display =
                    "block";
                  setTimeout(() => {
                    document.getElementById("ErrorEmail1").style.display =
                      "none";
                  }, 2000);
                }
              } else if (email != Api?.Email) {
                document.getElementById("ErrorEmail1").style.display = "block";
                setTimeout(() => {
                  document.getElementById("ErrorEmail1").style.display = "none";
                }, 2000);
                if (password != Api?.Password) {
                  document.getElementById("ErrorPass1").style.display = "block";
                  setTimeout(() => {
                    document.getElementById("ErrorPass1").style.display =
                      "none";
                  }, 2000);
                }
              } else if (password != Api?.Password) {
                document.getElementById("ErrorPass1").style.display = "block";
                setTimeout(() => {
                  document.getElementById("ErrorPass1").style.display = "none";
                }, 2000);
              }
            }}
          >
            Login
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Login;

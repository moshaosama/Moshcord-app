import { Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Api from "./Api";
import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert2";
function ForgetPass() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ChPass, setChPass] = useState("");
  const [api, setapi] = useState({
    Email: "",
    Password: "",
  });

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
        <h1>Sign up</h1>
      </div>
      <div>
        <Form>
          <div>
            <Form.Label>
              Create an Email <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              id="Email"
              type="text"
              style={{ width: "25pc" }}
              onChange={(e) => setEmail(e.target.value)}
            />
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
              Create a Password <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              id="Pass"
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              style={{ width: "25pc" }}
            />
          </div>
          <p
            id="ErrorPass2"
            className="text-danger m-2"
            style={{ fontWeight: "bolder", display: "none" }}
          >
            Your Password is Empty
          </p>
          {/* Form 3 */}
          <div className="mt-3">
            <Form.Label>
              Check on Your Password <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              id="ChPass"
              type="text"
              style={{ width: "25pc" }}
              onChange={(e) => setChPass(e.target.value)}
            />
          </div>
          <p
            id="ErrorChPass2"
            className="text-danger m-2"
            style={{ fontWeight: "bolder", display: "none" }}
          >
            Your CheckPassword is Empty
          </p>
          <p
            id="ErrorChPass3"
            className="text-danger m-2"
            style={{ fontWeight: "bolder", display: "none" }}
          >
            Your CheckPassword is not equal Your Password
          </p>
          <div
            className="btn btn-primary mt-4"
            style={{ width: "15pc" }}
            onClick={() => {
              setapi({
                Email: email,
                Password: ChPass,
              });
              Api.Email = email;
              Api.Password = password;
              {
                /* Check Are Email and Password unValid*/
              }
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
                if (ChPass == "") {
                  document.getElementById("ErrorChPass2").style.display =
                    "block";
                  setTimeout(() => {
                    document.getElementById("ErrorChPass2").style.display =
                      "none";
                  }, 2000);
                }
              } else if (password == "") {
                document.getElementById("ErrorPass2").style.display = "block";
                setTimeout(() => {
                  document.getElementById("ErrorPass2").style.display = "none";
                }, 2000);
                if (ChPass == "") {
                  document.getElementById("ErrorChPass2").style.display =
                    "block";
                  setTimeout(() => {
                    document.getElementById("ErrorChPass2").style.display =
                      "none";
                  }, 2000);
                }
              } else if (ChPass == "") {
                document.getElementById("ErrorChPass2").style.display = "block";
                setTimeout(() => {
                  document.getElementById("ErrorChPass2").style.display =
                    "none";
                }, 2000);
              } else if (password != ChPass) {
                document.getElementById("ErrorChPass3").style.display = "block";
                setTimeout(() => {
                  document.getElementById("ErrorChPass3").style.display =
                    "none";
                }, 2000);
              } else {
                Navigation("/");
              }
            }}
          >
            Sign up
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default ForgetPass;

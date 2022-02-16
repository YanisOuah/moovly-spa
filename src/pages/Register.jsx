import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import PassCheck from "../components/PassCheck";
import Logo from "../img/MoovlyLogo.svg";
import Awards from "../img/Moovlyawards.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";
import toast from "react-simple-toasts";

const MainDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
`;
const TitleDiv = styled.div`
  width: 50%;
  background-color: #232d64;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > p {
    color: white;
    font-weight: bold;
    font-size: 1.5em;
    max-width: 70%;
    margin: 0 auto 1em;
    text-align: center;
  }
  > span {
    color: gray;
    margin: 0 auto;
    font-size: 1.3em;
  }
`;
const MoovlyImg = styled.img`
  width: 60%;
  margin: 0 auto 2em;
`;
const AwardsImg = styled.img`
  align-self: flex-end;
  bottom: 0;
  position: absolute;
`;
const RegisterDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  > div {
    margin: auto 5em;
    display: flex;
    flex-direction: column;
    > h1 {
      font-size: 3.5em;
      margin-bottom: 0;
    }
    > p {
      color: #cccccc;
      margin-bottom: 2em;
    }
    > form {
      display: flex;
      flex-direction: column;
      > label {
        display: contents;
        font-weight: bold;
        color: #6e6e6e;
        > span {
          margin: 2em 0 1em;
        }
        > input {
          background-color: #e1e1e1;
          border: none;
          border-radius: 8px;
          padding: 1.3em;
        }
        > input::placeholder {
          color: gray;
        }
      }
      > div {
        display: flex;
      }
      > input {
        //SignUp Button
        cursor: pointer;
        border: none;
        border: 2px solid #dc1964;
        border-radius: 8px;
        font-size: 1.6em;
        color: white;
        margin-top: 2.4em;
        padding-top: 0.7em;
        padding-bottom: 0.7em;
      }
    }
  }
`;

const RememberDiv = styled.div`
  margin-top: 2em;
  user-select: none;
`;
const ErrorHr = styled.hr`
  width: 100%;
  border: none;
  height: 5px;
  background-color: red;
  border-radius: 5em;
`;

const RegisterPage = () => {
  let navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (state.token !== undefined && state.token !== null)
      navigate("../", { replace: true });
  });
  const [formData, setFormData] = useState({
    email: "",
    emailTouched: false,
    password: "",
    passwordTouched: false,
    password2: "",
    password2Touched: false,
    rememberMe: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const validateEmail = () => {
    return formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };
  const ValidateForm = () => {
    setFormData({
      ...formData,
      emailTouched: true,
      passwordTouched: true,
      password2Touched: true,
    });
    if (!validateEmail()) return false;
    if (formData.password.length < 7) return false;
    if (formData.password !== formData.password2) return false;
    setIsLoading(true);
    fetch("https://moovlyapi.herokuapp.com/register", {
      method: "POST",
      body: JSON.stringify(formData), //This should ONLY be usefull data.
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        if (r.status === 200) {
          setIsLoading(false);
          dispatch({ type: "login", token: "1" });
          navigate("../home", { replace: true });
        } else {
          toast("Looks like that email is already in use.", {
            time: 3000,
          });
          setIsLoading(false);
        }
      })
      .catch((e) => {
        toast("Looks like something went wrong. Try again later.", {
          time: 3000,
        });
        setIsLoading(false);
      });
  };
  return (
    <MainDiv>
      <TitleDiv>
        <MoovlyImg src={Logo} alt="MoovlyLogo" />
        <p>
          "With Moovly, I create professional training videos, and my customers
          really appreciate the quality."
        </p>
        <span>Wladzio Wladecki</span>
        <span>Consultant @ MF consulting</span>
        <AwardsImg src={Awards} alt="Moovly Rating Awards" />
      </TitleDiv>
      <RegisterDiv>
        <div>
          <h1>Welcome!</h1>
          <p>Create account to continue</p>
          <form>
            <label>
              <span>Email</span>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                    emailTouched: true,
                  })
                }
              />
              {formData.emailTouched && !validateEmail() && <ErrorHr />}
            </label>
            <label>
              <span>PASSWORD</span>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                    passwordTouched: true,
                  })
                }
              />
              <PassCheck
                pass={formData.password}
                touched={formData.passwordTouched}
              />
            </label>
            <label>
              <span>REPEAT PASSWORD</span>
              <input
                type="password"
                name="password2"
                placeholder="Enter password"
                value={formData.password2}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password2: e.target.value,
                    password2Touched: true,
                  })
                }
              />
              {formData.password2Touched &&
                formData.password !== formData.password2 && <ErrorHr />}
            </label>
            <RememberDiv
              onClick={() =>
                setFormData({
                  ...formData,
                  rememberMe: !formData.rememberMe,
                })
              }
            >
              <input type="checkbox" checked={formData.rememberMe} readOnly />
              Remember me
            </RememberDiv>
            <input
              type="button"
              value={isLoading ? "awaiting response" : "Sign up"}
              style={{
                backgroundColor: isLoading ? "#e1e1e1" : "#dc1964",
                color: isLoading ? "#dc1964" : "white",
              }}
              onClick={() => ValidateForm()}
            />
          </form>
        </div>
      </RegisterDiv>
    </MainDiv>
  );
};
export default RegisterPage;

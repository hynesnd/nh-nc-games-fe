import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUser } from "../../utils/api";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  border-radius: 18px;
  border: solid 2px black;
  text-align: center;
  align-items: center;
  background: #feddbe;
  padding: 2px;
  margin: auto;
`;

const Form = styled.form`
  padding: 2px;
`;

const LoginButton = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #0a1931;
  color: #0a1931;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const LogoutButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #0a1931;
  color: #0a1931;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
const Login = () => {
  const { user, setUser, isLoggedIn, logout } = useContext(UserContext);
  const [formInput, setFormInput] = useState("");
  const [errorSpan, setErrorSpan] = useState(null);

  if (!isLoggedIn) {
    return (
      <Container className="login-form">
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            setErrorSpan(null);
            getUser(formInput)
              .then((response) => {
                setUser(response);
              })
              .catch((err) => {
                setErrorSpan(err.response.data.msg);
              });
          }}
        >
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={formInput}
            onChange={(event) => {
              setFormInput(event.target.value);
            }}
          ></input>
          <LoginButton type="submit" value="Login" />
        </Form>
        <span>{errorSpan}</span>
      </Container>
    );
  } else {
    return (
      <Container>
        <h2>Welcome {user.username}</h2>
        <LogoutButton onClick={() => logout()}>Logout</LogoutButton>
      </Container>
    );
  }
};

export default Login;

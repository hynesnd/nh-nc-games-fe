import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUser } from "../../utils/api";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 18px;
  border: solid 2px black;
  text-align: center;
  align-items: center;
  background: #feddbe;
  padding: 2px;
  margin: auto;
`;

const form = styled.form``;
const Login = () => {
  const { user, setUser, isLoggedIn, logout } = useContext(UserContext);
  const [formInput, setFormInput] = useState("");
  const [errorSpan, setErrorSpan] = useState(null);

  if (!isLoggedIn) {
    return (
      <Container className="login-form">
        <form
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
          <fieldset>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={formInput}
              onChange={(event) => {
                setFormInput(event.target.value);
              }}
            ></input>
            <input type="submit" value="Login" />
          </fieldset>
        </form>
        <span>{errorSpan}</span>
      </Container>
    );
  } else {
    return (
      <Container>
        <h2>Welcome {user.username}</h2>
        <button onClick={() => logout()}>Logout</button>
      </Container>
    );
  }
};

export default Login;

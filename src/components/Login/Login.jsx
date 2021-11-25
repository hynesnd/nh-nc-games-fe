import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUser } from "../../utils/api";

const Login = () => {
  const { user, setUser, isLoggedIn, logout } = useContext(UserContext);
  const [formInput, setFormInput] = useState("");
  const [errorSpan, setErrorSpan] = useState(null);

  if (!isLoggedIn) {
    return (
      <div className="login-form">
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
      </div>
    );
  } else {
    return (
      <div>
        <h2>Welcome {user.username}</h2>
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
  }
};

export default Login;

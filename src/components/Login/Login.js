import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./Login.module.css";
import { useRef } from "react";

const Login = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    props.loggedIn({
      userEmail: emailRef.current.value,
      userPassword: passwordRef.current.value,
    });
  };
  return (
    <div className={styles["login-outer"]}>
      <Card className={styles["login-card"]}>
        <form onSubmit={submitHandler}>
          {props.error ? <div className={styles.error}>{props.error}</div> : ""}
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default Login;

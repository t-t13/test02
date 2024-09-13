import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/store";

const Auth = () => {
  // const isAuth = useSelector((state) => state.authPain.isAuthenticated);
  const dispatch = useDispatch();

  const logIn = () => {
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={logIn}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

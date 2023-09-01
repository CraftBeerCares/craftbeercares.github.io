import styles from "./signUp.module.css";
import { secondary, primary } from "@/styles/fonts";
import clsx from "clsx";

export const SignUp = () => {
  return (
    <div className={styles.signUpBox}>
      <h4 className={clsx(secondary.className, styles.title)}>
        Sign Up for Our Monthlyish Newsletters
      </h4>
      <p className={clsx(primary.className, styles.signUpText)}>
        Hear about upcoming events and initiatives from us and others pairing
        beer with charitable giving. We won’t share your info with anyone, and
        you can opt out at anytime.
      </p>

      <input className={styles.emailBox} placeholder="Your e-mail" />
      <button className={styles.signUpButton}>Sign Up!</button>
    </div>
  );
};

export default SignUp;

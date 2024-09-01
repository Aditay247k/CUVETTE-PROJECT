import { useContext } from "react";
import styles from "./RegisterPage.module.css";
import { AppContext } from "../context/AppContext";
import Form from "../components/Form";


export default function RegisterPage() {
  const { user, setUser } = useContext(AppContext);
  

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.background}></div>
        <div className={styles.label}>Discover new things on Superapp</div>
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
          <h2 className={styles.heding}>Super App</h2>
          <h3 className={styles.subheading}>Create your new account</h3>
        </div>
        <Form user={user} setUser={setUser} />
        <div className={styles.footer}>
          <p>
            By clicking on Sign up. you agree to Superapp {""}
            <span>Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

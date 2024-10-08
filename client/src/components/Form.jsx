//import React, { useState} from "react";
import styles from "./Form.module.css";
import validateForm from "../utils/ValidateForm";

function Form({
  name,
  setName,
  email,
  setEmail,
  userName,
  setUserName,
  phone,
  setPhone,
  error,
  setError,
  submitHandler,
}) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="UserName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={() => validateForm(name, email, userName, phone)}>
        SIGN UP{" "}
      </button>
    </div>
  );
}

export default Form;

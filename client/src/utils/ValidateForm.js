
    const validateForm = (name, email, userName, phone) => {
        console.log(name, email, userName, phone);
        if (!name || !email || !userName || !phone) {
            console.log("All fields are required");
          return false;
        }
        const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const phoneRegEx = /^\d{10}$/;
        if (!emailRegEx.test(email) || !phoneRegEx.test(phone)) {
            console.log("Invalid email or phone number");
          return false;
        }
      };

export default validateForm;
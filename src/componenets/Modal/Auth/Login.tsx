import { Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form>
      <Input
        name="email"
        type="email"
        mb="2"
        placeholder="Email"
        onChange={(e) => onChangeHandler(e)}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => onChangeHandler(e)}
      />
    </form>
  );
};

export default Login;

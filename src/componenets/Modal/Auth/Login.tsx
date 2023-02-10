import { authModalState } from "@/atoms/authModalAtoms";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

const Login = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

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

  // Firebase logic
  const onSubmitHandler = () => {};

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        required
        name="email"
        type="email"
        placeholder="Email"
        onChange={(e) => onChangeHandler(e)}
        mb="2"
        fontSize="10pt"
        bg="gray.50"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Input
        required
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => onChangeHandler(e)}
        mb="2"
        fontSize="10pt"
        bg="gray.50"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />

      <Button height="36px" width="100%" my="2" type="submit">
        Login In
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr="1">New here?</Text>
        <Text
          textColor="blue"
          fontWeight="700"
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};

export default Login;

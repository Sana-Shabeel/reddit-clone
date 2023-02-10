import { authModalState } from "@/atoms/authModalAtoms";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthInputs = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <Flex mt="4">
      {modalState.view === "login" && <Login />}
      {modalState.view === "signup" && <SignUp />}
    </Flex>
  );
};

export default AuthInputs;

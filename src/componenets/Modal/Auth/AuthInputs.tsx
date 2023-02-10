import { authModalState } from "@/atoms/authModalAtoms";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import Login from "./Login";

const AuthInputs = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <Flex>
      {modalState.view === "login" && <Login />}
      {/* {modalState.view === "signup" && <SignUp />} */}
    </Flex>
  );
};

export default AuthInputs;

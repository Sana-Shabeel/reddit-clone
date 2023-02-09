import AuthModal from "@/componenets/Modal/Auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";

const RightContent = () => {
  return (
    <>
      <Flex justify={"center"} align="center">
        <AuthModal />
        <AuthButtons />
      </Flex>
    </>
  );
};

export default RightContent;
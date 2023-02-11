import AuthModal from "@/componenets/Modal/Auth/AuthModal";
import { auth } from "@/firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";

interface Props {
  user: User | null | undefined;
}

const RightContent = ({ user }: Props) => {
  return (
    <>
      <Flex justify={"center"} align="center">
        <AuthModal />
        {user ? <Icons /> : <AuthButtons />}
      </Flex>
    </>
  );
};

export default RightContent;

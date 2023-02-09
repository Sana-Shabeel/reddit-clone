import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./RightContent/AuthButtons";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

export const Navbar = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" height="30px" alt="reddit logo" />
        <Image
          src="/images/redditText.svg"
          height="46px"
          alt="reddit name"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
      <RightContent />
    </Flex>
  );
};

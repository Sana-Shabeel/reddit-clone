import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Box,
  Divider,
  Text,
  Input,
  Stack,
  Checkbox,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillPersonFill, BsFillEyeFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const CreateCommunityModal = ({ open, handleClose }: Props) => {
  const [communityName, setCommunityName] = useState("");
  const [charsRemaining, setCharsRemaining] = useState(21);
  const [communityType, setCommunityType] = useState("public");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 21) return 21;

    setCommunityName(event.target.value);
    setCharsRemaining(21 - event.target.value.length);
  };

  const onCommunityTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommunityType(event.target.name);
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display="flex"
            flexDirection="column"
            fontSize={15}
            padding={3}
          >
            Create Community
          </ModalHeader>
          <Box pl={3} pr={3}>
            <Divider />
            <ModalCloseButton />
            <ModalBody display="flex" flexDirection="column" padding="10px 0">
              <Text fontWeight={600} fontSize={15}>
                Name
              </Text>
              <Text fontSize={11} color="gray.500">
                Community names includding capitalization cannot be changed
              </Text>
              <Text
                position="relative"
                top="28px"
                left="10px"
                width="20px"
                color={"gray.400"}
              >
                r/
              </Text>
              <Input
                position="relative"
                value={communityName}
                size="sm"
                pl="22px"
                onChange={(e) => handleChange(e)}
              />
              <Text
                fontSize={"9pt"}
                color={charsRemaining === 0 ? "red" : "gray.500"}
              >
                {charsRemaining} characters remaining
              </Text>
              <Box my={4}>
                <Text fontWeight={600} fontSize={15}>
                  Community Type
                </Text>
              </Box>
              {/* stack is a flex box that will destribute the spacing  */}
              <Stack spacing={21}>
                <Checkbox
                  name="public"
                  isChecked={communityType === "public"}
                  onChange={onCommunityTypeChange}
                >
                  <Flex align="center">
                    <Icon as={BsFillPersonFill} mr={2} color="gray.500" />
                    <Text fontSize="10pt" mr={1}>
                      Public
                    </Text>
                    <Text fontSize="8pt" color="gray.500" pt={0.5}>
                      Anyone can view, post and comment to this community
                    </Text>
                  </Flex>
                </Checkbox>
                <Checkbox
                  name="restricted"
                  isChecked={communityType === "restricted"}
                  onChange={onCommunityTypeChange}
                >
                  <Flex align="center">
                    <Icon as={BsFillEyeFill} color="gray.500" mr={2} />
                    <Text fontSize="10pt" mr={1}>
                      Resctricted
                    </Text>
                    <Text fontSize="8pt" color="gray.500" pt={1}>
                      Anyone can view this community, but only approved users
                      can post{" "}
                    </Text>
                  </Flex>
                </Checkbox>
                <Checkbox
                  name="private"
                  isChecked={communityType === "private"}
                  onChange={onCommunityTypeChange}
                >
                  <Flex align="center">
                    <Icon as={HiLockClosed} color="gray.500" mr={2} />

                    <Text fontSize="10pt" mr={1}>
                      Private
                    </Text>
                    <Text fontSize="8pt" color="gray.500" pt={1}>
                      Only approved users can view and submit to this community
                    </Text>
                  </Flex>
                </Checkbox>
              </Stack>
            </ModalBody>
          </Box>

          <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
            <Button
              variant="outline"
              height="30px"
              mr={2}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="solid"
              height="30px"
              // onClick={handleCreateCommunity}
              // isLoading={loading}
            >
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateCommunityModal;

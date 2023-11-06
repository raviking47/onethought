import React, { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function GiveNews() {
  const [newsHeadline, setnewsHeadline] = useState("");
  const [newsSubHeadline, setnewsSubHeadline] = useState("");
  const [newsContant, setnewsContant] = useState("");
  const [newsId, setnewsId] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const Navigate = useNavigate();
  const submitHandler = async () => {
    console.log(newsHeadline, newsSubHeadline, newsContant, newsId);
    setLoading(true);
    if (!newsHeadline || !newsSubHeadline || !newsContant || !newsId) {
      toast({
        title: "Pls Fill the all Block",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        header: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/app/news/",
        { newsHeadline, newsSubHeadline, newsContant, newsId },
        config
      );
      console.log(data);
      Navigate("/")
    } catch (error) {
      toast({
        title: "error.",
        description: "unable to fetch news",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box
        mt={"3%"}
        ml={"10%"}
        mr={"10%"}
        color={"white"}
        borderRadius={"2xl"}
        shadow={"0px 0px 15px #AF3DFF"}
      >
        <Container>
          <VStack spacing="5px" color={"white"}>
            <FormControl id="first-name" isRequired m={2}>
              <FormLabel
                isRequired={true}
                borderColor={"white"}
                color="white"
                textDecoration={"bold"}
              >
                newsHeadline
              </FormLabel>
              <Input
                borderColor={"white"}
                color={"white"}
                placeholder="Enter the News newsHeadline"
                onChange={(e) => setnewsHeadline(e.target.value)}
              />
            </FormControl>
            <FormControl id="first-name" isRequired m={2}>
              <FormLabel
                isRequired={true}
                borderColor={"white"}
                color="white"
                textDecoration={"bold"}
              >
                newsSubHeadline
              </FormLabel>
              <Input
                borderColor={"white"}
                color={"white"}
                placeholder="Enter the News newsSubHeadline"
                onChange={(e) => setnewsSubHeadline(e.target.value)}
              />
            </FormControl>
            <FormControl id="first-name" isRequired m={2}>
              <FormLabel
                isRequired={true}
                borderColor={"white"}
                color="white"
                textDecoration={"bold"}
              >
                News Content
              </FormLabel>
              <Input
                borderColor={"white"}
                color={"white"}
                placeholder="Enter the Full News"
                onChange={(e) => setnewsContant(e.target.value)}
              />
            </FormControl>
            <FormControl id="first-name" isRequired m={2}>
              <FormLabel
                isRequired={true}
                borderColor={"white"}
                color="white"
                textDecoration={"bold"}
              >
                Username
              </FormLabel>
              <Input
                borderColor={"white"}
                color={"white"}
                placeholder="Enter Your Username "
                onChange={(e) => setnewsId(e.target.value)}
              />
            </FormControl>
            <Button
              borderColor={"white"}
              bg="#AF3DFF"
              color={"white"}
              width={"100%"}
              p="4px"
              m={2}
              onClick={submitHandler}
              isLoading={loading}
            >
              Submit News
            </Button>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

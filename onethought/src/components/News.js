import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Container,
  useToast,
  IconButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NewsPage from "./NewsPage";
import { redirect, renderMatches, useNavigate } from "react-router-dom";
import axios from "axios";
import { useNewsData } from "../Context/NewsDataProvider";
export default function News() {
  const [rendered, setRendered] = useState(false);
  const Navigate = useNavigate();
  const toast = useToast();
  const [news, setNews] = useState([]);
  const {NewsData,setNewsData,NewsHeadline,setNewsHeadline,NewsSubHeadline,setNewsSubHeadline,NewsContent,setNewsContent} = useNewsData()

  const NewsPageFunction = (e) => {
    setRendered(true);
    Navigate("/newspage")
    setNewsData(news[e].newsId)
    setNewsHeadline(news[e].newsHeadline)
    setNewsSubHeadline(news[e].newsSubHeadline)
    setNewsContent(news[e].newsContant)
  };
  const fetchNews = async () => {
    try {
      const config = {
        header: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.get("/app/news/", config);
      console.log(data);
      setNews(data);
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
  useEffect(() => {
    fetchNews();  
  }, [1]);
  return (
    <Box mt={"3%"} ml={"10%"} mr={"10%"}>
      {news.map((item,index) => (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          bg="black"
          color={"white"}
          borderRadius={"10px"}
          shadow={"2px 5px 5px #AF3DFF"}
          p={3}
          mt={2}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            p={2}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">{item.newsHeadline}</Heading>

              <Text py="2">{item.newsContant.slice(0, 100)}......</Text>
            </CardBody>

            <CardFooter>
              <div>
              <Button
                variant="solid"
                onClick={()=>NewsPageFunction(index)}
                colorScheme="purple"
              >
                more
                {rendered ? <NewsPage name={"hsvf"} /> : null}
              </Button>
              </div>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Box>
  );
}

import { Text, Box, Image, Center, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNewsData } from "../Context/NewsDataProvider";
export default function NewsPage(props) {
  const toast = useToast();
  const [news, setNews] = useState([]);
  const {NewsData,setNewsData,NewsHeadline,setNewsHeadline,NewsSubHeadline,setNewsSubHeadline,NewsContent,setNewsContent} = useNewsData()


  return (
    <>
      <Box mt={"8%"}>
        {" "}
        <Text fontWeight="extrabold" fontSize={"5xl"}>
          {NewsHeadline}
        </Text>
        <Text fontWeight="bold" fontSize={"2xl"}>
         {NewsSubHeadline}
        </Text>
        <Text fontWeight="bold" fontSize={"xl"}>
          October 10, 2023 - 2:46 pm
        </Text>
        <Center>
          <Image
            src="https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2Fdogger-bank-wind-farm-uk-sunak.jpg&signature=158fc9b32930471824c92593a5a7640e"
            width={"auto"}
            height={"350px"}
            alt="Dan Abramov"
          />
        </Center>
        <Text fontSize={"xl"} fontStyle={'bold'} p={1}>
         {NewsContent}
        </Text>
      </Box>
    </>
  );
}

import { Box, Button, CloseButton, IconButton, Input, List, ListItem, Text, useDisclosure,  } from '@chakra-ui/react'
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Box borderRadius={"10px"} shadow={"2px 5px 5px #AF3DFF"}   color="white">
      <nav className="navbar navbar-expand-lg">
  <Box    className="container-fluid">
    <Link className="navbar-brand" href="#"><Text pt={3}>One Thought</Text></Link >
    <Button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <HamburgerIcon onClink={onclose}/>
    </Button>
   
    <Box className="collapse navbar-collapse" id="navbarSupportedContent">
      <List fontSize={"20px"} className="navbar-nav me-auto mb-3 mb-lg-1">
        <ListItem  p={3} mt={1} className="">
          <Link  to="/" >Home</Link>
        </ListItem>
        <ListItem  p={3} mt={1}>
          <Link to="/givenews">Register News</Link >
        </ListItem>
        <ListItem p={3} mt={1} >
          <Link >About us</Link >
        </ListItem>
        <ListItem p={3} mt={1} >
          <Link >Contact Us</Link >
        </ListItem>
      
      </List>
      <form className="d-flex">
        <Input shadow={"2px 5px 5px #AF3DFF"} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Button  color='white' bg='#AF3DFF' varient="solid"  type="submit">Search</Button>
      </form>
    </Box>
  </Box>
</nav>
    </Box>
  )
}

import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex alignItems={"center"} bg={"#ccc"} justifyContent={"space-between"} p={5}>
      <Box>
        <Text fontSize={20} fontWeight={700}>Task Management Application</Text>
      </Box>
      <Box>
        <Button>Change Theame</Button>
      </Box>
    </Flex>
  )
}

export default Navbar
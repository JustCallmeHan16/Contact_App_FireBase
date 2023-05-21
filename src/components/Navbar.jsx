import {
    Button, 
    Flex, 
    Text,
    Icon,
    Box
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/FireContext';
import { AiOutlineUser } from 'react-icons/ai'

const Navbar = () => {

    return (
        <Flex as={'nav'} justifyContent={'space-between'} alignItems={'center'}>
            <Flex flexDirection={'column'} justifyContent={'flex-start'}>
                <Text fontWeight={'medium'} fontSize={'30px'} color={'gray.600'}>Dashboard</Text>
            </Flex>
            <Flex gap={'10px'} alignItems={'center'}>
            </Flex>
        </Flex>
    )
}

export default Navbar
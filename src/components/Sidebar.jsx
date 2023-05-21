import { 
    Avatar, 
    Button, 
    List, 
    ListItem,
    Text
} from '@chakra-ui/react'
import { async } from '@firebase/util'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/FireContext'

const Sidebar = () => {

    const {user,logOut} = UserAuth();
    const navigate = useNavigate();

    const signOut = async() => {
        try{
            await logOut();
            navigate('/')
        } catch(err){
            console.log(err.message)
        }
    }

    return (
        <List display={'flex'} flexDirection={'column'} gap={'10px'}>
            <ListItem my={'15px'} textAlign={'center'}>
                <Avatar mb={'5px'} bgColor={'purple.400'} color={'white'} name={user.email}></Avatar>
                <Text fontSize={'15px'} color={'gray.500'}>{user.email}</Text>
            </ListItem>
            <NavLink to={'/dashboard'}>
                <ListItem mx={'auto'} transition={'0.5s ease-out'} _active={{bgColor : 'gray.400'}} _hover={{bgColor : 'gray.400', color : 'white'}} ps={'10px'} py={'5px'} color={'gray.600'}>Dashboard</ListItem>
            </NavLink>
            <NavLink to={'contact'}>
                <ListItem mx={'auto'} transition={'0.5s ease-out'} _active={{bgColor : 'gray.400'}} _hover={{bgColor : 'gray.400', color : 'white'}} ps={'10px'} py={'5px'} color={'gray.600'}>Add Contact</ListItem>
            </NavLink>
            <ListItem mt={{base : '10px', md : '300px'}} textAlign={{base : 'start', md : 'center'}}>
                <Button onClick={signOut} letterSpacing={'1px'} ms={'5px'} size={{base : 'sm' , md : 'md'}} colorScheme={'twitter'}>Logout</Button>
            </ListItem>
        </List>
    )
}

export default Sidebar
import { 
    Box, Button, Heading 
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()
 
    const backToHome = () =>{
        navigate('/')
    }
    
    return (
        <Box
        minWidth={'100%'}
        minHeight={'100vh'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        >
            <Box display={'flex'} flexDir={'column'} gap={'10px'}>
                <Heading fontSize={'35px'} color={'red.400'}>404 NOT FOUND</Heading>
                <Button onClick={backToHome} variant={'ghost'} colorScheme={'blue'}> Back To Home </Button>
            </Box>
        </Box>
    )
}

export default NotFound
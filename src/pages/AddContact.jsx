import { 
    Box, 
    Button, 
    Flex, 
    FormLabel,
    Input
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/FireContext';

const AddContact = () => {

    const [name,setName] = useState('');
    const [mail,setMail] = useState('');
    const [date,setDate] = useState('');

    const {createContact} = UserAuth();

    const navigate = useNavigate()

    const onCreate = (e) => {
        e.preventDefault()
        createContact(name,mail,date)
        navigate('/dashboard')
    }

    return (
        <Flex justifyContent={'center'} alignItems={'center'} minW={'100%'} minHeight={'80vh'}>
            <Box onSubmit={onCreate} display={'flex'} flexDirection={'column'} gap={'15px'} as={'form'}>
                <Box>
                    <FormLabel>Name</FormLabel>
                    <Input onChange={(e) => setName(e.target.value)} required/>
                </Box>
                <Box>
                    <FormLabel>Email</FormLabel>
                    <Input onChange={(e) => setMail(e.target.value)} required/>
                </Box>
                <Box>
                    <FormLabel>Email</FormLabel>
                    <Input onChange={(e) => setDate(e.target.value)} type={'date'} required/>
                </Box>
                <Button type='submit' mt={'10px'} alignSelf={'flex-end'} colorScheme={'green'}>Crate Contact</Button>
            </Box>
        </Flex>
    )
}

export default AddContact
import { 
  Box,
  Button, 
  Flex, 
  FormLabel,
  Heading,
  Input,
  Text
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/FireContext';

const SignIn = () => {

  const [email,setEmail] = useState('');
  const [passowrd,setPassword] = useState('');

  const {signIn} = UserAuth();
  const navigate = useNavigate()

  const signInForm = async(e) => {
    e.preventDefault()
    try{
      await signIn(email,passowrd)
      navigate('/dashboard')
    } catch(err){
      console.log(err.message)
    }
  }

  return (
    <Flex 
    className='animate__animated animate__fadeIn'
    minW={'100%'} 
    minH={'100vh'}
    justifyContent={'center'}
    alignItems={'center'} 
    >
      <Box onSubmit={signInForm} as='form'>
        <Flex
        flexDirection={'column'}
        gap={'15px'}
        >
          <Heading
          fontWeight={'medium'}
          fontSize={'20px'}
          color={'green.400'}
          mb={'15px'}
          >
            Sign In To Your Account
          </Heading>
          <Box>
            <FormLabel color={'gray.600'}>Your Email</FormLabel>
            <Input onChange={(e) => setEmail(e.target.value)} focusBorderColor='green.500' required/>
          </Box>
          <Box>
            <FormLabel color={'gray.600'}>Enter Your Password</FormLabel>
            <Input type={'password'} onChange={(e) => setPassword(e.target.value)} focusBorderColor='green.500' required/>
          </Box>
          <Text color={'gray.500'} fontSize={'13px'}>Don't have an account?<Link to={'/'} style={{textDecoration : 'underline'}}> Sign up. </Link></Text>
          <Button colorScheme={'green'} mt={'15px'} type='submit'>Sign In</Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default SignIn
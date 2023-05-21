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

const SignUp = () => {

  const [email,setEmail] = useState('');
  const [passowrd,setPassword] = useState('');

  const {signUp} = UserAuth();
  const navigate = useNavigate()

  const signUpForm = async(e) => {
    e.preventDefault()
    try{
      await signUp(email,passowrd)
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
      <Box onSubmit={signUpForm} as='form'>
        <Flex
        flexDirection={'column'}
        gap={'15px'}
        >
          <Heading
          fontWeight={'medium'}
          fontSize={'20px'}
          color={'blue.400'}
          mb={'15px'}
          >
            Register Your Account
          </Heading>
          <Box>
            <FormLabel color={'gray.600'}>Your Email</FormLabel>
            <Input onChange={(e) => setEmail(e.target.value)} required/>
          </Box>
          <Box>
            <FormLabel color={'gray.600'}>Enter Your Password</FormLabel>
            <Input type={'password'} onChange={(e) => setPassword(e.target.value)} required/>
          </Box>
          <Text color={'gray.500'} fontSize={'13px'}>Already have an account?<Link to={'/signin'} style={{textDecoration : 'underline'}}> Sign in. </Link></Text>
          <Button colorScheme={'twitter'} mt={'15px'} type='submit'>Sign Up</Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default SignUp
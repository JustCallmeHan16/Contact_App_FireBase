import {
  Box, 
  Text
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/FireContext';
import Navbar from './Navbar';
import ContactList from './ContactList';

const Dashboard = () => {

  const [data,setData] = useState([]);
  const {getContacts,lists,user} = UserAuth();

  useEffect(() => {
    getContacts()
  },[])

  const filterById = () => {
    const filterData = lists?.filter( list => list.userId === user.uid )
    console.log(filterData)
    setData(filterData)
  }

  useEffect(() => {
    filterById()
  },[lists])

  return (
    <Box className='animate__animated animate__fadeIn'>
      <Navbar/>
      <Box my={'20px'} borderRadius={'5px'} shadow={'md'} py={'5px'} textAlign={'center'} bgColor={'twitter.500'} width={'100px'}>
        <Text color={'white'}> Contact - {data.length}</Text>
      </Box>
      <Box display={'flex'} flexWrap={'wrap'} gap={'15px'}>
        {
          data?.map( data => <ContactList key={data.id} data={data}/> )
        }
      </Box>
    </Box>
  )
}

export default Dashboard
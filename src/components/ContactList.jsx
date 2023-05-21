import { 
    Button,
    Card,
    CardBody,
    Text,
    Icon
} from '@chakra-ui/react'
import React from 'react'
import {BiTrash} from 'react-icons/bi'
import { UserAuth } from '../context/FireContext'

const ContactList = ({data}) => {

    const {delContact} = UserAuth();

    const deleteFun = (id) => {
        delContact(id)
    }

    return (
        <Card my={'10px'} width={'345px'}>
            <CardBody>
                <Text>{data.name}</Text>
                <Text>{data.mail}</Text>
                <Text>{data.date}</Text>
                <Button onClick={() => deleteFun(data.id)} variant={'ghost'} colorScheme={'red'}>
                    <Icon as={BiTrash}/>
                </Button>
            </CardBody>
        </Card>
    )
}

export default ContactList
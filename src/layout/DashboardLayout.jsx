import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const DashboardLayout = () => {
    return (
       <Grid gridTemplateColumns={'repeat(6,1fr)'}>
            <GridItem
            bgColor={'gray.100'}
            minH={{md : '100vh'}} 
            colSpan={{base : 6, md : 2, lg : 1}}
            shadow={'md'}
            padding={'15px'}
            >
                <Sidebar/>
            </GridItem>
            <GridItem 
            p={'30px'}
            height={'100vh'}
            overflowY={'scroll'}
            colSpan={{base : 6, md : 4, lg : 5}}
            >
                <Outlet/>
            </GridItem>
       </Grid>
    )
}

export default DashboardLayout
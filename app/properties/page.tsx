import React from 'react'
import getListings from '../actions/getListings'
import getCurrentUser from '../actions/getCurrentUser';
import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';
import PropertiesClient from './PropertiesClient';

const Properties = async () => {
    const currentUser = await getCurrentUser();
    
    if(!currentUser){
        return(
            <EmptyState 
             title='Unauthorized'
             subtitle='Please login'
            />
        )
    }
    const listings = await getListings({userId: currentUser.id});
    if(listings.length === 0 ){
        return(
            <ClientOnly>
                <EmptyState
                    title='No Properties found'
                    subtitle='Look like you hane no properties listing'
                />
            </ClientOnly>
        )
    }
  return (
    <ClientOnly>
        <PropertiesClient 
         listings={listings}
         currentUser={currentUser}
        />
    </ClientOnly>
  )
}

export default Properties

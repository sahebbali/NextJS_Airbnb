import React from 'react'
import getCurrentUser from '../actions/getCurrentUser';
import getFavoriteListings from '../actions/getFavoriteListings';
import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';
import FavoritesClient from './FavoritesClient';

const ListingPage = async () => {
    const listing = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if(listing.length === 0){
        return(
            <ClientOnly>
                <EmptyState 
                    title='No favorites found'
                    subtitle='Looks like you have no favorite listing'
                />
            </ClientOnly>
        )
    }
  return (
   <ClientOnly>
    <FavoritesClient
        listings={listing}
        currentUser={currentUser}
    />
   </ClientOnly>
  )
}

export default ListingPage

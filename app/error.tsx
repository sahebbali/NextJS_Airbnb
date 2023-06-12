'use client';
import EmptyState from '@/components/EmptyState'
import React, { useEffect } from 'react'

interface ErrorStateProps {
    error: Error
}
const ErrorState:React.FC<ErrorStateProps> = ({error}) => {

    useEffect(()=>{
        console.log(error)
    },[error])
  return (
    <div>
      <EmptyState 
        title='Uh Oh'
        subtitle='Something is wrong!'
      />
    </div>
  )
}

export default ErrorState

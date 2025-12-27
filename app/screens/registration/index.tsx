import Header from '@/app/components/header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Registration = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
        <Header back title='Course Registration'/>

    </SafeAreaView>
  )
}

export default Registration
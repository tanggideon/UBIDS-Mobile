import Header from '@/app/components/header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const FeeInformation = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
        <Header back title='Fee Information'/>

    </SafeAreaView>
  )
}

export default FeeInformation
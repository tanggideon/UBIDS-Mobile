import Header from '@/app/components/header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Timetable = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
        <Header back title='Semester Timetable'/>

    </SafeAreaView>
  )
}

export default Timetable
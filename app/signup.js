import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function SignUp() {
  return (
    <View
      className='flex-1 bg-blue-100 pt-[100px] px-4'
    >
      <Text
        className='text-3xl font-pbold'
      >
        SignUp
      </Text>
      <View
        className='w-[90%] space-y-1'
      >
        <TextInput
          placeholder='Name'
          className='p-2 bg-white rounded text-base'
        />
        <TextInput
          placeholder='Email'
          className='p-2 bg-white rounded text-base'
        />
                <TextInput
          placeholder='Mobile number'
          className='p-2 bg-white rounded text-base'
        />
                        <TextInput
          placeholder='Passwrd'
          className='p-2 bg-white rounded text-base'
        />
      </View>
    </View>
  )
}
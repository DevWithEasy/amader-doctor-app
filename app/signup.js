import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function SignUp() {
  const router = useRouter()
  return (
    <View
      className='flex-1 bg-blue-100 pt-[80px] px-4'
    >
      <Text
        className='text-3xl font-pbold'
      >
        SignUp
      </Text>
      <View
        className='mt-5 space-y-4'
      >
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Full name :
          </Text>
          <TextInput
            placeholder='ex- Robiul Awal'
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Email :
          </Text>
          <TextInput
            placeholder='ex- robiulawal@mail.com'
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Mobile Number :
          </Text>
          <TextInput
            placeholder='ex- 01711001100'
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Password
          </Text>
          <TextInput
            placeholder='ex- @robiul68#'
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <TouchableOpacity
          className='py-3 bg-blue-500 rounded-full'
        >
          <Text
            className='text-white text-center'
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View
        className='pt-10'
      >
        <Text
          className=' text-center font-hbold text-blue-500'
        >
          Already Have an account ?
        </Text>
        <TouchableOpacity
          onPress={() => router.push('signin')}
          className='py-2.5 bg-white border-[1.2px] border-blue-500 rounded-full'
        >
          <Text
            className='text-blue-500 text-center'
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { toBengaliNumber } from 'bengali-number'
import { useRouter } from 'expo-router'
import find_image_url from '../utils/find_image_url'

export default function Doctor({ doctor }) {
  const router = useRouter()
  return (
    <TouchableOpacity
      onPress={() => router.push(`/doctors/${doctor?._id}`)}
      className='w-full my-0.5 flex-row p-2 bg-white rounded relative cursor-pointer hover:bg-blue-500'
    >
      <View
        className='w-[90px] justify-center doctors-center space-y-1'
      >
        <Image
          source={find_image_url(doctor.user)}
          className='h-[80px] w-[80px] mx-auto'
        />
        <Text
          className='font-hregular bg-blue-50 px-2 text-blue-600 rounded-md text-center'
        >
          {toBengaliNumber(doctor?.feesPerConsultation)}-৳
        </Text>
      </View>

      <View
        className='pl-4'
      >
        <Text
          className='text-blue-500 font-hbold'
        >
          {doctor?.name}
        </Text>
        <Text
          className='font-hregular'
        >
          {doctor?.experienceArea}
        </Text>
        <Text
          className='font-hregular'
        >
          {doctor?.workedAt}
        </Text>
        <Text
          className='font-hregular'
        >
          {toBengaliNumber(doctor?.experience)}+ বছরের অভিজ্ঞতা
        </Text>
      </View>
      <TouchableOpacity
        className='absolute right-0.5 top-0.5 bg-green-100 rounded px-2'
      >
        <Text
          className='font-hregular text-green-500 text-center'
        >
          {doctor?.specialization?.name}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
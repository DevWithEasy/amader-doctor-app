import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link, useGlobalSearchParams, useNavigation, useRouter } from 'expo-router'
import axios from 'axios'
import { toBengaliNumber } from 'bengali-number'
import API_URL from '../../utils/api_url'

export default function Specialization() {
  const router = useRouter()
  const navigation = useNavigation()
  const { id,name } = useGlobalSearchParams()
  const [specializations,setSpecializations] = useState([])
  const [doctors, setDoctors] = useState([])
  async function getDoctors(id) {
    try {
      const res = await axios.get(`${API_URL}/api/doctor/search/${id}`)
      if (res.data.status === 200) {
        setDoctors(res.data.data.doctors)
        setSpecializations(res.data.data.specializations)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${name} বিভাগ`,
    });
  }, [navigation, name]);

  useEffect(() => {
    getDoctors(id)
  }, [id])
  
  return (
    <View
      className='flex-1 bg-blue-50 p-2'
    >
      <View
        className='my-1 px-2 bg-white rounded-md'
      >
        <Text
          className='font-hregular'
        >
          {toBengaliNumber(doctors?.length)} জন ডাক্তার খুজে পাওয়া গেছে
        </Text>
      </View>
      <FlatList
        data={doctors}
        renderItem={({item}) =>
          <Link
            key={item?._id}
            href={`/doctors/${item?._id}`}
            // onPress={() => router.push(`/doctors/${item?._id}`)}
            className='w-full flex-row p-2 bg-white rounded relative cursor-pointer hover:bg-blue-500'
          >
            <View
              className='w-[90px] justify-center items-center space-y-1'
            >
              <Image
                source={{ uri: `${API_URL}${item?.user?.image?.url}` }}
                className='h-[80px] w-[80px]'
              />
              <Text
                className='font-hregular bg-blue-50 px-2 text-blue-600 rounded-md'
              >
                {toBengaliNumber(item?.feesPerConsultation)}-৳
              </Text>
            </View>

            <View
              className='pl-4'
            >
              <Text
                className='text-blue-500 font-hbold'
              >
                {item?.name}
              </Text>
              <Text
                className='font-hregular'
              >
                {item?.experienceArea}
              </Text>
              <Text
                className='font-hregular'
              >
                {item?.workedAt}
              </Text>
              <Text
                className='font-hregular'
              >
                {toBengaliNumber(item?.experience)}+ বছরের অভিজ্ঞতা
              </Text>
            </View>
            <TouchableOpacity
              className='absolute right-0.5 top-0.5 bg-green-100 rounded px-2'
            >
              <Text
                className='font-hregular text-green-500 text-center'
              >
                {item?.specialization?.name}
              </Text>
            </TouchableOpacity>
          </Link>
        }
        keyExtractor={doctor => doctor._id}
      />
    </View>
  )
}
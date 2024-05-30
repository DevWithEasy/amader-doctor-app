import { View, Text,  FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link, useGlobalSearchParams, useNavigation, useRouter } from 'expo-router'
import axios from 'axios'
import { toBengaliNumber } from 'bengali-number'
import API_URL from '../../utils/api_url'
import Doctor from '../../components/doctor-list-item'

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
  console.log(doctors)
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
          <Doctor
            key={item._id}
            doctor = {item}
          />
        }
        keyExtractor={doctor => doctor._id}
      />
    </View>
  )
}
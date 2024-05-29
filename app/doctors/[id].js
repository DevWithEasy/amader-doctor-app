import { View, Text, useWindowDimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGlobalSearchParams } from 'expo-router'
import axios from 'axios'
import API_URL from '../../utils/api_url'
import RenderHtml from 'react-native-render-html';
import { toBengaliNumber, toBengaliWord } from 'bengali-number'

export default function DoctorDetails() {
  const { width } = useWindowDimensions();
  const { id } = useGlobalSearchParams()
  const [doctor, setDoctor] = useState([])
  const [doctors, setDoctors] = useState([])
  async function getDoctor(id) {
    try {
      const res = await axios.get(`${API_URL}/api/doctor/${id}`)
      if (res.data.status === 200) {
        setDoctor(res.data.data.doctor)
        setDoctors(res.data.data.doctors)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getDoctor(id)
  }, [id])
  console.log(doctor)
  return (
    <ScrollView
      className='bg-white flex-1'
    >
      <View
        className='h-[250px] p-4 bg-blue-50 rounded-b-3xl'
      >
        <Image
          source={{ uri: `https://amaderdoctor.onrender.com${doctor?.user?.image?.url}` }}
          resizeMode='contain'
          className='h-full'
        />
      </View>
      <View
        className='p-2'
      >
        <View
          className='pt-2'
        >
          <Text
            className='font-hmedium text-xl'
          >
            {doctor?.name}
          </Text>
          <Text
            className='text-blue-500 font-hregular'
          >
            {doctor?.specialization?.name}
          </Text>
          <Text
            className='font-hregular'
          >
            {doctor?.designation}, {doctor?.workedAt}
          </Text>
          <Text
            className='font-hregular'
          >
            {doctor?.experienceArea}
          </Text>
          <Text
            className='font-hregular'
          >
            {doctor?.education}
          </Text>
          <Text
            className='font-hregular'
          >
            সার্ভিস চার্জ - {toBengaliNumber(doctor?.feesPerConsultation)} টাকা 
          </Text>
        </View>
        {/* {doctor._id &&
        <RenderHtml
          contentWidth={width}
          source={{ html: doctor?.bio }}
        />
        } */}
      </View>
    </ScrollView>
  )
}
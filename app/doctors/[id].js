import { View, Text, useWindowDimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import axios from 'axios'
import API_URL from '../../utils/api_url'
import RenderHtml from 'react-native-render-html';
import { toBengaliNumber, toBengaliWord } from 'bengali-number'
import find_image_url from '../../utils/find_image_url'
import dayNameBangla from '../../utils/dayNameBangla'
import formatTime from '../../utils/formatTime'
import getVanueTypeBangla from '../../utils/vanueTypeBangla'
import Doctor from '../../components/Doctor'

export default function DoctorDetails() {
  const router = useRouter()
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
  console.log(doctor?.chambers)
  return (
    <ScrollView
      className='bg-white flex-1'
    >
      <View
        className='h-[250px] justify-end bg-blue-50 rounded-b-3xl'
      >
        {doctor?.user &&
          <Image
            source={find_image_url(doctor.user)}
            className='h-[200px] w-[200px]  mx-auto'
          />
        }
      </View>
      <View
        className='p-2 space-y-3'
      >
        <View
          className='pt-2'
        >
          <Text
            className='font-hbold text-xl'
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
            সার্ভিস চার্জ -
            <Text
              className='font-hsemibold text-red-500'
            >
              {toBengaliNumber(doctor?.feesPerConsultation)}
            </Text> টাকা
          </Text>
        </View>
        <View>
          <Text
            className='font-hsemibold'
          >
            চেম্বার সমূহঃ
          </Text>
          <View
            className='space-y-1'
          >
            {doctor?.chambers &&
              doctor?.chambers.map(chamber =>
                <TouchableOpacity
                  key={chamber._id}
                  onPress={()=>router.push('/doctors/new_appointment')}
                  className='p-2 border-[0.5px] border-gray-400 rounded'
                >
                  <Text
                    className='mb-0.5 font-hmedium text-blue-500'
                  >
                    {chamber.vanue.name}
                  </Text>
                  <Text
                    className='font-hregular'
                  >
                    {chamber.vanue.location}
                  </Text>
                  <Text
                    className='font-hregular'
                  >
                    {dayNameBangla(chamber.day)}, {formatTime(chamber.from)} থেকে {formatTime(chamber.to)}
                  </Text>
                  <TouchableOpacity
                    className='px-1 absolute right-0 bg-blue-50 rounded-bl-md'
                  >
                    <Text
                      className='pt-0.5 text-blue-500 text-xs font-hregular'
                    >
                      {getVanueTypeBangla(chamber.vanue.type)}
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )
            }
          </View>
        </View>
        <View>
          <Text
            className='font-hsemibold'
          >
            এই বিভাগের আরো ডাক্তারগণঃ
          </Text>
          {
            doctors.length > 0 ?
              <View>
                {
                  doctors.map(doctor =>
                    <Doctor
                      key={doctor._id}
                      doctor={doctor}
                    />
                  )
                }
              </View>
              :
              <Text
                className='mt-5 text-center text-sm font-hregular text-red-400'
              >
                কোন ডাক্তার খুজে পাওয়া যায়নি।
                </Text>
          }

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
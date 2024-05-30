import { View, Text, useWindowDimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import axios from 'axios'
import API_URL from '../../utils/api_url'
import RenderHtml from 'react-native-render-html';
import { toBengaliNumber } from 'bengali-number'
import find_image_url from '../../utils/find_image_url'
import dayNameBangla from '../../utils/dayNameBangla'
import formatTime from '../../utils/formatTime'
import getVanueTypeBangla from '../../utils/vanueTypeBangla'
import Doctor from '../../components/doctor-list-item'
import SelectChamber from '../../components/appointment/select-chamber'
import CreateAppointment from '../../components/appointment/create-appointment'

export default function DoctorDetails() {
  const router = useRouter()
  const { id } = useGlobalSearchParams()
  const [doctor, setDoctor] = useState([])
  const [doctors, setDoctors] = useState([])
  const [selectChamber, setSelectChamber] = useState()
  const [selectView, setSelectView] = useState(false)
  const [createView, setCreateView] = useState(false)
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
        className='p-4 space-y-3'
      >
        <View
          className='pt-2'
        >
          <Text
            className='font-hsemibold text-xl'
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
          <TouchableOpacity
            onPress={() => setSelectView(true)}
            className='w-40 px-2 pb-2 pt-3 bg-blue-500 rounded-md'
          >
            <Text
              className='font-hregular text-white text-center'
            >
              অ্যাপয়েন্টমেন্ট নিন
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            className='font-hsemibold'
          >
            চেম্বার সমূহঃ
          </Text>
          {doctor?.chambers?.length > 0 ?
            <View
              className='space-y-2'
            >
              {
                doctor?.chambers.map(chamber =>
                  <TouchableOpacity
                    key={chamber._id}
                    onPress={() => {
                      setSelectChamber(chamber)
                      setCreateView(true)
                    }}
                    className={`p-2 rounded ${chamber._id === selectChamber?._id ? 'border border-red-500' : 'border-[0.5px] border-gray-400'}`}
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
                      className='px-1 absolute right-1 top-1 bg-blue-50 rounded-bl-md'
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
            :
            <Text
              className='text-center text-sm font-hregular text-gray-400'
            >
              এখনো কোন চেম্বার যোগ করেন নি।
            </Text>
          }

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
                className='mt-5 text-center text-sm font-hregular text-gray-400'
              >
                কোন ডাক্তার খুজে পাওয়া যায়নি।
              </Text>
          }

        </View>
        {
          selectView &&
          <SelectChamber {...{
            view: selectView,
            setView: setSelectView,
            chambers: doctor.chambers,
            setChamber: setSelectChamber,
            setCreateView: setCreateView
          }} />
        }
        {
          createView &&
          <CreateAppointment {...{
            view: createView,
            setView: setCreateView
          }} />
        }

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
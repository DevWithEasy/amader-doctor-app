import { View, Text, Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import specializationImage from '../../assets/brain.png'
import { useRouter } from 'expo-router'
import API_URL from '../../utils/api_url'

export default function Specializations() {
  const router = useRouter()
  const [specializations, setSpecializations] = useState([])
  async function getAllSpecialist() {
    try {
      const res = await axios.get(`${API_URL}/api/specialist/`)
      if (res.data.status === 200) {
        setSpecializations(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllSpecialist()
  }, [])
  console.log(API_URL)
  return (
    <View
      className='flex-1 bg-blue-50 p-1'
    >
      <View
        className='flex flex-row flex-wrap'
      >
        {specializations.length > 0 &&
          specializations.map(specilaization =>
            <TouchableOpacity
              key={specilaization?._id}
              onPress={() => router.push(`/specializations/${specilaization?._id}`)}
              className='w-4/12 p-1'
            >
              <View
                className='bg-white p-2 justify-center items-center space-y-2 rounded-md'
              >
                <Image
                  source={specializationImage}
                  className='w-10 h-10'
                />
                <Text
                  className='font-hregular text-nowrap'
                >
                  {specilaization?.name}
                </Text>
              </View>
            </TouchableOpacity>
          )
        }

      </View>
    </View>
  )
}
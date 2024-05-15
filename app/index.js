import { View, Text, Image, StatusBar, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import doctor_image from '../assets/doctor_male.png'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const {toBengaliNumber} = require('bengali-number');


export default function index() {
    const inset = useSafeAreaInsets()
    const [doctors, setDoctors] = useState([])
    const [specilaizations, setSpecilaizations] = useState([])
    useEffect(() => {
        function getData() {
            fetch(`https://amaderdoctor.onrender.com/api/doctor/home-data`)
                .then(res => res.json())
                .then(res => {
                    setDoctors(res.data.doctors)
                    setSpecilaizations(res.data.specializations)
                })
                .catch(err => console.log(err))
        }
        getData()
    }, [])
    console.log(doctors)
    return (
        <ScrollView

            style={{
                paddingTop: inset.top
            }}
            className='px-2 bg-blue-100'
        >
            <StatusBar />
            <View
                className='space-y-2'
            >
                {doctors.length > 0 &&
                    doctors.map(doctor =>
                        <TouchableOpacity
                            key={doctor?._id}
                            className='flex-row p-2 bg-white rounded relative cursor-pointer hover:bg-blue-500'
                        >
                            <View
                                className='justify-center items-center'
                            >
                                <Image
                                    source={doctor_image}
                                    className='h-[80px] w-[80px]'
                                />
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
                                    সার্ভিস চার্জ - {toBengaliNumber(doctor?.feesPerConsultation)} টাকা
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
            </View>


        </ScrollView>

    )
}
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { toBengaliNumber } from 'bengali-number'
import { Link, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Picker } from '@react-native-picker/picker';
import days from '../utils/days'
import dayNameBangla from '../utils/dayNameBangla'
import AntDesign from '@expo/vector-icons/AntDesign';
import Search from '../components/Search'
import ServicesArea from '../components/home/ServicesArea'
import SpecilaizationArea from '../components/home/SpecilaizationArea'
import DoctorsArea from '../components/home/DoctorsArea'
import Screen from '../components/Screen'
import HeroArea from '../components/home/HeroArea'

export default function Index() {
    const inset = useSafeAreaInsets()
    const [doctors, setDoctors] = useState([])
    const [specilaizations, setSpecilaizations] = useState([])
    const [specilaization, setSpecilaization] = useState([])
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

    return (
        <Screen
            color='#eff6ff'
        >
            <ScrollView
                className='bg-blue-50'
            >
                <StatusBar style="auto" />
                <View
                    className='p-2'
                >
                    <View
                        className='flex-row bg-white rounded-md'
                    >
                        <View
                            className='w-7/12 p-2 space-y-2'
                        >
                            <Text
                                className='text-[16px] font-hmedium text-blue-500'
                            >
                                খুঁজুন এবং অ্যাপয়েন্টমেন্ট নিন
                            </Text>
                            <Search {...{ specilaizations }} />
                        </View>
                        <View
                            className='w-5/12 justify-center items-center'
                        >
                            <Image
                                source={require('../assets/doctor_visit.png')}
                                className='w-[120px] h-[120px]'
                            />
                        </View>
                    </View>
                </View>
                <HeroArea/>
                <ServicesArea />
                <SpecilaizationArea {...{
                    specilaizations
                }} />
                <DoctorsArea {...{
                    doctors
                }} />

            </ScrollView>
        </Screen>
    )
}
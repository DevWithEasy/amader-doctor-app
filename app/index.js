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
                {/* <StatusBar style="auto" /> */}
                <View
                    className='pt-4 pb-2'
                >
                    <Text
                        className='text-3xl text-center text-blue-500 font-hbold'
                    >
                        আমাদের ডাক্তার
                    </Text>
                    <Text
                        className='-mt-2 text-center font-hregular underline'
                    >
                        ডাক্তার খোঁজা ও সেবা পাওয়া সহজ করার লক্ষ্যে
                    </Text>
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
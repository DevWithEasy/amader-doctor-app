import { View, Text, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import ServicesArea from '../components/home/ServicesArea'
import SpecilaizationArea from '../components/home/SpecilaizationArea'
import DoctorsArea from '../components/home/DoctorsArea'
import Screen from '../components/Screen'
import HeroArea from '../components/home/HeroArea'
import API_URL from '../utils/api_url'

export default function Index() {
    const [doctors, setDoctors] = useState([])
    const [specilaizations, setSpecilaizations] = useState([])
    useEffect(() => {
        function getData() {
            fetch(`${API_URL}/api/doctor/home-data`)
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
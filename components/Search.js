import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import days from '../utils/days'
import dayNameBangla from '../utils/dayNameBangla'
import AntDesign from '@expo/vector-icons/AntDesign';
import PickerModal from './PickerModal';
import { useRouter } from 'expo-router';

export default function Search({ specilaizations }) {
    const router = useRouter()
    const [view, setView] = useState(false)
    const [type, setType] = useState('')
    const [specilaization, setSpecilaization] = useState('')
    const [day, setDay] = useState('')
    const onPress = type === 'specialization' ? setSpecilaization : setDay
    const items = type === 'specialization' ? specilaizations : days

    return (
        <View>
            <View
                className='space-y-1'
            >
                <TouchableOpacity
                    onPress={() => {
                        setView(true)
                        setType('specialization')
                    }}
                    className='flex-row justify-between items-center px-3 py-1 border border-gray-500 rounded'
                >
                    <Text
                        className='font-hregular'
                    >
                        {!specilaization.name ? 'অভিজ্ঞতা' : specilaization.name}
                    </Text>
                    <AntDesign name="caretright" size={12} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setView(true)
                        setType('day')
                    }}
                    className='flex-row justify-between items-center px-3 py-1 border border-gray-500 rounded'
                >
                    <Text className='font-hregular'>{!day ? 'বার' : dayNameBangla(day)}</Text>
                    <AntDesign name="caretright" size={12} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    className='py-2 bg-blue-500 rounded'
                    onPress={() => {
                        if (!specilaization || !day) {
                            return Alert.alert(
                                'খোঁজার মাধ্যম বাছাই',
                                'আপনি যে সমস্যার দরকার খুজতেছেন দেই অভিজ্ঞতার বিষয় এবং দিন বাছাই করুন।',
                            )
                        } else {
                            router.push(`/find?specilaization=${specilaization._id}&day=${day}`)
                        }
                    }}
                >
                    <Text
                        className='text-white text-center font-hregular'
                    >
                        খুঁজুন
                    </Text>
                </TouchableOpacity>

            </View>
            <PickerModal {...{
                type,
                view,
                setView,
                onPress,
                items
            }} />
        </View>

    )
}
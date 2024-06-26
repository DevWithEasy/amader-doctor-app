import { View, Text, Modal, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

export default function CreateAppointment({ view, setView }) {
    const [date, setDate] = useState(dayjs())
    return (
        <View
            className='flex-1'
        >
            <Modal
                animationType="fade"
                transparent={true}
                visible={view}
                onRequestClose={() => {
                    setView(!view);
                }}>
                <ScrollView
                    className='flex-1 bg-slate-500/70'
                >
                    <View>
                       <TouchableOpacity
                        onPress={() => setView(!view)}
                        className='absolute top-5 right-5'
                    >
                        <AntDesign name="closesquare" size={35} color="white" />
                    </TouchableOpacity> 
                    </View>
                    <View
                        className='w-11/12 bg-white rounded-2xl'
                    >
                        <Text
                            className='px-4 pt-3 font-hregular text-base border-b'
                        >
                            রোগীর তথ্য দিন
                        </Text>
                        <View
                            className='p-4 space-y-2'
                        >
                            <View
                                className='overflow-hidden'
                            >
                                <DateTimePicker
                                    mode="single"
                                    date={date}
                                    onChange={(params) => setDate(params.date)}
                                />
                            </View>

                            <View>
                                <Text
                                    className='font-hregular'
                                >
                                    নামঃ
                                </Text>
                                <TextInput
                                    className='p-1.5 border border-gray-500 rounded-md'
                                />
                            </View>
                            <View>
                                <Text
                                    className='font-hregular'
                                >
                                    বয়সঃ
                                </Text>
                                <TextInput
                                    className='p-1.5  border border-gray-500 rounded-md'
                                />
                            </View>
                            <View>
                                <Text
                                    className='font-hregular'
                                >
                                    লিঙ্গঃ
                                </Text>
                                <TextInput
                                    className='p-1.5  border border-gray-500 rounded-md'
                                />
                            </View>
                            <View>
                                <Text
                                    className='font-hregular'
                                >
                                    মোবাইল নাম্বারঃ
                                </Text>
                                <TextInput
                                    className='p-1.5 border border-gray-500 rounded-md'
                                />
                            </View>
                            <View>
                                <Text
                                    className='font-hregular'
                                >
                                    ঠিকানাঃ
                                </Text>
                                <TextInput
                                    className='p-1.5  border border-gray-500 rounded-md'
                                />
                            </View>
                            <TouchableOpacity
                                onPress={() => setView(!view)}
                                className='py-2.5 bg-blue-500 rounded-md'
                            >
                                <Text
                                    className='font-hregular text-white text-center'
                                >
                                    সাবমিট করুন
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        </View>
    )
}
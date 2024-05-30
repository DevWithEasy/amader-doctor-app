import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CreateAppointment({ view, setView }) {
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
                <View
                    className='flex-1 justify-center items-center bg-slate-500/70'
                >
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
                            <View>
                                <Text
                                    className='font-hregular'
                                >
                                    নামঃ
                                </Text>
                                <TextInput
                                    className='p-2 border border-gray-500 rounded-md'
                                />
                            </View>
                            <View>
                                <Text
                                    className='font-hregular'
                                >
                                    বয়সঃ
                                </Text>
                                <TextInput
                                    className='p-2 border border-gray-500 rounded-md'
                                />
                            </View>
                            <View>
                                <Text
                                    className='font-hregular'
                                >
                                    মোবাইল নাম্বারঃ
                                </Text>
                                <TextInput
                                    className='p-2 border border-gray-500 rounded-md'
                                />
                            </View>
                            <View>
                                <Text
                                    className='font-hregular'
                                >
                                    ঠিকানাঃ
                                </Text>
                                <TextInput
                                    className='p-2 border border-gray-500 rounded-md'
                                />
                            </View>
                            <TouchableOpacity
                                onPress={() => setView(!view)}
                                className='p-2 bg-blue-500 rounded-full'
                            >
                                <Text
                                    className='font-hregular text-white text-center'
                                >
                                    সাবমিট করুন
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => setView(!view)}
                        className='absolute top-5 right-5'
                    >
                        <AntDesign name="closesquare" size={35} color="white" />
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import dayNameBangla from '../../utils/dayNameBangla';
import formatTime from '../../utils/formatTime';
import getVanueTypeBangla from '../../utils/vanueTypeBangla';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SelectChamber({ chambers, view, setView, setChamber, setCreateView }) {
    
    return (
        <View
            className='flex-1'
        >
            <Modal
                animationType="fade"
                transparent={true}
                visible={view}
                onRequestClose={() => {
                    setView(!view)
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
                            চেম্বার বাছাই করুন
                        </Text>
                        <View
                            className='p-4 space-y-2'
                        >
                            {
                                chambers.map(chamber =>
                                    <TouchableOpacity
                                        key={chamber._id}
                                        onPress={() => {
                                            setChamber(chamber)
                                            setView(false)
                                            setTimeout(() => {
                                                setCreateView(true)
                                            }, 100)
                                        }}
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
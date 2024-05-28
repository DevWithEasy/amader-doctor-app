import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import dayNameBangla from '../utils/dayNameBangla';

export default function PickerModal({type,view,setView,onPress,items}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={view}
      onRequestClose={() => {
        setView(!view);
      }}>
        <View
          className='flex-1 bg-gray-500/50 justify-center items-center'
        >
          <View
            className='w-9/12 p-2 space-y-2 mx-auto bg-white rounded-md'
          >
            {
            items.map((item,i) =>
              <TouchableOpacity
                key={i}
                onPress={()=>{
                  onPress(item),
                  setView(!view)
                }}
                className='flex-row p-2'
              >
                <Text
                  className='font-hregular'
                >
                  {type === 'day' ? dayNameBangla(item) : item.name}
                </Text>
              </TouchableOpacity>
            )
          }
          </View>
          
        </View>
    </Modal>
  )
}
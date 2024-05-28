import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import * as Constant from 'expo-constants'

export default function ApplyDoctor() {
  return (
    <View
        className='flex-1 bg-blue-100 px-2'
        style={{
            paddingTop : Constant.default.statusBarHeight
        }}
    >
        <View
            className='pt-5'
        >
            <Text
        className='text-xl font-pmedium'
      >
        Create a doctor account
      </Text>
        </View>
        
      <View
        className='mt-5 space-y-4'
      >
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Full name :
          </Text>
          <TextInput
            placeholder='ex- Robiul Awal'
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Email :
          </Text>
          <TextInput
            placeholder='ex- robiulawal@mail.com'
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Mobile Number :
          </Text>
          <TextInput
            placeholder='ex- 01711001100'
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Password
          </Text>
          <TextInput
            placeholder='ex- @robiul68#'
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <TouchableOpacity
          className='py-3 bg-blue-500 rounded-full'
        >
          <Text
            className='text-white text-center'
          >
            Create service account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
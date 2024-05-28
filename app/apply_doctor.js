import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import * as Constant from 'expo-constants'

export default function ApplyDoctor() {
  return (
    <ScrollView
      className='flex-1 bg-blue-100 px-2'
      style={{
        paddingTop: Constant.default.statusBarHeight
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
        className='mt-5 space-y-4 pb-16'
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
            Website :
          </Text>
          <TextInput
            placeholder='ex- robiulawal.com'
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Working Organization :
          </Text>
          <TextInput
            placeholder='ex- '
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Designation :
          </Text>
          <TextInput
            placeholder='ex- '
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Education Qualification (All Degree) :
          </Text>
          <TextInput
            placeholder='ex- '
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Experience Subject :
          </Text>
          <TextInput
            placeholder='ex- '
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Experience Years :
          </Text>
          <TextInput
            placeholder='ex- '
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Expericence Area :
          </Text>
          <TextInput
            placeholder='ex- '
            className='p-2 bg-white rounded text-base'
          />
        </View>
        <View
          className='space-y-2'
        >
          <Text
            className='text-gray-500'
          >
            Service Charge :
          </Text>
          <TextInput
            placeholder='ex- '
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
    </ScrollView>
  )
}
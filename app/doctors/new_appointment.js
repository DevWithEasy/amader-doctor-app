import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";

export default function NewAppointment() {
  const [date, setDate] = useState(dayjs());
  return (
    <ScrollView
      className='p-2 bg-blue-50'
    >
      <View className="space-y-2 pb-10">
        <View className="bg-white border border-gray-300 rounded-md shadow-xl">
          <DateTimePicker
            mode="single"
            date={date}
            onChange={(params) => setDate(params.date)}
          />
        </View>
        <View
          className='space-y-1'
        >
          <Text className="pl-1 font-hregular">নামঃ</Text>
          <TextInput className="p-1.5 bg-white border border-gray-300 rounded-md" />
        </View>
        <View>
          <Text className="pl-1 font-hregular">বয়সঃ</Text>
          <TextInput className="p-1.5 bg-white border border-gray-300 rounded-md" />
        </View>
        <View>
          <Text className="pl-1 font-hregular">লিঙ্গঃ</Text>
          <TextInput className="p-1.5 bg-white border border-gray-300 rounded-md" />
        </View>
        <View>
          <Text className="pl-1 font-hregular">মোবাইল নাম্বারঃ</Text>
          <TextInput className="p-1.5 bg-white border border-gray-300 rounded-md" />
        </View>
        <View>
          <Text className="pl-1 font-hregular">ঠিকানাঃ</Text>
          <TextInput className="p-1.5 bg-white border border-gray-300 rounded-md" />
        </View>
        <TouchableOpacity
          onPress={() => {}}
          className="py-2.5 bg-blue-500 rounded-md"
        >
          <Text className="font-hregular text-white text-center">
            সাবমিট করুন
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

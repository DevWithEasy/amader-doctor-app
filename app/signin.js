import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter()
  return (
    <View className="flex-1 bg-blue-100 pt-[80px] px-4">
      <Text className="text-3xl font-pbold">SignIn</Text>
      <View className="mt-5 space-y-4">
        <View className="space-y-2">
          <Text className="text-gray-500">Email or Mobile Number :</Text>
          <TextInput
            placeholder="ex- 01711001100"
            className="p-2 bg-white rounded text-base"
          />
        </View>
        <View className="space-y-2">
          <Text className="text-gray-500">Enter your full name</Text>
          <TextInput
            placeholder="ex- @robiul68#"
            className="p-2 bg-white rounded text-base"
          />
        </View>
        <TouchableOpacity className="py-3 bg-blue-500 rounded-full">
          <Text className="text-white text-center">Sign In</Text>
        </TouchableOpacity>
      </View>
      <View className="pt-10">
        <Text className=" text-center font-hbold text-blue-500">
          You haven't an account ?
        </Text>
        <TouchableOpacity
          onPress={() => router.push("signup")}
          className="py-2.5 bg-white border-[1.2px] border-blue-500 rounded-full"
        >
          <Text className="text-blue-500 text-center">Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

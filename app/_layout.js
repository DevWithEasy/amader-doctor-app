import { View, Text ,Image} from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Stack, Tabs } from 'expo-router'
import { useFonts } from 'expo-font'
import { icons } from '../constants/constants'
SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "HindSiliguri-Bold": require("../assets/fonts/HindSiliguri-Bold.ttf"),
    "HindSiliguri-Light": require("../assets/fonts/HindSiliguri-Light.ttf"),
    "HindSiliguri-Medium": require("../assets/fonts/HindSiliguri-Medium.ttf"),
    "HindSiliguri-Regular": require("../assets/fonts/HindSiliguri-Regular.ttf"),
    "HindSiliguri-SemiBold": require("../assets/fonts/HindSiliguri-SemiBold.ttf")
  })
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])
  if (!fontsLoaded) return null;

  const TabIcon = ({icon,color,name,focused})=>{
    return(
      <View>
        <Image
          source={icon}
          resizeMode='contain'
          className='w-5 h-5'
        />
        <Text>{name}</Text>
      </View>
    )
  }
  return (
    <Tabs>
      <Tabs.Screen 
        name='index'
        options={{
          title : 'Home',
          headerShown : false,
          tabBarIcon : (color,focused)=>(
            <TabIcon
              icon={focused ? icons.home_focus : icons.home_unfocus}
              color={color}
              name='Home'
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen 
        name='find'
        options={{
          title : 'Find',
          headerShown : false,
        }}
      />
      <Tabs.Screen 
        name='doctors'
        options={{
          title : 'Doctors',
          headerShown : false,
        }}
      />
      <Tabs.Screen 
        name='hospitals'
        options={{
          title : 'Hospitals',
          headerShown : false,
        }}
      />
      <Tabs.Screen 
        name='ambulences'
        options={{
          title : 'Ambulences',
          headerShown : false,
        }}
      />
    </Tabs>
  )
}

export default RootLayout
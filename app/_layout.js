import React, { useEffect } from 'react'
import { SplashScreen, Stack, Tabs } from 'expo-router'
import { useFonts } from 'expo-font'
import Entypo from '@expo/vector-icons/Entypo';
SplashScreen.preventAutoHideAsync()


export default function RootLayout() {
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

    return (
        <Stack>
            <Stack.Screen
                name='index'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='ambulences'
                options={{
                    // headerShown: false
                }}
            />
            <Stack.Screen
                name='apply_doctor'
                options={{
                    headerShown: false,
                    title: 'Apply as doctor'
                }}
            />
            <Stack.Screen
                name='blood'
                options={{
                    // headerShown: false
                }}
            />
            <Stack.Screen
                name='doctors/index'
                options={{
                    // headerShown: false
                }}
            />
            <Stack.Screen
                name='doctors/[id]'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='find'
                options={{
                    // headerShown: false
                }}
            />
            <Stack.Screen
                name='maps'
                options={{
                    // headerShown: false
                }}
            />
            <Stack.Screen
                name='hospitals/index'
                options={{
                    // headerShown: false
                }}
            />
            <Stack.Screen
                name='specializations/index'
                options={{
                    title: 'বিভাগীয় (ডাক্তার)'
                    // headerShown: false
                }}
            />
            <Stack.Screen
                name='specializations/[id]'
                options={{
                    title: 'বিভাগীয় (ডাক্তার)'
                    // headerShown: false
                }}
            />
            <Stack.Screen
                name='signin'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='signup'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='user/[id]'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='doctor/[id]'
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}
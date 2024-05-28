import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';

export default function HeroArea() {
    const width = Dimensions.get('window').width;
    const items = [
        {
            title: 'Visit',
            description: 'Home',
            image: require('../../assets/doctor_visit.png')
        },
        {
            title: 'Find',
            description: 'Home',
            image: require('../../assets/doctor_find.png')
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={items}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ items, index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}
import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';

export default function HeroArea() {
    const width = Dimensions.get('window').width;
    const items = [
        {
            title: 'ডাক্তার খুঁজুন',
            description: 'আপনার সমস্যা অনু্যায়ী অভিজ্ঞতার বিষয় দিন ও বার দিয়ে ডাক্তার খুজে নিন খুব সহজেই।',
            image: require('../../assets/doctor_find.png')
        },
        {
            title: 'সেবা দিন',
            description: 'খুব সহজেই একাউন্ট করে আপনার মহৎ কাজের সেবা দিন অসুস্থ মানুষের মাঝে।',
            image: require('../../assets/doctor_visit.png')
        },
        {
            title: 'ফ্রি প্রচারনা',
            description: 'পোষ্টার,মাইকিং,লিফলেটে আর নয় প্রচারনা। বিনা খরচে সকল মানুষের কাছে চলে যাবে আপনার সেবার তথ্য।',
            image: require('../../assets/doctor_addfree.png')
        },
    ]
    return (
        <View
            className='m-1 rounded-md overflow-hidden bg-white'
        >
            <Carousel
                loop
                width={width}
                height={135}
                autoPlay={true}
                data={items}
                scrollAnimationDuration={1000}
                autoPlayInterval={5000}
                onSnapToItem={(index) => {}}
                renderItem={({ item, index }) => (
                    <View
                        className='h-[130px] flex-row bg-white rounded-md'
                    >
                        <View
                            className='w-7/12 p-2 space-y-2 overflow-hidden'
                        >
                            <Text
                                className='text-[16px] font-hmedium text-blue-500'
                            >
                                {item.title}
                            </Text>
                            <Text
                                className='font-hregular text-justify'
                            >
                                {item.description}
                            </Text>
                        </View>
                        <View
                            className='w-5/12 justify-center items-center'
                        >
                            <Image
                                source={item.image}
                                className='w-[120px] h-[120px]'
                            />
                        </View>
                    </View>
                )}
            />
        </View>
    )
}
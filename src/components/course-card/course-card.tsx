import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './course-card.style';
import { ICourse } from '../../interfaces/courses';

/** The course card contains a short name and a picture */
const CourseCard: React.FC<Pick<ICourse, 'name' | 'bgColor' | 'image'>> = ({ name, image, bgColor }) => (
    <View style={styles.container}>
        <Image
            source={{ uri: image }}
            style={[styles.image, { backgroundColor: bgColor }]}
            resizeMode='contain'
        />
        <View style={styles.textContainer}>
            <Text style={styles.text}>{name}</Text>     
        </View>
    </View>
);

export default CourseCard;
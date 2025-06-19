import axios from 'axios'
import { ICourse } from '../interfaces/courses'

/** Api for getting a list of courses */
export const getCourses = async (): Promise<ICourse[]> => {
    try {
        const res = await axios.get('https://logiclike.com/docs/courses.json')
        return res.data
    } catch (error) {
        console.error('Error fetching courses:', error)
        return []
    }
}
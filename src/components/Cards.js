import React, { useEffect } from 'react'
import Card from './Card';

const Cards = ({courses}) => {
    let allCourses=[];
    const getCourses = ()=>{
        Object.values(courses).forEach(
            (courseCategory)=>{
                courseCategory.forEach(
                    (course)=>{
                        allCourses.push(course);
                    }
                )
                // allCourses = allCourses.concat(courseCategory);
            }
        )
        console.log("saare courses - ",allCourses);
        return allCourses;
    }
    // useEffect(()=>{
    //     console.log(courses);
    //     // getCourses();
    //     console.log(allCourses);
    // },[])
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {getCourses().map((course)=>{
        return <Card key={course.id} course={course}/>
      })}
    </div>
  )
}

export default Cards

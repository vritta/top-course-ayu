// import React, { useEffect } from 'react'
import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
    let allCourses=[];
    let courses = props.courses;
    let category = props.category;
    const [likedCourses,setLikedCourses] = useState([]);

    const getCourses = ()=>{
      if(category==="All"){
        Object.values(courses).forEach(
          (courseCategory)=>{
              courseCategory.forEach(
                  (courseData)=>{
                      allCourses.push(courseData);
                  }
              )
              // allCourses = allCourses.concat(courseCategory);
          }
        )
        // console.log("saare courses - ",allCourses);
        return allCourses;
      }
      else{
        allCourses = courses[category];
        return allCourses;
      }
        
    }
    // useEffect(()=>{
    //     console.log(courses);
    //     // getCourses();
    //     console.log(allCourses);
    // },[])
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {getCourses().map((course)=>{
        return (
          <Card key={course.id} course={course} 
          likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        )
      })}
    </div>
  )
}

export default Cards

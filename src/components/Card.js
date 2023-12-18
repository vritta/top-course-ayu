import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify'

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      // likedCourses = likedCourses.filter(prev=>course.id!=prev)
      setLikedCourses(likedCourses.filter(cid=>course.id!==cid));
      // console.log(likedCourses);
      toast.warning("Like Removed");
    }
    else{
      // likedCourses.push(course.id)
      setLikedCourses((prev)=>[...prev,course.id]);
      // console.log(likedCourses);
      toast.success("Liked Successfully");
    }
  }


  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt="" />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            flex justify-center items-center'>
            <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id)?
              (<FcLike fontSize="1.75rem"/>):
              (<FcLikePlaceholder fontSize="1.75rem"/>)
            }
            </button>
        </div>
      </div>

      <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className='mt-2 text-white'>
          {
            course.description.length > 100 ?
            course.description.substr(0,100)+"...":
            course.description
          }
        </p>
      </div>
    </div>
  )
}

export default Card

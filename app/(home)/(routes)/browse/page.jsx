"use client"

import React, { useEffect, useState } from 'react'
import CategoryFilter from './_components/CategoryFilter'
import { getCourseList } from '@/app/_services'
function Browse() {
  const [courses,setCourses]=useState([]);
  useEffect(()=>{
    getCourses()
  },[])
  const getCourses = ()=>{
       getCourseList().then(resp=>{
        console.log(resp);
        setCourses(resp.courseLists)
       })
  }
  return (
    <div>
      <CategoryFilter/>
    </div>
  )
}

export default Browse
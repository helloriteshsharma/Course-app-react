import React, { useState } from 'react'

import Card from './Card'

const Cards = (props) => {

    let courses = props.courses;
    let category = props.category;
    
    const [likedCourses,setLikedCourses] = useState([]);
    let allCourses = [];

    
    function getCourses() {

        if(category === "All") {
            
        Object.values(courses).forEach( (array) => {
            array.forEach((courseData) => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
        }
        else {
            //main sirf specific category ka data arrya krunga
            return courses[category];
        }
        
    }


    return (
        <div className='flex flex-wrap justify-center gap-8 mb-4 '>
          {
            getCourses().map( (course) => {
               return <Card key={course.id} 
                            course={course} 
                            likedCourses = {likedCourses}
                            setLikedCourses = {setLikedCourses}
                            />
            } )
          }
        </div>
    ) 
}

export default Cards;
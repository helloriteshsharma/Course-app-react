import React, { useEffect, useState } from "react";


import NavBar from "./component/NavBar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import Spinner from "./component/Spinner";

import {apiUrl,filterData} from "./data";




const App = () => {

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

   async function fetchData() {

    setLoading(true);

    try{
        let respone = await fetch(apiUrl);
        let output = await respone.json();

        //output ->
       
        setCourses(output.data);
    }
    catch(error) {
        TransformStream.error("Network me koi dikkat hai");
    }

    setLoading(false);

   }
  
   useEffect( () => {
    fetchData();
   },[]);
  
  return (
    
     <div className="bg-[#ffe01b] min-h-screen flex flex-col ">
        <div>
          <NavBar />
        </div>
        <div  >
                <Filter filterData = {filterData} 
                  category = {category}
                  setCategory = {setCategory}
                  
                />
              </div>
              <div className="w-11/12  max-w-[1200px] mt-4
                              mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
                {
                  loading ? (<Spinner />) : (
                    <Cards 
                      courses={courses} 
                      category={category}
                     />)
                }
              </div>
       
        
     </div>
  );
};

export default App;

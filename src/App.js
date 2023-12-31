import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";

const App = () => {

  const [courses,setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      // return data;
      setCourses(output.data);
      // console.log(output);
    }
    catch(err){
      toast.error("Something went wrong!")
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]
  )

  return (
  <div className="min-h-screen bg-bgDark2">
    <Navbar/>
    <div className="bg-bgDark2">
      
      <Filter filterData={filterData} category={category} setCategory={setCategory}/> 

      {/* <Spinner/> */}
      <div className=" max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading===false?<Cards courses={courses} category={category}/>:<Spinner/>}
      </div>
      
    </div>
  </div>
  );
};

export default App;

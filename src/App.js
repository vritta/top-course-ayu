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
  <div className="min-h-screen flex">
    <Navbar/>
    <Filter filterData={filterData}/>
    {/* <Spinner/> */}
    {loading===false?<Cards courses={courses}/>:<Spinner/>}
    
  </div>
  );
};

export default App;

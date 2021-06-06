import React, { useEffect, useState } from 'react';
import CustomCard from '../../Components/CustomCard';
import './Home.css'

function Home(props) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    apiCall();
  },[])

  const apiCall = async () => {
    try{
         const response = await fetch("https://api.thedogapi.com/v1/breeds");
         if (!response.ok) throw new Error();
         const jsonResponse = await response.json();
         console.log(jsonResponse);
         setData(jsonResponse.slice(0,20));
         setLoading(false)
    }catch(error){
       console.log(error)
       setLoading(false);
    }
  } 

    return (
        <div className="homeContainer">
           {(loading ? [1,2,3,4,5,6,7,9] : data ).map((item,index)=><CustomCard loading={loading} item={item} key={index}/>)}
        </div>
    );
}

export default Home;
import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { DATA_URL } from "../utils/constant";




const Body = ()=>{

  const [resList,setResList]  = useState([]);
   
  useEffect(()=>{
   fetchData();
  },[]);

  const fetchData = async()=>{
   const data = await fetch(DATA_URL);

     console.log(data);
     
  
   const jsonData = await data.json();


   
   setResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

   if(!resList || resList.length===0){
    return (<h1>Page is loading.....</h1>);
   }

   return (
        <div className="body">
          <div> search</div>
          <div className="resContainer">
            {
             resList.map((resturant)=>{
               return <ResCard key={resturant.info.id} resData={resturant.info}/>;
             })
            }
          </div>
        </div>
    );
};

export default Body;
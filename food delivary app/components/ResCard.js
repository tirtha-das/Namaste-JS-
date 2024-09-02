import { CDN_URL } from "../utils/constant";

const ResCard = (props)=>{

   const {resData} =props ;
   
   return (<div className="resCard"> 
     <img src={CDN_URL+resData.cloudinaryImageId} alt="food photo" className="foodImg"/>
     <h2>{resData.name}</h2>
     <h3 className="cuisine">{resData.cuisines.join(',')}</h3>
     <h3>{resData.avgRating}</h3>
     <h3>{resData.costForTwo}</h3>
     <h3>{resData.sla.deliveryTime}</h3>

   </div>);

}

export default ResCard;
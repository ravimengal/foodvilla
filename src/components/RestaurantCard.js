import '.././index.css'
import {IMG_CDN_URL} from '.././constant';
import {useState} from 'react'
import ShimmerCard from './ShimmerCard'
const RestaurantCard = ({name,cuisines,totalRatings,address,cloudinaryImageId}) => {
   // const [details,setDetails] = useState(1);
  // console.log(props);
    return(
        <>
       

                    <div className="card" >
                    <img src={IMG_CDN_URL+cloudinaryImageId}className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <hr/>
                      <h>{cuisines.join(",")}</h>
                      <hr/>
                      <p className="card-text">{address}</p>
                      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>     
           
       
        </>
    )
}

export default RestaurantCard;
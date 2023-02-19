import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {IMG_CDN_URL} from '.././constant';
import ShimmerCard from './ShimmerCard'
import '../index.css'
import useRestaurant from '../hooks/useRestaurant';
const RestaurantMenu = () =>{
    const {resId} = useParams();
    // const id = Object.values(resId);
    // console.log(resId)
    // console.log(id)    
    const restaurantMenu = useRestaurant(resId);
    console.log(restaurantMenu);
    
    //https://www.swiggy.com/dapi/menu/v4/full?lat=18.5204303&lng=73.8567437&menuId=25396
    return restaurantMenu?.length === 0 ?(
        <ShimmerCard />
        )
        :(
        <>
        <div className="banner-card">
    {/* <h2>{restaurantMenu?.name}</h2>  */}
    {/* <div class="card mb-3"> */}
  <img src={IMG_CDN_URL+restaurantMenu.cloudinaryImageId} class="card-img-top bannerImg " alt="..."/>
{/* </div>   */}
</div>
    <div className="card-border">
        {Object.values(restaurantMenu?.menu?.items).map((item)=>{
            return(
                <div className="card" key={item?.id}>
                    <div className="row card-body">
                       <div className="col-sm-6">
                          <h6 className="card-title">{item?.name}</h6>
                          <span>Rs {(item?.price)/100}</span>
                           {/* <p class="card-text">{item?.description}</p> */}
                        </div>
                        <img className="col-sm-6" src={IMG_CDN_URL+item?.cloudinaryImageId} alt="sans"/>
                    </div>
                </div>
           
            )
        })}
        </div>
         
        {/* <h1>Restaurant menu : {[id]}</h1> */}
        </>
    )
}

export default RestaurantMenu;



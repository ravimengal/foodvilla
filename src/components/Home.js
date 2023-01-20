import {useState,useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import ShimmerCard from './ShimmerCard'
import '.././index.css'

const Home = () =>{

    const [restaurantList,setRestaurantList] = useState([]);
    //Calling api
    const getRestaurantData = async () =>{
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING");
        let json  = await data.json();
       // console.log(json?.data?.cards[2]?.data?.data?.cards);
        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
    }

    useEffect(()=>{
            return ()=> getRestaurantData();
    },[])

    return restaurantList?.length == 0 ?(
    <ShimmerCard />
    )
    : (
        <>
                        <div className="card-border">
{restaurantList.map((restaurant)=>{
            return(
                <RestaurantCard {...restaurant.data}/>
            )
        })

        }
                </div>

        </>
    )
}

export default Home
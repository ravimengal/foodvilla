import {useState,useEffect} from 'react'
import {RESTAURANT_URL} from '.././constant'
const useRestaurant = (id) =>{


 console.log('useRestaurant hook',id)
 const [restaurantMenu,setRestaurantMenu] = useState([]) 
 useEffect(()=>{
    getRestaurantDetails();
    return ()=>{

    }
},[])

 const getRestaurantDetails = async () =>{
    const data = await fetch(RESTAURANT_URL + id)
    const json = await data.json();
    console.log(json.data)
    setRestaurantMenu(json.data)
}
return restaurantMenu; 
}

export default useRestaurant;
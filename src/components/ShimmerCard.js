import '.././index.css'
const ShimmerCard = () =>{
    return(
        <>
        <div className="card-border">
            {Array(10).fill('').map((e,index)=>
                 <div className="card" key={index} >
                 <div  className="card-img-top card-img skeleton" />
               </div>
    
                )}
               </div>

      
        </>
    )
}

export default ShimmerCard;
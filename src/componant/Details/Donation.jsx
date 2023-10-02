import { useEffect, useState } from "react";


import ShowingDonation from "./ShowingDonation";


const Donation = () => {
    const [item , setitem]=useState([])
    const [nodata,setnodata]=useState(false)
    const [isshow,setisshow]=useState(false)

    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem("item"))
        if (items){
            setitem(items)

        }else{
            
            setnodata("no data found")
        }
       
        

    },[])
    console.log(item)
    
    return (
        <div >
            {nodata ? <p className="h-[80vh] flex justify-center items-center text-4xl ">{nodata}</p> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 m-auto">
                {
                 isshow? item.map(donation=><ShowingDonation  key={donation.id}donation={donation}></ShowingDonation> ) : item.slice(0,4).map(donation=><ShowingDonation  key={donation.id}donation={donation}></ShowingDonation> )
                }
            </div>}
            <button onClick={()=>setisshow(!isshow)} className="btn btn-active btn-neutral mx-auto text-white text-lg bg-green-600 w-[110px] h-[48px] rounded-lg ml-[570px] mt-10 ">{isshow?'See Less':'See All'}</button>

                
                
                
           
        </div>
    );
};

export default Donation;
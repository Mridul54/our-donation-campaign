import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";


const Donate = () => {
const donations = useLoaderData()
console.log(donations)

const {id} = useParams()
const donation = donations.find(donation => donation.id == id)



  return (
    <div>
       <DonationCard donation={donation}></DonationCard>
    </div>
    
  )
};

export default Donate;

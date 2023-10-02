import React from 'react';
import DonationsCard from './DonationsCard';

const Campaigns = (camp) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-6'>
                {
                    camp.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
                }
            </div>
        </div>
    );
};
console.log(donation)
export default Campaigns;
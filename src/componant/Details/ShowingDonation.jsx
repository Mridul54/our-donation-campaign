import React from 'react';

// eslint-disable-next-line react/prop-types
const ShowingDonation = ({ donation }) => {
  
  const { id, Picture, Category, Category_bg, Description, Price, Card_bg, Text_and_button_bg } = donation;

 
  const cardStyle = {
    backgroundColor: Category_bg,
  };
  
  const categoryStyle = {
    color: Card_bg,
    backgroundColor: Text_and_button_bg,
  };

 

  const descriptionStyle = {
    color: Text_and_button_bg,
  };

  return (
    <div className=''>
        <div className='flex lg:font-bold lg:text-2xl md:text-sm'>
      <div>
        <figure className='rounded-none'>
          <img className='lg:h-56 md:h-40 h-40 ' src={Picture} alt="Product" />
        </figure>
      </div>
      <div className="card w-60 rounded-none p-2" style={cardStyle}>
        <div className="">
          <h2 className="text-lg bg my-4" style={descriptionStyle }>
            {Category}
          </h2>
          <h1 className=' text-white lg:text-lg md:text-xs'>{Description}</h1>
          <h1 className='lg:text-xl md:text-xs'> {Price}</h1>
          <button className=" p-2 rounded-lg mt-5 lg:text-xl md:text-xs btn  " style={categoryStyle }>
            View Details
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShowingDonation;

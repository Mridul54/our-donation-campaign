import React from 'react';
import Swal from 'sweetalert2';

const DonationCard = ({ donation }) => {
  const handleClick = () => {
    const addeditem = [];
    const items = JSON.parse(localStorage.getItem("item"));
    if (!items) {
      addeditem.push(donation);
      localStorage.setItem("item", JSON.stringify(addeditem));
    } else {
      const isexists = items.find((item) => item.id === donation.id);
      if (!isexists) {
        addeditem.push(...items, donation);
        localStorage.setItem("item", JSON.stringify(addeditem));
        Swal.fire({
          icon: 'success',
          title: 'Thanks For Your Donation',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'You Already Added This',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    }
  };

  const { id, Picture, Description, Price, Text_and_button_bg, more_details,Category_bg } = donation;

  const buttonStyle = {
    backgroundColor: Category_bg, 
    color: 'white',
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="lg:h-96" src={Picture} alt={Description} />
      </figure>
      <div className="card-body">
        <div className="p-14">
          <h2 className="card-title text-2xl">{Description}</h2>
          <p className="text-xl">{more_details}</p>
        </div>
        <div className="card-actions absolute">
          <div className="bg-black opacity-50 transition-opacity duration-300 relative lg:bottom-32 w-[312px] lg:w-[620px] border lg:h-28 h-16 lg:ml-[313px] bottom-[78px] left-10 lg:left-0 md:left-52"></div>
          <button
            onClick={handleClick}
            className="text-white btn btn-error h-full opacity-50 relative lg:bottom-24 lg:right-80 lg:-left-[600px] bottom-36 left-10 md:bottom-16 md:-left-24 brightness-100 opacity-100"
            style={buttonStyle}
          >
            Donate: {Price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;

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
        <img className="lg:w-full w-60" src={Picture} alt={Description} />
      </figure>
      <div className="card-body">
        <div className="p-14">
          <h2 className="card-title text-3xl font-bold ">{Description}</h2>
          <p className="lg:text-xl">{more_details}</p>
        </div>
        <div className="card-actions absolute">
          <div className="bg-black opacity-50 transition-opacity duration-300 relative lg:bottom-[400px] w-[312px] lg:w-[1280px] border lg:h-36 h-16 "></div>
          <button
            onClick={handleClick}
            className="text-white btn btn-error h-[50px] opacity-80 relative lg:bottom-[500px] w-[150px] lg:right-80 lg:left-[50px] bottom-36 left-10 md:bottom-16 md:-left-24 brightness-100 text-lg rounded-lg"
            style={buttonStyle}
          >
            Donate {Price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;

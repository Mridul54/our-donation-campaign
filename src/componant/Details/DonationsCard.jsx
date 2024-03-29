import { Link } from 'react-router-dom'; 

const DonationsCard = ({ donation }) => {
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
    <div>
      
      <Link to={`/donations/${id}`}>
        <div className="card rounded-xl" style={cardStyle}>
          <figure><img src={Picture} alt="Product" /></figure>
          <div className="card-body">
            <h2 className="card-title rounded-lg w-20 text-center py-2 ml-5 my-4" style={categoryStyle}>{Category}</h2>
            <p className=" font-bold pl-5 pb-4" style={descriptionStyle}>{Description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationsCard;

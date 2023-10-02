

const ChoiceCard = ({donation}) => {
    const {id, Picture, Category, Description, Price, Card_bg, Text_and_button_bg, more_details} = donation 
    const cardStyle = {
        backgroundColor: Category_bg, 
      };
    
      const categoryStyle = {
        color: Card_bg, 
        backgroundColor: Text_and_button_bg,
      };
    
      const descriptionStyle = {
        color: Text_and_button_bg, };
    
      return (
        <div>
          
       
            <div className="card" style={cardStyle}>
              <figure><img src={Picture} alt="Product" /></figure>
              <div className="card-body">
                <h2 className="card-title rounded-lg w-28 p-3" style={categoryStyle}>{Category}</h2>
                <p className="text-xl font-bold" style={descriptionStyle}>{Description}</p>
              </div>
            </div>
        
        </div>
      );
};

export default ChoiceCard;
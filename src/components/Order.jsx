const Order = ({ openHour, closeHour, isOpen }) => {
  return (
    <div className="order">
      {isOpen ? (
        <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;

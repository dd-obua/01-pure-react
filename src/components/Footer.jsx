import Order from './Order';

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour > openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <Order openHour={openHour} closeHour={closeHour} />
    </footer>
  );
};

export default Footer;

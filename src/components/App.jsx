import '../index.css';
import pizzaData from '../data';

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisaine. 6 creative dishes to choose from. All from our
            stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

const Pizza = ({ pizzaObj }) => {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photo} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  );
};

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

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;

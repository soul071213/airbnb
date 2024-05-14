import "./styles.css";
import roomDetails from "./Rooms.js";
import Header from "./components/Header";
import Card from "./components/Card";
export default function App() {
  return (
    <div className="App">
      <Header />
      <h2>Your result is here!</h2>
      {roomDetails.map((item) => (
        <Card
          key={item.key}
          title={item.name}
          location={item.location}
          guest={item.totalGuest}
          rating={item.rating}
          numberofrating={item.numberOfRating}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

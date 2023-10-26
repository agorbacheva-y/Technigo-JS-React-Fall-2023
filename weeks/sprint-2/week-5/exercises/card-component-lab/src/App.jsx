import "./App.css";
import Card from "./components/Card";

const data = [
  {
    title: "Lemon",
    description: "This is a really tasty fruit",
    emoji: "🍋",
    text_color: "#166F39",
    primary_color: "#8CFFBA",
    secondary_color: "#CFFFE2",
    button_text: "Order now",
    button_color: "#FCED84",
    button_text_color: "#000000"
  },
  {
    title: "Rocket",
    description: "Join us into the outer space",
    emoji: "🚀",
    text_color: "#0B0C11",
    primary_color: "#A6CFE2",
    secondary_color: "#C2DCE9",
    button_text: "Book seat",
    button_color: "#0B0C11",
    button_text_color: "#FFD600"
  }, 
  {
    title: "Doggy",
    description: "Hello do you want to be friends?",
    emoji: "🐶",
    text_color: "#502F7E",
    primary_color: "#EEB200",
    secondary_color: "#FFE086",
    button_text: "Adopt me",
    button_color: "#FFFFFF",
    button_text_color: "#502F7E"
  }
];


function App() {
  console.log("data", data);
  return (
    <>
      {data.map((aCard) => (
         <Card key={aCard.title} data={aCard}/>
      ))}
    </>
  );
}

export default App;

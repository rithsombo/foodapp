import { useState } from "react";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import Innercontainer from "./components/Innercontainer";
import Fooddetails from "./components/Fooddetails";
function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setfoodId] = useState("658615");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <Innercontainer>
          <Foodlist setfoodId={setfoodId} foodData={foodData} />
        </Innercontainer>
        <Innercontainer>
          <Fooddetails foodId={foodId} />
        </Innercontainer>
      </Container>
    </div>
  );
}

export default App;

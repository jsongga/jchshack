import './App.css';
import Landing from "./sections/Landing";
import Navbar from "./sections/Navbar";
import Information from "./sections/Information";
import Meetings from "./sections/Meetings";

function App() {
  return (
    <div className="App" style={{backgroundColor: "black", width: "100%"}}>
        <Navbar />
        <Landing />
        <Information />
        <Meetings />
    </div>
  );
}

export default App;

import "./App.css";
import { Clockbody } from "./Components/Clockbody";
import { Clockheading } from "./Components/Clockheading";
import { Clocktiming } from "./Components/Clocktiming";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <center>
      <Clockheading />
      <Clockbody />
      <Clocktiming />
    </center>
  );
}

export default App;

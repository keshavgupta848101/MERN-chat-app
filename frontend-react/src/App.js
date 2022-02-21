import "./App.css";
import Join from "./component/Join/Join.js";
import Chat from "./component/Chat/Chat";
import { BrowserRouter as Router, Route } from "react-router-dom";

const ENDPOINT = "http://localhost:4000";
// const socket = socketIO(ENDPOINT, {transports: ['websocket']})

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  );
}

export default App;

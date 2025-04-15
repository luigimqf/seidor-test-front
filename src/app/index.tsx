import Routes from "@/routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;

import { useReducer } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Landing from "./pages/Landing";
import reducer from "./Reducer";

import "./App.css";
import { Context } from "./Context";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ParallaxProvider>
        <div className="App">
          <Landing />
        </div>
      </ParallaxProvider>
    </Context.Provider>
  );
};

export default App;

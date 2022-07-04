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
          {/* <Landing /> */}
          <h1>
            Can you send Whatsapp text on +92 340 6246 267 if you don't have
            whatsapp email me at Bkarshehbaz@gmail.com I'm waiting ...... Just
            text me and i will explain things there
          </h1>
        </div>
      </ParallaxProvider>
    </Context.Provider>
  );
};

export default App;

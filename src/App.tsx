import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import MainRoute from "./routes";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <MainRoute />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

import React from 'react';

//styles
import {GlobalStyle} from "./GlobalStyle";

//component
import Header from "./components/Header/Header";
import Home from "./components/Home";

function App() {

    return (
    <div className="App">
        <GlobalStyle/>
        <Header />
        <Home />


    </div>
  );
}

export default App;

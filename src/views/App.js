import React from "react";
import { BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";

import {
   Header
} from './'

const App = () => {
   return (
      <Router>
         <Header></Header>
         <div>Setup</div>
      </Router>
   )
};

export default App;

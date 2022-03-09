import React from "react";
import { BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";

import {
   Header,
   MobileFooter
} from './'

const App = () => {
   return (
      <Router>
         <Header />
         <MobileFooter />
      </Router>
   )
};

export default App;

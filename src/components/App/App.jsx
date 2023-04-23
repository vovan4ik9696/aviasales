import React from "react";
import Header from "../Header";
import Filters from "../Filters";
import SortList from "../SortList";
import TicketsList from "../TicketsList";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <div className="container">
          <div className="main__inner">
            <Filters />
            <div className="main__content">
              <SortList />
              <TicketsList />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;

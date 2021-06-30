// Imported React libraries.
import React from "react";
// Imported stylesheet.
import "./App.css";
// Imported components.
import CarList from "./components/carList.js";
import CarEdit from "./components/carEdit.js";
// import Landing from "./components/landing.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

/**
 * Created the App function and returning components to be exported to Index.js.
 * Used "BrowserRouter", "Switch and "Route" to show components to manage the navigation of the application.
 * Added the React Bootstrap link.
 * @returns Application that returns all of the components.
 */

const App = () => {
  return (
    <div id="App">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      ></link>
      <Header />
      <div className="container">
        <CarEdit />
        <CarList />
      </div>
      <Footer />
    </div>
  );
};

// Exported App.js to index.js.
export default App;

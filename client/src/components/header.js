// Imported react libraries.
import React from "react";
// Imported Help component.
import UsageInstructions from "./usageInstructions";

/**
 * Created a header for the application that includes a logo and also added the UsageInstructions component.
 * @returns A header with a logo and usage instructions button and modal.
 */

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <div id="headersection1">
          <img src="./images/logo.png" alt="Logo" id="logo" />
          <h2 className="display-4">Car DataHub</h2>
        </div>
        <UsageInstructions />
      </header>
    </div>
  );
};

// Exported header.js to App.js.
export default Header;

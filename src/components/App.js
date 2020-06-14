import React from "react";
import AppTitle from "./AppTitle/AppTitle";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.material.orange.light.css";

const App = () => {
  return (
    <React.Fragment>
      <AppTitle
        themeSelector={(themeName) => {
		  import(`devextreme/dist/css/dx.${themeName}.css`);          		  
        }}
      />
      <div className="app"></div>
    </React.Fragment>
  );
};

export default App;

import { Fragment, useState } from "react";
import { HeaderHome } from "./components/HeaderHome/HeaderHome";
import { CoreConcepts } from "./components/CoreConcepts/CoreConcept"
import { Examples } from "./components/Examples/Examples"

function App() {

  return (
    <Fragment>
      <HeaderHome />
      <main>
          <CoreConcepts/>
          <Examples/>
      </main>
    </Fragment>
  );
}

export default App;

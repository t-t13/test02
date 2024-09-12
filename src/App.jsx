import { useCallback, useEffect, useRef, useState } from "react";
import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [showText, setShowText] = useState();

  useEffect(() => {
    const text = "this is infinnite loop.";
    setShowText(text);

    const storeBG = JSON.parse(localStorage.getItem("backgroundPlaces")) || [];
    const listBGs = storeBG.map((sId) => {
      return AVAILABLE_PLACES.find((place) => place.id === sId);
    });

    setPickedPlaces(listBGs);
  }, []);

  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storeBG = JSON.parse(localStorage.getItem("backgroundPlaces")) || [];
    if (storeBG.indexOf(id) === -1) {
      localStorage.setItem(
        "backgroundPlaces",
        JSON.stringify([...storeBG, id])
      );
    }
  }

  const handleRemovePlace = useCallback(
    function handleRemovePlace() {
    console.log("before re-ex");
    
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );

    console.log("after re-ex");

    modal.current.close();

    console.log("after re-ex-2");

    const storeBG = JSON.parse(localStorage.getItem("backgroundPlaces")) || [];
    localStorage.setItem(
      "backgroundPlaces",
      JSON.stringify(storeBG.filter((id) => id !== selectedPlace.current))
    );
  }, []);

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={AVAILABLE_PLACES}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;

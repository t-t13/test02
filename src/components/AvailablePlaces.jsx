import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";
import { getAvailablePlaces } from "../api.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  // useEffect(() => {
  //   fetch("http://localhost:3000/places")
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((resData) => {
  //       console.log(resData.places);
  //       setAvailablePlaces(resData.places);
  //     });
  // }, []);

  useEffect(() => {
    const getPlaces = async () => {
      setIsFetching(true);

      try {
        const resRequest = await fetch("http://localhost:3000/places");
        const data = await resRequest.json();
        console.log(data.places);

        if (!resRequest.ok) {
          throw new Error("failed to fetch a get places data.");
        }

        // const data = await getAvailablePlaces();

        setAvailablePlaces(data.places);
      } catch (err) {
        setError({
          message: err.message || "Could not fetch, please try again later",
        });
      }

      setIsFetching(false);
    };
    getPlaces();
  }, []);

  if (error) {
    return <ErrorPage title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      places={availablePlaces}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

// const response = await fetch("http://localhost:3000/places");
// response.json().then(data => {
//   console.log(data.places);
//   setAvailablePlaces(data.places)
// });

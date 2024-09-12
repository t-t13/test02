
export async function getAvailablePlaces(){
    const response = await fetch("http://localhost:3000/places");
    const data = await response.json();
    // console.log(data.places);

    if (!response.ok) {
      throw new Error("failed to fetch a get places data.");
    }

    return data;

}

export async function updateUserPlaces(places){
    const response = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        body: JSON.stringify({places : places}),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error("failed to update a places data.");
      }
  
      return data.message;

}
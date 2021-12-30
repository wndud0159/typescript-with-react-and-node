import axios from "axios";

const form = document.querySelector("form");
const addressInput = <HTMLInputElement>document.getElementById("address");
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

declare var google: any;

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // google maps api request
  axios
    .get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not feetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: coordinates,
        zoom: 8,
      });

      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
}

form?.addEventListener("submit", searchAddressHandler);

import "leaflet/dist/leaflet.css";
import L, { Layer } from "leaflet";

export function createLeafletMap(
  div: HTMLDivElement,
  position: L.LatLngExpression,
  zoom = 10,
) {
  const options = {
    scrollWheelZoom: false
  }
  const map = L.map(div, options).setView(position, zoom, {

  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  return map;
}

export function createMarker(
  map: L.Map,
  position: L.LatLngExpression,
  content: Parameters<Layer["bindPopup"]>[0]
) {
  L.marker(position).addTo(map).bindPopup(content).openPopup();
}

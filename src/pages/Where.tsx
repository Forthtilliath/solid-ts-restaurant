import { onMount } from "solid-js";
import {
  createLeafletMap,
  createMarker,
} from "../utils/hooks/createLeafletMap";
import { LatLngTuple } from "leaflet";

type Props = {
  ref: HTMLDivElement;
};

export function Where(props: Props) {
  let mapRef: HTMLDivElement;
  const mapPosition: LatLngTuple = [47.467527, -0.556638];
  const oriflammePosition: LatLngTuple = [47.466854, -0.556789];

  onMount(() => {
    const map = createLeafletMap(mapRef, mapPosition, 30);
    createMarker(
      map,
      oriflammePosition,
      /* html */ `
      <h3 class="font-bold text-2xl">L'Oriflamme</h3>
      <p>Volailles et saucisses dans une rôtisserie offrant des sandwiches chauds, des accompagnements et des désserts.</p>
      <p>Ouvert <u>tous les jours</u> de <b>10h30</b> à <b>21h</b>.</p>
      <p><a href="https://www.google.com/maps/place/L'Oriflamme/@47.4669875,-0.5575424,17z/data=!4m6!3m5!1s0x480878bf5b09aee3:0xc4bacb9b5d817998!8m2!3d47.4668679!4d-0.556845!16s%2Fg%2F1td5qng0" target="_blank" rel="noopener noreferrer">Ouvrir dans google map</a></p>
      <img src="https://lh5.googleusercontent.com/p/AF1QipMIGWkhfuUECpo9wIbx16NwCCnv-iddcQkdKvrF=w408-h272-k-no" class="rounded" />
      `
    );
  });

  return (
    <section
      class="min-h-[calc(100vh_-_4rem)] bg-gradient-radial from-ori-red to-ori-black to-60% pt-16"
      id="where"
      ref={props.ref}
    >
      <div class="w-full h-[calc(100vh_-_4rem)] flex justify-center items-center flex-col">
        <h2 class="h2 max-w-4xl m-2">Où nous trouver ?</h2>
        <div
          id="map"
          ref={mapRef!}
          class="z-0 mt-5 rounded max-w-4xl w-full h-3/4"
        ></div>
      </div>
    </section>
  );
}

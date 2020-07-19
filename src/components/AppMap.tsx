import './AppMap.scss';
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import * as ELG from 'esri-leaflet-geocoder';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export class SimpleExample extends Component<{}, State> {
  mapRef: React.RefObject<any>;

  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }
  state = {
    lat: 32.08811000000003,
    lng: 34.782260000000065,
    zoom: 10,
  }

  componentDidMount() {
    const map = this.mapRef.current.leafletElement;
    const searchControl = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);

    searchControl.on('results', function(data){
        results.clearLayers();
        for (let i = data.results.length - 1; i >= 0; i--) {
            results.addLayer(L.marker(data.results[i].latlng));
        }
    });
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map ref={this.mapRef} center={position} zoom={this.state.zoom} style={{ width: '100%', height: '100%'}} >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    )
  }
}

function AppMap() {
  return (
    <div className="AppMap">
      <SimpleExample />
    </div>
  );
}

export default AppMap;

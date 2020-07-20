import './AppMap.scss';
import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import * as ELG from 'esri-leaflet-geocoder';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export class SimpleExample extends Component<any, State> {
  mapRef: React.RefObject<any>;
  setLocation: Function;
  location: Function;

  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.setLocation = props.setLocation;
    this.location = props.location;
  }
  state = {
    lat: 31.48811000000003,
    lng: 34.782260000000065,
    zoom: 6,
  }

  componentDidMount() {
    const map = this.mapRef.current.leafletElement;
    const searchControl = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);
    var htmlObject = searchControl.getContainer();
    var locationDiv = document.getElementById('location-div');
    if (locationDiv) {
      htmlObject.className += 'geocoder-control-expanded';
      locationDiv.appendChild(htmlObject);
    }

    searchControl.on('results', (data) => {
        this.setLocation(data);
        results.clearLayers();
        for (let i = data.results.length - 1; i >= 0; i--) {
            results.addLayer(L.marker(data.results[i].latlng));
        }

        setTimeout(() => {
          var x = document.getElementsByClassName('geocoder-control-input');
          if (x.length && this.props.location) {
            (x[0]! as any).value = this.props.location.text;
          }
        }, 0)
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

function AppMap(props) {
  return (
    <div className="AppMap">
      <SimpleExample location={props.location} setLocation={props.setLocation}  />
    </div>
  );
}

export default AppMap;

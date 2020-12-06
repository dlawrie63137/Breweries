import React, { Component } from 'react';
import './DisplayMap.css';

import 'ol/ol.css';
import {OSM} from 'ol/source';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import layerVector from 'ol/layer/Vector';
import Overlay from 'ol/Overlay';
import sourceVector from 'ol/source/Vector';
import {fromLonLat} from 'ol/proj';


class DisplayMap extends Component {
    constructor(props) {
        super(props)

        this.map = {};
    }

    componentDidMount = () => {
                                
        // Map variables and function calls
        this.avgLong=this.computeAverageLongitude(this.props.queryResponse)
        this.avgLat=this.computeAverageLatitude(this.props.queryResponse)
        this.currZoom=this.setZoom(this.props.search_mode)
        
        // if no Latitude or Longitude available set to center of USA
        if (isNaN(this.avgLong) || isNaN(this.avgLat)) {
            this.avgLong = -98.35;
            this.avgLat = 39.50;
            this.currZoom = 3;
        }
        
        // Create Map
        this.map = new Map({
            view: new View({
                center: fromLonLat([this.avgLong, this.avgLat
                ]),
                zoom: this.currZoom,
                maxZoom:16
            }),
            layers: [
                new Tile({
                    source: new OSM()
                })
            ],
            target: 'map'
        });
    

    // Place location markers on map
    for(let i=0; i < (this.props.queryResponse.length); i++) {
            
        var layer = new layerVector({
        source: new sourceVector({
            features: [
                new Feature({
                    geometry: new Point(fromLonLat([this.props.queryResponse[i].longitude, this.props.queryResponse[i].latitude]))
                })
            ]
        })
    });
    
    this.map.addLayer(layer);
} 

    //Initialize Popup
    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');
    
    var overlay = new Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
            duration: 250
        }
    });
    
    this.map.addOverlay(overlay); 


    closer.onclick = function() {
        overlay.setPosition(undefined);
        closer.blur();
        return false;
    };

    //Open Popup when marker is clicked
    this.map.on('singleclick', function (event) {
                        
        if (this.hasFeatureAtPixel(event.pixel) === true) {
            var coordinate = event.coordinate;
            
            content.innerHTML = 'I am a popup.';
            overlay.setPosition(coordinate);
        } else {
            console.log('Or did I get sent here?')
            overlay.setPosition(undefined);
            closer.blur();
        }
    })
}   

    // Different map zoom based on search_mode (wider for name search)
    setZoom = (myZoom) => {
        if(myZoom==="name"){
            this.setZoom=3;
        }
        if(myZoom==="state"){
            this.setZoom=6;
        }
        if(myZoom==="city"){
            this.setZoom=7;
        } 
        if(myZoom==="zip") {
            this.setZoom=9;
        }
        return this.setZoom
    }

    computeAverageLatitude = (lat) => { // Compute average for map placement
        this.totLat=0;
        this.avgLat=0;
        this.count=0;

        for(let i=0; i<(lat.length); i++) {
           
           if(lat && typeof(lat[i].latitude) === 'string'){
                             
               //convert string to float and get total latitude
               this.totLat += parseFloat(this.props.queryResponse[i].latitude)
               this.count += 1;
            } 
        }
            // Calculate average latitude to position map
            this.avgLat=this.totLat/(this.count)
            return this.avgLat
        }
    
    computeAverageLongitude = (lon) => { // Compute average for map placement
        this.totLong=0.0;
        this.avgLong=0.0;
        this.count=0;

        for(let i=0; i<(lon.length); i++) {
            
            if(lon && typeof(lon[i].longitude) === 'string'){
                             
               //convert string to float and get total longitude
               this.totLong += parseFloat(lon[i].longitude)
               this.count += 1;
            }
        }
            // Calculate avg longitude to position map
            this.avgLong=this.totLong/(this.count)
            return this.avgLong
        }
    
   
    render () {
                          
            return (
                <div className='row'>
                    <div className='col-12'>
                        <div id='map' className='map'></div>
                        <div id="popup" className="ol-popup">
                            <a href="# " id="popup-closer" className="ol-popup-closer" alt="popup-label"> </a>
                            <div id="popup-content"></div>
                        </div>
                    </div>
                </div>
            )
        
    };
};

export default DisplayMap;
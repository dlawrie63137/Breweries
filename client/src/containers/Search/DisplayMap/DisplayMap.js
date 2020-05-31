import React, { Component } from 'react';
import './DisplayMap.css';

import 'ol/ol.css';
import {OSM} from 'ol/source';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import {fromLonLat} from 'ol/proj';



class DisplayMap extends Component {
    constructor(props) {
        super(props)

        this.map = {};
    }

    componentDidMount() {
        //console.log(this.props.queryResponse.latitude)
                
        // Map variables and function calls
        this.avgLong=this.computeAverageLongitude(this.props.queryResponse)
        this.avgLat=this.computeAverageLatitude(this.props.queryResponse)
        this.currZoom=this.setZoom(this.props.search_mode)
        console.log(typeof(this.avgLong), typeof(this.avgLat), this.currZoom)

        // if no Latitude or Longitude available set to center of USA
        if (isNaN(this.avgLong) || isNaN(this.avgLat)) {
            console.log('Did I get to here?')
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
                maxZoom:15
            }),
            layers: [
                new Tile({
                    source: new OSM()
                })
            ],
            target: 'map'
        });
    }

    // Different map zoom based on search_mode (wider for name search)
    setZoom(myZoom){
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

    computeAverageLatitude(lat) { // Compute average for map placement
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
    
    computeAverageLongitude(lon) { // Compute average for map placement
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
                    </div>
                </div>
            )
        
    };
};

export default DisplayMap;
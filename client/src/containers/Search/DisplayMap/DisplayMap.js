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
        this.map = new Map({
            view: new View({
                center: fromLonLat([-95.7129, 37.0902]),
                zoom: 3
            }),
            layers: [
                new Tile({
                    source: new OSM()
                })
            ],
            target: 'map'
        });
    }
   
    render () {
            
            console.log(this.props.queryResponse)           
              
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
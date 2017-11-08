import React from 'react';
import { YMaps, Map, GeoObject } from 'react-yandex-maps';

const mapState = { center: [40.6, 7.64], zoom: 1 };

const WorldMap = ({info}) => {
  const { name, latlng, region }  = info;
  console.log('n',name)
  return (
    <YMaps>
        <Map state={mapState}>
          {/* Creating a geo object with the "Point" geometry type. */}
          <GeoObject
            // The geometry description.
            geometry={{
              type: 'Point',
              coordinates: [latlng[0], latlng[1]],
            }}
            // Properties.
            properties={{
              // The placemark content.
              iconContent: name,
              hintContent: region,
            }}
            // Options.
            options={{
              // The placemark's icon will stretch to fit its contents.
              preset: 'islands#blackStretchyIcon',
              // The placemark can be moved.
              draggable: false,
            }}
          />
        </Map>
      </YMaps>
  );
}


export default WorldMap;

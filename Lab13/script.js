mapboxgl.accessToken = 'pk.eyJ1IjoieW9uZ3hpYW8iLCJhIjoiY20xdGo0NTY2MDJ3cTJxcHJ3OW82YjZteiJ9.65aI1m2ArWDTjob1ilSsAA';

const map = new mapboxgl.Map({
  container: 'YONGXIAO', // container id
  style: 'mapbox://styles/yongxiao/cm2xi4y60000701pf5kaw0rm3', // replace this with your style URL
  center:  [-122.42285, 37.76869],
  zoom: 12,
  pitch: 11,
  bearing: 0.00,
  minZoom: 13

});

map.on('load', function () {
	// console.log("whatever");

	map.addSource('restaurantSource',{
        'type':'vector',
        'url': 'mapbox://yongxiao.1q2mm4jf'
      });

	map.addLayer({
        'id':'restaurantLayer',
        'type':'circle',
        'source':'restaurantSource',
        'source-layer':'Historical_Restaurant_Inspect-3920ds',
 paint: {
            'circle-radius': 8, 
            'circle-color': [
                'case',
                ['==', ['get', 'inspection_score'], null], '#808080', 
                ['<', ['to-number', ['get', 'inspection_score']], 80], '#440154',
                ['<', ['to-number', ['get', 'inspection_score']], 85], '#3b528b',
                ['<', ['to-number', ['get', 'inspection_score']], 90], '#21908d',
                ['<', ['to-number', ['get', 'inspection_score']], 95], '#5dc963',
                '#fde725' // 95-100
            ]
        }
    });
});

map.on('mouseenter', 'restaurantLayer', (e) => {
    var name = e.features[0]['properties']['business_name'];

    console.log(name);

    var textField = document.getElementById('restText');

    textField.innerHTML = name;
});

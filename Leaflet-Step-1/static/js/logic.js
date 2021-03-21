// store URL to the data json 

let url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson'

// get the json data
d3.json(url).then(data => {
    // Once we get a response, send the data.features object to the createFeatures function
    createFeatures(data.features);
  });
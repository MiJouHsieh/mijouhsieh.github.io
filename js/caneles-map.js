'use strict'
mapboxgl.accessToken = "pk.eyJ1IjoibWlqb3Voc2llaCIsImEiOiJjbGpnc3JqeWQwMWE0M2twdzB4eG0xc3I5In0.LyYhYIdMgbbpkmC2iQ-RNw"; 

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mijouhsieh/cljiuwpei001401r9dizr2al2",
  center: [121.539246, 25.051025],
  zoom: 10.7,
});

map.on("click", (event) => {
  const features = map.queryRenderedFeatures(event.point, {
    layers: ["caneles-taipei"],
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];

  const popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      `<h3><span class="shop-name-circle"></span>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    )
    .setMaxWidth("300px")
    .addTo(map);
});
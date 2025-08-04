const layers = {
  roads: 'images/roads.jpg',
  landuse: 'images/landuse.jpg',
  population: 'images/population.jpg',
};

const mapContainer = document.getElementById('map');

Object.keys(layers).forEach(layerId => {
  const checkbox = document.getElementById(layerId);

  // Create image element
  const img = document.createElement('img');
  img.src = layers[layerId];
  img.id = layerId + '-img';
  img.style.display = 'none';
  mapContainer.appendChild(img);

  // Handle checkbox toggle
  checkbox.addEventListener('change', () => {
    img.style.display = checkbox.checked ? 'block' : 'none';
  });
});

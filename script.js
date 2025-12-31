// 1. Create a High-Detail imagery layer (OpenStreetMap goes to street level)
const highDetailImagery = new Cesium.OpenStreetMapImageryProvider({
    url : 'https://a.tile.openstreetmap.org/'
});

// 2. Initialize the viewer with 3D Terrain enabled
const viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: highDetailImagery, // This allows deep zooming
    terrainProvider: Cesium.createWorldTerrain(), // This makes mountains 3D
    baseLayerPicker: false,
    geocoder: true, // Turned this on so you can search for "Haines City"
    infoBox: true
});

// 3. Keep your NASA GIBS layer but make it a bit transparent 
// so you can see the high-detail map underneath!
const nasaLayer = viewer.imageryLayers.addImageryProvider(nasaGibsProvider);
nasaLayer.alpha = 0.5; // 50% see-through

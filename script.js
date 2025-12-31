// 1. Setup the basic viewer
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain(), // Adds 3D Mountains
    imageryProvider: new Cesium.OpenStreetMapImageryProvider({
        url : 'https://a.tile.openstreetmap.org/'
    })
});

// 2. THE SECRET FOR BUILDINGS: Add OpenStreetMap 3D Buildings
// This adds the actual 3D structures you are looking for!
const buildingLayer = viewer.scene.primitives.add(Cesium.createOsmBuildings());

// 3. Zoom to your house or town
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-81.6231, 28.1136, 1000), // Haines City
    orientation: {
        pitch: Cesium.Math.toRadians(-30) // Look at an angle to see the 3D buildings
    }
});

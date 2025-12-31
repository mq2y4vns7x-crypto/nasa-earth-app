// 1. Setup the High-Detail Map (Fixes pixelation)
const baseLayer = new Cesium.OpenStreetMapImageryProvider({
    url: 'https://a.tile.openstreetmap.org/'
});

// 2. Initialize the Engine with Mobile Controls
const viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: baseLayer, // This fills the "Gaps" with a map
    terrainProvider: Cesium.createWorldTerrain(), // Enables 3D mountains
    baseLayerPicker: false,
    geocoder: true,
    selectionIndicator: false,
    infoBox: true
});

// 3. Add NASA GIBS as an OVERLAY (The clouds/satellite view)
const nasaLayer = viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
    url: "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?Service=WMTS&Request=GetTile&Version=1.0.0&Layer=MODIS_Terra_CorrectedReflectance_TrueColor&TileMatrixSet=250m&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&Style=default&Format=image/jpeg&Time=2025-12-30",
    layer: "MODIS_Terra_CorrectedReflectance_TrueColor",
    style: "default",
    format: "image/jpeg",
    tileMatrixSetID: "250m",
    maximumLevel: 8
}));

// Set NASA to 70% opacity so you can see the high-detail map through the gaps
nasaLayer.alpha = 0.7; 

// 4. FIX CAMERA CONTROLS FOR PHONE
// This makes the camera rotate around a point rather than spinning wildly
viewer.scene.screenSpaceCameraController.enableLook = false; // Prevents "drunken" camera
viewer.scene.screenSpaceCameraController.inertiaSpin = 0.1; // Smooths out stopping
viewer.scene.screenSpaceCameraController.minimumZoomDistance = 100; // Let's you get close to the ground

// 5. FLY TO FLORIDA AUTOMATICALLY
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-81.6, 28.2, 10000), // Haines City at 10km height
    orientation: {
        pitch: Cesium.Math.toRadians(-35) // Tilts the camera for a 3D view
    }
});

// 1. YOUR API KEY - Paste your token inside the quotes
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NzM1YmQ5Yi0wMTk4LTRlNDctYTBmNi00ZjU0MDMyZTQzZjQiLCJpZCI6MzczOTE1LCJpYXQiOjE3NjcyNzg2MTJ9.pEgSguWJY7MYUMJdpGToJto8Dxymegeo4iDbqRANtPo';

async function launchEarth() {
  try {
    // 2. Initialize the Viewer
    const viewer = new Cesium.Viewer("cesiumContainer", {
      // We set globe to false because Google Tiles ARE the globe
      globe: false, 
      timeline: false,
      animation: false,
      baseLayerPicker: false,
      geocoder: Cesium.IonGeocodeProviderType.GOOGLE,
    });

    // 3. Load the Best Tiles (Terrain + Buildings Combined)
    const googleTileset = await Cesium.createGooglePhotorealistic3DTileset();
    viewer.scene.primitives.add(googleTileset);

    // 4. Fly to the position from your Sandcastle
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(-122.4194, 37.7749, 1000),
      orientation: {
        pitch: Cesium.Math.toRadians(-25.0),
      },
      duration: 3
    });

    console.log("Reality Engine: Online");

  } catch (error) {
    console.error("Error: ", error);
    // If you see this alert, you need to go to Ion and 
    // click "Add to my assets" for Google 3D Tiles.
    alert("Check your Ion account to ensure Google 3D Tiles are enabled.");
  }
}

launchEarth();


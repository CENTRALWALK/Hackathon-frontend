function genMoon(lat, lon, radius = 17.3) {
  var csvList;

  csvList = [-1, -71, 17.3];

  function calcPosFromLatLonRad(lat, lon, radius) {
    var phi = (90 - lat) * (Math.PI / 180);
    var theta = (lon + 180) * (Math.PI / 180);

    var x = -(radius * Math.sin(phi) * Math.cos(theta));
    var z = radius * Math.sin(phi) * Math.sin(theta);
    var y = radius * Math.cos(phi);

    return [x, y, z];
  }

  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  new THREE.TextureLoader().load("./img/background.jpeg", function (texture) {
    scene.background = texture;
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.update();

  const geometry = new THREE.SphereGeometry(17.3, 50, 50);
  const textureImage = "./img/color.jpg";
  const elevationMap = "./img/elevation.jpg";
  const material = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load(textureImage),
    displacementMap: new THREE.TextureLoader().load(elevationMap),
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.AmbientLight(color, intensity);
  scene.add(light);

  const geometryCylinder = new THREE.CylinderGeometry(0.05, 0.05, 7, 64);
  const materialCylinder = new THREE.MeshBasicMaterial({ color: 0x61357f });
  const cylinder = new THREE.Mesh(geometryCylinder, materialCylinder);

  var positions = calcPosFromLatLonRad(lat, lon, radius);

  cylinder.position.set(positions[0], positions[1], positions[2]);

  camera.position.z = 50;

  scene.add(cylinder);

  let bg = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(),
    new THREE.Vector3(),
  ]);

  let lM = new THREE.LineBasicMaterial({ color: "yellow" });

  let tV = new THREE.Vector3();
  let distance = sphere.position.distanceTo(cylinder.position);
  tV.subVectors(cylinder.position, sphere.position)
    .normalize()
    .multiplyScalar(distance)
    .add(sphere.position);

  const geometrySP = new THREE.SphereGeometry(1, 20, 20);
  const materialSP = new THREE.MeshBasicMaterial({ color: 0x61357f });
  const surfaceMeshSphere = new THREE.Mesh(geometrySP, materialSP);
  surfaceMeshSphere.position.set(tV.x, tV.y, tV.z);

  // scene.add(tracker);
  scene.add(surfaceMeshSphere);

  var distance_d = 18;
  var geometry_points = new THREE.BufferGeometry();

  var positions = [];
  var colors = [];
  var transparency = [];

  const color_point = new THREE.Color();

  for (var i = 0; i < 2000; i++) {
    var vertex = new THREE.Vector3();

    var theta = THREE.Math.randFloatSpread(360);
    var phi = THREE.Math.randFloatSpread(360);

    const x = distance_d * Math.sin(theta) * Math.cos(phi);
    const y = distance_d * Math.sin(theta) * Math.sin(phi);
    const z = distance_d * Math.cos(theta);
    const vx = x / 1000 + 0.5;
    const vy = y / 1000 + 0.5;
    const vz = z / 1000 + 0.5;
    vertex.x = x;
    vertex.y = y;
    vertex.z = z;

    const distance_to_center = vertex.distanceTo(surfaceMeshSphere.position);

    color_point.setRGB(vx, vy, vz);
    positions.push(x, y, z);
    colors.push(color_point.r, color_point.g, color_point.b);
    console.log(1 - distance_to_center * 0.001);
    transparency.push(1 - distance_to_center * 0.1);
  }

  geometry_points.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  geometry_points.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(colors, 3)
  );

  geometry_points.setAttribute(
    "alpha",
    new THREE.Float32BufferAttribute(transparency, 1)
  );

  var material_point = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(0xff1111) },
    },
    vertexShader: document.getElementById("vertexshader").textContent,
    fragmentShader: document.getElementById("fragmentshader").textContent,
    transparent: true,
  });

  const points = new THREE.Points(geometry_points, material_point);

  scene.add(points);
  function animate() {
    controls.update();

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
  document.body.appendChild(renderer.domElement);
}

genMoon(-1, -71, 17.3);

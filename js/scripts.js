var camera, scene, renderer;
var geometry, material, key;

init();
window.addEventListener( 'resize', onWindowResize, false );
animate();

function init() {
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight * 2, 0.01, 2000 );
	camera.position.z = 500;

	scene = new THREE.Scene();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );
	
	var loader = new THREE.OBJLoader();	
	loader.load( './key.obj', function (object) {
		key = object;
		key.rotation.z = 45;
		scene.add(object);
	});

	renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize(window.innerWidth, window.innerHeight * 0.5);
	renderer.setClearColor(0x000000, 0);
	document.getElementById("canvas").appendChild( renderer.domElement );

}

function animate() {
	requestAnimationFrame(animate);

	key.rotation.y += 0.01;
	
	renderer.render(scene, camera);
}

function onWindowResize(){	
    camera.aspect = window.innerWidth / (window.innerHeight * 0.5);
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight * 0.5);
}
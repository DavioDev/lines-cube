        var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2F4F4F);
   var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({color: 0xDCDCDC, wireframe: true});
    var cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5;
    var animate = function(){
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);

    }

    animate();

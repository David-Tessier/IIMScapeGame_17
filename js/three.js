import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import * as dat from 'https://cdn.jsdelivr.net/npm/lil-gui@0.17/+esm';



/**
 * Base
 */

// Debug
//const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

scene.background = new THREE.Color( 0x212121 );


const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );


// loader 

let moto
let ship 

const loader = new GLTFLoader();

loader.load( 'assets/moto_casser.gltf', function ( gltf ) {

    moto = gltf.scene

	scene.add( moto );

}, undefined, function ( error ) {

	console.error( error );

} );




/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth / 2,
    height: window.innerHeight / 2
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth / 2
    sizes.height = window.innerHeight / 2

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 2000)
camera.position.x = 0
camera.position.y = 4
camera.position.z = -3


scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

let first_is_solved = false
let second_is_solved = false

// functions

const tick = () =>
{

    if (Math.round(camera.position.x) == -2 && Math.round(camera.position.y) == -2){

        if( first_is_solved == false){
            console.log("work as intended")
            first_is_solved = true
            camera.position.x = 0
            camera.position.y = 4
            camera.position.z = -30
            scene.remove(moto)

            loader.load( 'assets/vaisseau_casse.gltf', function ( gltf ) {
                ship = gltf.scene
                scene.add( ship );
            }, undefined, function ( error ) {
                console.error( error );
            } );

        }
    }

    if(first_is_solved == true){
        console.log(camera.position)
        if(Math.round(camera.position.x) == -20 && second_is_solved == false){
            console.log("woah")
            scene.remove(ship)
            second_is_solved = true
            document.querySelector('.audio3DWin').play()
            document.querySelector('.enigma3').style.display = "flex";


        }

    }

    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
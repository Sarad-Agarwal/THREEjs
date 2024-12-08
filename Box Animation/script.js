// console.log(THREE);
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)
const size = {
    width: 700,
    height: 500
}
const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
camera.position.z = 4;
camera.position.x = 2;
// camera.position.y=2;
scene.add(camera)

const target = document.querySelector(".wbgl")
const renderer = new THREE.WebGLRenderer({ canvas: target })
renderer.setSize(size.width, size.height)


// const tick = () => {
//     mesh.rotation.x += 
//     // mesh.rotation.z += 0.02
//     // mesh.rotation.y += 0.001
    // renderer.render(scene, camera)
//     window.requestAnimationFrame(tick)
//     // console.log("hello")
// }
// tick()

let time = new THREE.Clock()
const tick = () => {
    const elapsedTime = time.getElapsedTime()
    mesh.position.x = Math.sin(elapsedTime)
    mesh.position.y = Math.cos(elapsedTime)
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()


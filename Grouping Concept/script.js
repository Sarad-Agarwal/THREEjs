const scene = new THREE.Scene();//scene is created here
//here we will create 3 boxes and together will apply the property of "Grouping"
const group = new THREE.Group();
scene.add(group)
group.position.y=1.5
const target = document.querySelector(".wbgl")//canvas is taken from .html
const box1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "red" })
)
box1.position.x=2
group.add(box1);

const box2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "yellow" })
)
box2.position.x=4
group.add(box2);

const box3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "green" })
)
group.add(box3);

const size = {
    width: 700,
    height: 500
}

const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
camera.position.z = 4;
camera.position.x = 2;
scene.add(camera);//camera also added here now 
//only renderer is left to be added till now
const renderer = new THREE.WebGLRenderer({ canvas: target });
renderer.setSize(size.width, size.height);
renderer.render(scene, camera)


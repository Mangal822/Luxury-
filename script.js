// 3D BACKGROUND
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bg") });
renderer.setSize(innerWidth, innerHeight);

const geo = new THREE.BufferGeometry();
const count = 2000;
const pos = new Float32Array(count * 3);
for(let i=0;i<count*3;i++) pos[i]=(Math.random()-0.5)*20;
geo.setAttribute("position", new THREE.BufferAttribute(pos,3));

const mat = new THREE.PointsMaterial({ color:0xffffff, size:0.02, opacity:0.6, transparent:true });
const points = new THREE.Points(geo, mat);
scene.add(points);

function animate(){
  requestAnimationFrame(animate);
  points.rotation.y += 0.0005;
  renderer.render(scene,camera);
}
animate();

// CHATBOT (LOGIC-BASED)
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");

function bot(msg){
  chatBody.innerHTML += `<div><b>Concierge:</b> ${msg}</div>`;
}

bot("Welcome. What are you looking for? Cars, Property, or Yachts?");

chatInput.addEventListener("keypress", e=>{
  if(e.key==="Enter"){
    chatBody.innerHTML += `<div><b>You:</b> ${chatInput.value}</div>`;
    bot("Thank you. A private advisor will contact you shortly.");
    chatInput.value="";
  }
});

function openInquiry(type){
  location.href="#inquiry";
}

function switchView(viewId){

document.querySelectorAll(".view-section").forEach(view=>{
view.classList.remove("active-view");
});

const target=document.getElementById(viewId);

if(target){
target.classList.add("active-view");
window.scrollTo({
top:0,
behavior:"smooth"
});
}

document.querySelectorAll("#main-menu a").forEach(nav=>{
nav.classList.remove("active-nav");
});

if(
viewId==="tour-view"||
viewId==="tour-ai"||
viewId==="tour-assistant"||
viewId==="tour-batch"||
viewId==="tour-building"||
viewId==="tour-report"
){
document.getElementById("nav-tour-view").classList.add("active-nav");
}else{
const nav=document.getElementById("nav-"+viewId);
if(nav) nav.classList.add("active-nav");
}

const menu=document.getElementById("main-menu");
if(menu) menu.classList.remove("show");
}

function toggleMenu(){
document.getElementById("main-menu").classList.toggle("show");
}
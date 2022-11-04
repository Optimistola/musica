

function showDashboard(){
let hamburger= document.querySelector(".hamburger");
hamburger.style.display="block";
}
function HideDashboard(){
let hamburger= document.querySelector(".hamburger");
hamburger.style.display="none";
}
function ShowInput(){
 let inputTag= document.querySelector(".input");
 inputTag.classList.toggle("show");
 }
 
 
function myFunction(){
 
  
  /* play=(x)=>{
     audio.src=song[0].audio
     if(audio.play()=true){
     audio.play();
     }
     else{
       audio.pause();
     }
   }*/
for (var i=0; i<song.length; i++){
var containerImg=document.createElement("div");
var Img=document.createElement("img");
Img.src=song[i].img;
var containerIcon=document.createElement("div");
var icon= document.createElement("p")
var containerName=document.createElement("div");
containerName.className="cont-name"
var name=document.createElement("p");
name.innerHTML=song[i].name
var containerType=document.createElement("div");
var type=document.createElement("p");
var audio= document.createElement("audio");
type.innerHTML=song[i].duration;
audio.src=song[i].audio;
audio.setAttribute("class", "audio")
 containerImg.appendChild(Img);
 containerIcon.appendChild(icon);
 containerName.appendChild(name);
 containerType.appendChild(type);
var parent= document.getElementById("parent");
parent.setAttribute("class", "parent")
var secondParent=document.createElement("div");
icon.innerHTML="♥️"
secondParent.setAttribute("class", "secondParent")
secondParent.appendChild(containerImg);
secondParent.appendChild(containerIcon);
secondParent.appendChild(containerName);
secondParent.appendChild(containerType);
secondParent.appendChild(audio);
parent.appendChild(secondParent)

}

/*function getCurrentlyPlayingAudio() {

  for(const audio of document.querySelectorAll('.audio')) {

    if(!audio.paused) {
      return audio;
      console.log(audio.src);
    } 
      // return undefined if no such audio element found
}
  }*/
 
  
let Audio=document.querySelectorAll(".secondParent");
Audio.forEach(item=>{
  item.onclick=()=>{
    if(audio){
    audio.pause();
    audio.currentTime=0;
    }
    audio = item.querySelector(".audio");
    audio.play(); 

  }  

g
})
}
/*
var audio = new Audio();
     function myAudioFunction(letter) {
        audio.pause()
        audio = new Audio('C:\\Users\\SONU\\Desktop\\animal\\'+letter+'.mp3');
         audio.play();
     }
     */
     let Url=new XMLHttpRequest();
     Url.open("GET", "https://api.quran.gading.dev/");
     Url.send();
     Url.onload=()=>{
       alert();
       console.log(Url.response);
     }
     /*
    async function GetData(myUrl){
      let response=await fetch(myUrl);
      if(!response.ok){
        console.log("not okay");
      }
      let data=await response.json();
      if(data){
        console.log(data)
      }
    }
    GetData(Url);
    */
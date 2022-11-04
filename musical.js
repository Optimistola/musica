ShowInput=(e)=>{
  document.querySelector("input[type=search]").classList.toggle("showInput")
}
showDashboard=()=>{
  document.querySelector(".hamburger").style.display="block";
}
HideDashboard=()=>{
document.querySelector(".hamburger").style.display="none";
}
secondPage=()=>{
  document.querySelector(".first-page").style.display="none";
  document.querySelector(".second-page").style.display="block";
}
firstPage=()=>{
  document.querySelector(".first-page").style.display="block"
  document.querySelector(".second-page").style.display="none";
 
}
const images=[
  {
    id:1,
    src:"images/image1.jpg",
    note:"dont say good bye",
    audio:"musics/audio1.mp3",
  },
      {
    id:2,
    src:"images/image2.jpg",
    note:"I'm there with you",
    audio:"musics/audio2.mp3"
  },
    {
    id:3,
    src:"images/image3.jpg",
    note:"under the mistltole",
    audio:"musics/audio3.mp3"
  },
    {
    id:4,
    src:"images/image4.jpg",
    note:"love me",
    audio:"musics/audio4.mp3"
  },
    {
    id:5,
    src:"images/image5.jpg",
    note:"one faithful day",
    audio:"musics/audio5.mp3"
  },
    {
    id:6,
    src:"images/image6.jpg",
    note:"the rising sun",
    audio:"musics/audio6.mp3"
  },
    {
    id:7,
    src:"images/image7.jpg",
    note:"by the river of barbilion",
    audio:"musics/audio7.mp3"
  },
    {
    id:8,
    src:"images/image8.jpg",
    note:"the feeling",
    audio:"musics/audio8.mp3"
  },
    {
    id:9,
    src:"images/image9.jpg",
    note:"first love",
    audio:"musics/audio9.mp3"
  },
    {
    id:10,
    src:"images/image10.png",
    note:"one faithful night",
    audio:"musics/audio10.mp3"
  },
    {
    id:11,
    src:"images/image11.jpg",
    note:"the Last goodbye",
    audio:"musics/audio11.mp3"
  },
    {
    id:12,
    src:"images/image12.jpg",
    note:"stay with me tonight",
    audio:"musics/audio12.mp3"
  },
    {
    id:13,
    src:"images/image13.jpg",
    note:"you are not alone",
    audio:"musics/audio13.mp3"
  },
    {
    id:14,
    src:"images/image14.jpg",
    note:"Thank you Allah",
    audio:"musics/audio14.mp3"
  },
    {
    id:15,
    src:"images/image15.jpg",
    note:"last day",
    audio:"musics/audio15.mp3"
  },
    {
    id:16,
    src:"images/image16.png",
    note:"falling fruit",
    audio:"musics/audio16.mp3"
  },
    {
    id:17,
    src:"images/image17.jpg",
    note:"the full moon rise",
    audio:"musics/audio17.mp3"
  },
    {
    id:18,
    src:"images/image18.jpg",
    note:"on my way",
    audio:"musics/audio18.mp3"
  },
    {
    id:19,
    src:"images/image19.jpg",
    note:"love intoxicates",
    audio:"musics/audio19.mp3"
  },
    {
    id:20,
    src:"images/image20.jpg",
    note:"All the way",
    audio:"musics/audio20.mp3"
  },
    {
    id:21,
    src:"images/image21.png",
    note:"down to the earth",
    audio:"musics/audio21.mp3"
  },
    {
    id:22,
    src:"images/image22.jpg",
    note:"beleive",
    audio:"musics/audio22.mp3"
  },
    {
    id:23,
    src:"images/image23.jpg",
    note:"Thevway to Jannah",
    audio:"musics/audio23.mp3",
  },
    {
    id:24,
    src:"images/image24.jpg",
    note:"forgive me Allah",
    audio:"musics/audio24.mp3"
  },
    {
    id:25,
    src:"images/image25.jpg",
    note:"All day blessing",
    audio:"musics/audio25.mp3"
  },
    {
    id:26,
    src:"images/image26.png",
    note:"between the line",
    audio:"musics/audio26.mp3"
  },
    {
    id:27,
    src:"images/image27.jpeg",
    note:"bad day",
    audio:"musics/audio27.mp3"
  },
  ]
  
  let assendImage=``;
  let collection=``
  myFunction=()=>{
    let container=document.querySelectorAll(".container2");
    let collectionDiv=document.querySelector(".col");
    for(image of images){
      assendImage+=`
      <div>
       <img src=${image.src}><br>
      <p>${image.note}</p>
      </div>
      `;
      collection+=`
       <div class="image-text">
             <img src=${image.src} class="col-img1">
             <h3 class="col-h3">${image.note}</h3>
            <p class="col-p">Celein dio</p>
             <img src="images/Frame 7.svg" class="col-img2">
             <h3 class="col-h4">Like</h3>
           </div>
      `
    }
    for(let i=0; i<container.length; i++){
    container[i].innerHTML=assendImage
    }
    collectionDiv.innerHTML=collection;
    let newPage=``
    let cards=document.querySelectorAll(".card");
    cards.forEach(item=>{
      item.addEventListener("click", function(){
        console.log(item.innerHTML);
        document.querySelector(".first-page").style.display="none";
        let image=item.querySelector(".container-img").src;
        newPage=`
       <div class="second-hero" >
       <div class="sub-second-hero">
        <div>
         <img src=${image}  class="second-hero-img">
        </div>
        <div class="hero-content">
          <h2>Tommorow's Tune</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at eros neque. Mauris maximus est ut magna venenatis, eget efficitur nunc molestie</p>
          <p>64 songs~ 16hours</p>
          <div>
            <div class="btns">
              <button class="btn"><img src="images/music-square.svg">Play All</button>
              <button class="btn2 "><img src="images/play-new.svg">Add to collection</button>
              <button class="btn3"><img src="images/red-heart.svg" class="svg"></button>
            </div>
          </div>
        </div>
        </div>
        <div class="songs"></div>
      </div>
       `
   let TopChart=document.querySelector(".topChart");
   TopChart.innerHTML=newPage;
         
       /*document.body.style.background= `linear-gradient(180deg, rgba(29, 33, 35, 0.5)0%, #1D2123 80.48%), url(${image})`;*/
       firstPage=()=>{
         TopChart.innerHTML="";
         document.body.style.background="";
         document.querySelector(".first-page").style.display="block";
         document.querySelector(".second-page").style.display="none";
         if(isPlaying){
         audio.play()
         }
       }
       secondPage=()=>{
         TopChart.innerHTML="";
         document.body.style.background="";
         document.querySelector(".second-page").style.display="block";
         document.querySelector(".first-page").style.display="none";
         if(isPlaying){
         audio.play()
         }
       }
       let songs=``
       
       for(let image of images){
         songs+=`
         <div class="">
          <div class="songs-card" id=${image.id}>
           <div class="inner-flex2">
            <img src=${image.src} class="image1">
            <img src="images/fav.svg" class="hidden">
           </div>
           <div class="note">
            <p class="p-note" value=${image.note}>${image.note}</p>
           </div>
           <div class="note">
             <p>single</p>
           </div>
           <div class="">
            <img src="images/vertical.svg">
          </div>
          <div class="time">
           <p> 3:9:0</p>
          </div>
           <audio src=${image.audio} class="audio">
         </audio>
        </div>
        </div>
         `
       }
       document.querySelector(".songs").innerHTML=songs;
       let audio=document.querySelector(".audio"); 
         document.querySelectorAll(".songs-card").forEach(item=>{
           item.addEventListener("click", function(e){
 
             let playpause_btn=document.querySelector(".playpause-track");
             console.log(item.innerHTML)
             playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
             
           
           let isPlaying;
                  playAudioTrack=()=>{
                   if (!isPlaying){
                     playTrack();
                   }
                 else{ 
                   pauseTrack()
                 };
                  
                      }
              
let footerAudio= document.querySelector(".footerAudio");
footerAudio.src=item.querySelector(".audio").src;
function playTrack() {
           footerAudio.pause();
            isPlaying = true;
          playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';
              }
           function pauseTrack() {
             footerAudio.play();
             isPlaying = false;
           playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
}
 footerAudio.play();    
 let index=item.id-1;
 //Enable next
nextTrack=()=>{
  if(index==27){
   index=1;
 }
   index++
 let Allsongs=images;
  for(image of images){
  let footerAudio= document.querySelector(".footerAudio");
 footerAudio.src=Allsongs[index].audio;
 document.querySelector(".footer-img1").src=Allsongs[index].src;
 document.querySelector(".footer-note").innerHTML=Allsongs[index].note
  footerAudio.play();
}
   } 
//enable previous
prevTrack=()=>{
  if(index==0){
    index=27;
  }
     index--;
    let Allsongs=images;
  for(image of images){
  let footerAudio= document.querySelector(".footerAudio");
 footerAudio.src=Allsongs[index].audio;
 document.querySelector(".footer-img1").src=Allsongs[index].src;
 document.querySelector(".footer-note").innerHTML=Allsongs[index].note
  footerAudio.play();
}
   } 
             document.querySelector(".footer-img1").src=item.querySelector(".image1").src;
             document.querySelector(".footer-note").innerHTML=item.querySelector(".p-note").innerText;
            });
          })
       
      })
    })
    
  }
  let isPlaying;
       playAudioTrack=()=>{
    if (!isPlaying){
      playTrack();
          }
     else{ 
  pauseTrack()
          };
       } 
       
function playTrack() {
  let playpause_btn=document.querySelector(".playpause-track");
  let footerAudio= document.querySelector(".footerAudio");
           footerAudio.pause();
            isPlaying = true;
          playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';
              }
           function pauseTrack() {
             let playpause_btn=document.querySelector(".playpause-track");
             let footerAudio= document.querySelector(".footerAudio");
             footerAudio.play();
             isPlaying = false;
           playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
           
}
let index=-1;
nextTrack=()=>{
 if(index==26){
   index=-1;
     }
   index++;
 let Allsongs=images;
  for(image of images){
    let playpause_btn=document.querySelector(".playpause-track");
  let footerAudio= document.querySelector(".footerAudio");
 footerAudio.src=Allsongs[index].audio;
 document.querySelector(".footer-img1").src=Allsongs[index].src;
 document.querySelector(".footer-note").innerHTML=Allsongs[index].note;
 playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
  footerAudio.play();
}
   } 
prevTrack=()=>{
  if(index==0){
  index=27;
     }
  index--;
    let Allsongs=images;
  for(image of images){
    let playpause_btn=document.querySelector(".playpause-track");
  let footerAudio= document.querySelector(".footerAudio");
 footerAudio.src=Allsongs[index].audio;
 document.querySelector(".footer-img1").src=Allsongs[index].src;
 document.querySelector(".footer-note").innerHTML=Allsongs[index].note;
 playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
  footerAudio.play();
}
   } 
 

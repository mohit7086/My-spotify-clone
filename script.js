console.log("hi bro")

let index = 0;
let audioElement = new Audio("my song/1_Tum Ko Dekha To Yeh Khayal Aaya - Jagjit Singh.m4a");
let masterplay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myprogress');
let gifs = document.getElementById('gifs');
let songDetail = document.getElementById('detail');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songplay = document.getElementById('index');
let gifz =document.getElementById('gifz');


let songs = [
    {song: "Tum Ko Dekha To Yeh Khayal Aaya - Jagjit Singh" , filePath: "my song/1_Tum Ko Dekha To Yeh Khayal Aaya - Jagjit Singh.m4a", cover: "my covers/1k.jpg"},
    {song: "Ehsan Tera Hoga Mujh Par - Mohammed Rafi" , filePath: "my song/2 Ehsan Tera Hoga Mujh Par - Mohammed Rafi.m4a", cover: "my covers/2.jpg"},
    {song: "Hoshwalon Ko Khabar Kya - Jagjit Singh" , filePath: "my song/3 _Hoshwalon Ko Khabar Kya - Jagjit Singh (1).m4a", cover: "my covers/3.jpg"},
    {song: "Hothon Se Chhu Lo Tum - Jagjit Singh" , filePath: "my song/4 Hothon Se Chhu Lo Tum - Jagjit Singh.m4a", cover: "my covers/4.jpg"},
    {song: "Maine Poochha Chand Se - Mohammed Rafi" , filePath: "my song/5 Maine Poochha Chand Se - Mohammed Rafi.m4a", cover: "my covers/5.jpg"},
    {song: "Isharon Isharon Men Dil Lenewale - O P Nayyar" , filePath: "my song/6Isharon Isharon Men Dil Lenewale - O P Nayyar.m4a", cover: "my covers/6.jpg"},
    {song: "Kabhi Kabhi Mere Dil Mein - Mukesh" , filePath: "my song/7 Kabhi Kabhi Mere Dil Mein Solo By Mukesh - Mukesh.m4a", cover: "my covers/7.jpg"},
    {song: "Main Koi Aisa Geet Gaoon - Abhijeet, Alka Yagnik" , filePath: "my song/Main Koi Aisa Geet Gaoon - Abhijeet, Alka Yagnik.m4a", cover: "my covers/8.jpg"},
    {song: "Kabhi Yaadon Mein Aaun - Saptarishi Abhijeet" , filePath: "my song/9 Kabhi Yaadon Mein Aaun - Saptarishi Abhijeet, Abhijeet.m4a", cover: "my covers/9.jpg"},
    {song: "Mera Dil Bhi - Kumar Sanu," , filePath: "my song/10 Mera Dil Bhi Kitna Pagal Hai - Kumar Sanu, S P Balasubrahmanyam, Alka Yagnik.m4a", cover: "my covers/10.jpg"},
    
] 
//Accessing cover 

songItems.forEach((element , i)=> {
    element.getElementsByTagName("img")[0].src = songs[i].cover;
    element.getElementsByClassName("song name")[0].innerText = songs[i].song;

    
});

//Handle play pause 
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gifz.style.opacity = 0;
        gifs.style.opacity = 1;
        songDetail.innerText = songs[index].song;
        songDetail.style.opacity = 1;
    }


    else{
        gifz.style.opacity = 1;
        // songDetail.style.opacity = 0;
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gifs.style.opacity = 0;
        makeAllplays();
        
    }
})

audioElement.addEventListener('timeupdate',()=>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = progress;

if(audioElement.currentTime>=audioElement.duration){
  index +=1;
  if(index>9){
    index=0;
  }
  audioElement.src = songs[index].filePath;
  audioElement.currentTime = 0;
  songDetail.innerText = songs[index].song;
  audioElement.play();
}


}
)

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
  

    
})

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
           element.classList.remove('fa-pause-circle'); 
           element.classList.add('fa-play-circle');  
            
              
        })
    }
//Bar play button
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{ 



         
        
            makeAllplays();  
            index = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = songs[index].filePath;
            audioElement.currentTime = 0;
            songDetail.innerText = songs[index].song;
            audioElement.play();
            songDetail.style.opacity = 1;
            gifs.style.opacity = 1;
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');  
            
              
        
        


        
         
    })



})



//next 
document.getElementById('next').addEventListener('click',()=>{
    if(index>=9){
        index = 0; 
    }
    else{
        index +=1;
    }
    audioElement.src = songs[index].filePath;
    audioElement.currentTime = 0;
    songDetail.innerText = songs[index].song;
    audioElement.play();
    songDetail.style.opacity = 1;
    gifz.style.opacity = 0;
    gifs.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');



})
//previous
document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0){
        index = 0; 
    }
    else{
        index -=1;
    }
    audioElement.src = songs[index].filePath;
    audioElement.currentTime = 0;
    songDetail.innerText = songs[index].song;
    audioElement.play();
    songDetail.style.opacity = 1;
    gifz.style.opacity = 0;
    gifs.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');



})



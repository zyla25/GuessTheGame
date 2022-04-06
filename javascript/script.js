let video = document.getElementById("vid");

function Play(){
    video.play(); 
    document.getElementById("main").classList.toggle("hideMain");
    document.getElementById("vid-div").classList.toggle("showVideo");
    document.getElementById("play-btn").classList.toggle("click");
}
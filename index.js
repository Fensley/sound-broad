const sounds = ["applause" , "boo" ,"gasp" , "tada" , "victory" , "wrong" ]

sounds.forEach(sound => {
    const btn = document.createElement("button");

    btn.classList.add("btn");
    btn.innerText=sound
    btn.addEventListener("click" , ()=>{
        paused();
        document.getElementById(sound).play()
    })
    document.getElementById("buttons").appendChild(btn);

})

function paused(){
    sounds.forEach(sound=>{
        const song = document.getElementById(sound)
       song.pause();
       song.currentime;
    })
    
}
// appendChilds // play() // pause() // currentime
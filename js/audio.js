//menu-on
document.getElementsByTagName("audio")[0].volume=0.1;
function verificar_audio(){
    document.getElementsByTagName("audio")[0].pause();
}
function pause_(){
    let audio=document.getElementsByTagName("audio")[0]
        audio.src="bgm/pause_song.mp3";
    if(system.getPause()){
        audio.play();
        audio.volume=0.1;
        audio.loop=true;
        document.getElementsByTagName("audio")[1].pause();
    }
    else{
        audio.pause();
        document.getElementsByTagName("audio")[1].play();
    }
}
let bgm={
    c:3,
    currentt:null,
    bgm:[   null,
            "bgm/bgm0.mp3",
            "bgm/bgm1.mp3",
            "bgm/bgm2.mp3",
            "bgm/bgm3.mp3",
        ],
    update:function(){
        let audio = document.getElementsByTagName("audio")[1]
        audio.src = this.bgm[this.c];
        audio.play();
        audio.volume = 0.1;
        this.c++;
        if(this.c>4){
            this.c=1;
        }
    },
    
}

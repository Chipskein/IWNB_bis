import { row } from './row.js';

const game={
    //streaks controller
    //this switcher aren't in streak object because i need to use them in row class and can acess them with system.getGameSwitchers
    richtofen: false,
    hackerman: false,
    nuke: false,
    ls: false,
    
    c: 0,//I don't rebember WTF is this LOL
    c1: 0,//this either
    c2: 0,//this either

    pause: false,
    score: 5000,
    spc: 1,//this is a streak call counter

    //rows interface (time,inputid)
    rows:
        [
            new row(300, "r1"),
            new row(320, "r2"),
            new row(340, "r3"),
            new row(360, "r4"),
            new row(380, "r5"),
            new row(300, "r6"),
            new row(300, "r7"),
            new row(320, "r8"),
            new row(340, "r9"),
            new row(360, "r10"),
            new row(380, "r11"),
            new row(300, "r12"),
        ],
    user_txt: undefined,//user text
    r_interf: function () {
        //render interface
        //clean() what already exists
        system.limpar();
        let body = document.getElementById("body");
            body.classList.add("almost_on")
        ;
        let section = document.createElement("section");
            section.id="root"
            body.appendChild(section);
        
        let div = document.createElement("div");
            div.id="interface";
            div.classList.add("interface");

        let p = document.createElement("p");
            p.innerText = "Welcome guest"
            div.appendChild(p);

        let divinputline=document.createElement("div");
            divinputline.classList.add("div-input-line")
        let p2 = document.createElement("p");
            p2.innerHTML = "<span style='color:#FF0'>guest</span>@<span style='color:rgb(38, 220, 233)'>iwnb_bis</span>:[/bin/]>"
            p2.classList.add("p-input-line")
            divinputline.appendChild(p2);
        let input_u = document.createElement("input");
            input_u.id="user";
            input_u.classList.add("user");
            input_u.disabled=true;
            divinputline.appendChild(input_u);
        div.append(divinputline) 
        section.appendChild(div);

        let p3 = document.createElement("p");
            p3.classList.add("p-counter")
            
        let scorestreak = document.createElement("div");
            scorestreak.id = "scorestreak";
            section.appendChild(scorestreak);

        p = document.createElement("p");
        p.innerText = "stronda_kawai.exe-(1000pts)"
        scorestreak.appendChild(p);
        p = document.createElement("p");
        p.innerText = "hackerman.exe-(2000pts)"
        scorestreak.appendChild(p);
        p = document.createElement("p");
        p.innerText = "richtofen.exe-(4000pts)"
        scorestreak.appendChild(p);
        p = document.createElement("p");
        p.innerText = "nuke.exe-(5000pts)"
        scorestreak.appendChild(p);
        let divscore=document.createElement("div")
            divscore.classList.add("div-score")
        
        p = document.createElement("p");
        p.id = "score";
        p.innerText = `SCORE:${this.score}`;
        divscore.append(p)
        scorestreak.appendChild(divscore);
        //create div buffer
        let divrows=document.createElement("div");
        divrows.id="div-rows";
        divrows.appendChild(p3);
        section.append(divrows)
        //create pause    
        p = document.createElement("p");
        p.classList.add("pause");
        body.appendChild(p);
        
        this.user_txt = document.getElementById("user").value
        let start = 5;//counting down
        p3.innerText = start;
        //testes
        body.appendChild(document.createElement("audio"));
        setTimeout(()=>bgm.update(), 2700);
        document.getElementsByTagName("audio")[1].onended=()=>bgm.update();
        
        let contagem = setInterval(()=>{
            start--;
            p3.innerText = start;
            if (start == 0) {
                clearInterval(contagem);
                p3.remove();
            };
        }, 1000)

        setTimeout(()=>{
            
            this.game()
            let body = document.getElementById("body");
            //body.classList.remove("menu");
            body.classList.remove("almost_on");
            body.classList.add("ingame");

        }, 5000);   

    },
    streaks:{
        spawners:{
            spawn_hackerman: function () {
                if (game.spc <= 4) {
                    //play hackerman audio
                    game.hackerman = true;
                    let audio = document.createElement("audio");
                        audio.src = 'sound/hackerman.mp3'
                        audio.autoplay = true;
                        audio.volume = 0.5;

                    //Change CSS
                    document.getElementById("body").classList.add("hackerman");
                    document.getElementById("scorestreak").classList.add("hackerman");
                    document.getElementById("user").value = "";
                    document.getElementById("interface").classList.add("hackerman");
                    document.getElementById("div-rows").classList.add("hackerman");
                    //Change interface>P classlist 
                    let ps=document.querySelectorAll("p");
                    let inputs=document.querySelectorAll("input");
                    ps.forEach(p=>p.classList.add("hackerman"));                    
                    //Change all rows classlist
                    inputs.forEach(input => input.classList.add("hackerman"));
                    //reanimete
                    game.rows.forEach(row => row.restart());
                    game.spc++;
                }
            },
            spawn_ls: function () {
                game.ls = true;
                let audio = document.createElement("audio");
                audio.src = 'sound/seu-boiola.mp3';
                audio.autoplay = true;
                audio.volume = 0.1;

                document.getElementById("body").classList.add("ls");
                document.getElementById("scorestreak").classList.add("ls");

                document.getElementById("user").value = "";
                document.getElementById("div-rows").classList.add("ls");
                document.getElementById("interface").classList.add("ls");
                let ps=document.querySelectorAll("p");
                let inputs=document.querySelectorAll("input");
                //Change interface>P classlist 
                ps.forEach(p=>p.classList.add("ls"));                    
                //Change all rows classlist
                inputs.forEach(input => input.classList.add("ls"));

            },
            spawn_nuke: function () {
                system.limpar();
                document.getElementsByTagName("body")[0].classList.add("nuke");
                let video = document.createElement("video");
                video.src = 'videos/nuke.mp4';
                document.getElementsByTagName("body")[0].appendChild(video);
                let audio = document.createElement("audio");
                audio.src = 'sound/nuke-02.mp3'
                audio.autoplay = true;
                audio.volume = 1.0;
                setTimeout(function () {
                    video.autoplay = true;
                    video.volume = 0.5;
                }, 4000)
                video.onended = function () {
                    document.getElementsByTagName("body")[0].classList.remove("nuke");
                    document.getElementsByTagName("body")[0].classList.add("end");
                    let div_nk = document.createElement("div");
                    div_nk.id = "test"
                    document.getElementsByTagName("body")[0].appendChild(div_nk);
                    div_nk.classList.add("end");
                    let input = document.createElement("input");
                    div_nk.appendChild(input);
                    input.value = `Your_Score:${game.score}`;
                    let img = document.createElement("img");
                    img.src = 'icons/streakicon.png'
                    div_nk.appendChild(img);
                    let title = document.createElement("p");
                    title.innerHTML = "End.EXE"
                    div_nk.appendChild(title);
                    let back_b = document.createElement("button");
                    back_b.innerHTML = "X";
                    back_b.onclick = function () { window.location.reload(); }
                    div_nk.appendChild(back_b);

                    video.remove()
                };
            },
            spawn_richtofen: function () {
                if (game.spc <= 4) {

                    let audio = document.createElement("audio");
                        audio.src = 'sound/richtofen_laugth.mp3'
                        audio.autoplay = true;
                        audio.volume = 0.5;
                    //don't know
                    //let c = 0;
                    //audio.onended = function () { if (c == 0) { audio.src = 'sound/bye_richtofen.mp3'; audio.autoplay = true; audio.volume = 0.5; c = 1 } }
                    
                    
                    document.getElementById("body").appendChild(audio);

                    document.getElementById("body").classList.add("richtofen");
                    document.getElementById("scorestreak").classList.add("richtofen");
                    document.getElementById("div-rows").classList.add("richtofen")
                    document.getElementById("user").value = "";
                    let fi = document.createElement("fieldset");
                    fi.id = "richtofen-overlay";
                    fi.setAttribute("disabled", "disabled")
                    document.getElementById("body").appendChild(fi);
                    document.getElementById("interface").classList.add("richtofen");


                    let ps=document.querySelectorAll("p");
                    let inputs=document.querySelectorAll("input");
                    //Change interface>P classlist 
                    ps.forEach(p=>p.classList.add("richtofen"));                    
                    //Change all rows classlist
                    inputs.forEach(input => input.classList.add("richtofen"));

                    game.spc++;
                }
            },
        },
        killers:{
            kill_richtofen: function () {
                game.richtofen = false;    
                document.getElementById("body").classList.remove("richtofen");
                document.getElementById("scorestreak").classList.remove("richtofen");
                document.getElementById("richtofen-overlay").remove();
                document.getElementById("interface").classList.remove("richtofen");
                document.getElementById("div-rows").classList.remove("richtofen")
                let ps=document.querySelectorAll("p");
                let inputs=document.querySelectorAll("input");
                //Change interface>P classlist 
                ps.forEach(p=>p.classList.remove("richtofen"));                    
                //Change all rows classlist
                inputs.forEach(input => input.classList.remove("richtofen"));
            },
            kill_hackerman: function () {
                game.hackerman = false;

                document.getElementById("body").classList.remove("hackerman");
                document.getElementById("scorestreak").classList.remove("hackerman");
                document.getElementById("interface").classList.remove("hackerman");
                document.getElementById("div-rows").classList.remove("hackerman");
                let ps=document.querySelectorAll("p");
                let inputs=document.querySelectorAll("input");
                //Change interface>P classlist 
                ps.forEach(p=>p.classList.remove("hackerman"));                    
                //Change all rows classlist
                inputs.forEach(input => input.classList.remove("hackerman"));
                game.rows.forEach(row =>row.restart());
            },
            kill_ls: function () {

                game.ls = false;
                document.getElementById("body").classList.remove("ls");
                document.getElementById("scorestreak").classList.remove("ls");
                document.getElementById("user").value = "";
                document.getElementById("div-rows").classList.remove("ls");
                document.getElementById("interface").classList.remove("ls");
                document.getElementById("score").classList.remove("ls");
                let ps=document.querySelectorAll("p");
                let inputs=document.querySelectorAll("input");
                //Change interface>P classlist 
                ps.forEach(p=>p.classList.remove("ls"));                    
                //Change all rows classlist
                inputs.forEach(input => input.classList.remove("ls"));

            },
        }
    },
    spawnController:function(streakname){
        //uses game insted of 'this' because of setTimeOut
        switch(streakname){
            case "stronda":
                //Spawn Stronda Streak 
                game.ls = true;
                game.streaks.spawners.spawn_ls();
                //wait 10s then play audio then kill it
                setTimeout(()=> {
                    let audio = document.createElement("audio");
                    audio.src = 'sound/ta-fudido-meu-parceiro.mp3';
                    audio.autoplay = true;
                    audio.volume = 0.5;
                    game.streaks.killers.kill_ls()
                },10000)
            break;
            case "hackerman":
                //Spawn hackerman wait 8s then kill it
                game.hackerman = true;
                game.streaks.spawners.spawn_hackerman();
                setTimeout( ()=> game.streaks.killers.kill_hackerman(),8000)
            break;
            case "richtofen":
                //Spawn Richtofen streak
                game.richtofen = true;
                game.streaks.spawners.spawn_richtofen();
                //wait 6s then play audio
                setTimeout(()=>{
                    let audio = document.createElement("audio");
                    audio.src = '../sound/bye_richtofen.mp3';
                    audio.autoplay = true;
                    audio.volume = 0.5; 
                },6000)
                //wait then 10s and kill it
                setTimeout(()=>game.streaks.killers.kill_richtofen(),10000)
            break;
            case "nuke":
                //spawn nuke END GAME
                game.nuke = true;
                game.streaks.spawners.spawn_nuke();
            break;
        }
    },
    verifyScore:function(){
        if (this.score >= 1000 ) {
            document.querySelectorAll("div#scorestreak>p")[0].classList.add("disponivel");
            if (this.c1 == 0) {
                let audio = document.createElement("audio");
                audio.src = 'sound/han hein.mp3';
                audio.play();
                audio.volume = 0.1;
                this.c1 = 1;
            }
        }
        if (this.score >= 2000 ) {
            document.querySelectorAll("div#scorestreak>p")[1].classList.add("disponivel");
        }
        if (this.score >= 4000 ) {
            document.querySelectorAll("div#scorestreak>p")[2].classList.add("disponivel");
        }
        if (this.score >= 5000 ) {

            if (this.c == 0) {
                let audio = document.createElement("audio");
                audio.src = 'sound/nuke-01.mp3';
                audio.play();
                audio.volume = 0.5;
                this.c = 1;
            }
            document.querySelectorAll("div#scorestreak>p")[3].classList.add("disponivel");
        }
    },
    verificar: function () {
        //verify score and call spawner
        let spawn_conditional=!this.ls&&!this.richtofen&&!this.hackerman
        switch(this.user_txt){
            case "stronda_kawai.exe":
                if(this.score >= 1000&&spawn_conditional)  this.spawnController("stronda");
            break;
            case "hackerman.exe":
                if(this.score >= 2000&&spawn_conditional) this.spawnController("hackerman");
            break;
            case "richtofen.exe":
                if(this.score >= 4000&&spawn_conditional) this.spawnController("richtofen");
            break;
            case "nuke.exe":
                if(this.score >= 5000&&spawn_conditional) this.spawnController("nuke");
            break;
        }
        this.rows.forEach((row)=>{row.verificar(this.user_txt)});
        //verify score
        this.verifyScore();
    },
    KeyBoardHandler:function (e){
        switch (e.key) {
            case "Enter":
                this.user_txt = (document.getElementById("user").value).toLowerCase();
                this.verificar();
            break;
            case " ":
                switch (this.pause) {
                    case true:
                        this.pause = false;
                        pause_();
                        break;
                    case false:
                        this.pause = true;
                        pause_();
                        break;
                }
                if (this.pause) {
                    document.getElementsByClassName("pause")[0].innerText = "PAUSE";
                    this.rows.forEach(row => row.stop_anm());
                }
                else {
                    document.getElementsByClassName("pause")[0].innerText = "";
                    this.rows.forEach(row => {
                        row.palavra = row.palavras[Math.round(Math.random() * row.palavras.length-1)];
                        row.input.value = row.palavra;
                        row.input.size=row.palavra.length;
                        row.animation(row.input.style.left);
                    });
    
                }
            break;               
            case "Backspace":
                if(document.getElementById("user").value.length>0){
                    let cached=document.getElementById("user").value.slice(0,-1)
                    document.getElementById("user").value=cached;
                }
            break;
            case "Delete":
                document.getElementById("user").value="";
                break;
            case "Escape":
                window.location.reload();
            break
            default:
                //can't use keypress because of backspace and keyCode is depreciated so i need to block non character keys
                let BlockedKeys=["OS","Alt","Control","Shift","CapsLock","Insert","Home","End","PageUp","PageDown","ScrollLock","NumLock","Pause","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","Dead"]
                if(!this.pause&&!BlockedKeys.includes(e.key)) document.getElementById("user").value+=e.key;                        
                break;
        }
    },
    game: function () {
        //create inputs
        this.rows.forEach((row)=>row.start())
        //Listing to Keyboard
        document.addEventListener("keydown",(e)=>this.KeyBoardHandler(e))
    },
    getSwitchers:function(){
        //need this methos to use in row class
        return {
            richtofen: this.richtofen,
            hackerman: this.hackerman,
            nuke: this.nuke,
            ls: this.ls
        };
    }

}

const system = {
    //MENU
    //get section and remove
    limpar: ()=>document.getElementById("root").remove(),
    mouse_over: (e)=>e.classList.add("select"),
    mouse_out: (e)=>e.classList.remove("select"),
    //can implement difficults here
    render_Menu:()=>game.r_interf(),
    getGameSwitchers:()=>{return game.getSwitchers()},
    //TMP solution
    getScore:()=>{return game.score},
    setScore:(newscore)=>{game.score=newscore},
    getPause:()=>{return game.pause}
}
window.system=system;

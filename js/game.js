import { row } from './row.js';

const system = {
    //MENU
    limpar: function () {
        let section = document.getElementsByTagName("section")[0];
        section.remove();
    },
    mouse_over: function (e) { e.classList.add("select"); },
    mouse_out: function (e) { e.classList.remove("select"); },
    render_Menu: function () {
        //this.limpar();
        //to implement difficult
       this.game.r_interf()
    },
    //game
    game: {
        //streaks controller
        richtofen: false,
        hackerman: false,
        nuke: false,
        ls: false,
        
        c: 0,
        c1: 0,
        c2: 0,

        pause: false,
        score: 0,
        spc: 1,
        //start rows interface (time,inputid)
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
            verificar_audio();

            let body = document.getElementsByTagName("body")[0]
                body.classList.remove("menu")
                body.classList.add("almost_on")
            ;
            let section = document.createElement("section");
                body.appendChild(section);
            
            let div = document.createElement("div");
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
                input_u.classList.add("user");
                input_u.disabled=true;
                divinputline.appendChild(input_u);
            div.append(divinputline) 
            section.appendChild(div);

            /*
            //toolbar
            let exit_b = document.createElement("button");
                exit_b.innerText = "X";
                exit_b.classList.add("exit");
                exit_b.addEventListener("click",function (){ window.location.reload()})
                section.appendChild(exit_b);
            let img_cmd = document.createElement("img");
                img_cmd.classList.add("cmd");
                img_cmd.src = "icons/cmdicon.png";
                section.appendChild(img_cmd);
            let cmd_txt = document.createElement("h2");
                cmd_txt.classList.add("cmd");
                cmd_txt.innerText = "/bin/sh"
                section.appendChild(cmd_txt);
            */
            let p3 = document.createElement("p");
                p3.classList.add("p-counter")
                
            let scorestreak = document.createElement("div");
                scorestreak.id = "scorestreak";
                section.appendChild(scorestreak);
             /*  
                p = document.createElement("p");
                p.innerText = "chipskein.exe"
                scorestreak.appendChild(p);
                let img = document.createElement("img");
                img.src = "icons/streakicon.png";
                scorestreak.appendChild(img);
            */
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
            
            this.user_txt = document.getElementsByClassName("user")[0].value
            let start = 5;//counting down
            p3.innerText = start;
            //testes
            body.appendChild(document.createElement("audio"));
            setTimeout(function () { bgm.update(); }, 2700);
                document.getElementsByTagName("audio")[1].onended=function(){bgm.update();}
            let contagem = setInterval(function () {
                start--;
                p3.innerText = start;
                if (start == 0) {
                    clearInterval(contagem);
                    p3.remove();
                };
            }, 1000)
            setTimeout(function () {
                
                system.game.game()
                let body = document.getElementsByTagName("body")[0];
                body.classList.remove("menu");
                body.classList.remove("almost_on");
                body.classList.add("ingame");

            }, 5000);    
        },
        //spawn streak
        spawn_hackerman: function () {
            if (this.spc <= 4) {
                this.hackerman = true;
                let audio = document.createElement("audio");
                audio.src = 'sound/hackerman.mp3'
                audio.autoplay = true;
                audio.volume = 0.5;
                document.getElementsByTagName("body")[0].classList.add("hackerman");
                document.getElementById("scorestreak").classList.add("hackerman");

                document.getElementById("scorestreak").children[0].innerHTML = "hackerman.exe"
                document.getElementById("scorestreak").children[0].classList.add("hackerman");
                document.getElementById("scorestreak").children[1].src = 'icons/hackerman.png';
                document.getElementById("scorestreak").children[1].classList.add("hackerman");

                document.getElementById("score").style.color = "blue";
                document.getElementsByClassName("user")[0].style.color = "white";
                document.getElementsByClassName("user")[0].value = "";
                document.getElementsByClassName("interface")[0].classList.add("hackerman");
                for (let i = 0; i <= 2; i++) {
                    document.querySelectorAll("p")[i].classList.add("hackerman");
                }
                document.querySelectorAll("p")[document.querySelectorAll("p").length - 1].classList.add("hackerman");
                for (let i = 0; i <= document.querySelectorAll("input").length - 1; i++) {
                    document.querySelectorAll("input")[i].classList.add("hackerman");
                }
                //re anima com outro tempo
                for (let i of this.rows) {
                    i.stop_anm();
                }
                for (let i of this.rows) {
                    i.animation();
                }
                this.spc++;
            }
        },
        spawn_ls: function () {
            this.ls = true;
            let audio = document.createElement("audio");
            audio.src = 'sound/seu boiola.mp3';
            audio.autoplay = true;
            audio.volume = 1;
            document.getElementsByTagName("body")[0].classList.add("ls");
            document.getElementById("scorestreak").classList.add("ls");

            document.getElementById("scorestreak").children[0].innerHTML = "Leo Stronda.exe"
            document.getElementById("scorestreak").children[0].classList.add("ls");
            document.getElementById("scorestreak").children[1].src = 'icons/whey-protein-8-806157.png';
            document.getElementById("scorestreak").children[1].classList.add("ls");

            document.getElementById("score").style.color = "greenyellow";
            document.getElementsByClassName("user")[0].style.color = "greenyellow";
            document.getElementsByClassName("user")[0].value = "";
            document.getElementsByClassName("interface")[0].classList.add("ls");
            for (let i = 0; i <= 2; i++) {
                document.querySelectorAll("p")[i].classList.add("ls");
            }
            document.querySelectorAll("p")[document.querySelectorAll("p").length - 1].classList.add("ls");
            for (let i = 0; i <= document.querySelectorAll("input").length - 1; i++) {
                document.querySelectorAll("input")[i].classList.add("ls");
            }

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
                input.value = `Your_Score:${system.game.score}`;
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
            if (this.spc <= 4) {

                let audio = document.createElement("audio");
                audio.src = 'sound/richtofen_laugth.mp3'
                audio.autoplay = true;
                audio.volume = 0.5;
                let c = 0;
                audio.onended = function () { if (c == 0) { audio.src = 'bye_richtofen.mp3'; audio.autoplay = true; audio.volume = 0.5; c = 1 } }
                document.getElementsByTagName("body")[0].appendChild(audio);

                document.getElementsByTagName("body")[0].classList.add("richtofen");
                document.getElementById("scorestreak").classList.add("richtofen");

                document.getElementById("scorestreak").children[0].innerHTML = "richtofen.exe"
                document.getElementById("scorestreak").children[0].classList.add("richtofen");
                document.getElementById("scorestreak").children[1].src = 'icons/american.png';
                document.getElementById("scorestreak").children[1].classList.add("richtofen");

                document.getElementById("score").style.color = "white";
                document.getElementsByClassName("user")[0].style.color = "white";
                document.getElementsByClassName("user")[0].value = "";

                let fi = document.createElement("fieldset");
                fi.id = "testando";
                fi.setAttribute("disabled", "disabled")
                document.getElementsByTagName("body")[0].appendChild(fi);
                document.getElementsByClassName("interface")[0].classList.add("richtofen");
                for (let i = 0; i <= 2; i++) {
                    document.querySelectorAll("p")[i].classList.add("richtofen");
                }
                document.querySelectorAll("p")[document.querySelectorAll("p").length - 1].classList.add("richtofen");
                for (let i = 0; i <= document.querySelectorAll("input").length - 1; i++) {
                    document.querySelectorAll("input")[i].classList.add("richtofen");
                }
                this.spc++;
            }
        },
        //kill streak
        kill_richtofen: function () {
            this.richtofen = false;
            
            document.getElementsByTagName("body")[0].classList.remove("richtofen");
            document.getElementById("scorestreak").classList.remove("richtofen");
            document.getElementsByTagName("fieldset")[0].remove();
            document.getElementById("scorestreak").children[0].innerHTML = "Chipskein.exe"
            document.getElementById("scorestreak").children[0].classList.remove("richtofen");
            document.getElementById("scorestreak").children[1].src = 'icons/streakicon.png';
            document.getElementById("scorestreak").children[1].classList.remove("richtofen");

            document.getElementById("score").style.color = "aqua";
            document.getElementsByClassName("user")[0].style.color = "yellow";

            document.getElementsByClassName("interface")[0].classList.remove("richtofen");
            for (let i = 0; i <= 2; i++) {
                document.querySelectorAll("p")[i].classList.remove("richtofen");
            }
            document.querySelectorAll("p")[document.querySelectorAll("p").length - 1].classList.remove("richtofen");
            for (let i = 0; i <= document.querySelectorAll("input").length - 1; i++) {
                document.querySelectorAll("input")[i].classList.remove("richtofen");
            }
        },
        kill_hackerman: function () {
            this.hackerman = false;

            document.getElementsByTagName("body")[0].classList.remove("hackerman");
            document.getElementById("scorestreak").classList.remove("hackerman");

            document.getElementById("scorestreak").children[0].innerHTML = "Chipskein.exe"
            document.getElementById("scorestreak").children[0].classList.remove("hackerman");
            document.getElementById("scorestreak").children[1].src = 'icons/streakicon.png';
            document.getElementById("scorestreak").children[1].classList.remove("hackerman");

            document.getElementById("score").style.color = "aqua";
            document.getElementsByClassName("user")[0].style.color = "yellow";

            document.getElementsByClassName("interface")[0].classList.remove("hackerman");
            for (let i = 0; i <= 2; i++) {
                document.querySelectorAll("p")[i].classList.remove("hackerman");
            }
            document.querySelectorAll("p")[document.querySelectorAll("p").length - 1].classList.remove("hackerman");
            for (let i = 0; i <= document.querySelectorAll("input").length - 1; i++) {
                document.querySelectorAll("input")[i].classList.remove("hackerman");
            }
            for (let i of this.rows) {
                i.stop_anm();
            }
            for (let i of this.rows) {
                i.animation();
            }
        },
        kill_ls: function () {

            this.ls = false;

            document.getElementsByTagName("body")[0].classList.remove("ls");
            document.getElementById("scorestreak").classList.remove("ls");

            document.getElementById("scorestreak").children[0].innerHTML = "Chipskein.exe"
            document.getElementById("scorestreak").children[0].classList.remove("ls");
            document.getElementById("scorestreak").children[1].src = 'icons/streakicon.png';
            document.getElementById("scorestreak").children[1].classList.remove("ls");

            document.getElementById("score").style.color = "aqua";
            document.getElementsByClassName("user")[0].style.color = "yellow";
            document.getElementsByClassName("user")[0].value = "";
            document.getElementsByClassName("interface")[0].classList.remove("ls");
            for (let i = 0; i <= 2; i++) {
                document.querySelectorAll("p")[i].classList.remove("ls");
            }
            document.querySelectorAll("p")[document.querySelectorAll("p").length - 1].classList.remove("ls");
            for (let i = 0; i <= document.querySelectorAll("input").length - 1; i++) {
                document.querySelectorAll("input")[i].classList.remove("ls");
            }




        },
        verificar: function () {
            if (this.user_txt == "stronda_kawai.exe" && document.querySelectorAll("div#scorestreak>p")[0].classList.contains("disponivel")) {
                this.ls = true;
                this.spawn_ls();
                setTimeout(function () {
                    let audio = document.createElement("audio");
                    audio.src = 'sound/tá fudido meu parceiro.mp3';
                    audio.autoplay = true;
                    audio.volume = 0.5;
                    system.game.kill_ls()
                }, 10000)
            }

            if (this.user_txt == "hackerman.exe" && document.querySelectorAll("div#scorestreak>p")[1].classList.contains("disponivel")) {
                this.hackerman = true;
                this.spawn_hackerman();
                setTimeout(function () { system.game.kill_hackerman() }, 8000)
            }
            if (this.user_txt == "richtofen.exe" && document.querySelectorAll("div#scorestreak>p")[2].classList.contains("disponivel")) {
                this.richtofen = true;
                this.spawn_richtofen();
                setTimeout(function () {
                    let audio = document.createElement("audio");
                    audio.src = '../sound/bye_richtofen.mp3';
                    audio.autoplay = true;
                    audio.volume = 0.5; 
                }, 6000)
                setTimeout(function () {system.game.kill_richtofen() }, 10000)
            }

            if (this.user_txt == "nuke.exe" && document.querySelectorAll("div#scorestreak>p")[3].classList.contains("disponivel")) {
                this.nuke = true;
                this.spawn_nuke();
            }


            if (this.score >= 1000 && !this.nuke) {
                document.querySelectorAll("div#scorestreak>p")[0].classList.add("disponivel");
                if (this.c1 == 0) {
                    let audio = document.createElement("audio");
                    audio.src = 'sound/han hein.mp3';
                    audio.play();
                    audio.volume = 0.1;
                    this.c1 = 1;
                }
            }
            if (this.score >= 2000 && !this.nuke) {
                document.querySelectorAll("div#scorestreak>p")[1].classList.add("disponivel");
            }
            if (this.score >= 4000 && !this.nuke) {
                document.querySelectorAll("div#scorestreak>p")[2].classList.add("disponivel");
            }
            if (this.score >= 5000 && !this.nuke) {

                if (this.c == 0) {
                    let audio = document.createElement("audio");
                    audio.src = 'sound/nuke-01.mp3';
                    audio.play();
                    audio.volume = 0.5;
                    this.c = 1;
                }
                document.querySelectorAll("div#scorestreak>p")[3].classList.add("disponivel");
            }
            this.rows.forEach((row)=>{row.verificar(this.user_txt)});
        },
        game: function () {
            //create inputs
            //let padding=0;
            for (let i of this.rows) {
                i.create_inp();
                //i.input.style.top=`${padding}%`
                //padding+=5
                i.animation();
            }
            document.addEventListener("keydown",(e)=>{
                    switch (e.key) {
                        case "Enter":
                            system.game.user_txt = (document.getElementsByClassName("user")[0].value).toLowerCase();
                            system.game.verificar();
                            break;
                        case " ":
                            switch (system.game.pause) {
                                case true:
                                    system.game.pause = false;
                                    pause_();
                                    break;
                                case false:
                                    system.game.pause = true;
                                    pause_();
                                    break;
                            }
                            if (system.game.pause) {
                                document.getElementsByClassName("pause")[0].innerText = "PAUSE";
                                for (let i of system.game.rows) {
                                    i.stop_anm();
                                }
                            }
                            else {
                                document.getElementsByClassName("pause")[0].innerText = "";
                                for (let i of system.game.rows) {
                                    i.palavra = i.palavras[Math.round(Math.random() * i.palavras.length-1)];
                                    i.input.value = i.palavra;
                                    i.input.size=i.palavra.length;
                                    i.animation(i.input.style.left);
                                }
                            }
                            break;               
                        case "Backspace":
                            if(document.getElementsByClassName("user")[0].value.length>0){
                                let cached=document.getElementsByClassName("user")[0].value.slice(0,-1)
                                document.getElementsByClassName("user")[0].value=cached;
                            }
                            break;
                        case "Delete":
                            document.getElementsByClassName("user")[0].value="";
                            break;
                        default:
                            //can't use keypress because of backspace and keyCode is depreciated
                            if(
                                !this.pause&&
                                e.key!="OS"&&
                                e.key!="Alt"&&
                                e.key!="Control"&&
                                e.key!="Shift"&&
                                e.key!="CapsLock"&&
                                e.key!="Insert"&&
                                e.key!="Home"&&
                                e.key!="End"&&
                                e.key!="PageUp"&&
                                e.key!="PageDown"&&
                                e.key!="ScrollLock"&&
                                e.key!="NumLock"&&
                                e.key!="Pause"&&
                                e.key!="ArrowUp"&&
                                e.key!="ArrowDown"&&
                                e.key!="ArrowLeft"&&
                                e.key!="ArrowRight"&&
                                e.key!="F1"&&
                                e.key!="F2"&&
                                e.key!="F3"&&
                                e.key!="F4"&&
                                e.key!="F5"&&
                                e.key!="F6"&&
                                e.key!="F7"&&
                                e.key!="F8"&&
                                e.key!="F9"&&
                                e.key!="F10"&&
                                e.key!="F11"&&
                                e.key!="F12"&&
                                e.key!="Dead"
                            ) 
                                document.getElementsByClassName("user")[0].value+=e.key
                            ;                        
                            break;
                    }
            })

        }
    }
    
}
window.system=system;
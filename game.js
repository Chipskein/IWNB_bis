class row {
    constructor(rn, id) {
        this.time = rn;
        this.id = id;
        this.input = undefined;
        this.c = 0;
        this.palavras = [
            null,
            "eaiman.exe",
            "teste.exe",
            "cls",
            "hack.exe",
            "sonic.exe",
            "c++.exe",
            "exit",
            "while(true){}",
            "cd..",
            "eaiman/top.exe",
            "top.exe",
            "cash.exe",
            "emil.exe",
            "stdlib.h",
            "graphics.h",
            "windows.h",
            "audio.h",
            "POKE_59458,62",
            "delete-system32",
            "macaco.exe",
            "mkdir",
            "rmdir",
            "zuninao.exe",
            "lonely.exe",
            "pernalonga.exe",
            "run",
            "goto_0",
            "ver",
            "window.draw()",
            "window.display()",
            "sf::Text;",
            "jidadadai",
            "jesus.exe",
            "nikolai.exe",
            "pascal.exe",
            "paskaru.exe",
            "window.isOpen()",
            "window.pollEvent(e)",
            "window.close()",
            "while(!namorada)",
            "deito_sem_chifres.exe",
            "megazord.exe",
            "pascoa.exe",
            "coelho.h",
            "window.h",
            "network.h",
            "while(!comida)",
            "pessoa.dormir()",
            "eunice.exe",
            "conceicao.exe",
            "mae.sleep()",
            "marombeiro.exe",
            "html.exe",
            "windows96.exe",
            "eaiman2.exe",
            "frankstein(1941).mp4",
            "sia.exe",
            "mouse",
            "cavalo",
            "deus",
            "macaco",
            "avestruz",
            "rato.png",
            "rato.exe",
            "porn_anao.mp4",
            "code",
            ".code",
            "delete(@life)",
            "home.png",
            "goma.exe",
            "cmd.exe",
            "emil.ico",
            "ico;",
            "massa.png",
            "2b.back",
            "dir",
            "erase",
            "find_word",
            "shutdown",
            "print_c64",
            "joselito.exe",
            "ideias.exe",
            "parafuso.png",
            "word.test()",
            "nazi_zombie.exe",
            "spaceman.exe",
            "peixonauta.exe",
            "password.html",
            "eaiman",
            "kkkk",
            "perder_a_cabeca.exe",
            "pornhub.exe",
            "baiduehconfiavel.exe",
            "keyboard.exe",
            "kkk",
            "game.js",
            "index.css",
            "vapor.png",
            "kkk.mp4"
        ]

            ;
        this.palavra = this.palavras[Math.ceil(Math.random() * 100)];
    }
    create_inp() {
        let section = document.getElementsByTagName("section")[0];
        let input = document.createElement("input");
        input.classList.add("game");
        input.id = this.id;
        input.value = this.palavra;
        this.input = input;
        section.appendChild(input);
    }
    animation(c1) {
        let c = c1;
        if (!c1) { c = 0 }
        else {
            c = c.slice(0, c.length - 1);
            c = parseInt(c);
        }
        let input = this.input;
        let time = this.time;
        if (system.game.hackerman) {
            time = 8000;
        }
        this.intv = setInterval(function () {
            input.style.left = `${c}%`;
            if (c < 50 && c > 25) { input.classList.add("al_critic") }
            if (c >= 50) { input.classList.remove("al_critic"); input.classList.add("critical") }
            c++
            if (c == 70) {
                if (system.game.richtofen) {
                    let score = document.getElementById("score");
                    let teste = input.style.left;
                    teste = teste.slice(0, teste.length - 1);
                    teste = parseInt(teste);
                    system.game.score += teste;
                    score.innerText = `SCORE:${system.game.score}`;
                }
                c = 0; input.classList.remove("al_critic"); input.classList.remove("critical");
            }
        }, time)

    }
    cal_score() {
        let score = document.getElementById("score");
        let teste = this.input.style.left;
        teste = teste.slice(0, teste.length - 1);
        teste = parseInt(teste);
        if (system.game.ls) { teste += 50 }
        system.game.score += teste;
        score.innerText = `SCORE:${system.game.score}`;
    }
    new_word() {
    this.palavra = this.palavras[Math.ceil(Math.random() * 99)];
        this.input.value = this.palavra;
        this.stop_anm();
        this.animation();
        document.getElementsByClassName('user')[0].value = '';
    }
    verificar(user_txt) { if (user_txt == this.palavra) { this.new_word(); this.cal_score() }; }
    stop_anm() { clearInterval(this.intv); }
}
let system = {
    //MENU
    programmer: false,
    Mathman: false,
    limpar: function () {
        let section = document.getElementsByTagName("section")[0];
        section.remove();
    },
    mouse_over: function (e) { e.classList.add("select"); },
    mouse_out: function (e) { e.classList.remove("select"); },
    render_Menu: function () {
        this.limpar();
        let body = document.getElementsByTagName("body")[0];
        body.classList.add("menu")
        let section = document.createElement("section");
        body.appendChild(section);
        let img_p = document.createElement("img");
        img_p.classList.add("programmer");
        img_p.src = "https://media.giphy.com/media/3oEjHWbXcpeKhTktXi/giphy.gif";
        section.appendChild(img_p);

        let input_p = document.createElement("input");
        section.appendChild(input_p);
        input_p.setAttribute("disabled", "disabled");
        input_p.classList.add("programmer");
        let c = 0;
        setInterval(function () {
            //10
            input_p.value += "PROGRAMMER  "[c];
            c++
            if (c == 11) {
                c = 0
                input_p.value = '';
            }
        }, 50)
        img_p.addEventListener("click", function () {
            system.programmer = true;
            system.game.r_interf()
        });
    },
    //game
    game: {
        //system.game
        richtofen: false,
        hackerman: false,
        nuke: false,
        ls: false,
        spaceman: false,
        c: 0,
        c1: 0,
        c2: 0,
        pause: false,
        score: 0,
        spc: 1,
        rows: [new row(100, "r1"),
        new row(120, "r2"),
        new row(140, "r3"),
        new row(160, "r4"),
        new row(180, "r5"),
        new row(200, "r6"),
        new row(100, "r7"),
        new row(120, "r8"),
        new row(140, "r9"),
        new row(160, "r10"),
        new row(180, "r11"),
        new row(200, "r12"),
        ],
        user_txt: undefined,
        r_interf: function () {
            system.limpar();
            verificar_audio();
            if (system.programmer) {
                let body = document.getElementsByTagName("body")[0];
                    body.classList.remove("menu");
                    body.classList.add("almost_on");
                let section = document.createElement("section");
                    body.appendChild(section);
                let div = document.createElement("div");
                    div.classList.add("interface");
                    section.appendChild(div);
                let p = document.createElement("p");
                    p.innerText = "Welcome Guest"
                    section.appendChild(p);
                let p1 = document.createElement("p");
                    p1.innerText = ""
                    section.appendChild(p1);
                let p2 = document.createElement("p");
                    p2.innerText = "root@chipskein_guest$>"
                    section.appendChild(p2);
                let input_u = document.createElement("input");
                    input_u.classList.add("user");
                    div.appendChild(input_u);
                //toolbar
                let exit_b = document.createElement("button");
                exit_b.innerText = "X";
                exit_b.classList.add("exit");
                exit_b.addEventListener("click", function () { system.render_Menu() })
                section.appendChild(exit_b);
                let img_cmd = document.createElement("img");
                    img_cmd.classList.add("cmd");
                    img_cmd.src = "icons/cmdicon.png";
                    section.appendChild(img_cmd);
                let cmd_txt = document.createElement("h2");
                    cmd_txt.classList.add("cmd");
                    cmd_txt.innerText = "bash/bin/guest"
                    section.appendChild(cmd_txt);
                let p3 = document.createElement("p");
                    section.appendChild(p3);
                let scorestreak = document.createElement("div");
                    scorestreak.id = "scorestreak";
                    section.appendChild(scorestreak);
                    p = document.createElement("p");
                    p.innerText = "chipskein.exe"
                    scorestreak.appendChild(p);
                let img = document.createElement("img");
                    img.src = "icons/streakicon.png";
                    scorestreak.appendChild(img);
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
                    p = document.createElement("p");
                    p.id = "score";
                    p.innerText = `SCORE:${this.score}`;
                    scorestreak.appendChild(p);
                    p = document.createElement("p");
                    p.classList.add("pause");
                    body.appendChild(p);
                this.user_txt = document.getElementsByClassName("user")[0].value
                let start = 5;
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

            }
            
        },
        //spawn
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
        //kill
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
            if (this.user_txt == "stronda_kawai.exe" && document.querySelectorAll("div#scorestreak>p")[1].classList.contains("disponivel")) {
                this.ls = true;
                this.spawn_ls();
                setTimeout(function () {
                    let audio = document.createElement("audio");
                    audio.src = 'sound/tá fudido meu parceiro.mp3';
                    audio.autoplay = true;
                    audio.volume = 1;
                    system.game.kill_ls()
                }, 10000)
            }

            if (this.user_txt == "hackerman.exe" && document.querySelectorAll("div#scorestreak>p")[2].classList.contains("disponivel")) {
                this.hackerman = true;
                this.spawn_hackerman();
                setTimeout(function () { system.game.kill_hackerman() }, 8000)
            }
            if (this.user_txt == "richtofen.exe" && document.querySelectorAll("div#scorestreak>p")[3].classList.contains("disponivel")) {
                this.richtofen = true;
                this.spawn_richtofen();
                setTimeout(function () {
                    let audio = document.createElement("audio");
                    audio.src = 'sound/bye_richtofen.mp3';
                    audio.autoplay = true;
                    audio.volume = 1; 
                }, 6000)
                setTimeout(function () {system.game.kill_richtofen() }, 10000)
            }

            if (this.user_txt == "nuke.exe" && document.querySelectorAll("div#scorestreak>p")[4].classList.contains("disponivel")) {
                this.nuke = true;
                this.spawn_nuke();
            }


            if (this.score >= 1000 && !this.nuke) {
                document.querySelectorAll("div#scorestreak>p")[1].classList.add("disponivel");
                if (this.c1 == 0) {
                    let audio = document.createElement("audio");
                    audio.src = 'sound/han hein.mp3';
                    audio.play();
                    audio.volume = 0.3;
                    this.c1 = 1;
                }
            }
            if (this.score >= 2000 && !this.nuke) {
                document.querySelectorAll("div#scorestreak>p")[2].classList.add("disponivel");
            }
            if (this.score >= 4000 && !this.nuke) {
                document.querySelectorAll("div#scorestreak>p")[3].classList.add("disponivel");
            }
            if (this.score >= 5000 && !this.nuke) {

                if (this.c == 0) {
                    let audio = document.createElement("audio");
                    audio.src = 'sound/nuke-01.mp3';
                    audio.play();
                    audio.volume = 0.5;
                    this.c = 1;
                }
                document.querySelectorAll("div#scorestreak>p")[4].classList.add("disponivel");
            }
            for (let i of this.rows) {
                i.verificar(this.user_txt);
            }
        },
        game: function () {
            for (let i of this.rows) {
                i.create_inp();
            }
            for (let i of this.rows) {
                i.animation();
            }

            document.addEventListener("keypress", function (e) {
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
                            document.getElementsByClassName("pause")[0].innerHTML = "PAUSE";
                            for (let i of system.game.rows) {
                                i.stop_anm();
                            }
                        }
                        else {
                            document.getElementsByClassName("pause")[0].innerHTML = "";
                            for (let i of system.game.rows) {
                                i.palavra = i.palavras[Math.ceil(Math.random() * 99)];
                                i.input.value = i.palavra;
                                i.animation(i.input.style.left);
                            }
                        }
                        break;
                }
            })

        }
    }
    
}

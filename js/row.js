import {words} from './words.js'
export class row 
{
    constructor(rn, id) {
        this.time = rn;
        this.id = id;
        this.input = undefined;
        this.c = 0;
        this.palavras=words;
        this.palavra = this.palavras[Math.round(Math.random() * this.palavras.length-1)];
    }
    create_inp() {
        let div=document.getElementById("div-rows");
        let input = document.createElement("input");
        input.disabled=true
        input.classList.add("game");
        input.id = this.id;
        input.value = this.palavra;
        input.size=this.palavra.length
        this.input = input;
        div.appendChild(input);
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
        if (system.getGameSwitchers().hackerman) {
            time = 8000;
        }
        this.intv = setInterval(function () {
            input.style.left = `${c}%`;
            if (c < 50 && c > 25) { input.classList.add("al_critic") }
            if (c >= 50) { input.classList.remove("al_critic"); input.classList.add("critical") }
            c++
            if (c == 70) {
                if (system.getGameSwitchers().richtofen) {
                    let score = document.getElementById("score");
                    let teste = input.style.left;
                    teste = teste.slice(0, teste.length - 1);
                    teste = parseInt(teste);

                    sum=system.getScore()+teste;
                    system.setScore(sum);

                    score.innerText = `SCORE:${system.getScore()}`;
                }
                c = 0;
                input.classList.remove("al_critic");
                input.classList.remove("critical");
            }
        }, time)

    }
    cal_score() {
        let score = document.getElementById("score");
        let teste = this.input.style.left;
        teste = teste.slice(0, teste.length - 1);
        teste = parseInt(teste);
        if (system.getGameSwitchers().ls) teste += 50 ;

        let sum=system.getScore()+teste;
        system.setScore(sum);       
        score.innerText = `SCORE:${system.getScore()}`;
    }
    new_word() {
        this.palavra = this.palavras[Math.round(Math.random() * this.palavras.length-1)];
            this.input.value = this.palavra;
            this.input.size=this.palavra.length
            this.stop_anm();
            this.animation();
            document.getElementById('user').value = '';
    }
    verificar(user_txt) { 
        if(user_txt == this.palavra) { 
            this.new_word();
            this.cal_score(); 
        }; 
    }
    stop_anm() {
        clearInterval(this.intv);
    }
    start(){
        this.create_inp();
        this.animation();
    }
}
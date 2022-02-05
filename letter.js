window.onload = function () {
    let words = ["прокрастинация", "аппеляция", "деформация"]
    let rand = Math.floor(Math.random() * words.length);
    let word = words[rand];
    let goButton = document.getElementById("go");
    let guessButton = document.getElementById("guess");
    let answ = document.getElementById("answ");
    let rem = document.getElementById("rem");
    let res = document.getElementById("result");
    let checkingWord = document.getElementById("checking");
    let score1 = document.getElementById("score");
    let wrong = document.getElementById("wrongLetters");
    let score3 = 10;
    showScore();
    let wrongLetters1 = [];

    function showScore(tof1) {
        if (tof1 == false) {
            score3--;
        }
        score1.innerHTML = score3;
        console.log(score3);
        if (score3 <= 0) {
            res.innerHTML = "Вы проиграли!";
            goButton.setAttribute("disabled", "disabled");
            guessButton.setAttribute("disabled", "disabled");
            checkingWord.setAttribute("disabled", "disabled");
        }
    }

    let remain = 0;
    let answer = [];

    //goButton.onclick = init;
    goButton.addEventListener("click", init);
    guessButton.addEventListener("click", check);
    checkingWord.addEventListener("click", checkWord);

    function init() {
        remain = word.length - 2;
        answer[0] = word[0];
        console.log(answer[0]);
        answer[word.length - 1] = word[word.length - 1];
        console.log(answer[word.length - 1]);
        for (let i = 1; i < answer.length - 1; i++) {
            answer[i] = "_";
        }
        console.log(answer);
        answ.innerHTML = answer.join(" ");
        checkingWord.removeAttribute("disabled");
        guessButton.removeAttribute("disabled");
    }

    function check() {
        let guess = prompt("Guess a letter!");
        // guess.toUpperCase();
        let tof = false;
        for (let i = 1; i < word.length - 1; i++) {
            if (word[i] == guess) {
                tof = true;
                answer[i] = guess;
            }
        }
        if (tof == false) {
            wrongLetters1.push(guess);
            wrong.innerHTML = wrongLetters1;
        }
        remain--;
        showScore(tof);
        answ.innerHTML = answer.join(" ");
    }

    function checkWord() {
        console.log(word);
        console.log(answer);
        let score2 = 0;
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] == word[i]) {
                score2++;
                console.log(score2);
                // res.innerHTML = "Ты выиграл!";
            }
            else {
                res.innerHTML = "Собери все буквы!";
            }
        }
        if (score2 == answer.length) {
            res.innerHTML = "Ты выиграл!";
        }
    }

};
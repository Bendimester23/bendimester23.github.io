const player_in_form = document.getElementById(`player_form`);
const players_num = document.getElementById(`playerCount`);
const main = document.getElementById(`main`);
const numin = document.getElementById(`numin`);
const numinnum = document.getElementById(`numinnum`);
const scores_elem = document.getElementById(`scores`);
const mult = document.getElementById(`mult`);

main.style.visibility = `hidden`;
let players = 0;
let currentPlayer = 0;
let scores = [];
let round = 0;


player_in_form.onsubmit = (e) => {
    e.preventDefault();
    players = players_num.value;
    for (let i = 0; i < players; i++) {
        scores[i] = 501
    }
    player_in_form.style.display = `none`;
    main.style.visibility = `visible`;
    render()
};

function render() {
    let r = ``;
    scores.forEach((v, i) => {
        r += i == currentPlayer ? `<li><b>Player${i+1}: ${v}</b></li>` : `<li>Player${i+1}: ${v}</li>`
    })
    scores_elem.innerHTML = r;
}

numin.onsubmit = (e) => {
    e.preventDefault();
    scores[currentPlayer] -= numinnum.value * mult.value;
    mult.value = 1
    round++;
    if (round == 3) {
        if (scores[currentPlayer] == 0) {
            alert(`A ${currentPlayer+1} számú játékos nyert!`)
        } else if (scores[currentPlayer] < 0) {
            scores[currentPlayer] = 512
        } else {
            currentPlayer++
            currentPlayer = currentPlayer % players
        }
        round = 0;
    }
    render();
}

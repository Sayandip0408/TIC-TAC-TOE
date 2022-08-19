import { player1, player2 } from './Name';

let move_count = 1;
let p1_count = 0, p2_count = 0;

const getName = (player1, player2) => {
    document.getElementById('x_p').innerHTML = `X - ${player1}`;
    document.getElementById('o_p').innerHTML = `O - ${player2}`;
    document.getElementById('turn').innerHTML = `${player1}'s turn`;
}

const scopes = [
    {
        id: "scope_1", child1: "cross1", child2: "circle1", function: function () {
            let c1 = document.getElementById('cross1');
            let c2 = document.getElementById('circle1');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c1.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player2}'s turn`;
                    check();
                }
            }
            else {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c2.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player1}'s turn`;
                    check();
                }
            }
        }
    },
    {
        id: "scope_2", child1: "cross2", child2: "circle2", function: function () {
            let c1 = document.getElementById('cross2');
            let c2 = document.getElementById('circle2');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c1.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player2}'s turn`;
                    check();
                }
            }
            else {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c2.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player1}'s turn`;
                    check();
                }
            }
        }
    },
    {
        id: "scope_3", child1: "cross3", child2: "circle3", function: function () {
            let c1 = document.getElementById('cross3');
            let c2 = document.getElementById('circle3');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c1.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player2}'s turn`;
                    check();
                }
            }
            else {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c2.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player1}'s turn`;
                    check();
                }
            }
        }
    },
    {
        id: "scope_4", child1: "cross4", child2: "circle4", function: function () {
            let c1 = document.getElementById('cross4');
            let c2 = document.getElementById('circle4');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c1.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player2}'s turn`;
                    check();
                }
            }
            else {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c2.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player1}'s turn`;
                    check();
                }
            }
        }
    },
    {
        id: "scope_5", child1: "cross5", child2: "circle5", function: function () {
            let c1 = document.getElementById('cross5');
            let c2 = document.getElementById('circle5');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c1.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player2}'s turn`;
                    check();
                }
            }
            else {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c2.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player1}'s turn`;
                    check();
                }
            }
        }
    },
    {
        id: "scope_6", child1: "cross6", child2: "circle6", function: function () {
            let c1 = document.getElementById('cross6');
            let c2 = document.getElementById('circle6');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c1.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player2}'s turn`;
                    check();
                }
            }
            else {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c2.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player1}'s turn`;
                    check();
                }
            }
        }
    },
    {
        id: "scope_7", child1: "cross7", child2: "circle7", function: function () {
            let c1 = document.getElementById('cross7');
            let c2 = document.getElementById('circle7');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c1.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player2}'s turn`;
                    check();
                }
            }
            else {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c2.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player1}'s turn`;
                    check();
                }
            }
        }
    },
    {
        id: "scope_8", child1: "cross8", child2: "circle8", function: function () {
            let c1 = document.getElementById('cross8');
            let c2 = document.getElementById('circle8');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c1.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player2}'s turn`;
                    check();
                }
            }
            else {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c2.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player1}'s turn`;
                    check();
                }
            }
        }
    },
    {
        id: "scope_9", child1: "cross9", child2: "circle9", function: function () {
            let c1 = document.getElementById('cross9');
            let c2 = document.getElementById('circle9');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c1.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player2}'s turn`;
                    check();
                }
            }
            else {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    move_count++;
                    c2.style.display = "block";
                    document.getElementById('turn').innerHTML = `${player1}'s turn`;
                    check();
                }
            }
        }
    },
]

const quit = () => {
    let val = document.getElementById('welcome_div');
    let val2 = document.getElementById('result_div');
    val2.style.display = 'none';
    val.style.display = 'flex';
    window.location.reload(false);
}

const rematch = () => {
    let val = document.getElementById('gameboard');
    let val2 = document.getElementById('result_div');
    val2.style.display = 'none';
    val.style.display = 'block';
    move_count = 1;
    let x1 = document.getElementById("cross1");
    let x2 = document.getElementById("cross2");
    let x3 = document.getElementById("cross3");
    let x4 = document.getElementById("cross4");
    let x5 = document.getElementById("cross5");
    let x6 = document.getElementById("cross6");
    let x7 = document.getElementById("cross7");
    let x8 = document.getElementById("cross8");
    let x9 = document.getElementById("cross9");

    let y1 = document.getElementById("circle1");
    let y2 = document.getElementById("circle2");
    let y3 = document.getElementById("circle3");
    let y4 = document.getElementById("circle4");
    let y5 = document.getElementById("circle5");
    let y6 = document.getElementById("circle6");
    let y7 = document.getElementById("circle7");
    let y8 = document.getElementById("circle8");
    let y9 = document.getElementById("circle9");
    x1.style.display = 'none';
    x2.style.display = 'none';
    x3.style.display = 'none';
    x4.style.display = 'none';
    x5.style.display = 'none';
    x6.style.display = 'none';
    x7.style.display = 'none';
    x8.style.display = 'none';
    x9.style.display = 'none';

    y1.style.display = 'none';
    y2.style.display = 'none';
    y3.style.display = 'none';
    y4.style.display = 'none';
    y5.style.display = 'none';
    y6.style.display = 'none';
    y7.style.display = 'none';
    y8.style.display = 'none';
    y9.style.display = 'none';
}

const result = (player, p1, p2, player1, player2) => {
    let gameboard = document.getElementById('gameboard');
    let result_div = document.getElementById('result_div');
    let match_result = document.getElementById('match_result');
    let p1_win = document.getElementById('p1_win');
    let p2_win = document.getElementById('p2_win');

    gameboard.style.display = 'none';
    result_div.style.display = 'flex';
    match_result.innerHTML = `${player} has won this match 🥇 `;
    p1_win.innerHTML = `${player1} : ${p1}`;
    p2_win.innerHTML = `${player2} : ${p2}`;

}



const check = () => {
    let x1 = document.getElementById("cross1");
    let x2 = document.getElementById("cross2");
    let x3 = document.getElementById("cross3");
    let x4 = document.getElementById("cross4");
    let x5 = document.getElementById("cross5");
    let x6 = document.getElementById("cross6");
    let x7 = document.getElementById("cross7");
    let x8 = document.getElementById("cross8");
    let x9 = document.getElementById("cross9");

    let y1 = document.getElementById("circle1");
    let y2 = document.getElementById("circle2");
    let y3 = document.getElementById("circle3");
    let y4 = document.getElementById("circle4");
    let y5 = document.getElementById("circle5");
    let y6 = document.getElementById("circle6");
    let y7 = document.getElementById("circle7");
    let y8 = document.getElementById("circle8");
    let y9 = document.getElementById("circle9");

    let player;

    if (x1.style.display === "block" && x2.style.display === "block" && x3.style.display === "block") {
        player = player1;
        result(player, ++p1_count, p2_count, player1, player2);
    }
    if (x4.style.display === "block" && x5.style.display === "block" && x6.style.display === "block") {
        player = player1;
        result(player, ++p1_count, p2_count, player1, player2);
    }
    if (x7.style.display === "block" && x8.style.display === "block" && x9.style.display === "block") {
        player = player1;
        result(player, ++p1_count, p2_count, player1, player2);
    }
    if (x1.style.display === "block" && x4.style.display === "block" && x7.style.display === "block") {
        player = player1;
        result(player, ++p1_count, p2_count, player1, player2);
    }
    if (x2.style.display === "block" && x5.style.display === "block" && x8.style.display === "block") {
        player = player1;
        result(player, ++p1_count, p2_count, player1, player2);
    }
    if (x3.style.display === "block" && x6.style.display === "block" && x9.style.display === "block") {
        player = player1;
        result(player, ++p1_count, p2_count, player1, player2);
    }
    if (x1.style.display === "block" && x5.style.display === "block" && x9.style.display === "block") {
        player = player1;
        result(player, ++p1_count, p2_count, player1, player2);
    }
    if (x3.style.display === "block" && x5.style.display === "block" && x7.style.display === "block") {
        player = player1;
        result(player, ++p1_count, p2_count, player1, player2);
    }


    if (y1.style.display === "block" && y2.style.display === "block" && y3.style.display === "block") {
        player = player2;
        result(player, p1_count, ++p2_count, player1, player2);
    }
    if (y4.style.display === "block" && y5.style.display === "block" && y6.style.display === "block") {
        player = player2;
        result(player, p1_count, ++p2_count, player1, player2);
    }
    if (y7.style.display === "block" && y8.style.display === "block" && y9.style.display === "block") {
        player = player2;
        result(player, p1_count, ++p2_count, player1, player2);
    }
    if (y1.style.display === "block" && y4.style.display === "block" && y7.style.display === "block") {
        player = player2;
        result(player, p1_count, ++p2_count, player1, player2);
    }
    if (y2.style.display === "block" && y5.style.display === "block" && y8.style.display === "block") {
        player = player2;
        result(player, p1_count, ++p2_count, player1, player2);
    }
    if (y3.style.display === "block" && y6.style.display === "block" && y9.style.display === "block") {
        player = player2;
        result(player, p1_count, ++p2_count, player1, player2);
    }
    if (y1.style.display === "block" && y5.style.display === "block" && y9.style.display === "block") {
        player = player2;
        result(player, p1_count, ++p2_count, player1, player2);
    }
    if (y3.style.display === "block" && y5.style.display === "block" && y7.style.display === "block") {
        player = player2;
        result(player, p1_count, ++p2_count, player1, player2);
    }

    if ((x1.style.display === "block" || y1.style.display === "block") && (x2.style.display === "block" || y2.style.display === "block") && (x3.style.display === "block" || y3.style.display === "block") && (x4.style.display === "block" || y4.style.display === "block") && (x5.style.display === "block" || y5.style.display === "block") && (x6.style.display === "block" || y6.style.display === "block") && (x7.style.display === "block" || y7.style.display === "block") && (x8.style.display === "block" || y8.style.display === "block") && (x9.style.display === "block" || y9.style.display === "block")) {

        if (x1.style.display === "block" && x2.style.display === "block" && x3.style.display === "block") {
            player = player1;
            result(player, ++p1_count, p2_count, player1, player2);
        }
        else if (x4.style.display === "block" && x5.style.display === "block" && x6.style.display === "block") {
            player = player1;
            result(player, ++p1_count, p2_count, player1, player2);
        }
        else if (x7.style.display === "block" && x8.style.display === "block" && x9.style.display === "block") {
            player = player1;
            result(player, ++p1_count, p2_count, player1, player2);
        }
        else if (x1.style.display === "block" && x4.style.display === "block" && x7.style.display === "block") {
            player = player1;
            result(player, ++p1_count, p2_count, player1, player2);
        }
        else if (x2.style.display === "block" && x5.style.display === "block" && x8.style.display === "block") {
            player = player1;
            result(player, ++p1_count, p2_count, player1, player2);
        }
        else if (x3.style.display === "block" && x6.style.display === "block" && x9.style.display === "block") {
            player = player1;
            result(player, ++p1_count, p2_count, player1, player2);
        }
        else if (x1.style.display === "block" && x5.style.display === "block" && x9.style.display === "block") {
            player = player1;
            result(player, ++p1_count, p2_count, player1, player2);
        }
        else if (x3.style.display === "block" && x5.style.display === "block" && x7.style.display === "block") {
            player = player1;
            result(player, ++p1_count, p2_count, player1, player2);
        }


        else if (y1.style.display === "block" && y2.style.display === "block" && y3.style.display === "block") {
            player = player2;
            result(player, p1_count, ++p2_count, player1, player2);
        }
        else if (y4.style.display === "block" && y5.style.display === "block" && y6.style.display === "block") {
            player = player2;
            result(player, p1_count, ++p2_count, player1, player2);
        }
        else if (y7.style.display === "block" && y8.style.display === "block" && y9.style.display === "block") {
            player = player2;
            result(player, p1_count, ++p2_count, player1, player2);
        }
        else if (y1.style.display === "block" && y4.style.display === "block" && y7.style.display === "block") {
            player = player2;
            result(player, p1_count, ++p2_count, player1, player2);
        }
        else if (y2.style.display === "block" && y5.style.display === "block" && y8.style.display === "block") {
            player = player2;
            result(player, p1_count, ++p2_count, player1, player2);
        }
        else if (y3.style.display === "block" && y6.style.display === "block" && y9.style.display === "block") {
            player = player2;
            result(player, p1_count, ++p2_count, player1, player2);
        }
        else if (y1.style.display === "block" && y5.style.display === "block" && y9.style.display === "block") {
            player = player2;
            result(player, p1_count, ++p2_count, player1, player2);
        }
        else if (y3.style.display === "block" && y5.style.display === "block" && y7.style.display === "block") {
            player = player2;
            result(player, p1_count, ++p2_count, player1, player2);
        }
        else {
            player = "None of them";
            result(player, p1_count, p2_count, player1, player2);
        }
    }
}


export { scopes, getName, quit, rematch, check }
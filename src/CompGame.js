import { player1, player2 } from './CompName';

let move_count = 1;
let p1_count = 0, p2_count = 0;

const getNameComp = (player1, player2) => {
    document.getElementById('comp_x_p').innerHTML = `X - ${player1}`;
    document.getElementById('comp_o_p').innerHTML = `O - ${player2}`;
    document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
}

const comp_move = () => {
    let crs1 = document.getElementById('cross1_comp');
    let crs2 = document.getElementById('cross2_comp');
    let crs3 = document.getElementById('cross3_comp');
    let crs4 = document.getElementById('cross4_comp');
    let crs5 = document.getElementById('cross5_comp');
    let crs6 = document.getElementById('cross6_comp');
    let crs7 = document.getElementById('cross7_comp');
    let crs8 = document.getElementById('cross8_comp');
    let crs9 = document.getElementById('cross9_comp');

    let cir1 = document.getElementById('circle1_comp');
    let cir2 = document.getElementById('circle2_comp');
    let cir3 = document.getElementById('circle3_comp');
    let cir4 = document.getElementById('circle4_comp');
    let cir5 = document.getElementById('circle5_comp');
    let cir6 = document.getElementById('circle6_comp');
    let cir7 = document.getElementById('circle7_comp');
    let cir8 = document.getElementById('circle8_comp');
    let cir9 = document.getElementById('circle9_comp');


    // first row
    if (((crs1.style.display === 'block' && crs2.style.display === 'block') || (cir1.style.display === 'block' && cir2.style.display === 'block')) && (crs3.style.display === 'none' && cir3.style.display === 'none')) {
        cir3.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs1.style.display === 'block' && crs3.style.display === 'block') || (cir1.style.display === 'block' && cir3.style.display === 'block')) && (crs2.style.display === 'none' && cir2.style.display === 'none')) {
        cir2.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs2.style.display === 'block' && crs3.style.display === 'block') || (cir2.style.display === 'block' && cir3.style.display === 'block')) && (crs1.style.display === 'none' && cir1.style.display === 'none')) {
        cir1.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }

    // second row
    else if (((crs4.style.display === 'block' && crs5.style.display === 'block') || (cir4.style.display === 'block' && cir5.style.display === 'block')) && (crs6.style.display === 'none' && cir6.style.display === 'none')) {
        cir6.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs4.style.display === 'block' && crs6.style.display === 'block') || (cir4.style.display === 'block' && cir6.style.display === 'block')) && (crs5.style.display === 'none' && cir5.style.display === 'none')) {
        cir5.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs5.style.display === 'block' && crs6.style.display === 'block') || (cir5.style.display === 'block' && cir6.style.display === 'block')) && (crs4.style.display === 'none' && cir4.style.display === 'none')) {
        cir4.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }

    // third row
    else if (((crs7.style.display === 'block' && crs8.style.display === 'block') || (cir7.style.display === 'block' && cir8.style.display === 'block')) && (crs9.style.display === 'none' && cir9.style.display === 'none')) {
        cir9.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs7.style.display === 'block' && crs9.style.display === 'block') || (cir7.style.display === 'block' && cir9.style.display === 'block')) && (crs8.style.display === 'none' && cir8.style.display === 'none')) {
        cir8.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs8.style.display === 'block' && crs9.style.display === 'block') || (cir8.style.display === 'block' && cir9.style.display === 'block')) && (crs7.style.display === 'none' && cir7.style.display === 'none')) {
        cir7.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }

    // first col
    else if (((crs1.style.display === 'block' && crs4.style.display === 'block') || (cir1.style.display === 'block' && cir4.style.display === 'block')) && (crs7.style.display === 'none' && cir7.style.display === 'none')) {
        cir7.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs1.style.display === 'block' && crs7.style.display === 'block') || (cir1.style.display === 'block' && cir7.style.display === 'block')) && (crs4.style.display === 'none' && cir4.style.display === 'none')) {
        cir4.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs4.style.display === 'block' && crs7.style.display === 'block') || (cir4.style.display === 'block' && cir7.style.display === 'block')) && (crs1.style.display === 'none' && cir1.style.display === 'none')) {
        cir1.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }

    // second col
    else if (((crs2.style.display === 'block' && crs5.style.display === 'block') || (cir2.style.display === 'block' && cir5.style.display === 'block')) && (crs8.style.display === 'none' && cir8.style.display === 'none')) {
        cir8.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs2.style.display === 'block' && crs8.style.display === 'block') || (cir2.style.display === 'block' && cir8.style.display === 'block')) && (crs5.style.display === 'none' && cir5.style.display === 'none')) {
        cir5.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs5.style.display === 'block' && crs8.style.display === 'block') || (cir5.style.display === 'block' && cir8.style.display === 'block')) && (crs2.style.display === 'none' && cir2.style.display === 'none')) {
        cir2.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }

    // third col
    else if (((crs3.style.display === 'block' && crs6.style.display === 'block') || (cir3.style.display === 'block' && cir6.style.display === 'block')) && (crs9.style.display === 'none' && cir9.style.display === 'none')) {
        cir9.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs3.style.display === 'block' && crs9.style.display === 'block') || (cir3.style.display === 'block' && cir9.style.display === 'block')) && (crs6.style.display === 'none' && cir6.style.display === 'none')) {
        cir6.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs6.style.display === 'block' && crs9.style.display === 'block') || (cir6.style.display === 'block' && cir9.style.display === 'block')) && (crs3.style.display === 'none' && cir3.style.display === 'none')) {
        cir3.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }

    // left angle
    else if (((crs1.style.display === 'block' && crs5.style.display === 'block') || (cir1.style.display === 'block' && cir5.style.display === 'block')) && (crs9.style.display === 'none' && cir9.style.display === 'none')) {
        cir9.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs1.style.display === 'block' && crs9.style.display === 'block') || (cir1.style.display === 'block' && cir9.style.display === 'block')) && (crs5.style.display === 'none' && cir5.style.display === 'none')) {
        cir5.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs5.style.display === 'block' && crs9.style.display === 'block') || (cir5.style.display === 'block' && cir9.style.display === 'block')) && (crs1.style.display === 'none' && cir1.style.display === 'none')) {
        cir1.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }

    // left angle
    else if (((crs3.style.display === 'block' && crs5.style.display === 'block') || (cir3.style.display === 'block' && cir5.style.display === 'block')) && (crs7.style.display === 'none' && cir7.style.display === 'none')) {
        cir7.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs3.style.display === 'block' && crs7.style.display === 'block') || (cir3.style.display === 'block' && cir7.style.display === 'block')) && (crs5.style.display === 'none' && cir5.style.display === 'none')) {
        cir5.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else if (((crs5.style.display === 'block' && crs7.style.display === 'block') || (cir5.style.display === 'block' && cir7.style.display === 'block')) && (crs3.style.display === 'none' && cir3.style.display === 'none')) {
        cir3.style.display = 'block';
        move_count++;
        if (comp_check()) {
            console.log('Match ended.');
        }
        else {
            document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
        }
        return;
    }
    else {
        let pos = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth'];
        if (cir1.style.display === 'block' || crs1.style.display === 'block') {
            for (let i = 0; i < pos.length; i++) {
                if (pos[i] === 'first') {
                    pos.splice(i, 1);
                }
            }
        }
        if (cir2.style.display === 'block' || crs2.style.display === 'block') {
            for (let i = 0; i < pos.length; i++) {
                if (pos[i] === 'second') {
                    pos.splice(i, 1);
                }
            }
        }
        if (cir3.style.display === 'block' || crs3.style.display === 'block') {
            for (let i = 0; i < pos.length; i++) {
                if (pos[i] === 'third') {
                    pos.splice(i, 1);
                }
            }
        }
        if (cir4.style.display === 'block' || crs4.style.display === 'block') {
            for (let i = 0; i < pos.length; i++) {
                if (pos[i] === 'fourth') {
                    pos.splice(i, 1);
                }
            }
        }
        if (cir5.style.display === 'block' || crs5.style.display === 'block') {
            for (let i = 0; i < pos.length; i++) {
                if (pos[i] === 'fifth') {
                    pos.splice(i, 1);
                }
            }
        }
        if (cir6.style.display === 'block' || crs6.style.display === 'block') {
            for (let i = 0; i < pos.length; i++) {
                if (pos[i] === 'sixth') {
                    pos.splice(i, 1);
                }
            }
        }
        if (cir7.style.display === 'block' || crs7.style.display === 'block') {
            for (let i = 0; i < pos.length; i++) {
                if (pos[i] === 'seventh') {
                    pos.splice(i, 1);
                }
            }
        }
        if (cir8.style.display === 'block' || crs8.style.display === 'block') {
            for (let i = 0; i < pos.length; i++) {
                if (pos[i] === 'eighth') {
                    pos.splice(i, 1);
                }
            }
        }
        if (cir9.style.display === 'block' || crs9.style.display === 'block') {
            for (let i = 0; i < pos.length; i++) {
                if (pos[i] === 'nine') {
                    pos.splice(i, 1);
                }
            }
        }
        console.log(pos);
        let temp = Math.floor(Math.random() * pos.length);
        let item = pos[temp];
        if (item === 'first') {
            cir1.style.display = 'block';
        }
        else if (item === 'second') {
            cir2.style.display = 'block';
        }
        else if (item === 'third') {
            cir3.style.display = 'block';
        }
        else if (item === 'fourth') {
            cir4.style.display = 'block';
        }
        else if (item === 'fifth') {
            cir5.style.display = 'block';
        }
        else if (item === 'sixth') {
            cir6.style.display = 'block';
        }
        else if (item === 'seventh') {
            cir7.style.display = 'block';
        }
        else if (item === 'eighth') {
            cir8.style.display = 'block';
        }
        else if (item === 'nine') {
            cir9.style.display = 'block';
        }
        else {
            comp_move();
        }
        move_count++;
        document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
    }
    comp_check();
}

const scopes_comp = [
    {
        id: "comp_scope_1", child1: "cross1_comp", child2: "circle1_comp", function: function () {
            let c1 = document.getElementById('cross1_comp');
            let c2 = document.getElementById('circle1_comp');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    c1.style.display = "block";
                    move_count++;
                    if (comp_check()) {
                        console.log('Match ended.');
                    }
                    else {
                        document.getElementById('comp_turn').innerHTML = `${player2}'s turn`;
                        setTimeout(comp_move, 2000);
                    }
                }
            }
        }
    },
    {
        id: "comp_scope_2", child1: "cross2_comp", child2: "circle2_comp", function: function () {
            let c1 = document.getElementById('cross2_comp');
            let c2 = document.getElementById('circle2_comp');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    c1.style.display = "block";
                    move_count++;
                    if (comp_check()) {
                        console.log('Match ended.');
                    }
                    else {
                        document.getElementById('comp_turn').innerHTML = `${player2}'s turn`;
                        setTimeout(comp_move, 2000);
                    }
                }
            }
        }
    },
    {
        id: "comp_scope_3", child1: "cross3_comp", child2: "circle3_comp", function: function () {
            let c1 = document.getElementById('cross3_comp');
            let c2 = document.getElementById('circle3_comp');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    c1.style.display = "block";
                    move_count++;
                    if (comp_check()) {
                        console.log('Match ended.');
                    }
                    else {
                        document.getElementById('comp_turn').innerHTML = `${player2}'s turn`;
                        setTimeout(comp_move, 2000);
                    }
                }
            }
        }
    },
    {
        id: "comp_scope_4", child1: "cross4_comp", child2: "circle4_comp", function: function () {
            let c1 = document.getElementById('cross4_comp');
            let c2 = document.getElementById('circle4_comp');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    c1.style.display = "block";
                    move_count++;
                    if (comp_check()) {
                        console.log('Match ended.');
                    }
                    else {
                        document.getElementById('comp_turn').innerHTML = `${player2}'s turn`;
                        setTimeout(comp_move, 2000);
                    }
                }
            }
        }
    },
    {
        id: "comp_scope_5", child1: "cross5_comp", child2: "circle5_comp", function: function () {
            let c1 = document.getElementById('cross5_comp');
            let c2 = document.getElementById('circle5_comp');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    c1.style.display = "block";
                    move_count++;
                    if (comp_check()) {
                        console.log('Match ended.');
                    }
                    else {
                        document.getElementById('comp_turn').innerHTML = `${player2}'s turn`;
                        setTimeout(comp_move, 2000);
                    }
                }
            }
        }
    },
    {
        id: "comp_scope_6", child1: "cross6_comp", child2: "circle6_comp", function: function () {
            let c1 = document.getElementById('cross6_comp');
            let c2 = document.getElementById('circle6_comp');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    c1.style.display = "block";
                    move_count++;
                    if (comp_check()) {
                        console.log('Match ended.');
                    }
                    else {
                        document.getElementById('comp_turn').innerHTML = `${player2}'s turn`;
                        setTimeout(comp_move, 2000);
                    }
                }
            }
        }
    },
    {
        id: "comp_scope_7", child1: "cross7_comp", child2: "circle7_comp", function: function () {
            let c1 = document.getElementById('cross7_comp');
            let c2 = document.getElementById('circle7_comp');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    c1.style.display = "block";
                    move_count++;
                    if (comp_check()) {
                        console.log('Match ended.');
                    }
                    else {
                        document.getElementById('comp_turn').innerHTML = `${player2}'s turn`;
                        setTimeout(comp_move, 2000);
                    }
                }
            }
        }
    },
    {
        id: "comp_scope_8", child1: "cross8_comp", child2: "circle8_comp", function: function () {
            let c1 = document.getElementById('cross8_comp');
            let c2 = document.getElementById('circle8_comp');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    c1.style.display = "block";
                    move_count++;
                    if (comp_check()) {
                        console.log('Match ended.');
                    }
                    else {
                        document.getElementById('comp_turn').innerHTML = `${player2}'s turn`;
                        setTimeout(comp_move, 2000);
                    }
                }
            }
        }
    },
    {
        id: "comp_scope_9", child1: "cross9_comp", child2: "circle9_comp", function: function () {
            let c1 = document.getElementById('cross9_comp');
            let c2 = document.getElementById('circle9_comp');
            if (move_count % 2 !== 0) {
                if (c1.style.display === 'block' || c2.style.display === 'block') {
                    alert("This scope is already occupied.");
                }
                else {
                    c1.style.display = "block";
                    move_count++;
                    if (comp_check()) {
                        console.log('Match ended.');
                    }
                    else {
                        document.getElementById('comp_turn').innerHTML = `${player2}'s turn`;
                        setTimeout(comp_move, 2000);
                    }
                }
            }
        }
    },
]

const comp_quit = () => {
    let val = document.getElementById('welcome_div');
    let val2 = document.getElementById('comp_result_div');
    val2.style.display = 'none';
    val.style.display = 'flex';
    window.location.reload(false);
}

const comp_rematch = () => {
    let val = document.getElementById('comp_gameboard');
    let val2 = document.getElementById('comp_result_div');
    val2.style.display = 'none';
    val.style.display = 'block';
    document.getElementById('comp_turn').innerHTML = `${player1}'s turn`;
    move_count = 1;
    let x1 = document.getElementById("cross1_comp");
    let x2 = document.getElementById("cross2_comp");
    let x3 = document.getElementById("cross3_comp");
    let x4 = document.getElementById("cross4_comp");
    let x5 = document.getElementById("cross5_comp");
    let x6 = document.getElementById("cross6_comp");
    let x7 = document.getElementById("cross7_comp");
    let x8 = document.getElementById("cross8_comp");
    let x9 = document.getElementById("cross9_comp");

    let y1 = document.getElementById("circle1_comp");
    let y2 = document.getElementById("circle2_comp");
    let y3 = document.getElementById("circle3_comp");
    let y4 = document.getElementById("circle4_comp");
    let y5 = document.getElementById("circle5_comp");
    let y6 = document.getElementById("circle6_comp");
    let y7 = document.getElementById("circle7_comp");
    let y8 = document.getElementById("circle8_comp");
    let y9 = document.getElementById("circle9_comp");
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

const comp_result = (player, p1, p2, player1, player2) => {
    let gameboard = document.getElementById('comp_gameboard');
    let result_div = document.getElementById('comp_result_div');
    let match_result = document.getElementById('comp_match_result');
    let p1_win = document.getElementById('comp_p1_win');
    let p2_win = document.getElementById('comp_p2_win');

    gameboard.style.display = 'none';
    result_div.style.display = 'flex';
    match_result.innerHTML = `${player} has won this match 🥇 `;
    p1_win.innerHTML = `${player1} : ${p1}`;
    p2_win.innerHTML = `${player2} : ${p2}`;

}



const comp_check = () => {
    let x1 = document.getElementById("cross1_comp");
    let x2 = document.getElementById("cross2_comp");
    let x3 = document.getElementById("cross3_comp");
    let x4 = document.getElementById("cross4_comp");
    let x5 = document.getElementById("cross5_comp");
    let x6 = document.getElementById("cross6_comp");
    let x7 = document.getElementById("cross7_comp");
    let x8 = document.getElementById("cross8_comp");
    let x9 = document.getElementById("cross9_comp");

    let y1 = document.getElementById("circle1_comp");
    let y2 = document.getElementById("circle2_comp");
    let y3 = document.getElementById("circle3_comp");
    let y4 = document.getElementById("circle4_comp");
    let y5 = document.getElementById("circle5_comp");
    let y6 = document.getElementById("circle6_comp");
    let y7 = document.getElementById("circle7_comp");
    let y8 = document.getElementById("circle8_comp");
    let y9 = document.getElementById("circle9_comp");

    let player;

    if (x1.style.display === "block" && x2.style.display === "block" && x3.style.display === "block") {
        player = player1;
        comp_result(player, ++p1_count, p2_count, player1, player2);
        return true;
    }
    if (x4.style.display === "block" && x5.style.display === "block" && x6.style.display === "block") {
        player = player1;
        comp_result(player, ++p1_count, p2_count, player1, player2);
        return true;
    }
    if (x7.style.display === "block" && x8.style.display === "block" && x9.style.display === "block") {
        player = player1;
        comp_result(player, ++p1_count, p2_count, player1, player2);
        return true;
    }
    if (x1.style.display === "block" && x4.style.display === "block" && x7.style.display === "block") {
        player = player1;
        comp_result(player, ++p1_count, p2_count, player1, player2);
        return true;
    }
    if (x2.style.display === "block" && x5.style.display === "block" && x8.style.display === "block") {
        player = player1;
        comp_result(player, ++p1_count, p2_count, player1, player2);
        return true;
    }
    if (x3.style.display === "block" && x6.style.display === "block" && x9.style.display === "block") {
        player = player1;
        comp_result(player, ++p1_count, p2_count, player1, player2);
        return true;
    }
    if (x1.style.display === "block" && x5.style.display === "block" && x9.style.display === "block") {
        player = player1;
        comp_result(player, ++p1_count, p2_count, player1, player2);
        return true;
    }
    if (x3.style.display === "block" && x5.style.display === "block" && x7.style.display === "block") {
        player = player1;
        comp_result(player, ++p1_count, p2_count, player1, player2);
        return true;
    }


    if (y1.style.display === "block" && y2.style.display === "block" && y3.style.display === "block") {
        player = player2;
        comp_result(player, p1_count, ++p2_count, player1, player2);
        return true;
    }
    if (y4.style.display === "block" && y5.style.display === "block" && y6.style.display === "block") {
        player = player2;
        comp_result(player, p1_count, ++p2_count, player1, player2);
        return true;
    }
    if (y7.style.display === "block" && y8.style.display === "block" && y9.style.display === "block") {
        player = player2;
        comp_result(player, p1_count, ++p2_count, player1, player2);
        return true;
    }
    if (y1.style.display === "block" && y4.style.display === "block" && y7.style.display === "block") {
        player = player2;
        comp_result(player, p1_count, ++p2_count, player1, player2);
        return true;
    }
    if (y2.style.display === "block" && y5.style.display === "block" && y8.style.display === "block") {
        player = player2;
        comp_result(player, p1_count, ++p2_count, player1, player2);
        return true;
    }
    if (y3.style.display === "block" && y6.style.display === "block" && y9.style.display === "block") {
        player = player2;
        comp_result(player, p1_count, ++p2_count, player1, player2);
        return true;
    }
    if (y1.style.display === "block" && y5.style.display === "block" && y9.style.display === "block") {
        player = player2;
        comp_result(player, p1_count, ++p2_count, player1, player2);
        return true;
    }
    if (y3.style.display === "block" && y5.style.display === "block" && y7.style.display === "block") {
        player = player2;
        comp_result(player, p1_count, ++p2_count, player1, player2);
        return true;
    }

    if ((x1.style.display === "block" || y1.style.display === "block") && (x2.style.display === "block" || y2.style.display === "block") && (x3.style.display === "block" || y3.style.display === "block") && (x4.style.display === "block" || y4.style.display === "block") && (x5.style.display === "block" || y5.style.display === "block") && (x6.style.display === "block" || y6.style.display === "block") && (x7.style.display === "block" || y7.style.display === "block") && (x8.style.display === "block" || y8.style.display === "block") && (x9.style.display === "block" || y9.style.display === "block")) {

        if (x1.style.display === "block" && x2.style.display === "block" && x3.style.display === "block") {
            player = player1;
            comp_result(player, ++p1_count, p2_count, player1, player2);
            return true;
        }
        else if (x4.style.display === "block" && x5.style.display === "block" && x6.style.display === "block") {
            player = player1;
            comp_result(player, ++p1_count, p2_count, player1, player2);
            return true;
        }
        else if (x7.style.display === "block" && x8.style.display === "block" && x9.style.display === "block") {
            player = player1;
            comp_result(player, ++p1_count, p2_count, player1, player2);
            return true;
        }
        else if (x1.style.display === "block" && x4.style.display === "block" && x7.style.display === "block") {
            player = player1;
            comp_result(player, ++p1_count, p2_count, player1, player2);
            return true;
        }
        else if (x2.style.display === "block" && x5.style.display === "block" && x8.style.display === "block") {
            player = player1;
            comp_result(player, ++p1_count, p2_count, player1, player2);
            return true;
        }
        else if (x3.style.display === "block" && x6.style.display === "block" && x9.style.display === "block") {
            player = player1;
            comp_result(player, ++p1_count, p2_count, player1, player2);
            return true;
        }
        else if (x1.style.display === "block" && x5.style.display === "block" && x9.style.display === "block") {
            player = player1;
            comp_result(player, ++p1_count, p2_count, player1, player2);
            return true;
        }
        else if (x3.style.display === "block" && x5.style.display === "block" && x7.style.display === "block") {
            player = player1;
            comp_result(player, ++p1_count, p2_count, player1, player2);
            return true;
        }


        else if (y1.style.display === "block" && y2.style.display === "block" && y3.style.display === "block") {
            player = player2;
            comp_result(player, p1_count, ++p2_count, player1, player2);
            return true;
        }
        else if (y4.style.display === "block" && y5.style.display === "block" && y6.style.display === "block") {
            player = player2;
            comp_result(player, p1_count, ++p2_count, player1, player2);
            return true;
        }
        else if (y7.style.display === "block" && y8.style.display === "block" && y9.style.display === "block") {
            player = player2;
            comp_result(player, p1_count, ++p2_count, player1, player2);
            return true;
        }
        else if (y1.style.display === "block" && y4.style.display === "block" && y7.style.display === "block") {
            player = player2;
            comp_result(player, p1_count, ++p2_count, player1, player2);
            return true;
        }
        else if (y2.style.display === "block" && y5.style.display === "block" && y8.style.display === "block") {
            player = player2;
            comp_result(player, p1_count, ++p2_count, player1, player2);
            return true;
        }
        else if (y3.style.display === "block" && y6.style.display === "block" && y9.style.display === "block") {
            player = player2;
            comp_result(player, p1_count, ++p2_count, player1, player2);
            return true;
        }
        else if (y1.style.display === "block" && y5.style.display === "block" && y9.style.display === "block") {
            player = player2;
            comp_result(player, p1_count, ++p2_count, player1, player2);
            return true;
        }
        else if (y3.style.display === "block" && y5.style.display === "block" && y7.style.display === "block") {
            player = player2;
            comp_result(player, p1_count, ++p2_count, player1, player2);
            return true;
        }
        else {
            player = "None of them";
            comp_result(player, p1_count, p2_count, player1, player2);
            return false;
        }
    }
}


export { scopes_comp, getNameComp, comp_quit, comp_rematch, comp_check }
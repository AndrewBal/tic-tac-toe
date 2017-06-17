window.onload = function() {

    var step = 0;
    var block0 = document.getElementById('block0');
    var block1 = document.getElementById('block1');
    var block2 = document.getElementById('block2');
    var block3 = document.getElementById('block3');
    var block4 = document.getElementById('block4');
    var block5 = document.getElementById('block5');
    var block6 = document.getElementById('block6');
    var block7 = document.getElementById('block7');
    var block8 = document.getElementById('block8');
    var grid = [
        block0,
        block1,
        block2,
        block3,
        block4,
        block5,
        block6,
        block7,
        block8,
    ];



    function checkWin() {
        if (grid[0].innerHTML == 'x' && grid[1].innerHTML == 'x' && grid[2].innerHTML == 'x') {
            document.getElementById("result").innerHTML = "win x";
        } else if (grid[3].innerHTML == 'x' && grid[4].innerHTML == 'x' && grid[5].innerHTML == 'x') {
            document.getElementById("result").innerHTML = "win x";
        } else if (grid[6].innerHTML == 'x' && grid[7].innerHTML == 'x' && grid[8].innerHTML == 'x') {
            document.getElementById("result").innerHTML = "win x";
        } else if (grid[0].innerHTML == 'x' && grid[3].innerHTML == 'x' && grid[6].innerHTML == 'x') {
            document.getElementById("result").innerHTML = "win x";
        } else if (grid[1].innerHTML == 'x' && grid[4].innerHTML == 'x' && grid[7].innerHTML == 'x') {
            document.getElementById("result").innerHTML = "win x";
        } else if (grid[2].innerHTML == 'x' && grid[5].innerHTML == 'x' && grid[8].innerHTML == 'x') {
            document.getElementById("result").innerHTML = "win x";
        } else if (grid[0].innerHTML == 'x' && grid[4].innerHTML == 'x' && grid[8].innerHTML == 'x') {
            document.getElementById("result").innerHTML = "win x";
        } else if (grid[2].innerHTML == 'x' && grid[4].innerHTML == 'x' && grid[6].innerHTML == 'x') {
            document.getElementById("result").innerHTML = "win x";
        } else if (grid[0].innerHTML == '0' && grid[1].innerHTML == '0' && grid[2].innerHTML == '0') {
            document.getElementById("result").innerHTML = "win 0";
        } else if (grid[3].innerHTML == '0' && grid[4].innerHTML == '0' && grid[5].innerHTML == '0') {
            document.getElementById("result").innerHTML = "win 0";
        } else if (grid[6].innerHTML == '0' && grid[7].innerHTML == '0' && grid[8].innerHTML == '0') {
            document.getElementById("result").innerHTML = "win 0";
        } else if (grid[0].innerHTML == '0' && grid[3].innerHTML == '0' && grid[6].innerHTML == '0') {
            document.getElementById("result").innerHTML = "win 0";
        } else if (grid[1].innerHTML == '0' && grid[4].innerHTML == '0' && grid[7].innerHTML == '0') {
            document.getElementById("result").innerHTML = "win 0";
        } else if (grid[2].innerHTML == '0' && grid[5].innerHTML == '0' && grid[8].innerHTML == '0') {
            document.getElementById("result").innerHTML = "win 0";
        } else if (grid[0].innerHTML == '0' && grid[4].innerHTML == '0' && grid[8].innerHTML == '0') {
            document.getElementById("result").innerHTML = "win 0";
        } else if (grid[2].innerHTML == '0' && grid[4].innerHTML == '0' && grid[6].innerHTML == '0') {
            document.getElementById("result").innerHTML = "win 0";
        }
    }


    document.getElementById('tic_tac').onclick = function(event) {
        if (event.target.className == 'block') {

            if (event.target.innerHTML == "") {
                if (step % 2 == 0) {
                    event.target.innerHTML = 'x';
                } else {
                    event.target.innerHTML = '0';
                }
                step++;
            }

            checkWin();

        }

    }




}

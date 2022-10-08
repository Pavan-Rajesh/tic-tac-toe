var count = 9;
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var w = 0;
var cy = 0;
var k = 0;
$("#start-Button").on("click", function () {
    restart();
    count = 9;
    win = 0;
    $("#dataset").text("player-1 Turn");

});

$("#board").on("click", "div", function (e) {

    if (count < 10 && count > 0) {

        console.log($(this).attr("value"));

        const c = $(this).attr("value");
        if (count % 2 == 0) {
            $("#dataset").text("player-1 Turn");
            if (arr[c] == 0) {
                $(this).css("background-color", "hotpink");
                arr[c] = 2;
                count = count - 1;

            } else {

                console.log("it is occupied");
            }

            ;
            if (checkwinner2(arr)) {
                $("#dataset").text("player-2 wins");
                $("label").addClass("win");
                count = 0;
            }




        } else {

            if (arr[c] == 0) {
                $("#dataset").text("player-2 Turn");
                arr[c] = 1;

                $(this).css("background-color", "blue");

                count = count - 1;


            } else {

                console.log("it is occupied");
            }

            if (checkwinner1(arr)) {
                $("#dataset").text("player-1 wins");
                $("label").addClass("win");
                count = 0;

            }

        }

        k = k + 1;
        if (count == 0 && k == 9) {
            $("#dataset").text("Game Over");
            $("label").removeClass("win");
            $("label").addClass("lose");

        }
    }

});






function restart() {
    $("#board").children("div").each(function () {
        $(this).css("background-color", "black");
    });
    $("label").removeClass("win");
    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    k = 0
}






function checkwinner2(Varr) {

    var nArr = [
        [Varr[0], Varr[1], Varr[2]],
        [Varr[3], Varr[4], Varr[5]],
        [Varr[6], Varr[7], Varr[8]]
    ];



    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (nArr[i][j] == 2) {
                cy = cy + 1;
            }
        }
        if (cy == 3) {
            return 1;
        } else {
            cy = 0;
        }
    }
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (nArr[j][i] == 2) {
                cy = cy + 1;
            }
        }
        if (cy == 3) {
            return 1;
        } else {
            cy = 0;
        }
    }
    if (nArr[0][0] == 2 && nArr[1][1] == 2 && nArr[2][2] == 2) {
        return 1;
    } else if (nArr[0][2] == 2 && nArr[1][1] == 2 && nArr[2][0] == 2) {
        return 1;
    }

    return 0;
}


function checkwinner1(Varr) {
    var nArr = [
        [Varr[0], Varr[1], Varr[2]],
        [Varr[3], Varr[4], Varr[5]],
        [Varr[6], Varr[7], Varr[8]]
    ];



    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (nArr[i][j] == 1) {
                cy = cy + 1;

            }
        }
        if (cy == 3) {

            return 1;
        } else {
            cy = 0;
        }
    }
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (nArr[j][i] == 1) {
                cy = cy + 1;

            }

        }
        if (cy == 3) {
            return 1;
        } else {
            cy = 0;
        }
    }
    if (nArr[0][0] == 1 && nArr[1][1] == 1 && nArr[2][2] == 1) {
        return 1;
    } else if (nArr[0][2] == 1 && nArr[1][1] == 1 && nArr[2][0] == 1) {
        return 1;
    }

    return 0;

}
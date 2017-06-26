function Game() {
    var i, j;
    var vector = new Array(10);
    var matrix = new Array(4);
    this.start = function () {
        this.init();
        this.initMatrix();
        this.printMatrix();
    };

    this.hint = function () {
        alert("Muta cate o pisea apropiata de casuta libera pentru a pune cifrele in ordine");
    };

    this.init = function () {
        for (i = 0; i < 9; i++)
            vector[i] = 0;
    };

    this.createMatrix = function () {
        for (i = 1; i <= 3; i++)
            matrix[i] = new Array(4);
    };

    this.initMatrix = function () {
        this.createMatrix();
        for (var i = 1; i <= 3; i++) {
            for (var j = 1; j <= 3; j++) {
                var rand = Math.floor(Math.random() * 9);
                if (vector[rand] === 0) {
                    vector[rand] = 1;
                    matrix[i][j] = rand;
                } else {
                    while (vector[rand] === 1)
                        var rand = Math.floor(Math.random() * 9);
                    vector[rand] = 1;
                    matrix[i][j] = rand;
                }
            }
        }
    };

    this.printMatrix = function () {
        var output = '';
        for (var i = 1; i <= 3; i++) {
            output += '<div>';
            for (var j = 1; j <= 3; j++)
                output += " <img src=\"img/" + matrix[i][j] + ".jpg\" " + "onclick=\"game.move(" + i + "," + j + ")\" />";
            output += '</div>';
        }
        document.getElementById('container').innerHTML = output;
        console.log(output);
    };

    this.move = function (id1, id2) {
        if (this.check(id1, id2) == true)
            this.change(id1, id2);
        this.printMatrix();
    };

    this.check = function (x, y) {
        var iAux, jAux;
        for (var i = 1; i <= 3; i++)
            for (var j = 1; j <= 3; j++)
                if (matrix[i][j] === 0) {
                    iAux = i;
                    jAux = j;
                }
        if (iAux - 1 === x && jAux === y)
            return true;
        else if (iAux + 1 === x && jAux === y)
            return true;
        else if (iAux === x && jAux - 1 === y)
            return true;
        else if (iAux === x && jAux + 1 === y)
            return true;
        else return false;
    };

    this.change = function (x, y) {
        var iAux, jAux;
        for (var i = 1; i <= 3; i++)
            for (var j = 1; j <= 3; j++)
                if (matrix[i][j] === 0) {
                    iAux = i;
                    jAux = j;
                }
        matrix[iAux][jAux] = matrix[x][y];
        matrix[x][y] = 0;
        if (this.checkWin() === true)
            alert("Winner!!!");
    };

    this.checkWin = function () {
        var ok = 0;
        var winMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
        for (var i = 1; i <= 3; i++)
            for (var j = 1; j <= 3; j++)
                if (matrix[i][j] != winMatrix[i - 1][j - 1])
                    ok = 1;
        if (ok == 0) 
            return true;
        return false;
    }

    this.restart = function () {
        var response = confirm("The game will be reset, are you shure?");
        if (response === true)
            this.start();
    }
};

var game = new Game();
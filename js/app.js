"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var game_1 = require("./game");
var utility_1 = require("./utility");
var newGame;
document.getElementById('startGame').addEventListener('click', function () {
    var player = new player_1.default();
    player.name = utility_1.default.getInputValue('playername');
    var problemCount = Number(utility_1.default.getInputValue('problemCount'));
    var factor = Number(utility_1.default.getInputValue('factor'));
    newGame = new game_1.default(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map
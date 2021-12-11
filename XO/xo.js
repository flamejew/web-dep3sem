var movesCounter = 0;
var usedСells = [];
var chars = ["X", "O"];
var game_map = []
var gg_vp = false;
var winner = " "


for (let i = 0; i < 9; i++) {
    game_map.push("");
 }


 function sum(arr){
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}


function move(id){
    if(!usedСells.includes(id) && !gg_vp){
        document.getElementById(id).textContent = chars[movesCounter % 2];
        game_map[Number(id)] = chars[movesCounter % 2];
        usedСells.push(id);
        movesCounter++;

        if(     ((game_map[0] == game_map[1]) && (game_map[1] == game_map[2]) && (chars.includes(game_map[0])))
            ||  ((game_map[3] == game_map[4]) && (game_map[4] == game_map[5]) && (chars.includes(game_map[3])))
            ||  ((game_map[6] == game_map[7]) && (game_map[7] == game_map[8]) && (chars.includes(game_map[6])))
            ||  ((game_map[0] == game_map[4]) && (game_map[4]== game_map[8]) && (chars.includes(game_map[8])))
            ||  ((game_map[1] == game_map[4]) && (game_map[4]== game_map[7]) && (chars.includes(game_map[4])))
            ||  ((game_map[0] == game_map[3]) && (game_map[3]== game_map[6]) && (chars.includes(game_map[3])))
            ||  ((game_map[2] == game_map[5]) && (game_map[5]== game_map[8]) && (chars.includes(game_map[8]))) 
            ){

                winner = chars[(movesCounter - 1 ) % 2];
                gg_vp = true;
                document.getElementById("win").textContent = `${winner} одержал победу!`
                document.getElementById("stats").textContent = `Всего ходов: ${movesCounter}`;
            }
		
        else {
            if(!game_map.includes("")) {

                document.getElementById("win").textContent = `Никто не проиграл, ну и хорошо`
                document.getElementById("stats").textContent = `Всего ходов: ${movesCounter}`;

            }
        }
    }
	
	else {
        return;
    }
}
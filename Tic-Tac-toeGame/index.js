 let playerFlag = false
        let playerturn = document.getElementById("playerturn")
        let winner = false
        playerturn.innerHTML = "Player-1 = O"
        let gridItem1 = document.getElementById("grid-item1")
        let gridItem2 = document.getElementById("grid-item2")
        let gridItem3 = document.getElementById("grid-item3")
        let gridItem4 = document.getElementById("grid-item4")
        let gridItem5 = document.getElementById("grid-item5")
        let gridItem6 = document.getElementById("grid-item6")
        let gridItem7 = document.getElementById("grid-item7")
        let gridItem8 = document.getElementById("grid-item8")
        let gridItem9 = document.getElementById("grid-item9")
        function grid1() {
            if(winner == false){

                if (gridItem1.innerHTML == "") {
                    if (playerFlag == false) {
                        gridItem1.innerHTML = "O"
                        playerturn.innerHTML = "Player-2 = X"
                        playerFlag = true
                    }
                    else if (playerFlag == true) {
                        gridItem1.innerHTML = "X"
                        playerturn.innerHTML = "Player-1 = O"
                        playerFlag = false
                    }
                }
                winnerAlert()
            }
        } function grid2() {
            if(winner == false){
            
                if (gridItem2.innerHTML == "") {
                    if (playerFlag == false) {
                        gridItem2.innerHTML = "O"
                        playerturn.innerHTML = "Player-2 = X"
                        playerFlag = true
                    }
                    else if (playerFlag == true) {
                        gridItem2.innerHTML = "X"
                        playerturn.innerHTML = "Player-1 = O"
                        playerFlag = false
                    }
                }
                winnerAlert()
            }
        } function grid3() {
            if(winner == false){

                if (gridItem3.innerHTML == "") {
                    if (playerFlag == false) {
                        gridItem3.innerHTML = "O"
                        playerturn.innerHTML = "Player-2 = X"
                        playerFlag = true
                    }
                    else if (playerFlag == true) {
                        gridItem3.innerHTML = "X"
                        playerturn.innerHTML = "Player-1 = O"
                        playerFlag = false
                    }
                }
                winnerAlert()
            }
            } function grid4() {
                if(winner == false){
                
                    if (gridItem4.innerHTML == "") {
                        if (playerFlag == false) {
                            gridItem4.innerHTML = "O"
                            playerturn.innerHTML = "Player-2 = X"
                    playerFlag = true
                }
                else if (playerFlag == true) {
                    gridItem4.innerHTML = "X"
                    playerturn.innerHTML = "Player-1 = O"
                    playerFlag = false
                }
            }
            winnerAlert()
        }
        } function grid5() {
            if(winner == false){
            if (gridItem5.innerHTML == "") {
                if (playerFlag == false) {
                    gridItem5.innerHTML = "O"
                    playerturn.innerHTML = "Player-2 = X"
                    playerFlag = true
                }
                else if (playerFlag == true) {
                    gridItem5.innerHTML = "X"
                    playerturn.innerHTML = "Player-1 = O"
                    playerFlag = false
                }
            }
            winnerAlert()}
        } function grid6() {
            if(winner == false){

            if (gridItem6.innerHTML == "") {
                if (playerFlag == false) {
                    gridItem6.innerHTML = "O"
                    playerturn.innerHTML = "Player-2 = X"
                    playerFlag = true
                }
                else if (playerFlag == true) {
                    gridItem6.innerHTML = "X"
                    playerturn.innerHTML = "Player-1 = O"
                    playerFlag = false
                }
            }
            winnerAlert()}
        } function grid7() {
            if(winner == false){
            if (gridItem7.innerHTML == "") {
                if (playerFlag == false) {
                    gridItem7.innerHTML = "O"
                    playerturn.innerHTML = "Player-2 = X"
                    playerFlag = true
                }
                else if (playerFlag == true) {
                    gridItem7.innerHTML = "X"
                    playerturn.innerHTML = "Player-1 = O"
                    playerFlag = false
                }
            }
            winnerAlert()}
        } function grid8() {
            if(winner == false){

            if (gridItem8.innerHTML == "") {
                if (playerFlag == false) {
                    gridItem8.innerHTML = "O"
                    playerturn.innerHTML = "Player-2 = X"
                    playerFlag = true
                }
                else if (playerFlag == true) {
                    gridItem8.innerHTML = "X"
                    playerturn.innerHTML = "Player-1 = O"
                    playerFlag = false
                }
            }
            winnerAlert()}
        } function grid9() {
            if(winner == false){

            if (gridItem9.innerHTML == "") {
                if (playerFlag == false) {
                    gridItem9.innerHTML = "O"
                    playerturn.innerHTML = "Player-2 = X"
                    playerFlag = true
                }
                else if (playerFlag == true) {
                    gridItem9.innerHTML = "X"
                    playerturn.innerHTML = "Player-1 = O"
                    playerFlag = false
                }
            }
            winnerAlert()}
        }
        function newGame() {
            playerturn.innerHTML = "Player-1 = O"
            playerFlag = false
            gridItem1.innerHTML = ""
            gridItem2.innerHTML = ""
            gridItem3.innerHTML = ""
            gridItem4.innerHTML = ""
            gridItem5.innerHTML = ""
            gridItem6.innerHTML = ""
            gridItem7.innerHTML = ""
            gridItem8.innerHTML = ""
            gridItem9.innerHTML = ""
            winner = false
        }
        function winnerAlert(){
            if(gridItem1.innerHTML=="O" && gridItem2.innerHTML=="O" && gridItem3.innerHTML == "O" 
            || gridItem4.innerHTML=="O" &&gridItem5.innerHTML=="O" &&gridItem6.innerHTML == "O" 
            || gridItem7.innerHTML=="O" &&gridItem8.innerHTML=="O" &&gridItem9.innerHTML == "O" 
            || gridItem1.innerHTML=="O" &&gridItem4.innerHTML=="O" &&gridItem7.innerHTML == "O" 
            || gridItem2.innerHTML=="O" &&gridItem5.innerHTML=="O" &&gridItem8.innerHTML == "O"
            || gridItem3.innerHTML=="O" &&gridItem6.innerHTML=="O" &&gridItem9.innerHTML == "O"
            || gridItem1.innerHTML=="O" &&gridItem5.innerHTML=="O" &&gridItem9.innerHTML == "O"
            || gridItem3.innerHTML=="O" &&gridItem5.innerHTML=="O" &&gridItem7.innerHTML == "O"){
                winner = true
                playerturn.innerHTML = "PLAYER-1 IS THE WINNER"
            }
            if(gridItem1.innerHTML=="X" && gridItem2.innerHTML=="X" && gridItem3.innerHTML == "X" 
            || gridItem4.innerHTML=="X" &&gridItem5.innerHTML=="X" &&gridItem6.innerHTML == "X" 
            || gridItem7.innerHTML=="X" &&gridItem8.innerHTML=="X" &&gridItem9.innerHTML == "X" 
            || gridItem1.innerHTML=="X" &&gridItem4.innerHTML=="X" &&gridItem7.innerHTML == "X" 
            || gridItem2.innerHTML=="X" &&gridItem5.innerHTML=="X" &&gridItem8.innerHTML == "X"
            || gridItem3.innerHTML=="X" &&gridItem6.innerHTML=="X" &&gridItem9.innerHTML == "X"
            || gridItem1.innerHTML=="X" &&gridItem5.innerHTML=="X" &&gridItem9.innerHTML == "X"
            || gridItem3.innerHTML=="X" &&gridItem5.innerHTML=="X" &&gridItem7.innerHTML == "X"){
                winner = true
                playerturn.innerHTML = "PLAYER-2 IS THE WINNER"

            }
        }
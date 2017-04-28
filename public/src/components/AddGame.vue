<template>
    <div id="addGame" class="board">
        <h2>Add Games</h2>
        <div class="columns">
            <div class="column">
                <select class="input dropdown" name="player1" placeholder="Select Player 1">
                    <option>Name1</option>
                </select>
            </div>
            <div class="column">
                <h2 id="vs">vs</h2>
            </div>
            <div class="column">
                <select class="input dropdown" name="player2" placeholder="Select Player 2">
                    <option>Name1</option>
                </select>
            </div>
        </div>
        <h3>Score (max of 5)</h3>
        <div class="columns" id="set">
            <div class="column">
                <input class="input" name="player1Score" placeholder="Player 1's Score" />
            </div>
            <div class="column"></div>
            <div class="column">
                <input class="input" name="player2Score" placeholder="Player 2's Score" />
            </div>
        </div>
        <button class="button is-medium" id="addSet">Add Set</button>
        <button class="button is-medium" id="addGame">Add Game</button>
    </div>
</template>

<style scoped lang="scss">
    #vs {
        margin-top: 20px;
    }
    .input {
        width: 150px;
        text-align: center;
    }
    
    #set {
        margin-bottom: 0;
    }
    
    #addSet {
        margin-top: 0px;
        background: rgba(0, 0, 0, 0.2);
    }
</style>

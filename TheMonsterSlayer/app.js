new Vue({
    el: '#app',
    data: {
        isGameActive: false,
        gameHistory: [],
        playerHealth: 100,
        monsterHealth: 100
    },
    computed: {
        progressBarPlayer: function() {
            return { width: this.playerHealth + '%' }
        },
        progressBarMonster: function() {
            return {width: this.monsterHealth + '%'}
        }
    },
    methods: {
        onStartGame: function() {
            this.isGameActive = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameHistory = [];
        },

        onAttack: function(event, isSpecial = false) {
            let range = 10;

            if (isSpecial) {
                range = 20;
            }

            // Calculate random damage
            const monsterRandom = Math.floor((Math.random() * range) + 1);
            const playerRandom = Math.floor((Math.random() * range) + 1);

            // Calculate Monster health
            if (this.monsterHealth - playerRandom < 0) {
                this.monsterHealth = 0;
            } else {
                this.monsterHealth -= playerRandom;
            }

            // Calculate Player health
            if (this.playerHealth - monsterRandom < 0) {
                this.playerHealth = 0;
            } else {
                this.playerHealth -= monsterRandom;
            }

            // Log moves
            this.gameHistory.unshift('Monster hits Player for ' + monsterRandom);
            this.gameHistory.unshift('Player hits Monster for ' + playerRandom);
        },

        onHeal: function() {
            const range = 10;

            // Calculate random damage
            const monsterRandom = Math.floor((Math.random() * range) + 1);
            const playerRandom = Math.floor((Math.random() * range) + 1);

            // Calculate Player health after attack
            if (this.playerHealth - monsterRandom < 0) {
                this.playerHealth = 0;
            } else {
                this.playerHealth -= monsterRandom;
            }

            // Calculate Player health after heal
            if (this.playerHealth + playerRandom > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += playerRandom;
            }

            // Log moves
            this.gameHistory.unshift('Monster hits Player for ' + monsterRandom);
            this.gameHistory.unshift('Player heals for ' + playerRandom);
        }
    }
});
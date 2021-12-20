Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      roundCounter: 0,
      winner: null,
    };
  },
  computed: {
    monsterBarStyles() {
      const width = this.monsterHealth < 0 ? 0 : this.monsterHealth;
      return { width: `${width}%` };
    },
    playerBarStyles() {
      const width = this.playerHealth < 0 ? 0 : this.playerHealth;
      return { width: `${width}%` };
    },
    specialAttackDisabled() {
      return this.roundCounter < 3;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0) {
        if (this.monsterHealth <= 0) {
          this.winner = 'draw';
        } else {
          this.winner = 'monster';
        }
      }
    },
    monsterHealth(value) {
      if (value <= 0) {
        if (this.playerHealth <= 0) {
          this.winner = 'draw';
        } else {
          this.winner = 'player';
        }
      }
    },
  },
  methods: {
    attackMonster() {
      this.roundCounter++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.roundCounter = 0;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.roundCounter = 0;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
    },
  },
}).mount('#game');

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

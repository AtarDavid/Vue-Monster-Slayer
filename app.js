Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      roundCounter: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: `${this.monsterHealth}%` };
    },
    playerBarStyles() {
      return { width: `${this.playerHealth}%` };
    },
    specialAttackDisabled() {
      return this.roundCounter < 3;
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
  },
}).mount('#game');

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

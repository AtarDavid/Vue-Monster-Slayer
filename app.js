Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      console.log(this.playerHealth);
    },
  },
}).mount('#game');

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

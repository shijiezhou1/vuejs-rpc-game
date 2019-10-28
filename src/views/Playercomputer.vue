<template>
  <div>
    <svg class="progress-ring" width="120" height="120">
      <circle
        class="progress-ring__circle"
        stroke="white"
        stroke-width="10"
        fill="transparent"
        r="52"
        cx="60"
        cy="60"
      />
      <text x="50%" y="50%" text-anchor="middle" stroke="white" text-size="">
        {{ clock }}
      </text>
      <text x="50%" y="70%" text-anchor="middle" stroke="white">Timer</text>
    </svg>

    <h3>Computer</h3>
    <hr />
    <h3>Player</h3>
    <h3 class="choose">Choose your move</h3>

    <button @click="choose('rock')">
      <img class="gameIcons" src="../assets/icons/rock.png" />
    </button>

    <button @click="choose('paper')">
      <img class="gameIcons" src="../assets/icons/paper.png" />
    </button>

    <button @click="choose('scissors')">
      <img class="gameIcons" src="../assets/icons/scissors.png" />
    </button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      gameMode: "playercomputer",
      userSelect: null,
      userSelectIndex: null,
      computerSelect: null,
      computerSelectIndex: null,
      selections: ["rock", "paper", "scissors"],
      resultMsg: {
        t: "Tie",
        w: "You Win!",
        l: "You Lose!"
      },
      // MATRIX TO SHOW USER SELECT FIRST, AND THE COMPUTER SELECT AFTER
      results: [["t", "w", "l"], ["l", "t", "w"], ["w", "l", "t"]],
      clock: null
    };
  },
  created() {
    this.clock = 5; // 5 SECONDS
    this.computerRandomSelect(); // COMPUTER SELECTS
    this.clockCountDown(); // START COUNT DONW
  },
  methods: {
    choose: function(userSelect) {
      this.userSelect = userSelect;
      this.userSelectIndex = this.selections.indexOf(this.userSelect);
      this.results[this.computerSelectIndex][this.userSelectIndex];
    },
    computerRandomSelect() {
      this.computerSelect = this.selections[
        Math.floor(Math.random() * this.selections.length)
      ];
      this.computerSelectIndex = this.selections.indexOf(this.computerSelect);
    },
    clockCountDown() {
      const self = this;
      setInterval(function() {
        if (self.clock == 0) {
          return;
        }
        self.clock -= 1;
        if (self.clock <= 0) {
          self.clock = 0;
          self.redirectAndStoreResult(self);
        }
      }, 1000);
    },
    redirectAndStoreResult(th) {
      th.$store.commit("setGameMode", {
        gameMode: this.gameMode,
        userPick: this.userSelect,
        computerPick: this.computerSelect,
        result: this.results[this.computerSelectIndex][this.userSelectIndex],
        msg: this.resultMsg[
          this.results[this.computerSelectIndex][this.userSelectIndex]
        ]
      });

      th.$router.push({
        path: "/result"
      });
    }
  }
};
</script>

<style lang="css">
.choose {
  color: white;
}
.gameIcons {
  width: 100px;
  height: 90px;
  cursor: pointer;
}
</style>

<template>
  <div class="about">
    <img class="gameIcons" v-bind:src="imageLists" alt="img" />

    <h1 class="msg">{{ msg }}</h1>
    <router-link class="gameModeButton" :to="'/' + backRoute"
      >Play again!</router-link
    >
    <router-link class="gameModeButton" to="/">Change mode</router-link>

    <button disabled>
      <img class="gameIcons-rock" src="../assets/icons/rock.png" />
    </button>

    <button disabled>
      <img class="gameIcons-paper" src="../assets/icons/paper.png" />
    </button>

    <button disabled>
      <img class="gameIcons-scissors" src="../assets/icons/scissors.png" />
    </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: null,
      backRoute: null,
      userPick: null,
      computerPick: null,
      imageLists: null,
      selections: ["rock", "paper", "scissors"]
    };
  },
  mounted() {
    const start_param = this.$store.getters.getGameMode.START_PARMA;
    this.msg = start_param.msg;
    this.backRoute = start_param.gameMode;
    this.imageLists = require(`../assets/icons/${start_param.computerPick}-copy.png`);

    // SHOW BOTTON SELECTION
    document.querySelector(
      `.gameIcons-${start_param.userPick}`
    ).style.opacity = 1;
  }
};
</script>

<style lang="css" scoped>
.msg {
  color: white;
  font-size: 50px;
}
.gameModeButton {
  display: inline-block;
  padding: 20px;
  text-align: center;
  color: black;
  text-decoration: none;
  font-weight: bold;
  margin: 20% 5%;
  background-color: orange;
}
.gameIcons {
  width: 100px;
  height: 90px;
}

.gameIcons-rock {
  width: 100px;
  height: 90px;
  opacity: 0.2;
}

.gameIcons-paper {
  width: 100px;
  height: 90px;
  opacity: 0.2;
}

.gameIcons-scissors {
  width: 100px;
  height: 90px;
  opacity: 0.2;
}
</style>

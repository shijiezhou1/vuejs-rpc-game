<template>
  <div class="result">
    <img class="gameIcons" v-bind:src="topSelectImage" alt="img" />

    <h1 class="msg">{{ msg }}</h1>
    <router-link class="gameModeButton" :to="'/' + backRoute"
      >Play again!</router-link
    >
    <router-link class="gameModeButton" to="/">Change mode</router-link>

    <button disabled>
      <img class="gameIcons-rock" ref="rock" src="../assets/icons/rock.png" />
    </button>

    <button disabled>
      <img
        class="gameIcons-paper"
        ref="paper"
        src="../assets/icons/paper.png"
      />
    </button>

    <button disabled>
      <img
        class="gameIcons-scissors"
        ref="scissor"
        src="../assets/icons/scissors.png"
      />
    </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: null,
      backRoute: null,
      computerPick: null,
      topSelectImage: null
    };
  },
  created() {
    const start_param = this.$store.state.START_PARMA;
    this.msg = start_param.msg;
    this.backRoute = start_param.gameMode;
    this.topSelectImage = require(`../assets/icons/${start_param.computerPick}-copy.png`);
    // HIGHTLIGHT BOTTON SELECTION
    this.$nextTick(function() {
      this.$refs[start_param.userPick].style.opacity = 1;
    });
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

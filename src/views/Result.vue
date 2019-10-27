<template>
  <div class="about">
    <img class="gameIcons" src="../assets/icons/rock-copy.png" alt="img" />

    <h1 class="status">{{ status }}</h1>
    <router-link class="gameModeButton" to="/playercomputer"
      >Play again!</router-link
    >
    <router-link class="gameModeButton" to="/">Change mode</router-link>

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
  data: function() {
    return {
      status: null
    };
  },
  created() {
    this.status = "YOU WIN!";
  }
};
</script>

<style lang="css" scoped>
.status {
    color:white;
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
</style>

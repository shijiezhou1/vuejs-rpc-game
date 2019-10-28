<template>
  <div class="home">
    <h1 class="selectGame">Select play mode</h1>
    <router-link class="gameModeButton" to="/playercomputer"
      >Player VS Computer</router-link
    >
    <router-link class="gameModeButton" to="/computercomputer"
      >Computer VS Computer</router-link
    >
  </div>
</template>

<style lang="css" scoped>
.selectGame {
  color:white;
}
.gameModeButton {
  display: block;
  padding: 20px;
  text-align: center;
  color: black;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20%;
  margin-bottom: 20%;
  background-color: orange;
}
</style>

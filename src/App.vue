<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/demo">Demo</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>


.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  // $$color-text-red;
}
// div::v-deep h1 {
//   border: 1px solid blue;
//   // color: blue;
//   color: $color-text-red;
// }


.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<template>
  <template v-if="$route.meta.layout">
    <component :is="$route.meta.layout || 'div'">
      <router-view></router-view>
    </component>
  </template>
  <template v-else>
    <router-view></router-view>
  </template>
</template>

<script setup>
</script>

<style lang="scss">
html,
body {
  padding: 0 !important;
  margin: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>

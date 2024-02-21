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

<style lang="scss" scoped>
</style>

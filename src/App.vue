<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="main-header">
      <nav class="main-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>
@import "./assets/app.scss";
</style>

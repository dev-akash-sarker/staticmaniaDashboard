<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import SideBar from "./components/SideBar.vue";
import LeftContent from "./components/LeftContent.vue";
import RightContent from "./components/RightContent.vue";
import Grid from "./components/Grid.vue";
</script>

<template>
  <div class="bg-[#101010] w-full h-screen">
    <div class="w-[1440px] mx-auto">
      <div class="grid h-screen grid-cols-[360px_1060px] gap-4">
        <!-- sidebar components -->
        <SideBar />
        <!-- content components -->
        <Grid />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

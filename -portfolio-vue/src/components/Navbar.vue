<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="sticky top-0 z-50 flex justify-between items-center py-4 px-20 max-sm:px-8 bg-[#16262E]">
    <a href="#greeting" class="text-white text-2xl font-bold hover:cursor-pointer cursor-default">
      <img src='/img/logo.png' width="50" height="50" alt="logo" />
    </a>
    <div class="md:hidden" @click="toggleMenu">
      <div class="space-y-2">
        <span
          class="block w-8 h-0.5 bg-white transition-transform duration-300"
          :class="{
            'transform rotate-45 translate-y-2': isMenuOpen,
            'rotate-0': !isMenuOpen
          }"
        ></span>
        <span
          class="block w-8 h-0.5 bg-white transition-opacity duration-300"
          :class="{
            'opacity-0': isMenuOpen,
            'opacity-100': !isMenuOpen
          }"
        ></span>
        <span
          class="block w-8 h-0.5 bg-white transition-transform duration-300"
          :class="{
            '-rotate-45 -translate-y-2': isMenuOpen,
            'rotate-0': !isMenuOpen
          }"
        ></span>
      </div>
    </div>
    <ul
      class="max-sm:pb-4 justify-end gap-16 flex-col items-center md:flex md:gap-16 max-sm:gap-4 absolute md:static top-16 left-0 w-full bg-[#16262E] md:bg-transparent md:flex-row transition-transform duration-300"
      :class="{ 'flex': isMenuOpen, 'hidden': !isMenuOpen }"
    >
      <li>
        <a href="#aboutme" class="text-white hover:cursor-pointer cursor-default" @click="isMenuOpen = false">About Me</a>
      </li>
      <li>
        <a href="#projects" class="text-white hover:cursor-pointer cursor-default" @click="isMenuOpen = false">Projects</a>
      </li>
      <li>
        <a href="#experiences" class="text-white hover:cursor-pointer cursor-default" @click="isMenuOpen = false">Experiences</a>
      </li>
      <li>
        <a href="#contact" class="text-white hover:cursor-pointer cursor-default" @click="isMenuOpen = false">Contact</a>
      </li>
    </ul>
  </nav>
</template>
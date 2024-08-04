<script setup lang="ts">
import logo from '../assets/img/logo.svg';
</script>
<template>
  <nav class="sticky top-0 z-50 flex justify-between items-center py-4 px-20 max-sm:px-8 bg-[#16262E]">
    <a href="#greeting" class="text-white text-2xl font-bold hover:cursor-pointer cursor-default">
      <img :src="logo" width="50" height="50" alt="logo" />
    </a>
    <ul class="max-sm:pb-4 justify-end gap-16 flex-col items-center md:flex md:gap-16 max-sm:gap-4 absolute md:static top-16 left-0 w-full bg-[#16262E] md:bg-transparent md:flex-row transition-transform duration-300">
      <li>
        <a href="#aboutme" class="text-white hover:cursor-pointer cursor-default">About Me</a>
      </li>
      <li>
        <a href="#projects" class="text-white hover:cursor-pointer cursor-default">Projects</a>
      </li>
      <li>
        <a href="#experiences" class="text-white hover:cursor-pointer cursor-default">Experiences</a>
      </li>
      <li>
        <a href="#contact" class="text-white hover:cursor-pointer cursor-default">Contact</a>
      </li>
    </ul>
  </nav>
</template>
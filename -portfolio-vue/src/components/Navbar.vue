<script setup lang="ts">
import logo from "../assets/img/logo.svg";
</script>

<template>
    <!-- <nav class="bg-[#16262E] text-white">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About Me</RouterLink>
    <RouterLink to="/projects">Projects</RouterLink>
    <RouterLink to="/experiences">Experiences</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav> -->

  <nav class="sticky top-0 z-50 flex justify-between items-center py-4 px-20 max-sm:px-8 bg-[#16262E]">
      <RouterLink
        to="/greeting"
        class="text-white text-2xl font-bold hover:cursor-pointer cursor-default"
        spy={true}
        smooth={true}
        duration={1000}
        offset={-100}
      >
        <img :src="logo" width="50" height="50" alt="logo" />
      </RouterLink>
      <ul
        class='max-sm:pb-4 justify-end gap-16 flex-col items-center md:flex md:gap-16 max-sm:gap-4 absolute md:static top-16 left-0 w-full bg-[#16262E] md:bg-transparent md:flex-row transition-transform duration-300'
      >
        <li>
          <RouterLink
            to="/aboutme"
            class="text-white hover:cursor-pointer cursor-default"
            spy={true}
            smooth={true}
            duration={1000}
          >
            About Me
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/projects"
            class="text-white hover:cursor-pointer cursor-default"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Projects
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/experiences"
            class="text-white hover:cursor-pointer cursor-default"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-10}
          >
            Experiences
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="text-white hover:cursor-pointer cursor-default"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Contact
          </RouterLink>
        </li>
      </ul>
    </nav>
</template>
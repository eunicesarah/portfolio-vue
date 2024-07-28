<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Projects from './components/Projects.vue';
import Greeting from './components/Greeting.vue';
import Contact from './components/Contact.vue';
import AboutMe from './components/AboutMe.vue';
import Experiences from './components/Experiences.vue';
import { onMounted, ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure you import the AOS CSS
onMounted(() => {
    AOS.init();
  });
</script>

<template>
  <Navbar/>
  <div class="bg-gradient-to-tl from-[#3C7A89] to-[#16262E] min-w-auto max-w-screen min-h-screen  px-32 py-24 max-sm:px-8 max-sm:py-12">
    <Greeting/>
    <AboutMe/>
    <Projects/>
    <Experiences/>
    <Contact/>
  </div>

</template>

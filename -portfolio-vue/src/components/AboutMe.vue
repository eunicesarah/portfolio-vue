<script setup lang="ts">
import profile from "../assets/img/profile.jpg";
</script>

<template>
    <section
      className="pt-40"
      id="aboutme"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <p className="text-center text-3xl font-bold min-h-20 text-white">About Me</p>
      <div className="flex flex-row max-sm:flex-col max-sm:items-center pl-8 text-white">
        <img
          :src="profile"
          alt="aboutme"
          width="250"
          height="100"
          :style="{ borderRadius: '1000px', border: '5px solid #CC8DAE' }"
          />
        <p className="text-xl max-sm:text-lg pl-20 max-sm:pl-0 max-sm:pt-10 pt-16">
          Currently in my final year of Computer Science at Bandung Institute of
          Technology, I am dedicated to
          <span className="text-[#CC8DAE]"> software development</span>,
          especially web development, where I strive to build engaging and
          efficient websites.
        </p>
      </div>
    </section>
</template>
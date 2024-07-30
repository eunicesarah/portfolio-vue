<script setup lang="ts">
import { ref } from "vue";
import bondomanBg from "../assets/img/bondoman_bg.svg";
import senoBg from "../assets/img/seno_bg.svg";
import survivalBg from "../assets/img/survival_bg.svg";
import sayitBg from "../assets/img/sayit_bg.svg";
import fituBg from "../assets/img/fitu_bg.svg";
import golangLogo from "../assets/img/golang.svg";
import kotlinLogo from "../assets/img/kotlin.svg";
import unityLogo from "../assets/img/unity.svg";
import csharpLogo from "../assets/img/csharp.svg";
import pythonLogo from "../assets/img/python.svg";
import sqliteLogo from "../assets/img/sqlite.svg";
import expressLogo from "../assets/img/express.svg";
import prismaLogo from "../assets/img/prisma.svg";
import nextLogo from "../assets/img/next.svg";
import postgresqlLogo from "../assets/img/postgresql.svg";

const myProject = ref([
  {
    project_name: "Seno Medika Clinic Administration",
    project_desc:
      "Building a web application with Agile Methodology. This website designed for 6 roles with different specific functionality.",
    tech_stack: ["golangLogo", "postgresqlLogo", "nextLogo"],
    project_role: "Fullstack Developer | UI Designer",
    github_link: "https://github.com/eunicesarah/seno-medika-clinic-adm-fe",
    background: senoBg,
  },
  {
    project_name: "Bondoman Android App",
    project_desc:
      "An application to record daily transaction with scanner or input manually. Using retrofit, room, and JitPack as library.",
    tech_stack: ["kotlinLogo"],
    project_role: "Android Developer | UI Designer",
    github_link: "https://github.com/eunicesarah/bondoman",
    background: bondomanBg,
  },
  {
    project_name: "Survival Shooter The Sequel",
    project_desc:
      "A game to survive from the zombie attack. This game is a sequel from the previous game with more features and levels.",
    tech_stack: ["unityLogo", "csharpLogo"],
    project_role: "Game Developer",
    github_link: "https://github.com/eunicesarah/survival-shooter-unity",
    background: survivalBg,
  },
  {
    project_name: "SayIt",
    project_desc:
      "A website to report and educate people about sexual harrassment. Using RESTful services that connect with Single Page Application",
    tech_stack: ["expressLogo", "prismaLogo"],
    project_role: "Fullstack Developer",
    github_link: "https://github.com/eunicesarah/sayit-rest",
    background: sayitBg,
  },
  {
    project_name: "FitU",
    project_desc:
      "A desktop application for workout at home using PyQt5. This application has a feature to record user's workout progress and give a suggestion for the next workout.",
    tech_stack: ["pythonLogo", "sqliteLogo"],
    project_role: "Fullstack Developer | UI Designer",
    github_link: "https://github.com/eunicesarah/FitU",
    background: fituBg,
  },
]);
</script>

<template>
  <section class="projects"  className="pt-40" id="projects" data-aos="fade-up" data-aos-duration="1000">
    <p class="text-center text-3xl font-bold min-h-28 text-white">Projects</p>
    <div
      class="gap-6 justify-center grid grid-cols-3 max-sm:grid-rows-1 max-sm:grid-cols-none"
    >
      <div
        class="gap-6 justify-center max-sm:grid-rows-1 max-sm:grid-cols-none"
        v-for="project in myProject"
      >
        <div className="group bg-no-repeat bg-cover drop-shadow-lg bg-bottom rounded-xl py-10 px-8 transition ease-in-out delay-15 hover:-translate-y-1  duration-300 relative hover:bg-[#2E4756]  max-sm:px-6 max-sm:py-6 "
        :style="{ backgroundImage: `url(${project.background})`, height: '100%' }">
          <p
            class="text-xl font-bold pt-20 relative z-10 drop-shadow-lg text-white"
          >
            {{ project.project_name }}
          </p>
          <p class="text-sm relative z-10 drop-shadow-lg text-white">
            {{ project.project_role }}
          </p>
          <p
            class="text-m group-hover:visible invisible relative z-10 text-white pt-3"
          >
            {{ project.project_desc }}
          </p>
          <p class="invisible group-hover:visible text-sm pt-5 text-white">
            Tech Stack:
          </p>
          <div className="flex flex-row group-hover:visible invisible relative z-10 gap-2">
            <img v-if="project.tech_stack.includes('golangLogo')" :src="golangLogo" alt="golangLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('postgresqlLogo')" :src="postgresqlLogo" alt="postgresqlLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('nextLogo')" :src="nextLogo" alt="nextLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('kotlinLogo')" :src="kotlinLogo" alt="kotlinLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('unityLogo')" :src="unityLogo" alt="unityLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('csharpLogo')" :src="csharpLogo" alt="csharpLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('pythonLogo')" :src="pythonLogo" alt="pythonLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('sqliteLogo')" :src="sqliteLogo" alt="sqliteLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('expressLogo')" :src="expressLogo" alt="expressLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('prismaLogo')" :src="prismaLogo" alt="prismaLogo" class="w-10 h-10" />
              </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const myProject = ref([
  {
    project_name: "Seno Medika Clinic Administration",
    project_desc:
      "Building a web application with Agile Methodology. This website designed for 6 roles with different specific functionality.",
    tech_stack: ["golangLogo", "postgresqlLogo", "nextLogo"],
    project_role: "Fullstack Developer | UI Designer",
    github_link: "https://github.com/eunicesarah/seno-medika-clinic-adm-fe",
    background: "/img/seno_bg.png",
  },
  {
    project_name: "Bondoman Android App",
    project_desc:
      "An application to record daily transaction with scanner or input manually. Using retrofit, room, and JitPack as library.",
    tech_stack: ["kotlinLogo"],
    project_role: "Android Developer | UI Designer",
    github_link: "https://github.com/eunicesarah/bondoman",
    background: "/img/bondoman_bg.png",
  },
  {
    project_name: "Survival Shooter The Sequel",
    project_desc:
      "A game to survive from the zombie attack. This game is a sequel from the previous game with more features and levels.",
    tech_stack: ["unityLogo", "csharpLogo"],
    project_role: "Game Developer",
    github_link: "https://github.com/eunicesarah/survival-shooter-unity",
    background: "/img/survival_bg.png",
  },
  {
    project_name: "SayIt",
    project_desc:
      "A website to report and educate people about sexual harrassment. Using RESTful services that connect with Single Page Application",
    tech_stack: ["expressLogo", "prismaLogo"],
    project_role: "Fullstack Developer",
    github_link: "https://github.com/eunicesarah/sayit-rest",
    background: "/img/sayit_bg.png",
  },
  {
    project_name: "FitU",
    project_desc:
      "A desktop application for workout at home using PyQt5. This application has a feature to record user's workout progress and give a suggestion for the next workout.",
    tech_stack: ["pythonLogo", "sqliteLogo"],
    project_role: "Fullstack Developer | UI Designer",
    github_link: "https://github.com/eunicesarah/FitU",
    background: "/img/fitu_bg.png",
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
        <div class="group bg-no-repeat bg-cover drop-shadow-lg bg-bottom rounded-xl py-10 px-8 transition ease-in-out delay-15 hover:-translate-y-1  duration-300 relative hover:bg-[#2E4756]  max-sm:px-6 max-sm:py-6 "
        :style="{ backgroundImage: `url(${project.background})`, height: '100%' }">
        <a
                :href="project.github_link"
                target="_blank"
                class="relative z-20"
              >
                <div class="relative z-10">
                  <img
                    src="/img/proj_git.png"
                    alt="gitLogo"
                    class="absolute inset-0"
                  />
                  <img
                    src= "/img/proj_git_hov.png"
                    alt="gitLogoHov"
                    class="absolute inset-0 opacity-0 hover:opacity-100"
                  />
                </div>
              </a>
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
          <div class="flex flex-row group-hover:visible invisible relative z-10 gap-2">
            <img v-if="project.tech_stack.includes('golangLogo')" src="/img/golang.png" alt="golangLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('postgresqlLogo')" src="/img/postgresql.png" alt="postgresqlLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('nextLogo')" src="/img/next.png" alt="nextLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('kotlinLogo')" src="/img/kotlin.png" alt="kotlinLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('unityLogo')" src="/img/unity.png" alt="unityLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('csharpLogo')" src="/img/csharp.png" alt="csharpLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('pythonLogo')" src="/img/python.png" alt="pythonLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('sqliteLogo')" src="/img/sqlite.png" alt="sqliteLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('expressLogo')" src="/img/express.png" alt="expressLogo" class="w-10 h-10" />
          <img v-if="project.tech_stack.includes('prismaLogo')" src="/img/prisma.png" alt="prismaLogo" class="w-10 h-10" />
              </div>
        </div>
      </div>
    </div>
  </section>
</template>

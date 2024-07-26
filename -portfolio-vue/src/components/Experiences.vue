<script setup lang="ts">
import { ref } from "vue";
const myExperience = ref([
    {
      role: "IT Intern",
      company: "OPPO Indonesia",
      duration: "June, 2024 - Sept, 2024",
      type: "Internship",
      desc: "Developed a web-based application for launching a new product using Node.js",
    },
    {
        role: "Kinship Staff",
        company: "HMIF ITB",
        duration: "July, 2023 - May, 2024",
        type: "Volunteer",
        desc: "Managed the kinship division in HMIF ITB and organized various events for the students",
      },
    {
      role: "UI/UX Designer",
      company: "OSKM ITB 2023",
      duration: "July, 2023 - Aug, 2023",
      type: "Volunteer",
      desc: "Designed the website for OSKM ITB 2023 using Figma and working with agile methodology",
    },
  ]);
  </script>

<template>
     <section class="pt-40" id="experiences" data-aos="fade-up" data-aos-duration="1000">
      <p class="text-center text-3xl font-bold min-h-28 text-white">Experiences</p>
      
          <div class="relative pl-52 max-sm:pl-12 py-6 group text-[#CC8DAE]" v-for="exp in myExperience">
            <div class="font-bold text-2xl text-[#CC8DAE] mb-1 sm:mb-0">
              {{exp.role}}
            </div>
            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[11.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#CC8DAE] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[11.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <p
                class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-[#CC8DAE] rounded-full max-sm:ml-1 ml-20 max-sm:mb-0"
                :style="{
                  fontSize: '0.9rem'
                }"
              >
                {{exp.type}}
              </p>
              <time
                class="sm:absolute left-0 translate-y-0.5 inline-flex mt-6 max-sm:mt-1 items-center justify-center text-xs font-semibold uppercase w-fit h-6 mb-3 sm:mb-0 text-[#16262E] bg-[#DBC2CF] rounded-full"
                :style="{
                  paddingRight: '0.5rem',
                  paddingLeft: '0.5rem',
                }"
              >
                {{exp.duration}}
              </time>
              <div class="text-xl font-semibold text-[#DBC2CF]">
                {{exp.company}}
              </div>
            </div>
            <div class="text-white">{{exp.desc}}</div>
          </div>
    </section>
</template>
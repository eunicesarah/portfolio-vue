<script setup lang="ts">
import emailjs from "@emailjs/browser";
import { ref } from "vue";

const form = ref<HTMLFormElement | null>(null);
const handleSubmit = (e: Event) => {
  e.preventDefault();

  if (form.value) {
    emailjs
      .sendForm(
        "service_r4r7lp6",
        "template_m5r14xl",
        form.value,
        "CUZbRFIzXi8OopX3R"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully! I'll get back to you soon.");
          window.location.reload();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Message failed to send. Please try again later.");
          window.location.reload();
        }
      );
  }
};
</script>

<template>
  <section
    class="pt-40"
    id="contact"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md text-white">
      <h2 class="text-center text-3xl font-bold min-h-28">
        Send me a message!
      </h2>
      <form @submit="handleSubmit" ref="form" class="space-y-8">
        <div>
          <label class="block mb-2 text-sm font-medium text-white" for="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="block p-3 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Enter your name here"
            required
          />
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium text-white" for="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="shadow-sm bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label class="block mb-2 text-sm font-medium text-white" for="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            class="block p-2.5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Leave a message..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="border-[#DBC2CF] border-4 px-5 py-2 text-sm rounded-xl text-[#DBC2CF] hover:border-[#CC8DAE] hover:bg-[#CC8DAE] hover:text-white"
        >
          Send message
        </button>
      </form>
    </div>
  </section>
</template>

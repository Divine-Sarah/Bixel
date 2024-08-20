<template>
  <header id="nav" class="sticky top-0 z-30 w-full bg-[#F1F2F6]">
    <nav class="flex items-center justify-between py-[19px] app-container-main">
      <router-link to="">
        <img src="/Bixel-Logo.svg" alt="" />
      </router-link>

      <!-- Responsive Menu Icon -->
      <div class="lg:hidden">
        <button
          v-if="mobileMenuOpen == false"
          @click="toggleMobileMenu"
          class="text-gray-500 focus:outline-none"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <button
          v-else
          @click="closeMobileMenu"
          class="text-gray-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        id="mobile-nav"
        :class="{ 'hidden relative': !mobileMenuOpen }"
        class="lg:hidden bg-appWhite text-[#515050] absolute top-20 right-4 mobile py-20 space-y-[10px]"
      >
        <ul
          class="flex flex-col space-x-[20px] text-appText font-inter font-medium text-base"
        >
          <li
            class=""
          >
            <a href="#values" @click.prevent="scrollToSection('values')"
              >Values</a
            >
          </li>
          <li
            class=""
          >
            <a href="#services" @click.prevent="scrollToSection('services')"
              >Core services</a
            >
          </li>
          <li
            class=""
          >
            <a href="#choose-us" @click.prevent="scrollToSection('choose-us')"
              >Why Choose us</a
            >
          </li>
        </ul>
      </div>

      <!-- Desktop -->
      <div class="hidden xl:flex flex-row items-center space-x-[86.5px]">
        <div class="w-[317px]">
          <ul
            class="flex space-x-[20px] text-appText font-inter font-medium text-base"
          >
            <li
              class="hover:scale-105 hover:text-appblue hover:font-bold hover:text-sm"
            >
              <a href="#values" @click.prevent="scrollToSection('values')"
                >Values</a
              >
            </li>
            <li
              class="hover:scale-105 hover:text-appblue hover:font-bold hover:text-sm"
            >
              <a href="#services" @click.prevent="scrollToSection('services')"
                >Core services</a
              >
            </li>
            <li
              class="hover:scale-105 hover:text-appblue hover:font-bold hover:text-sm"
            >
              <a href="#choose-us" @click.prevent="scrollToSection('choose-us')"
                >Why Choose us</a
              >
            </li>
          </ul>
        </div>

        <button
          class="rounded-xl border w-[179px] h-[62px] border-[#27187E] font-inter font-bold text-lg text-appblue"
        >
          <a href="mailto:bethpixel@gmail.com">Contact Us</a>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { gsap } from "gsap";

const mobileMenuOpen = ref(false);

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  gsap.fromTo(
    "#mobile-nav",
    {
      opacity: 0.5,
      y: -150,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }
  );
}

function closeMobileMenu() {
  setTimeout(() => {
    mobileMenuOpen.value = false;
  }, 400);
  gsap.fromTo(
    "#mobile-nav",
    {
      opacity: 0.5,
      y: 0,
    },
    {
      opacity: 1,
      y: -150,
      duration: 0.8,
    }
  );
}
</script>

<style scoped>
.mobile {
  max-width: 50%;
  width: 100%;
  height: auto;
  padding: 20px 20px;
  border-radius: 10px;
}
</style>

<template>
  <main class="bg-appblue xl:h-[661px] lg:h-[660px] h-[1137px]">
    <div class="app-container">
      <div class="pt-[261px] flex justify-between xl:flex-row lg:flex-row md:flex-col flex-col xl:space-y-0 space-y-[44px]">
        <img src="/logo.svg" alt="" class="w-[130px]  xl:mx-0 mx-auto"/>
        <div
          class="space-y-[20px] text-appWhite font-inter font-medium text-base xl:w-[120px] xl:mx-0 mx-auto text-center xl:text-start"
        >
          <div>   <a href="#values" @click.prevent="scrollToSection('values')"
                >Values</a
              ></div>
          <div>
            <a href="#services" @click.prevent="scrollToSection('services')"
            >Core services</a>
          </div>
          <div>
            <a href="#choose-us" @click.prevent="scrollToSection('choose-us')"
                >Why Choose us</a
              >
          </div>
        </div>

        <div class="xl:w-[731px] flex xl:flex-row lg:flex-row  flex-col xl:space-x-[50px] lg:space-x-[25px] xl:space-y-0 lg:space-y-0 space-y-[44px] text-appWhite font-inter xl:mx-0 mx-auto text-center">
          
          <div class="flex flex-col space-y-[27px] xl:w-[139px]">
            <span class="text-xl font-bold">Call us</span>
            <div class="flex flex-col text-base font-medium">
              <a href="tel:+2348102431109">+2348102431109</a>
              <a href="tel:+2348101055065"> +2348101055065</a>
            </div>
          </div>
          
          <div class="flex flex-col space-y-[27px] xl:w-[203px]">
            <span class="text-xl font-bold">Email</span>
            <a href="mailto:bethpixel@gmail.com">bethpixel@gmail.com</a>
          </div>

          <div class="w-[289px] flex flex-col space-y-[27px] ">
            <span class="text-xl font-bold">Address</span>
            <p>
              Second floor, suit B6 at Benemma plaza, along NTA Raod, Jamb
              office, Asaba, Delta state, Nigeria.
            </p>
          </div>
          
        </div>
      </div>

      <hr class="mx-auto xl:w-[853px] h-[2px] xl:mt-[133px] mt-[30px] bg-[#758bfd] border-0" />
      <div class="flex items-center justify-center gap-2 pt-[43.97px]">
        <img src="/copyright.svg" alt="" />
        <span class="text-base font-medium font-inter text-textGray"
          >Bethpixel2024</span
        >
      </div>
      
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>

</style>

<!-- hr {
  margin-top: 133px;
  border: none;
  width: 853px;
  height: 2px;
  background-color: #758bfd;
} -->

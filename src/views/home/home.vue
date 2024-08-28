<template>
  <AppHeader />
  <!-- flex flex-col xl:items-center lg:flex-row xl:pt-[130px] xl:space-x-[50px] justify-between -->
  <main>
    <div class="bg-appblue h-full max-h-[827px] relative">
      <img
        src="/Whirl.png"
        alt=""
        class="absolute object-cover bg-no-repeat -bottom-5"
      />
      <div class="app-container">
        <div
          class="flex flex-col items-center xl:pt-[60px] pb-[66px] pt-[30px] xl:space-x-[59px] xl:justify-between lg:flex-row md:flex-row font-outfit"
        >
          <section
            class="flex flex-col space-y-[15px] w-full lg:max-w-[598px] md:pb-0 pb-10"
          >
            <p
              class="font-normal xl:w-[292px] text-[32px] xl:text-balance lg:text-4xl md:text-3xl xl:text-[53px] xl:leading-[77px] text-appPurple font-anton"
            >
              Step into the Realm of Creativity
            </p>

            <div class="space-y-[41px]">
              <p
                class="text-xl font-normal xl:w-[519px] md:leading-6 text-pretty text-appPurple font-inter"
              >
                Here, creativity converges with technology, and ideas evolve
                into reality. We are a dynamic tech company specializing in
                graphic design, IT project management, and product management.
              </p>

              <button
                class="flex flex-row items-center gap-[11px] py-3 text-xl font-bold bg-appWhite rounded-xl text-appBlack font-inter px-[23px]"
              >
                <span> Explore </span>
                <img src="/explore-arrow.svg" alt="" />
              </button>
            </div>
          </section>

          <img src="/Group.png" alt="" class="xl:w-[664px] w-[350px]" />
        </div>
      </div>
    </div>

    <section
      id="values"
      class="bg-appWhite py-[60px] xl:py-[112px] flex flex-col items-center"
    >
      <div
        class="flex flex-col lg:flex-row justify-center items-center space-y-[45px] lg:space-y-0 lg:space-x-[45px] xl:space-x-[87px] app-container"
      >
        <div
          class="border-x-4 border-appOrange bg-appGray w-[200px] text-center py-[10px] font-medium text-base text-appBlack"
        >
          OUR VALUES
        </div>

        <div
          class="flex flex-col space-y-[45px] lg:space-y-0 lg:flex-row lg:space-x-[45px] xl:space-x-[87px] w-full"
        >
          <div
            class="lg:border-l border-[#00000033] lg:px-[40px] flex flex-col space-y-[21px] text-center lg:text-left"
          >
            <div
              class="flex items-center space-x-[27px] lg:justify-start justify-center"
            >
              <img src="/Group.svg" alt="" />
              <h1 class="text-xl font-bold">Customer-Centric</h1>
            </div>
            <p class="text-base font-normal text-pretty">
              Our clients are our top priority. BethPixel is dedicated to
              building lasting partnerships, with a focus on delivering
              solutions tailored to meet the unique needs and goals of each
              client.
            </p>
          </div>

          <div
            class="lg:border-l border-[#00000033] lg:px-[40px] flex flex-col space-y-[21px] text-center lg:text-left"
          >
            <div
              class="flex items-center space-x-[27px] justify-center lg:justify-start"
            >
              <img src="/Arrows Triangle.svg" alt="" />
              <h1 class="text-xl font-bold">Adaptability</h1>
            </div>
            <p class="text-base font-normal text-pretty">
              In the ever-evolving tech landscape, adaptability is paramount.
              BethPixel embraces change, ensuring that our solutions remain
              relevant and effective in the face of technological advancements.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="services"
      class="xl:h-[858px] bg-appGray xl:py-[112px] pt-[86px] pb-[114px]"
    >
      <div class="xl:space-y-[119px] space-y-[82px] app-container">
        <div
          class="border-x-4 border-appOrange bg-appGray w-[200px] text-center py-[10px] font-medium text-base font-inter text-appBlack mx-auto"
        >
          CORE SERVICES
        </div>

        <!-- Desktop view -->

        <div
          class="xl:flex xl:space-y-0 space-y-[45px] items-center justify-around flex-row lg:hidden hidden"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="relative overflow-hidden rounded-xl"
            @mouseenter="hovered[index] = true"
            @mouseleave="hovered[index] = false"
          >
            <div class="relative">
              <img
                :src="item.image"
                :alt="`Image ${index + 1}`"
                class="transition-shadow duration-1000 transform"
                :class="
                  hovered[index]
                    ? '-translate-y-4  h-[486px] '
                    : 'translate-y-0'
                "
              />
            </div>

            <div
              class="absolute inset-x-0 bottom-0 p-4 text-center transition-transform duration-500 transform text-appBlack bg-appWhite"
              :class="hovered[index] ? 'translate-y-0' : 'translate-y-full'"
            >
              <p class="text-base font-normal font-inter">{{ item.content }}</p>
            </div>
          </div>
        </div>

        <!-- tablet -->
        <div
          class="flex md:flex-col lg:flex-col flex-col space-y-[45px] md:app-container"
        >
          <div class="relative w-full xl:hidden bg-appWhite rounded-xl">
            <img src="/core-service-3.png" alt="" class="" />
            <p
              class="p-4 text-xs font-normal leading-[18px] text-center md:font-medium md:text-2xl font-inter px-[33px]"
            >
              With a focus on efficiency and precision, our IT project
              management experts at BethPixel oversee projects from inception to
              completion. We specialise in the seamless development of software,
              websites, and applications, ensuring timely delivery and adherence
              to the highest quality standards.
            </p>
          </div>

          <div class="relative xl:hidden bg-appWhite rounded-xl">
            <img src="/core-service-2.png" alt="" class="" />
            <p
              class="p-4 text-xs font-normal leading-[18px] text-center md:font-medium md:text-2xl font-inter px-[33px]"
            >
              At BethPixel Tech Solutions Ltd, our team of skilled graphic
              designers is dedicated to giving your brand a distinctive
              identity. From compelling logos to impactful marketing materials
              and user-friendly interfaces, we bring your vision to life through
              captivating visuals.
            </p>
          </div>

          <div class="relative xl:hidden bg-appWhite rounded-xl">
            <img src="/core-service-1.png" alt="" class="" />
            <p
              class="p-4 text-xs font-normal leading-[18px] text-center md:font-medium md:text-2xl font-inter px-[33px]"
            >
              From conceptualisation to launch and ongoing optimisation,
              BethPixel excels in product management. We guide your product
              through its entire lifecycle, providing strategic planning and
              execution to transform your ideas into successful, market-ready
              products. developing software, websites, and applications
              seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="choose-us"
      class="bg-appWhite xl:h-[893px] xl:py-[112px] py-[60px]"
    >
      <div class="xl:space-y-0 space-y-[63px] app-container">
        <div
          class="border-x-4 border-appOrange bg-appGray w-[200px] text-center py-[10px] font-medium text-base font-inter text-appBlack mx-auto"
        >
          WHY CHOOSE US
        </div>

        <div>
          <div
            class="flex xl:space-x-[57px] xl:pt-[193px] items-center xl:flex-row lg:flex-row flex-col xl:space-y-0 md:space-y-[40px] space-y-[40px]"
          >
            <div
              class="flex max-w-[434px] w-full flex-col font-inter space-y-[20px] xl:mx-0 mx-auto"
            >
              <p class="text-xl font-bold text-center xl:text-justify">
                Collaboration
              </p>
              <p class="text-base font-normal text-center xl:text-start">
                Collaboration is at the heart of BethPixel's ethos. We work
                closely with clients, fostering an environment where ideas are
                exchanged, and projects are executed collaboratively, ensuring
                the success of every endeavor.
              </p>
            </div>

            <img
              src="/choose-us.svg"
              alt=""
              class="hidden xl:block lg:block md:block"
            />

            <div
              class="flex max-w-[434px] w-full flex-col font-inter space-y-[20px] xl:mx-0 mx-auto"
            >
              <p class="text-xl font-bold text-center xl:text-justify">
                Innovative
              </p>
              <p class="text-base font-normal text-center xl:text-start">
                BethPixel is a hub of innovation. We stay at the forefront of
                industry trends and emerging technologies to provide our clients
                with groundbreaking solutions that set them apart in a
                competitive landscape.
              </p>
            </div>
          </div>

          <div
            class="flex max-w-[458px] w-full flex-col font-inter space-y-[20px] mx-auto pt-[43px]"
          >
            <p class="text-xl font-bold text-center xl:text-justify">
              Quality Assurance
            </p>
            <p class="text-base font-normal text-center xl:text-start">
              BethPixel Tech Solutions Limited is committed to delivering
              high-quality solutions. Our stringent quality assurance processes
              guarantee that every project meets and exceeds the highest
              standards, surpassing client expectations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="contact-us"
      class="bg-appGray xl:h-[431px] lg:h-[301px] h-[502px] relative"
    >
      <div class="flex justify-center">
        <div
          class="xl:app-container bg-appPurple-100 xl:h-[431px] lg:h-[350px] h-[662px] xl:w-[1240px] lg:w-[900px] md:w-[500px] w-[331px] xl:rounded-xl lg:rounded-xl z-20 xl:-bottom-1/3 -bottom-[197px] absolute"
        >
          <img
            src="/Whirl-2.png"
            alt=""
            class="absolute object-cover bg-no-repeat bottom-2 xl:bottom-0"
          />

          <div
            class="absolute xl:px-[111px] px-9 xl:py-[76px] py-11 w-full h-full flex xl:space-x-[476px] lg:space-x-[232px] xl:space-y-0 lg:space-y-0 space-y-[100px] items-center flex-col lg:flex-row xl:flex-row"
          >
            <div class="space-y-[24px]">
              <div
                class="border-x-4 border-appOrange bg-appGray w-[200px] text-center py-[10px] font-medium text-base font-inter text-appBlack mx-auto"
              >
                Got a Project?
              </div>

              <p
                class="xl:pt-[63px] xl:pb-[43px] font-inter font-normal text-2xl w-[253px] text-appPurple text-center"
              >
                We are here to help you. Contact us Now
              </p>

              <div class="flex justify-center">
                <button
                  class="bg-appWhite rounded-xl font-bold text-appText text-xl xl:w-[204px] w-[127.5px] py-3 font-inter"
                >
                  <a href="mailto:bethpixel@gmail.com">Contact Us</a>
                </button>
              </div>
            </div>
            <div class="">
              <img src="/contact.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from "/src/components/AppHeader.vue";
import AppFooter from "/src/components/AppFooter.vue";

export default {
  data() {
    return {
      hovered: [false, false, false], // Tracks hover state for each image
      items: [
        {
          image: "/core-service-3.svg",
          content:
            "With a focus on efficiency and precision, our IT project management experts at BethPixel oversee projects from inception to completion. We specialise in the seamless development of software, websites, and applications, ensuring timely delivery and adherence to the highest quality standards.",
        },
        {
          image: "/core-service-2.svg",
          content:
            "At BethPixel Tech Solutions Ltd, our team of skilled graphic designers is dedicated to giving your brand a distinctive identity. From compelling logos to impactful marketing materials and user-friendly interfaces, we bring your vision to life through captivating visuals.",
        },
        {
          image: "/core-service-1.svg",
          content:
            " From conceptualisation to launch and ongoing optimisation, BethPixel excels in product management. We guide your product through its entire lifecycle, providing strategic planning and execution to transform your ideas into successful, market-ready products. developing software, websites, and applications seamlessly.",
        },
      ],
    };
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped>
.hero {
  background-image: url("/Whirl.png") !important;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative; /* Consider adding this if the bottom positioning should be relative to the parent container */
}
</style>

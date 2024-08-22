<template>
  <AppHeader />
  <!-- flex flex-col xl:items-center lg:flex-row xl:pt-[130px] xl:space-x-[50px] justify-between -->
  <main>
    <div class="bg-appblue h-[827px] relative">
      <img
        src="/Whirl.png"
        alt=""
        class="absolute object-cover bg-no-repeat -bottom-5"
      />
      <div class="app-container">
        <div
          class="absolute flex flex-col xl:items-center xl:pt-[60px] pt-[30px] xl:space-x-[24px] justify-between lg:flex-row xl:space-y-0 space-y-[45px]"
        >
          <section class="flex flex-col space-y-5 w-full lg:max-w-[598px]">
            <p
              class="font-normal w-[336px] text-[32px] md:text-xl lg:text-2xl xl:text-[53px] xl:leading-[77px] text-appWhite"
            >
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p
              class="text-xl font-normal xl:w-[519px] md:leading-6 text-appWhite font-inter"
            >
              Here, creativity converges with technology, and ideas evolve into
              reality. We are a dynamic tech company specializing in graphic
              design, IT project management, and product management.
            </p>

            <button
              class="bg-appWhite rounded-xl font-bold text-appText text-xl xl:w-[204px] w-[127.5px] py-3 font-inter"
            >
              Explore
            </button>
          </section>

          <img src="/Group.png" alt="" class="xl:w-[654px] w-[350px]" />
        </div>
      </div>
    </div>

    <section
      id="values"
      class="xl:h-[325px] h-[805px] bg-appWhite xl:py-[112px] pt-[86px]"
    >
      <div
        class="flex app-container xl:space-x-[87px] xl:space-y-0 space-y-[45px] items-center xl:flex-row flex-col"
      >
        <div
          class="border-x-4 border-appOrange bg-appGray w-[200px] text-center py-[10px] font-medium text-base font-inter text-appBlack"
        >
          OUR VALUES
        </div>

        
        <div
          class=" xl:border-l border-[#00000033] xl:space-y-0 space-y-[77.5px]"
        >
          <hr
            class="xl:hidden w-[168.36px] flex mx-auto h-[1px] bg-[#00000033] border-0"
          />
          <div
            class="w-[348px] items-center xl:px-[40px] space-y-[21px] font-inter text-center xl:text-justify"
          >
            <div class="flex items-center space-x-[27px] justify-center xl:justify-start">
              <img src="/Group.svg" alt="" />
              <h1 class="text-xl font-bold">Customer-Centric</h1>
            </div>
            <p class="text-base font-normal xl:w-[328px]">
              Our clients are our top priority. BethPixel is dedicated to
              building lasting partnerships, with a focus on delivering
              solutions tailored to meet the unique needs and goals of each
              client.
            </p>
          </div>
        </div>

        
        <div
          class=" xl:border-l border-[#00000033] xl:space-y-0 space-y-[77.5px]"
        >
          <hr
            class="xl:hidden w-[168.36px] flex mx-auto h-[1px] bg-[#00000033] border-0"
          />
          <div
            class="w-[348px] items-center xl:px-[40px] space-y-[21px] font-inter text-center xl:text-justify"
          >
            <div class="flex items-center space-x-[27px] justify-center xl:justify-start">
              <img src="/Arrows Triangle.svg" alt="" />
              <h1 class="text-xl font-bold">Adaptability</h1>
            </div>
            <p class="text-base font-normal xl:w-[328px]">
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
      class="xl:h-[858px] bg-appGray  xl:py-[112px] pt-[86px] pb-[114px]"
    >
      <div class="xl:space-y-[119px] space-y-[82px] app-container">
        <div
          class="border-x-4 border-appOrange bg-appGray w-[200px] text-center py-[10px] font-medium text-base font-inter text-appBlack mx-auto"
        >
          CORE SERVICES
        </div>

        <div class="flex flex-col xl:space-y-0 space-y-[45px] items-center justify-around xl:flex-row">
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
                    ? '-translate-y-4  h-[502px]'
                    : 'translate-y-0 '
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
            class="flex xl:space-x-[57px] xl:pt-[193px] xl:flex-row flex-col xl:space-y-0 space-y-[40px]"
          >
            <div
              class="flex xl:w-[433px] w-[331px] flex-col font-inter space-y-[20px] xl:mx-0 mx-auto"
            >
              <p class="text-xl font-bold text-center xl:text-justify">
                Collaboration
              </p>
              <p class="text-base font-normal text-center xl:text-justify">
                Collaboration is at the heart of BethPixel's ethos. We work
                closely with clients, fostering an environment where ideas are
                exchanged, and projects are executed collaboratively, ensuring
                the success of every endeavor.
              </p>
            </div>

            <img src="/choose-us.svg" alt="" class="hidden xl:block" />

            <div
              class="flex xl:w-[434px] w-[331px] flex-col font-inter space-y-[20px] xl:mx-0 mx-auto"
            >
              <p class="text-xl font-bold text-center xl:text-justify">
                Innovative
              </p>
              <p class="text-base font-normal text-center xl:text-justify">
                BethPixel is a hub of innovation. We stay at the forefront of
                industry trends and emerging technologies to provide our clients
                with groundbreaking solutions that set them apart in a
                competitive landscape.
              </p>
            </div>
          </div>

          <div
            class="flex xl:w-[458px] w-[331px] flex-col font-inter space-y-[20px] mx-auto pt-[43px]"
          >
            <p class="text-xl font-bold text-center xl:text-justify">
              Quality Assurance
            </p>
            <p class="text-base font-normal text-center xl:text-justify">
              BethPixel Tech Solutions Limited is committed to delivering
              high-quality solutions. Our stringent quality assurance processes
              guarantee that every project meets and exceeds the highest
              standards, surpassing client expectations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact-us" class="bg-appGray xl:h-[431px] h-[502px] relative">
      <div class="flex justify-center">
        <div
          class="xl:app-container bg-appPurple-100 xl:h-[431px] h-[662px] xl:w-[1240px] w-[331px] xl:rounded-xl z-20 xl:-bottom-1/3 -bottom-[197px] absolute"
        >
          <img
            src="/Whirl-2.png"
            alt=""
            class="absolute object-cover bg-no-repeat bottom-2 xl:bottom-0"
          />

          <div
            class="absolute xl:px-[111px] px-9 xl:py-[76px] py-[47px] flex xl:space-x-[476px] xl:space-y-0 space-y-[100px] items-center flex-col xl:flex-row"
          >
            <div class="mx-auto space-y-[24px]">
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
            <div>
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
          image: "/project.svg",
          content:
            "At BethPixel Tech Solutions Ltd, our team of skilled graphic designers is dedicated to giving your brand a distinctive identity. From compelling logos to impactful marketing materials and user-friendly interfaces, we bring your vision to life through captivating visuals.",
        },
        {
          image: "/product.svg",
          content:
            "At BethPixel Tech Solutions Ltd, our team of skilled graphic designers is dedicated to giving your brand a distinctive identity. From compelling logos to impactful marketing materials and user-friendly interfaces, we bring your vision to life through captivating visuals.",
        },
        {
          image: "/product.svg",
          content:
            "At BethPixel Tech Solutions Ltd, our team of skilled graphic designers is dedicated to giving your brand a distinctive identity. From compelling logos to impactful marketing materials and user-friendly interfaces, we bring your vision to life through captivating visuals.",
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

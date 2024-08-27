<template>
    <AppHeader />
    <main>
      <div class="bg-appblue h-[827px] relative">
        <img
          src="/Whirl.png"
          alt=""
          class="absolute object-cover w-full h-auto bg-no-repeat -bottom-5"
        />
        <div class="relative app-container">
          <div
            class="absolute flex flex-col items-center xl:pt-[60px] pt-[30px] space-y-[45px] lg:space-y-0 lg:flex-row justify-between w-full"
          >
            <section class="flex flex-col space-y-5 w-full lg:max-w-[598px] text-center lg:text-left">
              <p
                class="font-normal w-full lg:w-auto text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[53px] xl:leading-[77px] text-appWhite"
              >
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p
                class="text-base sm:text-lg md:text-xl xl:text-2xl font-normal xl:w-[519px] leading-6 text-appWhite font-inter"
              >
                Here, creativity converges with technology, and ideas evolve into reality. We are a dynamic tech company specializing in graphic design, IT project management, and product management.
              </p>
  
              <button
                class="bg-appWhite rounded-xl font-bold text-appText text-base sm:text-lg md:text-xl xl:w-[204px] w-[127.5px] py-3 font-inter mx-auto lg:mx-0"
              >
                Explore
              </button>
            </section>
  
            <img src="/Group.png" alt="" class="w-[70%] lg:w-[350px] xl:w-[654px] mx-auto lg:mx-0" />
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
            class="border-x-4 border-appOrange bg-appGray w-[200px] text-center py-[10px] font-medium text-base font-inter text-appBlack"
          >
            OUR VALUES
          </div>
  
          <div class="flex flex-col space-y-[45px] lg:space-y-0 lg:flex-row lg:space-x-[45px] xl:space-x-[87px] w-full">
            <div class="flex flex-col space-y-[21px] text-center lg:text-left">
              
                <div class="flex items-center justify-center lg:justify-start space-x-[27px]">
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
  
            <div class="flex flex-col space-y-[21px] text-center lg:text-left">
              <div class="flex items-center justify-center lg:justify-start space-x-[27px]">
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
        class="bg-appGray py-[60px] xl:py-[112px] flex flex-col items-center"
      >
        <div class="space-y-[45px] xl:space-y-[119px] app-container">
          <div
            class="border-x-4 border-appOrange bg-appGray w-[200px] text-center py-[10px] font-medium text-base font-inter text-appBlack mx-auto"
          >
            CORE SERVICES
          </div>
  
          <div class="flex flex-wrap justify-around items-center space-y-[45px] xl:space-y-0">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="relative overflow-hidden rounded-xl w-[80%] md:w-[45%] lg:w-[30%]"
              @mouseenter="hovered[index] = true"
              @mouseleave="hovered[index] = false"
            >
              <div class="relative">
                <img
                  :src="item.image"
                  :alt="`Image ${index + 1}`"
                  class="w-full transition-shadow duration-1000 transform"
                  :class="
                    hovered[index]
                      ? '-translate-y-4'
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
        </div>
      </section>
  
      <section
        id="choose-us"
        class="bg-appWhite py-[60px] xl:py-[112px] flex flex-col items-center"
      >
        <div class="space-y-[45px] xl:space-y-0 app-container">
          <div
            class="border-x-4 border-appOrange bg-appGray w-[200px] text-center py-[10px] font-medium text-base font-inter text-appBlack mx-auto"
          >
            WHY CHOOSE US
          </div>
  
          <div class="flex flex-col xl:flex-row justify-center items-center xl:space-x-[57px] space-y-[40px] xl:space-y-0">
            <div class="flex flex-col space-y-[20px] text-center lg:text-left xl:w-[433px] w-[80%]">
              <p class="text-xl font-bold">Collaboration</p>
              <p class="text-base font-normal">
                Collaboration is at the heart of BethPixel's ethos. We work closely with clients, fostering an environment where ideas are exchanged, and projects are executed collaboratively, ensuring the success of every endeavor.
              </p>
            </div>
  
            <img src="/choose-us.svg" alt="" class="hidden xl:block lg:block" />
  
            <div class="flex flex-col space-y-[20px] text-center lg:text-left xl:w-[434px] w-[80%]">
              <p class="text-xl font-bold">Innovative</p>
              <p class="text-base font-normal">
                BethPixel is a hub of innovation. We stay at the forefront of
                industry trends and emerging technologies to provide our clients
                with groundbreaking solutions that set them apart in a competitive landscape.
              </p>
            </div>
          </div>
  
          <div
            class="flex flex-col space-y-[20px] text-center lg:text-left xl:w-[458px] w-[80%] mx-auto pt-[43px]"
          >
            <p class="text-xl font-bold">Quality Assurance</p>
            <p class="text-base font-normal">
              BethPixel Tech Solutions Limited is committed to delivering
              high-quality solutions. Our stringent quality assurance processes
              guarantee that every project meets and exceeds the highest
              standards, surpassing client expectations.
            </p>
          </div>
        </div>
      </section>
  
      <section id="contact-us" class="bg-appGray py-[60px] xl:py-[112px] relative">
        <div class="flex justify-center">
          <div
            class="bg-appPurple-100 w-full xl:w-[1240px] lg:w-[900px] rounded-xl z-20 relative px-6 lg:px-[111px] py-[47px] xl:py-[76px]"
          >
            <img
              src="/Whirl-2.png"
              alt=""
              class="absolute object-cover w-full h-auto bg-no-repeat bottom-2 xl:bottom-0"
            />
  
            <div class="flex flex-col items-center space-y-5">
              <h1
                class="text-appWhite text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] xl:leading-[60px] font-medium w-full lg:w-auto"
              >
                Contact Us Today
              </h1>
              <p class="text-appWhite font-inter text-base xl:w-[462px] text-center">
                Connect with us to bring your creative ideas to life. We're here
                to answer your questions, collaborate on projects, and provide
                the solutions you need to succeed.
              </p>
              <button
                class="bg-appWhite text-base sm:text-lg md:text-xl w-[121px] lg:w-[204px] py-3 rounded-xl text-appPurple font-bold font-inter"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </template>
  
  <script>
  export default {
    data() {
      return {
        hovered: [],
        items: [
          {
            image: "/core-service1.png",
            content: "Graphic Design: Creativity is our forte, and our designs speak volumes.",
          },
          {
            image: "/core-service2.png",
            content: "IT Project Management: We turn ideas into reality, on time and on budget.",
          },
          {
            image: "/core-service3.png",
            content: "Product Management: We craft solutions that resonate with users.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .app-container {
    width: 90%;
    max-width: 1240px;
    margin: 0 auto;
  }
  .bg-appblue {
    background-color: #0D1F2D;
  }
  .bg-appWhite {
    background-color: #ffffff;
  }
  .bg-appGray {
    background-color: #F4F4F4;
  }
  .text-appWhite {
    color: #ffffff;
  }
  .text-appBlack {
    color: #000000;
  }
  .text-appText {
    color: #333333;
  }
  .border-appOrange {
    border-color: #FF6F1F;
  }
  .bg-appPurple {
    background-color: #4A3B6D;
  }
  .text-appPurple {
    color: #4A3B6D;
  }
  </style>
  
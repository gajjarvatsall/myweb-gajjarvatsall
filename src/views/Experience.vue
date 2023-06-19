<template>
  <div class="p-16 space-y-10 max-h-[500px] overflow-auto">
    <!-- Education -->
    <!-- <div class="font-display space-y-5">
      <Title title="Education" />
      <div class="experience flex items-center gap-24">
        <div
          class="p-3 bg-[#3C3C3C] rounded-lg w-fit z-10"
          v-for="(edu, index) in education"
          :key="index"
        >
          <div class="flex items-center justify-between">
            <p>{{ edu.year }}</p>
            <img src="/check.svg" alt="check-mark" />
          </div>
          <div class="space-y-1">
            <h4 class="font-body">{{ edu.place }}</h4>
            <p>{{ edu.location }}</p>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Skills -->
    <div class="font-display space-y-8">
      <Title title="Skills" />
      <div class="space-y-8">
        <div
          class="flex items-center gap-7 bg-[#424242] p-6 rounded-2xl"
          v-for="(skill, index) in skills"
          :key="index"
        >
          <div class="flex-[0_0_25%]">
            <img
              class="w-4/5 mx-auto"
              :src="`/${skill.image}.svg`"
              :alt="skill.alt"
            />
          </div>
          <div>
            <h4 class="text-4xl font-medium pb-4">{{ skill.name }}</h4>
            <p class="text-lg border-b border-[#757575] pb-4 text-[#E0E0E0]">
              {{ skill.level }} Level
            </p>
            <p class="pt-4 font-light text-base text-[#BDBDBD]">
              {{ skill.content }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Experiences -->
    <div class="font-display space-y-8">
      <Title title="Experiences" />
      <div class="space-y-16">
        <div
          class="flex"
          v-for="(experience, index) in experiences"
          :key="index"
        >
          <div
            class="space-y-4 flex-[0_0_60%] bg-[#424242] p-5 rounded-tl-2xl rounded-bl-2xl"
          >
            <h4 class="text-3xl font-medium">{{ experience.text }}</h4>
            <p class="text-base text-[#BDBDBD] font-light">
              {{ experience.content }}
            </p>
          </div>
          <div class="relative w-full">
            <img
              class="w-full h-full rounded-tr-2xl rounded-br-2xl"
              :src="`/${experience.image}.jpg`"
              :alt="experience.alt"
            />
            <img
              class="absolute -bottom-8 -right-4 rounded-full border-8 border-black w-40"
              :src="`/${experience.image2}.jpg`"
              :alt="experience.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/Title.vue";

const education = [
  {
    year: "2007-2020",
    place: "TERF English School",
    location: "Ahmedabad",
  },
  {
    year: "2020-2023",
    place: "Silver Oak University",
    location: "Ahmedabad",
  },
];

const skills = [
  {
    image: "flutter_language",
    alt: "Flutter Language",
    name: "Flutter",
    level: "Intermediate",
    content:
      "Proficient in cross-platform app development using the Flutter framework, creating visually appealing and responsive user interfaces.",
  },
  {
    image: "dart_language",
    alt: "Dart Language",
    name: "Dart",
    level: "Intermediate",
    content:
      "Skilled in Dart programming language, utilizing its object-oriented features and compiling capabilities to write efficient and maintainable code.",
  },
  {
    image: "firebase_language",
    alt: "Firebase Language",
    name: "Firebase",
    level: "Intermediate",
    content:
      "Experienced in integrating Firebase services, including real-time databases, authentication, cloud functions, and hosting, to enhance app functionality and user experience.",
  },
  {
    image: "python_language",
    alt: "Python Language",
    name: "Python",
    level: "Intermediate",
    content:
      "Proficient in cross-platform app development using the Flutter framework, creating visually appealing and responsive user interfaces.",
  },
  {
    image: "c-c++_language",
    alt: "C & C++ Language",
    name: "C and C++",
    level: "Expert",
    content:
      "Strong foundation in low-level programming with C and C++, enabling the development of performance-critical applications, embedded systems, and complex algorithms.",
  },
];

const experiences = [
  {
    text: "Internship Journey: Fluttering to New Heights at 7Span!",
    content:
      "During my 6-month internship at 7Span Internet PVT LTD, I had the opportunity to immerse myself in the world of Flutter development. Under the guidance of experienced professionals, I gained valuable hands-on experience in building mobile applications using Flutter and Dart. This internship provided me with a solid foundation in creating visually appealing and responsive user interfaces while ensuring smooth performance across different platforms. It was an invaluable experience that enhanced my skills and knowledge in the Flutter ecosystem.",
    image: "internship-experience",
    image2: "internship-pic",
  },
  {
    text: "Volunteer Experience: Connecting and Learning at Google Devfest Ahmedabad 2022!",
    content:
      "During my volunteer experience at Google Devfest Ahmedabad 2022, I had the privilege of being a part of the Social Media Team. This dynamic tech event featured sessions in three key areas: Mobile, Web, and Startups. Through my involvement, I had the opportunity to meet and connect with numerous like-minded individuals, including developers who delivered insightful sessions on various technologies. The event was a transformative experience, as it not only expanded my network but also enabled me to learn and explore new developments in the tech industry.",
    image: "volunteer-experience",
    image2: "volunteer-pic",
  },
];
</script>

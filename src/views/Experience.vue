<template>
  <div class="p-16 space-y-10 max-h-[500px] overflow-auto">
    <!-- Skills -->
    <Transition duration="550" name="nested">
      <div class="font-display space-y-8">
        <Title title="Skills" />
        <div class="space-y-8">
          <Card v-for="(skill, index) in skills" :key="index" :skill="skill" />
        </div>
      </div>
    </Transition>

    <!-- Experiences -->
    <div class="font-display space-y-8">
      <Title title="Experiences" />
      <div class="space-y-16">
        <Card
          v-for="(experience, index) in experiences"
          :key="index"
          :experience="experience"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    image: "flutter_language.svg",
    alt: "Flutter Language",
    name: "Flutter",
    level: "Intermediate",
    content:
      "Proficient in cross-platform app development using the Flutter framework, creating visually appealing and responsive user interfaces.",
  },
  {
    image: "dart_language.svg",
    alt: "Dart Language",
    name: "Dart",
    level: "Intermediate",
    content:
      "Skilled in Dart programming language, utilizing its object-oriented features and compiling capabilities to write efficient and maintainable code.",
  },
  {
    image: "firebase_language.svg",
    alt: "Firebase Language",
    name: "Firebase",
    level: "Intermediate",
    content:
      "Experienced in integrating Firebase services, including real-time databases, authentication, cloud functions, and hosting, to enhance app functionality and user experience.",
  },
  {
    image: "python_language.svg",
    alt: "Python Language",
    name: "Python",
    level: "Intermediate",
    content:
      "Proficient in cross-platform app development using the Flutter framework, creating visually appealing and responsive user interfaces.",
  },
  {
    image: "c-c++_language.svg",
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
    image: "internship-experience.jpg",
    image2: "internship-pic.jpg",
  },
  {
    text: "Volunteer Experience: Connecting and Learning at Google Devfest Ahmedabad 2022!",
    content:
      "During my volunteer experience at Google Devfest Ahmedabad 2022, I had the privilege of being a part of the Social Media Team. This dynamic tech event featured sessions in three key areas: Mobile, Web, and Startups. Through my involvement, I had the opportunity to meet and connect with numerous like-minded individuals, including developers who delivered insightful sessions on various technologies. The event was a transformative experience, as it not only expanded my network but also enabled me to learn and explore new developments in the tech industry.",
    image: "volunteer-experience.jpg",
    image2: "volunteer-pic.jpg",
  },
];
</script>

<style>
.outer,
.inner {
  background: #eee;
  padding: 30px;
  min-height: 100px;
}

.inner {
  background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
</style>

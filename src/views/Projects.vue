<template>
  <div class="p-4 lg:p-16 space-y-10 lg:max-h-[590px] lg:overflow-auto">
    <div class="font-display space-y-8">
      <Title title="Projects" />
      <div class="space-y-8">
        <Card
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: "Programming Hacks",
    text: "Programming Hacks GitHub Repository",
    link: "https://github.com/gajjarvatsall/programming-hacks/tree/appwrite/development",
    content:
      "Programming Hacks is a curated collection of creative programming solutions and hacks. Explore a wide range of code snippets and algorithms covering various programming languages and domains. Enhance your coding skills, learn new techniques, and contribute to the collaborative programming community.",
    image: "programming_hacks.jpg",
  },
  {
    title: "Do-it Todo App",
    text: "Do-it Todo App GitHub Repository",
    link: "https://github.com/gajjarvatsall/Do-it-todo-app",
    content:
      "Do-it Todo App is a powerful task management application designed to help you stay organized and productive. With its intuitive user interface and robust features, you can easily create, manage, and prioritize your tasks. Stay on top of your to-do list and accomplish your goals efficiently with Do-it Todo App.",
    image: "doit_app.jpg",
  },
  {
    title: "FaceDetector",
    text: "FaceDetector GitHub Repository",
    link: "https://github.com/gajjarvatsall/FaceDetector",
    content:
      "FaceDetector is an advanced computer vision project that utilizes cutting- edge facial recognition technology. This project enables real-time detection and analysis of human faces in images or videos. With its accurate detection capabilities and robust features, FaceDetector opens up a wide range of possibilities in facial recognition applications.",
    image: "face_detector.png",
  },
  {
    title: "Cabin App",
    text: "Cabin App GitHub Repository",
    link: "https://github.com/gajjarvatsall/cabin-app",
    content:
      "Cabin App is a user-friendly and intuitive web application designed to streamline the process of managing rental cabins. From property listings and bookings to guest management and payment processing, Cabin App provides a comprehensive solution for cabin owners and rental agencies. Simplify your cabin management tasks with Cabin App.",
    image: "cabin_cast.jpg",
  },
  {
    title: "Snake Game",
    text: "Snake Game GitHub Repository",
    link: "https://github.com/gajjarvatsall/Sanke-Game",
    content:
      "Snake Game is a classic arcade game brought to life with modern game development techniques. Control a snake and navigate through the game board, eating food to grow longer while avoiding collisions with walls and the snake's own body. Experience the nostalgia of the iconic Snake Game and test your skills in this addictive and fun project.",
    image: "snake_game.png",
  },
];
</script>

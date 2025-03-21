import React from 'react'

function Hero() {
  return (
    <section class="hero bg-blue-500 text-white py-20 px-4 md:px-12 flex flex-col items-center justify-center text-center">
  <h1 class="text-4xl font-extrabold leading-tight mb-4">
    Stay on Top of Your Tasks, Effortlessly
  </h1>
  <p class="text-lg mb-8 max-w-3xl mx-auto">
    Our task management app helps you organize, track, and prioritize your work, ensuring you never miss a deadline. Simplify your workflow and boost your productivity today.
  </p>

  <div class="flex justify-center gap-4 mb-6">
    <a href="#signup" class="bg-yellow-500 text-black py-2 px-6 rounded-full text-xl font-semibold hover:bg-yellow-600 transition duration-300">
      Get Started
    </a>
    <a href="#demo" class="bg-transparent border-2 border-white py-2 px-6 rounded-full text-xl font-semibold text-white hover:bg-white hover:text-black transition duration-300">
      Try a Demo
    </a>
  </div>

  <div class="w-full max-w-3xl mt-12">
    <img src="path-to-image.jpg" alt="Task Management App Screenshot" class="mx-auto rounded-lg shadow-lg" />
  </div>
</section>

  )
}

export default Hero

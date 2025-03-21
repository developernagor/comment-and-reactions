import React from 'react'

function HowItWorks() {
  return (
    <section class="how-it-works bg-blue-50 py-16 px-4 md:px-12">
  <div class="text-center mb-16">
    <h2 class="text-3xl font-extrabold text-blue-600 mb-4">
      How It Works
    </h2>
    <p class="text-lg max-w-3xl mx-auto text-gray-700">
      Getting started with our task management app is simple. Follow these easy steps and you'll be on your way to achieving your goals in no time!
    </p>
  </div>

  <div class="steps grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
    <div class="step-card bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-blue-100">
      <div class="step-icon bg-blue-600 text-white p-4 rounded-full mb-4">
        <i class="fas fa-sign-in-alt"></i>
      </div>
      <h3 class="text-xl font-semibold text-blue-600 mb-4">
        Step 1: Sign Up
      </h3>
      <p class="text-gray-700">
        Create an account by signing up with your email or Google. It’s quick and easy to get started.
      </p>
    </div>

    <div class="step-card bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-blue-100">
      <div class="step-icon bg-blue-600 text-white p-4 rounded-full mb-4">
        <i class="fas fa-tasks"></i>
      </div>
      <h3 class="text-xl font-semibold text-blue-600 mb-4">
        Step 2: Create Tasks
      </h3>
      <p class="text-gray-700">
        Start creating tasks by adding titles, descriptions, deadlines, and priorities. Keep track of what matters most!
      </p>
    </div>

    <div class="step-card bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-blue-100">
      <div class="step-icon bg-blue-600 text-white p-4 rounded-full mb-4">
        <i class="fas fa-users"></i>
      </div>
      <h3 class="text-xl font-semibold text-blue-600 mb-4">
        Step 3: Assign & Collaborate
      </h3>
      <p class="text-gray-700">
        Assign tasks to yourself or teammates and start collaborating. You can share updates and track progress in real time.
      </p>
    </div>

    <div class="step-card bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-blue-100">
      <div class="step-icon bg-blue-600 text-white p-4 rounded-full mb-4">
        <i class="fas fa-clock"></i>
      </div>
      <h3 class="text-xl font-semibold text-blue-600 mb-4">
        Step 4: Track Deadlines
      </h3>
      <p class="text-gray-700">
        Use the countdown timer to track your task deadlines and ensure you meet them. Stay on top of your schedule!
      </p>
    </div>

    <div class="step-card bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-blue-100">
      <div class="step-icon bg-blue-600 text-white p-4 rounded-full mb-4">
        <i class="fas fa-check-circle"></i>
      </div>
      <h3 class="text-xl font-semibold text-blue-600 mb-4">
        Step 5: Mark as Complete
      </h3>
      <p class="text-gray-700">
        Once a task is completed, mark it as done. You’ll get a sense of accomplishment and see your progress over time.
      </p>
    </div>

    <div class="step-card bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-blue-100">
      <div class="step-icon bg-blue-600 text-white p-4 rounded-full mb-4">
        <i class="fas fa-chart-line"></i>
      </div>
      <h3 class="text-xl font-semibold text-blue-600 mb-4">
        Step 6: Analyze Your Progress
      </h3>
      <p class="text-gray-700">
        Review your task completion rate with detailed analytics and keep improving your productivity.
      </p>
    </div>
  </div>
</section>

  )
}

export default HowItWorks

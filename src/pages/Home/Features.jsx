import React from 'react'

function Features() {
  return (
    <section class="features bg-gray-100 py-16 px-4 md:px-12">
  <div class="text-center mb-16">
    <h2 class="text-3xl font-extrabold text-blue-500 mb-4">
      Key Features That Make Task Management a Breeze
    </h2>
    <p class="text-lg max-w-2xl mx-auto">
      Our app offers a wide range of features designed to help you manage tasks efficiently, stay organized, and achieve your goals faster.
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
    <div class="feature-card bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-blue-50">
      <h3 class="text-xl font-semibold text-blue-500 mb-4">
        Task Prioritization
      </h3>
      <p class="text-gray-700">
        Set task priorities, track their progress, and focus on what matters most to you.
      </p>
    </div>

    <div class="feature-card bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-blue-50">
      <h3 class="text-xl font-semibold text-blue-500 mb-4">
        Real-Time Updates
      </h3>
      <p class="text-gray-700">
        Stay up-to-date with real-time notifications and updates for any changes to your tasks.
      </p>
    </div>

    <div class="feature-card bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-blue-50">
      <h3 class="text-xl font-semibold text-blue-500 mb-4">
        Deadline Tracking
      </h3>
      <p class="text-gray-700">
        Never miss a deadline again with built-in countdown timers and deadline reminders.
      </p>
    </div>

    <div class="feature-card bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-blue-50">
      <h3 class="text-xl font-semibold text-blue-500 mb-4">
        Collaboration Tools
      </h3>
      <p class="text-gray-700">
        Easily assign tasks, collaborate with teammates, and track group progress all in one place.
      </p>
    </div>

    <div class="feature-card bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-blue-50">
      <h3 class="text-xl font-semibold text-blue-500 mb-4">
        Customizable Views
      </h3>
      <p class="text-gray-700">
        Customize your task view to suit your workflow, whether it's Kanban, Calendar, or List view.
      </p>
    </div>

    <div class="feature-card bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:bg-blue-50">
      <h3 class="text-xl font-semibold text-blue-500 mb-4">
        Task Analytics
      </h3>
      <p class="text-gray-700">
        Gain insights into your productivity with detailed analytics and task completion reports.
      </p>
    </div>
  </div>
</section>

  )
}

export default Features

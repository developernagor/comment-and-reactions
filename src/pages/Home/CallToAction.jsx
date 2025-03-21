import React from 'react'

function CallToAction() {
  return (
    <section className="cta-section bg-blue-600 text-white py-16 px-6 md:px-12 rounded-lg shadow-lg mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join thousands of users who are transforming their workflow with our app. Take control of your tasks, set deadlines, and boost your productivity today!
        </p>
        
        <div className="cta-buttons flex justify-center gap-6">
          <a
            href="#signup"
            className="cta-button bg-white text-blue-600 hover:bg-blue-100 transition duration-300 py-3 px-6 rounded-full text-lg font-semibold"
          >
            Get Started
          </a>
          <a
            href="#explore"
            className="cta-button border-2 border-white text-white hover:bg-blue-500 hover:text-white transition duration-300 py-3 px-6 rounded-full text-lg font-semibold"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

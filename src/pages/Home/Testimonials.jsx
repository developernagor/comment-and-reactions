import React from 'react'

function Testimonials() {
    const testimonials = [
        {
          name: "John Doe",
          role: "Product Manager",
          text: "This task management app helped me and my team streamline our workflow. It's intuitive, user-friendly, and has really improved our productivity!",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Jane Smith",
          role: "Software Engineer",
          text: "I love the clean interface and real-time updates. It makes collaboration easy and keeps us all on track to meet deadlines.",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Mike Johnson",
          role: "UX Designer",
          text: "This app has become an essential tool in my daily routine. I can easily manage tasks, set deadlines, and collaborate with the team.",
          image: "https://via.placeholder.com/150",
        }
      ];
      
  return (
    <section className="testimonials py-16 px-4 md:px-12 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-4">
          What Our Users Say
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Don't just take our word for it! See how our users have benefited from our task management app.
        </p>
      </div>

      <div className="testimonials-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            <div className="testimonial-image mb-4">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s photo`}
                className="w-20 h-20 rounded-full mx-auto object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2 text-center">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500 text-center mb-4">{testimonial.role}</p>
            <p className="text-gray-700 text-center">
              <q className="italic">{testimonial.text}</q>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

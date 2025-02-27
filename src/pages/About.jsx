import { Link } from 'react-router-dom'
import { FaGraduationCap, FaUsers, FaLaptopCode, FaCertificate } from 'react-icons/fa'

const About = () => {
  const stats = [
    { icon: <FaGraduationCap size={30} />, count: "10,000+", label: "Students" },
    { icon: <FaUsers size={30} />, count: "20+", label: "Expert Instructors" },
    { icon: <FaLaptopCode size={30} />, count: "50+", label: "Courses" },
    { icon: <FaCertificate size={30} />, count: "5,000+", label: "Certifications" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CodeLearn</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to provide high-quality programming education that's accessible to everyone.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Team working together" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2020, CodeLearn started with a simple idea: make programming education accessible, engaging, and effective for everyone. What began as a small collection of tutorials has grown into a comprehensive learning platform trusted by thousands of students worldwide.
              </p>
              <p className="text-gray-700 mb-4">
                Our team of experienced developers and educators is passionate about creating learning experiences that bridge the gap between theory and real-world application. We believe that anyone can learn to code with the right guidance and practice.
              </p>
              <p className="text-gray-700">
                Today, we offer courses in various programming languages and technologies, from web development fundamentals to advanced programming concepts, all designed to help you achieve your learning goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-primary mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.count}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">David Chen</h3>
                <p className="text-gray-600 mb-4">Founder & Lead Instructor</p>
                <p className="text-gray-700">
                  With over 10 years of experience in web development and a passion for teaching, David leads our curriculum development.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                <p className="text-gray-600 mb-4">Senior JavaScript Instructor</p>
                <p className="text-gray-700">
                  A JavaScript expert with experience at top tech companies, Sarah specializes in modern front-end frameworks.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/men/67.jpg" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Michael Rodriguez</h3>
                <p className="text-gray-600 mb-4">Java & Backend Instructor</p>
                <p className="text-gray-700">
                  With a background in enterprise software development, Michael brings practical insights to our Java and backend courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Learning Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your coding journey today and become part of our growing community of learners and developers.
          </p>
          <Link 
            to="/courses" 
            className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg inline-block"
          >
            Explore Our Courses
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
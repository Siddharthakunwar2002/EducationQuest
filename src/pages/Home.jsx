import Hero from '../components/Hero'
import Features from '../components/Features'
import CourseCard from '../components/CourseCard'
import { Link } from 'react-router-dom'
import coursesData from '../data/coursesData'

const Home = () => {
  // Get featured courses (first 3)
  const featuredCourses = coursesData.slice(0, 3)

  return (
    <div>
      <Hero />
      <Features />
      
      {/* Featured Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link to="/courses" className="text-primary hover:underline font-medium">
              View All Courses
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600">Web Developer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The HTML and CSS courses were exactly what I needed to kickstart my web development career. The instructors explain concepts clearly and the hands-on projects helped me apply what I learned."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/44.jpg" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-600">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The JavaScript course was comprehensive and well-structured. I went from knowing basic syntax to building complex applications. The interactive coding challenges were particularly helpful."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Emily Rodriguez</h4>
                  <p className="text-gray-600">Java Developer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I had tried learning Java on my own without much success. This course broke down complex concepts into manageable chunks. The instructor's expertise and teaching style made all the difference."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Coding Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through our courses.
          </p>
          <Link 
            to="/courses" 
            className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
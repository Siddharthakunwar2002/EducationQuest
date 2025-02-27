import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-purple-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Master Coding Skills with Interactive Lessons
            </h1>
            <p className="text-xl mb-8">
              Learn HTML, CSS, JavaScript, and Java with hands-on projects and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/courses" className="btn bg-white text-primary hover:bg-gray-100 text-center">
                Explore Courses
              </Link>
              <Link to="/about" className="btn border-2 border-white hover:bg-white/10 text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Coding on laptop" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
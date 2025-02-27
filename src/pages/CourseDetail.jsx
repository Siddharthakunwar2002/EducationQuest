import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import coursesData from '../data/coursesData'
import CodeBlock from '../components/CodeBlock'
import { FaClock, FaBook, FaSignal } from 'react-icons/fa'

const CourseDetail = () => {
  const { courseId } = useParams()
  const [activeTab, setActiveTab] = useState(0)
  
  // Find the course with the matching ID
  const course = coursesData.find(c => c.id === courseId)
  
  // If course not found, show error message
  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
        <p className="text-gray-600 mb-8">The course you're looking for doesn't exist or has been removed.</p>
        <Link to="/courses" className="btn btn-primary">
          Browse All Courses
        </Link>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Course Header */}
        <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-8 rounded-lg mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl mb-6">{course.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <FaSignal className="mr-2" />
              <span>{course.level}</span>
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <FaClock className="mr-2" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <FaBook className="mr-2" />
              <span>{course.lessons} Lessons</span>
            </div>
          </div>
          
          <button className="btn bg-white text-primary hover:bg-gray-100">
            Enroll Now
          </button>
        </div>
        
        {/* Course Content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            {course.content.map((section, index) => (
              <button
                key={index}
                className={`px-6 py-4 font-medium ${
                  activeTab === index 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-600 hover:text-primary'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {section.title}
              </button>
            ))}
          </div>
          
          {/* Active Tab Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{course.content[activeTab].title}</h2>
            <p className="text-gray-700 mb-6">{course.content[activeTab].description}</p>
            
            <CodeBlock 
              code={course.content[activeTab].code} 
              language={course.id === 'java' ? 'java' : course.id}
            />
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setActiveTab(prev => Math.max(0, prev - 1))}
                disabled={activeTab === 0}
                className={`btn ${
                  activeTab === 0 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'btn-secondary'
                }`}
              >
                Previous Lesson
              </button>
              
              <button
                onClick={() => setActiveTab(prev => Math.min(course.content.length - 1, prev + 1))}
                disabled={activeTab === course.content.length - 1}
                className={`btn ${
                  activeTab === course.content.length - 1 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'btn-primary'
                }`}
              >
                Next Lesson
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
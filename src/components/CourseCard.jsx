import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            {course.category}
          </span>
          <span className="text-gray-600 text-sm">{course.lessons} lessons</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <Link 
          to={`/courses/${course.id}`} 
          className="btn btn-primary block text-center"
        >
          View Course
        </Link>
      </div>
    </div>
  )
}

export default CourseCard
import { FaLaptopCode, FaUserGraduate, FaCertificate, FaUsers } from 'react-icons/fa'

const Features = () => {
  const features = [
    {
      icon: <FaLaptopCode size={40} className="text-primary" />,
      title: "Interactive Learning",
      description: "Learn by doing with hands-on coding exercises and real-world projects."
    },
    {
      icon: <FaUserGraduate size={40} className="text-primary" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience."
    },
    {
      icon: <FaCertificate size={40} className="text-primary" />,
      title: "Certification",
      description: "Earn certificates upon completion to showcase your skills."
    },
    {
      icon: <FaUsers size={40} className="text-primary" />,
      title: "Community Support",
      description: "Join our community of learners and get help when you need it."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose CodeLearn?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
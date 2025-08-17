import courses from "../../data/data.json";

interface Course {
  title: string;
  description: string;
  image: string;
  category: string;
}

const Card = () => {
  // Group data by category
  const groupedCourses = courses.reduce(
    (acc: Record<string, Course[]>, course: Course) => {
      if (!acc[course.category]) {
        acc[course.category] = [];
      }
      acc[course.category].push(course);
      return acc;
    },
    {}
  );

  return (
    <section className="container mx-auto px-6 py-8">
      {Object.keys(groupedCourses).map((category, idx) => (
        <div key={idx} className="mb-12">
          {/* Judul kategori */}
          <h2 className="text-left mb-5 text-xl font-bold font-poppins">
            {category}
          </h2>

          {/* Grid card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {groupedCourses[category].map((course, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/5 text-white rounded-xl shadow-lg overflow-hidden flex flex-col w-full max-w-sm"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-auto object-cover"
                />
                <div className="pl-4 pr-6 pt-5 pb-5 flex flex-col text-left min-h-[150px]">
                  <h3 className="text-base font-bold font-poppins mb-3 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-sm font-poppins leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;

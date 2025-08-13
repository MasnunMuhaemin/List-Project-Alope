interface Course {
  title: string;
  description: string;
  date: string;
  views: number;
  image: string;
}

const courses: Course[] = [
  {
    title: "Machine Learning Supervised: Regresi",
    description:
      "Regresi adalah jantung dari supervised learning untuk prediksi nilai numerik...",
    date: "10 Agustus • 12:28",
    views: 230,
    image: "/images/proyek1.png",
  },
  {
    title: "Pengenalan Machine Learning",
    description:
      "Machine learning adalah teknologi masa kini yang terus berkembang...",
    date: "29 Juli • 13:31",
    views: 129,
    image: "/images/proyek2.png",
  },
  {
    title: "Pemrograman Web dengan HTML",
    description:
      "HTML adalah bahasa markup standar untuk struktur halaman web...",
    date: "27 Februari • 23:54",
    views: 90,
    image: "/images/proyek3.png",
  },
  {
    title: "Pemrograman Web dengan HTML",
    description:
      "HTML adalah bahasa markup standar untuk struktur halaman web...",
    date: "27 Februari • 23:54",
    views: 90,
    image: "/images/proyek3.png",
  },
];

const Card = () => {
  return (
    <section className="max-w-8xl mx-auto px-6 py-8">
      <div className="grid cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-[350px] w-full max-w-sm"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="px-6 pt-6 pb-4 text-center flex flex-col justify-between flex-grow">
              <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2 font-poppins text-center">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 font-poppins leading-relaxed text-center">
                {course.description}
              </p>
              <div className="text-xs text-gray-500 flex justify-between mt-auto">
                <span>{course.date}</span>
                <span>{course.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;

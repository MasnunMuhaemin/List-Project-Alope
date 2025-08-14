import Card from "../components/Card/Card";

const ListProject = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-gray-800 font-poppins">
          List Project Alope
        </h2>
        {/* Deskripsi singkat */}
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto font-poppins">
          Proyek-proyek yang telah berhasil kami kerjakan untuk berbagai
          kebutuhan klien, dengan standar kualitas terbaik dan hasil yang
          memuaskan.
        </p>

        {/* Card List */}
        <div className="mt-10">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default ListProject;

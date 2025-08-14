import Card from "../components/Card/Card";

const ListProject = () => {
  return (
    <section className="py-12 relative overflow-hidden text-white">
      {/* Biru - kiri */}
      <img
        src="svg/Vector-12.svg"
        className="absolute top-[15px] left-0 w-[350px] sm:w-[500px] lg:w-[700px] xl:w-[800px] max-w-none pointer-events-none"
        alt="Blue Decoration"
        loading="lazy"
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Judul */}
        <h2 className="text-3xl font-bold font-poppins">
          List Project Alope
        </h2>
        <p className="mt-3 max-w-2xl mx-auto font-poppins">
          Proyek-proyek yang telah berhasil kami kerjakan untuk berbagai
          kebutuhan klien, dengan standar kualitas terbaik dan hasil yang
          memuaskan.
        </p>

        {/* Card List */}
        <div className="mt-10">
          <Card />
        </div>
      </div>

      {/* Kuning - kanan */}
      <img
        src="svg/Vector-11.svg"
        className="absolute top-[200px] right-0 w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] max-w-none pointer-events-none"
        alt="Yellow Decoration"
        loading="lazy"
      />

      {/* Ungu - kiri bawah */}
      <img
        src="svg/Vector-13.svg"
        className="absolute bottom-0 left-0 w-[350px] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[800px] max-w-none pointer-events-none"
        alt="Purple Decoration"
        loading="lazy"
      />
    </section>
  );
};

export default ListProject;

import Card from "../components/Card/Card";

const ListProject = () => {
  return (
    <section className="relative py-20 overflow-hidden text-white">
      <div className="absolute inset-0 h-1/2 bg-gradient-to-br from-black to-[#5998F4]/40" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-tr from-black to-[#5998F4]/40" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold font-poppins">List Project Alope</h2>
        <p className="mt-3 max-w-2xl mx-auto font-poppins">
          Proyek-proyek yang telah berhasil kami kerjakan untuk berbagai
          kebutuhan klien, dengan standar kualitas terbaik dan hasil yang
          memuaskan.
        </p>

        <div className="mt-10">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default ListProject;

import Image from "next/image";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className=" font-sans overflow-hidden">
      <Nav />
      <div className="hero pt-[5rem] grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="lead fw-bold text-[#5f5f5f]">Hello, I'm</p>
          <h1 className="display-3 mb-0 font-serif">Ahmad Amin Mahmood</h1>
          <p className="text-[22px] text-[#4f4f4f]">UI/UX Designer · Product Designer</p>

          <p className="fs-4 font-sans py-4">Designing thoughtful digital experiences</p>


          <p className="lead mb-4">
            This is a simple portfolio website built with Next.js and Bootstrap.
          </p>
          <a href="#projects" className="btn btn-light btn-lg">
            View My Projects
          </a>
        </div>
        
        <div>
          <Image
              src="/profile.jpg"
              alt="Portfolio Image"
              width={500}
              height={500}
              className="img-fluid rounded-[20px] shadow"
            />
        </div>
      </div>

    </div>
  );
}

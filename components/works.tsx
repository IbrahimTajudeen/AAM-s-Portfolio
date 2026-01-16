import Card from '@components/card';

const projects = [
  {
    title: "Stonetech Corporate Website",
    description:
      "Professional corporate website design showcasing services, company values, and client success stories.",
  },
  {
    title: "Stonetech Academy – Course Platform",
    description:
      "Educational platform interface featuring course catalogs, learning pathways, and student engagement tools.",
  },
  {
    title: "Car Rental Mobile Application",
    description:
      "Full-featured car rental app with booking flows, vehicle browsing, and payment integration.",
  },
  {
    title: "Car Rental App – Design System",
    description:
      "Comprehensive design system featuring reusable components and typography scales.",
  },
  {
    title: "Real-Time Messaging Platform",
    description:
      "Modern messaging app with real-time communication and intuitive chat interfaces.",
  },
];

export default function Works() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-center font-bold mb-5">Selected Works</h2>
        <p className="max-w-2/4  mx-auto text-[20px] text-center text-black dark:text-black mb-5">
          A collection of projects showcasing my approach to design, problem-solving, and user-centered thinking
        </p>
        <div className="mb-10 w-2/26 p-0.5 mx-auto bg-[slateblue] rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Card 
              key={index}
              image="/hero-bg.png"
              title={project.title}
              description={project.description}
              figmaUrl="#"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

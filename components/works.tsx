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
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Selected Works</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium hover:underline"
              >
                View on Figma →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

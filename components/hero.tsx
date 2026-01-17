import Image from 'next/image';
import AnimateIn from '@components/animate-in'

export default function Hero() {
  return (
    <section className="h-screen max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center hero">
      <div className='lg:pl-10 lg:pt-40 md:pl-6 md:pt-20 text-center md:text-left'>
        <p className="text-gray-500 mb-4">Hello, I'm</p>

        <AnimateIn>
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
            Ahmad Amin <br /> Mahmood
          </h1>
        </AnimateIn>

        <p className="mt-2 text-gray-600 font-medium text-[20px]">
          UI/UX Designer · Product Designer
        </p>

        <p className="mt-5 text-gray-600 font-medium text-[20px]">
          Designing thoughtful digital experiences
        </p>

        <p className="mt-6 text-gray-500 max-w-xl">
          I create intuitive and elegant solutions that bridge the gap between 
          user needs and business goals, focusing on problem-solving 
          through design thinking and creative innovation.
        </p>

        <button className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
          View My Work
        </button>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative w-full shadow rounded-3xl overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

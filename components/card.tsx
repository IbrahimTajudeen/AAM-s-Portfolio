import Image from "next/image";
import Link from "next/link";
import AnimateIn from '@components/animate-in'

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  figmaUrl: string;
}

export default function Card({
  image,
  title,
  description,
  figmaUrl,
}: ProjectCardProps) {
  return (
    <AnimateIn>
        <div className="overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        
        {/* Image */}
        <div className="relative h-80 w-full hover:scale-105 transition-transform duration-300">
            <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
            />
        </div>

        {/* Content */}
        <div className="p-6">
            <h3 className="text-xl font-semibold text-black mb-3 text-[20px]">
            {title}
            </h3>

            <p className="text-[18px] text-gray-600 dark:text-gray-600 text-sm leading-relaxed mb-4">
            {description}
            </p>

            <Link
            href={figmaUrl}
            target="_blank"
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-medium hover:underline hover:scale-105  transition-transform duration-100"
            >
            View on Figma
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 3h7m0 0v7m0-7L10 14"
                />
            </svg>
            </Link>
        </div>
        </div>
    </AnimateIn>
  );
}

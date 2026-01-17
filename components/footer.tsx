import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Twitter,
  Figma,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0F172A] to-[#111827] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Ahmad Amin Mahmood
            </h3>
            <p className="text-sm mb-4">
              UI/UX Designer · Product Designer
            </p>
            <p className="text-sm text-gray-400 max-w-sm">
              Creating thoughtful digital experiences through design thinking
              and creative innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Work</Link></li>

              <li className="mt-4 font-medium text-white">Figma Projects</li>
              <li className="text-gray-400">Stonetech Websites Design</li>
              <li className="text-gray-400">Car Rental Project</li>
              <li className="text-gray-400">Messaging App</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                ahmaduduamin@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                +234 906 900 4253
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                +234 916 138 9953
              </li>
            </ul>

            <p className="mt-6 mb-3 text-sm text-gray-400">
              Follow me on:
            </p>

            <div className="flex gap-3">
              <SocialIcon><MessageCircle /></SocialIcon>
              <SocialIcon><Instagram /></SocialIcon>
              <SocialIcon><Twitter /></SocialIcon>
              <SocialIcon><Figma /></SocialIcon>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 border-t border-white/10" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
          <p>© 2026 Ahmad Amin Mahmood. All rights reserved.</p>
          <p>Designed with passion and creativity</p>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg mb-6 text-gray-200">
            Let's collaborate on your next project
          </p>
          <button className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
            Contact Me
          </button>
        </div>
      </div>
    </footer>
  );
}

/* Social Icon Wrapper */
function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
      {children}
    </div>
  );
}

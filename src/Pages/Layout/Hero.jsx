import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Images/hero.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center mt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="block">Empower Dreams</span>
          <span className="block">
            Through <span className="text-mint-green">Support</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Be a part of the breakthrough and make someone's dream come true.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="/create"
            className="px-8 py-3 bg-mint-green text-white rounded-full hover:bg-mint-green/90 transition-colors w-full sm:w-auto text-center font-medium"
          >
            Start a Campaign
          </a>
          <Link
            to="/view-projects"
            className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm w-full sm:w-auto text-center font-medium"
          >
            Explore Campaigns
          </Link>
        </div>
      </div>
    </section>
  );
}

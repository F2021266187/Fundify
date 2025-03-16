function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      {/* Top Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-medium text-gray-800 mb-4">
          Support local initiatives and national progress, all in one place.
        </h2>

        <h1 className="text-4xl font-bold mb-16">
          Distribute aid <span className="text-[#B2C9AD]">easily</span>,{" "}
          <span className="text-[#B2C9AD]">quickly</span>, and{" "}
          <span className="text-[#B2C9AD]">transparently</span>.
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <img
              src="/images/funding-illustration.png"
              alt="People funding ideas"
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </div>

          <div className="lg:w-1/2 text-right">
            <p className="text-lg text-gray-700 mb-4">
              Fundify is a national crowdfunding platform built to support
              Pakistan's communities, entrepreneurs, and causes.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We connect people with the resources they need to create
              impact—empowering individuals, transforming communities, and
              driving progress across the nation. Together, we make dreams a
              reality.
            </p>
            <a
              href="/about"
              className="inline-block text-gray-600 hover:text-gray-800 underline mt-2"
            >
              Read more About us
            </a>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-center mb-10">Our Mission</h2>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <img
              src="/images/discussion-illustration.png"
              alt="People in discussion"
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div className="lg:w-1/2">
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque donec et nibh bibendum nec proin nisi. Elementum
              aenean neque diam aliquam, vel, quis sed. Cursus ut ipsum nulla
              erat morbi porttitor vel nec. Sed quam rhoncus, diam pellentesque
              fermentum porttitor adipiscing quis tellus.
            </p>
            <p className="text-gray-700 mb-4">
              Odio dui elit quam tincidunt et rutrum ut. Sit aliquet ullamcorper
              nam laoreet nisi. Ante vulputate sit sodales consequat. Luctus
              ipsum tincidunt at tellus purus. Consectetur quis massa id duis
              est enim. Cras pellentesque volutpat nunc pharetra. Tristique
              volutpat adipiscing eget erat turpis sapien viverra.
            </p>
            <p className="text-gray-700">
              A risus et, diam imperdiet varius amet. Sapien sagittis, eget
              viverra risus. Lacus, elit ac nisi, elementum cras. At interdum
              purus tortor, dis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

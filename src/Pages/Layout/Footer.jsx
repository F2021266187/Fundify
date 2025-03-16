function Footer() {
  return (
    <footer className="bg-[#4A5D45] text-white py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Column */}
          <div className="flex flex-col items-center justify-center self-center">
            <img
              src="/images/logo.png"
              alt="Fundify Logo"
              className="h-20 w-20 mb-2"
            />
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8">
            {/* About Column */}
            <div>
              <h3 className="text-lg font-medium mb-4">ABOUT</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/help" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/howto" className="hover:underline">
                    How-to
                  </a>
                </li>
              </ul>
            </div>

            {/* Terms Column */}
            <div>
              <h3 className="text-lg font-medium mb-4">TERMS & CONDITIONS</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/trust" className="hover:underline">
                    Trust and Safety
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="hover:underline">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Office Column */}
          <div className="text-right">
            <h3 className="text-lg font-medium mb-4">OUR OFFICE</h3>
            <p className="mb-2">
              University of Management and Technology,
              <br />
              C-II, Johar Town, Lahore, Pakistan.
            </p>
            <p className="mb-8">ZIP: 54782</p>
            <p className="text-sm">2025 © Fundify Platform.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

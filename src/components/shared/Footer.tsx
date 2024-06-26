import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-100/80">
      <div className="section-wrapper flex max-md:flex-wrap flex-col md:flex-row gap-10 lg:gap-20 py-10">
        <div className="lg:w-1/3 space-y-5">
          <h4>Urban Oasis</h4>
          <p>
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between gap-10">
          <div className="space-y-5">
            <h6>Product</h6>

            <div className="space-y-2">
              <p>Overview</p>
              <p>Features</p>
              <p>Solutions</p>
              <p>Tutorials</p>
              <p>Pricing</p>
              <p>Releases</p>
            </div>
          </div>
          <div className="space-y-5">
            <h6>Company</h6>

            <div className="space-y-2">
              <p>About Us</p>
              <p>Careers</p>
              <p>Press</p>
              <p>News</p>
              <p>Media Kit</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="space-y-5">
            <h6>Resources</h6>

            <div className="space-y-2">
              <p>Blog</p>
              <p>Newsletter</p>
              <p>Events</p>
              <p>Help Centre</p>
              <p>Tutorials</p>
              <p>Support</p>
            </div>
          </div>
          <div className="space-y-5">
            <h6>Social</h6>

            <div className="space-y-2">
              <p>Twitter</p>
              <p>Linkedin</p>
              <p>Facebook</p>
              <p>GitHub</p>
              <p>AngelList</p>
              <p>Dribbble</p>
            </div>
          </div>

          <div className="space-y-5">
            <h6>Legal</h6>

            <div className="space-y-2">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
              <p>Licenses</p>
              <p>Settings</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="section-wrapper border border-blue-200" />

      <div className="section-wrapper flex flex-wrap items-center justify-between gap-5 lg:gap-10 py-5">
        <p>All Rights Reserved. © 2024 Ibrahim Khalil</p>

        <div className="flex items-center gap-3">
          <FaTwitter className="size-6 text-blue-700" />
          <FaLinkedinIn className="size-6 text-blue-700" />
          <FaFacebook className="size-6 text-blue-700" />
          <FaInstagram className="size-6 text-blue-700" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

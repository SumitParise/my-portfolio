import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative px-4 py-10"
    >
      {/* Main Content */}
      <RevealOnScroll>
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Hi, I'm Sumit Parise
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto">
           I'm a passionate <strong>.NET Developer with over 2 years of experience</strong> in building <strong>scalable web applications and APIs.</strong> I have hands-on expertise in <strong> Microservice architecture</strong> and <strong>RabbitMQ for efficient, distributed system design.</strong> I’m driven by a continuous desire to <strong>learn new technologies </strong> and <strong> deliver high-performing, user-focused solutions.</strong>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Bottom Button */}
      <div className="mt-16 flex justify-center">
        <a
          href="/Sumit_Parise_DotNET.pdf" // Update with actual resume path
          download
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-700 to-purple-700 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

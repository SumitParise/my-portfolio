import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
    <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      

           <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">Spot Management System</h3>
            <p className="text-gray-400 mb-4">
         Worked as part of a development team to build a mobile-based system for municipal corporations to streamline property re-evaluation and tax reassessment. Contributed to implementing modules for adding, updating, and deleting property details, integrating image upload functionality, and enabling multi-property entry for surveyors. Implemented pagination and performance optimisations for smooth data loading. The system ensures accurate property data collection, seamless survey operations, and transparent tax recalculation processes.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[".NET Core", "SQL Server", "Postman"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-5 mx-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors py-3"> View Project ➡️</a>
            </div>
          </div>

    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">Shrutika Beauty Parlour</h3>
            <p className="text-gray-400 mb-4">
             Developed a full-stack web application for a beauty parlour to enhance customer engagement and streamline business operations. The platform allows customers to explore services through an interactive landing page, submit reviews, view product advertisements, and enrol in beauty learning programs. Integrated a chatbot for real-time customer assistance.
              On the admin side, implemented a secure login using JWT-based authentication, enabling administrators to manage website content efficiently— including adding, updating, and deleting reviews, monitoring admissions, and handling account details. The application’s frontend was built with ReactJS and deployed on Microsoft Azure with a custom domain for a professional web presence.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", ".NET Core", "Azure", "SQL Server","HangFire","RabbitMQ"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-1 mx-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
                <a href="https://www.shrutikamakeover.co.in/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors py-3"> View Project ➡️</a>
            </div>
          </div>

           {/* <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">cloud platform</h3>
            <p className="text-gray-400 mb-4">
              scalable cloud infrastructure Management with real-time monitoring
              and automated scaling.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "SpringBoot", "AWS", "Docker"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-5 mx-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors py-3"> View Project ➡️</a>
            </div>
          </div> */}
           {/* <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">cloud platform</h3>
            <p className="text-gray-400 mb-4">
              scalable cloud infrastructure Management with real-time monitoring
              and automated scaling.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "SpringBoot", "AWS", "Docker"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-5 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors py-3"> View Project ➡️</a>
            </div>
          </div> */}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

import { RevealOnScroll } from "../RevealOnScroll";

   export const Projects= ()=>{
            return(
                <section id="projects" className="min-h-screen flex items-center justify-center
                py-20">
                    <RevealOnScroll>
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 
                to-cyan-400 bg-clip-text text-transparent text-center"
                    >
                    {" "}Projects
                    </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                    hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">StudentHub</h3>
                        <p className="text-gray-400 mb-4">• Developed a CRUD web-based Student Management Dashboard using Spring Boot and Thymeleaf.
• Implemented RESTful APIs for seamless data interaction and management.
• Used Maven for efficient project management, improving application maintainability.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML","CSS","Bootstrap","JavaScript", "React", "Java", "Spring Boot", "Docker"].map((skill,key)=>(
                                 <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                 {skill}
                             </span>
                            ))}
                        </div>


                        <div className="flex justify-between items-center">
                            <a href="https://github.com/bhaskarpandey1234" className="my-4 text-blue-400 hover:text-blue-300 transition-colors">{" "} View Project{" "}</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                    hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">AcademiaManager</h3>
                        <p className="text-gray-400 mb-4">• Developed and containerized a full-stack course management system using Spring Boot (backend) and React (frontend).
• Created RESTful APIs with proper CORS configuration for secure communication between frontend and backend.
• Designed a responsive, user-friendly UI in React for a seamless user experience.
• Used Docker Compose to streamline deployment, reducing setup time by 50%.
</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML","CSS","Bootstrap","JavaScript", "React", "Java", "Spring Boot", "Docker"].map((skill,key)=>(
                                 <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                 {skill}
                             </span>
                            ))}
                        </div>


                        <div className="flex justify-between items-center">
                            <a href="https://github.com/bhaskarpandey1234?tab=repositories" className="my-4 text-blue-400 hover:text-blue-300 transition-colors">{" "} View Project{" "}</a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                    hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">SMS</h3>
                        <p className="text-gray-400 mb-4">• Developed Student Management Dashboard using React and Material UI.
• Firebase integration for data interaction and management.
• Used Vite for efficient project management, improving application maintainability.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML","CSS","JavaScript", "React", "Vite", "Material UI", "Firebase"].map((skill,key)=>(
                                 <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                 {skill}
                             </span>
                            ))}
                        </div>


                        <div className="flex justify-between items-center">
                            <a href="https://shimmering-wisp-dbbe40.netlify.app/" className="my-4 text-blue-400 hover:text-blue-300 transition-colors">{" "} View Project{" "}</a>
                        </div>
                    </div>



                </div>
                    </div></RevealOnScroll>
                </section>
             );
  }
import { RevealOnScroll } from "../RevealOnScroll";

export const About=()=>{

    const frontendSkills=["HTML", "CSS", "JavaScript","Bootstrap", "ReactJS", "TypeScript","TailwindCSS","Material UI"];

    const backendSkills=["Java", "Spring Boot","REST API","SQL","MySQL","PostgreSQL", "AWS","MongoDB"];


    return (
        <section id="about"
        className="min-h-screen flex items-center justify-center py-20"
        > <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 
                to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skill,key)=>(
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {skill}
                                    </span>
                                ))
                            }
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skill,key)=>(
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {skill}
                                    </span>
                                ))
                            }
                            </div>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.Tech in Computer Science & Engineering</strong> - BTKIT, Dwarahat
                                <p>(2020-2024)</p>
                            </li>
                            <li>
                                Relevant Coursework: Data Structures, Web Development, Cloud Computing...
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Internship Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                {" "}Backend Developer Intern at <b>Workfall</b>
                                (Nov 2024 - Jan 2025){" "}
                                </h4>
                                <p>• Designed entities and developed REST APIs for scalable backend systems.
                                </p>
                                {/* <p>Developed and maintained microservices for cloud based applications</p> */}
                                <p>• Wrote clean and optimized code for better user experience
                                </p>
                                <p>• Integrated front-end components with REST APIs
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold">{" "}Java Full Stack Developer Intern at <b>Kodnest</b>
                                (Mar 2024 - May 2024){" "}
                                </h4>
                                <p>• Gained hands-on experience with HTML, CSS, JavaScript, and SQL for full-stack development.
                                </p>
                                <p>• Assisted in building full stack applications and integration of REST APIs.</p>
                                <p>• Assisted in debugging and improving site performance
                                </p>
                                <p>• Developed and optimized CRUD operations using Spring Boot for a Student Management Dashboard
                                </p>
                            </div>


                        </div>
                    </div>

                </div>



            </div></RevealOnScroll>
        </section>
    );
}
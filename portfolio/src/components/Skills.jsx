import { FaReact, FaJava, FaGitAlt, FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiTailwindcss, SiPython, SiNextdotjs } from "react-icons/si"

function Skills() {

  const skills = [
{ icon: <FaReact size={40} className="text-blue-500" />, name: "React" },
{ icon: <FaJava size={40} className="text-red-500" />, name: "Java" },
{ icon: <SiJavascript size={40} className="text-yellow-400" />, name: "JavaScript" },
{ icon: <FaNodeJs size={40} className="text-green-500" />, name: "Node.js" },
{ icon: <SiTailwindcss size={40} className="text-teal-400" />, name: "Tailwind CSS" },
{ icon: <SiPython size={40} className="text-blue-600" />, name: "Python" },
{ icon: <SiNextdotjs size={40} className="text-black" />, name: "Next.js" }
  ]

  return (

    <section id="skills" className="py-24 bg-gray-100 text-center">

      <h2 className="text-3xl font-bold bg-gradient-to-r from-deepblue to-redish bg-clip-text text-transparent">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="flex flex-col items-center gap-2 hover:scale-110 transition"
          >

            {skill.icon}
            <p className="text-black">{skill.name}</p>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Skills
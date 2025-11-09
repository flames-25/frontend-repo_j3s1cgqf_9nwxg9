import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';

const skills = [
  {
    title: 'Frontend',
    icon: Code,
    items: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express', 'FastAPI', 'MongoDB'],
    gradient: 'from-purple-500/20 to-indigo-500/20',
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'Vercel', 'Render', 'Figma', 'Postman'],
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-semibold md:text-4xl"
        >
          Skills
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <card.icon className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  {card.items.map((item) => (
                    <li key={item} className="transition-transform group-hover:translate-x-1">• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Notes App',
    tags: ['React', 'FastAPI', 'MongoDB'],
    img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    github: '#',
  },
  {
    title: 'E-Commerce UI',
    tags: ['React', 'Tailwind'],
    img: 'https://images.unsplash.com/photo-1515165562835-c4c7b0522b77?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    github: '#',
  },
  {
    title: 'Portfolio v2',
    tags: ['Vite', 'Framer Motion'],
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    github: '#',
  },
  {
    title: 'Chat App',
    tags: ['Node', 'Socket.io'],
    img: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-semibold md:text-4xl"
        >
          Projects
        </motion.h2>
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="mb-6 break-inside-avoid rounded-xl border border-white/10 bg-white/5 shadow-lg backdrop-blur"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img src={p.img} alt={p.title} className="h-48 w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-full bg-white/10 px-2 py-1">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <a href={p.live} className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                  <a href={p.github} className="inline-flex items-center gap-1 text-gray-300 hover:text-white">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

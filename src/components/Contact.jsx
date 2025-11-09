import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    // For now, just open mailto. Backend can be wired later.
    window.location.href = `mailto:harsh.singh@example.com?subject=Portfolio%20Contact&body=Name:%20${encodeURIComponent(payload.name)}%0AEmail:%20${encodeURIComponent(payload.email)}%0A%0A${encodeURIComponent(payload.message)}`;
  };

  return (
    <section id="contact" className="w-full bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-semibold md:text-4xl"
        >
          Get in touch
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-300">Name</label>
              <input name="name" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-indigo-500" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-300">Email</label>
              <input type="email" name="email" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-indigo-500" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm text-gray-300">Message</label>
            <textarea name="message" rows="5" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-indigo-500" placeholder="Tell me about your project..." />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500">
            <Mail className="h-4 w-4" /> Send message
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-400">Prefer socials? Find me on <a href="https://github.com/" className="text-indigo-400 hover:text-indigo-300">GitHub</a> and <a href="https://linkedin.com/" className="text-indigo-400 hover:text-indigo-300">LinkedIn</a>.</p>
      </div>
    </section>
  );
}

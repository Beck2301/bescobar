import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMail, HiOutlineCheckCircle, HiOutlineExclamationCircle } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedBackground from "./AnimatedBackground";

const contactText = {
  es: {
    title: "Contacto",
    subtitle: "¿Tienes un proyecto en mente?",
    description: "Estoy listo para llevar tus ideas al siguiente nivel. Escríbeme y hablemos sobre cómo puedo ayudarte.",
    nameLabel: "Nombre",
    emailLabel: "Correo electrónico",
    messageLabel: "Tu mensaje",
    send: "Enviar mensaje",
    sending: "Enviando...",
    success: "¡Mensaje enviado! Te contactaré pronto.",
    error: "Ocurrió un error. Inténtalo de nuevo.",
    socialsTitle: "Redes sociales",
    emailTitle: "Email directo"
  },
  en: {
    title: "Contact",
    subtitle: "Got a project in mind?",
    description: "I'm ready to take your ideas to the next level. Write to me and let's talk about how I can help.",
    nameLabel: "Name",
    emailLabel: "Email address",
    messageLabel: "Your message",
    send: "Send message",
    sending: "Sending...",
    success: "Message sent! I'll be in touch soon.",
    error: "Something went wrong. Please try again.",
    socialsTitle: "Social Media",
    emailTitle: "Direct Email"
  },
};

interface ContactProps {
  id?: string;
  lang: "es" | "en";
}

const Contact: React.FC<ContactProps> = ({ id, lang }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const t = contactText[lang];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mvgayyzk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.section
      id={id}
      className="relative min-h-[100dvh] md:h-screen md:min-h-0 bg-transparent dark:bg-transparent md:snap-start md:snap-always overflow-visible flex flex-col pt-24 pb-32 md:py-24 px-6 md:justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <AnimatedBackground variant="purple" />
      
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">
                {t.title}
              </h2>
              <div className="h-1 w-20 bg-orange-500 mb-8" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-balance">
                {t.subtitle}
              </h3>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
                {t.description}
              </p>
            </motion.div>

            <div className="space-y-8">

              {/* Socials Card */}
              <div className="pt-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">{t.socialsTitle}</div>
                <div className="flex gap-4">
                  <a href="mailto:bescobar2321@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                    <HiMail size={22} />
                  </a>
                  <a href="https://github.com/Beck2301" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-400 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/bryan-escobar-guevara/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-400 hover:bg-[#0077B5] hover:text-white transition-all">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div
              className="bg-white/95 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-gray-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-1">{t.nameLabel}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-white/5 border border-transparent focus:border-orange-500 dark:focus:border-orange-500 rounded-2xl h-14 px-6 text-gray-900 dark:text-white outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-1">{t.emailLabel}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-white/5 border border-transparent focus:border-orange-500 dark:focus:border-orange-500 rounded-2xl h-14 px-6 text-gray-900 dark:text-white outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-1">{t.messageLabel}</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-white/5 border border-transparent focus:border-orange-500 dark:focus:border-orange-500 rounded-[1.5rem] p-6 text-gray-900 dark:text-white outline-none transition-all font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-14 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  {status === "loading" ? t.sending : t.send}
                </button>
              </form>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-16 left-0 right-0 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3 text-green-500 font-bold justify-center"
                  >
                    <HiOutlineCheckCircle size={20} />
                    {t.success}
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-16 left-0 right-0 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500 font-bold justify-center"
                  >
                    <HiOutlineExclamationCircle size={20} />
                    {t.error}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "E-commerce Platform", description: "A full-stack e-commerce solution built with React and Node.js." },
  { title: "AI Chat Assistant", description: "An intelligent chatbot powered by machine learning algorithms." },
  { title: "Fitness Tracker App", description: "A mobile app for tracking workouts and nutrition using React Native." },
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="mb-20 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}


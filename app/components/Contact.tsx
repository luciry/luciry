'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "lucacirillo@outlook.com",
      href: "mailto:lucacirillo@outlook.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+39 320 309 6424",
      href: "tel:+393203096424"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Genova, Italy",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/luciry",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/luca-cirillo",
      color: "hover:text-blue-600"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Get In Touch</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or innovative projects in AI and simulation engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="text-blue-200">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">{info.label}</p>
                      {info.href !== "#" ? (
                        <a 
                          href={info.href}
                          className="text-white hover:text-blue-200 transition-all duration-300 hover:underline hover:scale-105 inline-block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-blue-200 ${link.color} transition-all duration-300 p-3 rounded-full hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-white/20 border border-white/20 hover:border-white/40 group`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="group-hover:rotate-12 transition-transform duration-300">
                        {link.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Let's Collaborate</h3>
              <div className="space-y-4 text-blue-100">
                <p>
                  I'm passionate about using AI and technology to make a positive impact on the world. 
                  Whether you're interested in:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2 mt-1.5"></div>
                    <span>AI research and development projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2 mt-1.5"></div>
                    <span>Simulation engineering and interoperability</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2 mt-1.5"></div>
                    <span>Large Language Model integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2 mt-1.5"></div>
                    <span>International collaboration opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2 mt-1.5"></div>
                    <span>Speaking engagements and seminars</span>
                  </li>
                </ul>
                <p className="text-sm">
                  I'm always excited to connect with like-minded professionals and explore new possibilities 
                  in the intersection of AI, simulation, and positive social impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 
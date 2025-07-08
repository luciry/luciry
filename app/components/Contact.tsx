'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Email",
      value: "lucacirillo@outlook.com",
      href: "mailto:lucacirillo@outlook.com"
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Phone",
      value: "+39 320 309 6424",
      href: "tel:+393203096424"
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Location",
      value: "Genova, Italy",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "GitHub",
      href: "https://github.com/luciry",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/luca-cirillo",
      color: "hover:text-blue-600"
    }
  ]

  return (
    <section id="contact" className="mobile-py bg-gradient-to-br from-blue-600 to-purple-600 safe-area-bottom">
      <div className="mobile-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="mobile-text-3xl font-bold mb-4 sm:mb-6 text-white">Get In Touch</h2>
          <p className="mobile-text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or innovative projects in AI and simulation engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 order-2 lg:order-1"
            >
              <h3 className="mobile-text-xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 sm:space-x-4"
                  >
                    <div className="text-blue-200 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-blue-200 text-xs sm:text-sm font-medium">{info.label}</p>
                      {info.href !== "#" ? (
                        <a 
                          href={info.href}
                          className="text-white hover:text-blue-200 transition-all duration-300 hover:underline text-sm sm:text-base block truncate min-h-[44px] flex items-center"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm sm:text-base">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8">
                <h4 className="mobile-text-base font-semibold text-white mb-3 sm:mb-4">Follow Me</h4>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-blue-200 ${link.color} transition-all duration-300 p-3 rounded-full hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-white/20 border border-white/20 hover:border-white/40 group flex items-center justify-center sm:justify-start min-h-[52px] sm:min-h-[44px] w-full sm:w-auto`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="group-hover:rotate-12 transition-transform duration-300 mr-2 sm:mr-3">
                        {link.icon}
                      </div>
                      <span className="text-sm sm:text-base font-medium">{link.label}</span>
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
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 order-1 lg:order-2"
            >
              <h3 className="mobile-text-xl font-bold text-white mb-4 sm:mb-6">Let's Collaborate</h3>
              <div className="space-y-3 sm:space-y-4 text-blue-100">
                <p className="text-sm sm:text-base leading-relaxed">
                  I'm passionate about using AI and technology to make a positive impact on the world. 
                  Whether you're interested in:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">AI research and development projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Simulation engineering and interoperability</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Large Language Model integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">International collaboration opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Speaking engagements and seminars</span>
                  </li>
                </ul>
                <p className="text-xs sm:text-sm leading-relaxed">
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
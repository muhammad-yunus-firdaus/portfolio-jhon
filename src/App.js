import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaLaravel,
  FaPython,
  FaFileExcel,
  FaCode,
  FaDatabase,
  FaServer,
  FaMobile,
  //FaMapMarkerAlt,
  FaEnvelope,
  FaPaperPlane
} from 'react-icons/fa';
import { SiMysql, SiPostgresql } from 'react-icons/si';


// Komponen CertificateCard
function CertificateCard({ image, title, year, issuer }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative pt-[56.25%] w-full overflow-hidden">
        <img
          src={`/certificates/${image}`}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain bg-gray-700"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/api/placeholder/300/200';
          }}
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-cyan-300">{title}</h3>
        <p className="text-gray-400 mb-1">{issuer}</p>
        <p className="text-gray-400">{year}</p>
      </div>
    </div>
  );
}

function SkillCard({ skill, icon, color }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-center shadow-md hover:scale-105 transform transition duration-300 flex flex-col items-center">
      <div className="text-4xl mb-3" style={{ color }}>{icon}</div>
      <div>{skill}</div>
    </div>
  );
}

// ikon python
function PythonIcon() {
  return (
    <div className="text-4xl mb-3 relative">
      <FaPython className="text-[#306998]" />
      <div className="absolute inset-0 top-1/2 overflow-hidden">
        <FaPython className="text-[#FFD43B] transform -translate-y-1/2" />
      </div>
    </div>
  );
}

function ProjectCard({ image, title, description, demoLink, githubLink, technologies = [] }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-900/40 transition-shadow duration-300 flex flex-col h-full">
      <div className="relative pt-[56.25%] w-full overflow-hidden rounded-md mb-4 bg-gray-700">
        <img
          src={`${process.env.PUBLIC_URL}${image}`}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/api/placeholder/300/200';
          }}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-cyan-300">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>

      {technologies.length > 0 && (
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-700 text-cyan-400 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between gap-3 mt-2">
        {/*      {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-600 px-4 py-2 rounded hover:bg-cyan-700 flex-1 text-center"
          >
            Live Demo
          </a> 
        )}*/}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 flex-1 text-center flex items-center justify-center gap-2"
          >
            <FaGithub /> Github
          </a>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-center text-gray-400 border-t border-gray-700">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/Yunusss7" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-yunus-692623334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/mhmmadynss?igsh=N2NreGl3cWlpOGx6" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.facebook.com/share/16hcioC2sr/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
          <FaFacebook size={24} />
        </a>
      </div>
      &copy; {new Date().getFullYear()} Yunus,Zarfan,Lufi,Gorib.
    </footer>
  );
}

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi submit form
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status setelah 5 detik
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    { name: 'Excel', icon: <FaFileExcel />, color: '#217346' },
    { name: 'Laravel', icon: <FaLaravel />, color: '#FF2D20' },
    { name: 'Python', isPython: true },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' }
  ];

  const projects = [
    {
      image: '/images/project2.jpg',
      title: 'Aplikasi Booking Tempat Futsal',
      description: 'Aplikasi web untuk booking lapangan futsal secara online, dibangun dengan Laravel, HTML, CSS, JavaScript, dan PHP dengan database MySQL. Fitur utama mencakup pemilihan jadwal, konfirmasi booking, dan panel admin untuk pengelolaan jadwal dan pengguna.',
      demoLink: 'https://demo-ecommerce.example.com',
      githubLink: 'https://github.com/yourusername/ecommerce-dashboard',
      technologies: ['Html', 'CSS', 'PHP', 'Laravel', 'MySQL']
    },
    {
      image: '/images/project4.jpg',
      title: 'Manajemen Tugas',
      description: 'Website Manajemen Tugas adalah aplikasi web berbasis Django yang memungkinkan pengguna mengelola dan memantau tugas harian dengan mudah. Dibangun menggunakan HTML, CSS, dan Python dengan database SQLite.',
      demoLink: 'https://blog.example.com',
      githubLink: 'https://github.com/yourusername/mobile-blog',
      technologies: ['HTML', 'CSS', 'Python', 'Django']
    }
  ];

  const experienceItems = [
    {
      icon: <FaCode className="text-cyan-400 text-xl" />,
      title: "Frontend Development",
      description: "Membangun antarmuka pengguna yang responsif dan interaktif dengan CSS."
    },
    {
      icon: <FaServer className="text-cyan-400 text-xl" />,
      title: "Backend Development",
      description: "Mengembangkan API dan logika server menggunakan PHP, Laravel, Python dan Django."
    },
    {
      icon: <FaDatabase className="text-cyan-400 text-xl" />,
      title: "Database Management",
      description: "Mendesain dan mengoptimalkan struktur database dengan MySQL dan MongoDB."
    },
    {
      icon: <FaMobile className="text-cyan-400 text-xl" />,
      title: "Mobile Responsive",
      description: "Membuat aplikasi web yang berfungsi di semua perangkat."
    }
  ];

  const certificates = [
    {
      image: "Leader_Himatif.jpg",
      title: "Leader MIPS 2024",
      year: "2024",
      issuer: "HIMATIF"
    },
    {
      image: "Panitia_Riding The Waves Of Cyber Space _Muhammad Yunus Firdaus.jpg",
      title: "Riding The Waves Of Cyber Space",
      year: "2024",
      issuer: "HIMATIF"
    },
    {
      image: "Introduction Back End Development.jpg",
      title: "Introduction Back End Development",
      year: "2025",
      issuer: "Meta"
    },
    {
      image: "Programming In Python.jpg",
      title: "Programming In Python",
      year: "2025",
      issuer: "Meta"
    },
    {
      image: "Work Smarter With Microsoft Excel.jpg",
      title: "Work Smarter With Microsoft Excel",
      year: "2025",
      issuer: "Microsoft"
    },
    {
      image: "Sertifikat 7 Dec.jpg",
      title: "Artificial Intelligence",
      year: "2023",
      issuer: "TrRecPro"
    },
    {
      image: "E-Certificate Excel.jpg",
      title: "Microsot Excel Basic",
      year: "2023",
      issuer: "Coding Studio"
    },
  ];

  const contactInfo = [
    /* {
      icon: <FaMapMarkerAlt className="text-cyan-400 text-xl" />,
      title: "Location",
      value: "Bandung, Indonesia",
      link: "https://maps.google.com/?q=Bandung"
    },
    {
      icon: <FaPhone className="text-cyan-400 text-xl" />,
      title: "Phone",
      value: "+62 813-1655-322",
      link: "tel:+628131654322"
    },*/
    {
      icon: <FaEnvelope className="text-cyan-400 text-xl" />,
      title: "Email",
      value: "Jhon123@gmail.com",
      link: "mailto:Jhon@gmail.com"
    }
  ];

  return (
    <div className="bg-gray-900 text-white w-full overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-gray-900 shadow-md z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-cyan-400">MyPortfolio</div>
          <div className="space-x-6 hidden md:flex">
            {['home', 'about', 'skills', 'certificates', 'projects', 'contact'].map((sec) => (
              <Link
                key={sec}
                to={sec}
                smooth
                duration={500}
                className="cursor-pointer hover:text-cyan-400 capitalize"
              >
                {sec}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Gambar Profil */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Area */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h1
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Hello, I'm Jhon
            </h1>
            
          </div>

          {/* Image Area */}
          <div className="flex-1 flex justify-center relative" data-aos="fade-left" data-aos-delay="400">
            <div className="absolute w-72 h-72 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-80" />
            <img
              src={`${process.env.PUBLIC_URL}/profile.jpg`}
              alt="Profile"
              className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section id="about" className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12" data-aos="fade-down">About Me</h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Profile Image */}
            <div className="lg:w-1/3 flex justify-center" data-aos="fade-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-75"></div>
                <img
                  src={`${process.env.PUBLIC_URL}/Images/About_Me.jpg`}
                  alt="Muhammad Yunus"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl object-cover border-4 border-gray-800 shadow-xl"
                />
              </div>
            </div>

            {/* About Me || Profilku */}
            <div className="lg:w-2/3 space-y-6" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-white">
                Saya Seorang <span className="text-cyan-400">Mahasiswa ||</span> Teknik Informatika <span className="text-cyan-400">||</span>
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Saya adalah seorang mahasiswa Teknik Informatika semester 12 dengan fokus pada pengembangan web .
                Saya memiliki minat yang besar dalam membangun aplikasi web yang efisien dan user-friendly.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Perjalanan saya dalam dunia pemrograman dimulai dari rasa ingin tahu yang mendalam tentang
                cara kerja teknologi, dan perlahan saya berkembang dan menjadi sebuah passion. Saya senang belajar teknologi baru dan selalu mencari
                tantangan untuk meningkatkan keterampilan saya,dan saat ini saya sedang mempelajari sebuah bahasa pemrograman berbahasa Python, JavaScript, Tailwind Css dan React.
              </p>

              {/* Experience Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {experienceItems.map((item, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-xl" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gray-700 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        <p className="text-gray-400 mt-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info Pribadi */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <span className="text-gray-400 w-32">Nama:</span>
                  <span className="text-white">Jhon</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 w-32">Email:</span>
                  <span className="text-white">Jhon123@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 w-32">Universitas:</span>
                  <span className="text-white">Ars University</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 w-32">Jurusan:</span>
                  <span className="text-white">Teknik Informatika</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8" data-aos="fade-right">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skills.map((skill, i) => (
              <div key={skill.name} data-aos={i % 2 === 0 ? 'fade-left' : 'fade-right'} data-aos-delay={i * 100}>
                {skill.isPython ? (
                  <div className="bg-gray-800 rounded-lg p-6 text-center shadow-md hover:scale-105 transform transition duration-300 flex flex-col items-center">
                    <PythonIcon />
                    <div>{skill.name}</div>
                  </div>
                ) : (
                  <SkillCard skill={skill.name} icon={skill.icon} color={skill.color} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section - IMPROVED */}
      <section id="certificates" className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8" data-aos="fade-left">
            Certificates
          </h2>

          {/* Grid container dengan tinggi yang sama untuk setiap kartu */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <div key={i} data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'} data-aos-delay={i * 150}>
                <CertificateCard
                  image={cert.image}
                  title={cert.title}
                  year={cert.year}
                  issuer={cert.issuer}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - IMPROVED */}
      <section id="projects" className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12" data-aos="fade-right">My Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <div key={proj.title} data-aos={i % 2 === 0 ? 'fade-up' : 'fade-up'} data-aos-delay={i * 100} className="h-full">
                <ProjectCard {...proj} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Yunusss7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-cyan-400 px-6 py-3 rounded-lg transition-colors"
              data-aos="fade-up"
            >
              <FaGithub size={20} />
              <span>Lihat Projek Di GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12" data-aos="fade-down">
            Contact Me
          </h2>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
              <h3 className="text-2xl font-semibold text-white">
                Hubungi Aku
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Untuk pertanyaan atau sekedar menyapa,
                silakan gunakan form ini atau mengirim pesan.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-cyan-600 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-400 group-hover:text-cyan-400 transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-yunus-692623334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-cyan-600 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/Yunusss7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-cyan-600 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.instagram.com/mhmmadynss?igsh=N2NreGl3cWlpOGx6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-cyan-600 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2" data-aos="fade-left">
              <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-8 rounded-xl shadow-xl space-y-6"
              >
                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 text-green-400 p-4 rounded-lg border border-green-500/50">
                    Terima Kasih!
                  </div>
                )}

                <div className="space-y-1">
                  <label htmlFor="name" className="text-gray-300">Nama</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                    placeholder="Nama"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-gray-300">Alamat Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-gray-300">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                    placeholder="Hello, ........"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-cyan-600 hover:bg-cyan-700'
                    }`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FaPaperPlane /> Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8">
      {/* Introduction Section */}
      <section id="introduction" className="mt-12 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Hello, I'm Yee Yang 👋
        </h1>
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            1000,
            "React / Next.js Expert",
            1000,
            "MongoDB / Node.js Developer",
            1000,
            "PHP, MYSQL, Javascript Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl sm:text-3xl text-gray-100"
          repeat={Infinity}
        />

        <p className="mt-6 max-w-2xl text-lg text-gray-200 mx-auto">
          With 7 years of hands-on experience, I specialize in building fast, responsive, and beautiful full-stack web applications. I recently completed a feature-rich movie booking app — check it out below.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <a
            href="https://github.com/kokyeeyang/movie-booking"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded"
          >
            Visit Movie Booking App
          </a>

          <a
            href="https://github.com/kokyeeyang"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mt-20 max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-6">💼 Experience</h2>
        <div className="space-y-6 text-lg">
          <div>
            <h3 className="text-xl font-semibold">Software developer @ Spencer Ogden</h3>
            <p className="text-sm text-gray-400">Jan 2023 – Present</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Developed and deployed scalable web applications using Next.js, Node.js, PHP, MySQL</li>
              <li>In charge of developing new features and integrations for inhouse KPI systems, as well as database, making predictions for finance department using ML models</li>
              <li>Integrated CI/CD pipelines and monitoring with GitHub Actions and Azure</li>
              <li>Optimizing and writing efficient mysql queries to streamline business processes</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Software Engineer @ Poetfarmer</h3>
            <p className="text-sm text-gray-400">Jun 2022 – Dec 2022</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Work on City of Rotterdam's website (Drupal), to track lead levels across the city. </li>
              <li>Work on International Institute for Democracy and Electoral Assistance website backend (Drupal), tracking the democracy levels of each country globally.</li>
              <li>work on Pedle, an IOT device meant to make life easier for senior citizens. e.g, listening to news</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Software Engineer @ PWC Malaysia</h3>
            <p className="text-sm text-gray-400">Sep 2021 – Jun 2022</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Part of the founding developers for PWC Marketplace</li>
              <li>In charge of expanding and developing features for PWC Marketplace in the ASEAN region</li>
              <li>Using Docker container to ensure application integrity and security</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Software Engineer @ SAGA OS</h3>
            <p className="text-sm text-gray-400">May 2018 – Jul 2021</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Adding new features into company's HR system</li>
              <li>Adding new features and reorganizing the layout of the communications portal used by the customer service team</li>
              <li>Developing new campaigns and features to keep players engaged to available games</li>
            </ul>
          </div>
          <ul className="space-y-4 text-lg">
            <li>
              ✅ Developed a full-stack movie booking app with seat layouts, Stripe integration, and user membership system
            </li>
            <li>
              ✅ 7 years of professional experience building full-stack apps with React, Node.js, MongoDB, and PostgreSQL
            </li>
            <li>
              ✅ Proficient in CI/CD, Docker, Azure, and GitHub Actions
            </li>
          </ul>
        </div>
      </section>
      <section id="projects" className="mt-20 max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-blue-400 transition-shadow">
            <a
              href="https://bookanymovie.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/cinema.png"
                alt="Movie Booking App"
                width={600}
                height={300}
                className="object-cover w-full h-40"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Movie Booking App</h3>
                <p className="text-sm text-gray-300">
                  Full-stack movie booking app with real-time seat layouts, membership system, Stripe payments, and responsive design.
                </p>
              </div>
            </a>
          </div>

          {/* Add more projects below */}
          {/* Example: Portfolio Website */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-blue-400 transition-shadow">
            <a
              href="https://www.idea.int/democracytracker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/gsod.png"
                alt="Portfolio"
                width={600}
                height={300}
                className="object-cover w-full h-40"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Global State of Democracy</h3>
                <p className="text-sm text-gray-300">
                  A monthly update on the state of democracy in all countries around the world.
                </p>
              </div>
            </a>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-blue-400 transition-shadow">
            <a
              href="https://www.letoplood.rotterdam.nl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/letoplood.png"
                alt="Portfolio"
                width={600}
                height={300}
                className="object-cover w-full h-40"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Rotterdam City website</h3>
                <p className="text-sm text-gray-300">
                  An initiative of the Rotterdam city government to track lead levels across the city, to ensure public safety.
                </p>
              </div>
            </a>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-blue-400 transition-shadow">
            <a
              href="https://marketplace.my.pwc.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/marketplace.pwc.png"
                alt="PWC Marketplace"
                width={600}
                height={300}
                className="object-cover w-full h-40"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">PWC Marketplace</h3>
                <p className="text-sm text-gray-300">
                  An online B2B marketplace to facilitate companies to discover and purchase software and programmes for their own use.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="mt-20 max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-6">🎓 Education</h2>
        <div className="space-y-6 text-lg">
          <div>
            <p className="font-semibold">Node.js Tutorial and Projects</p>
            <p className="italic text-gray-300">Udemy | 2021</p>
            <p className="text-gray-300">
              Hands-on projects covering Express.js, MongoDB, and REST API development.
            </p>
          </div>
          <div>
            <p className="font-semibold">Full Stack Web Development Bootcamp</p>
            <p className="italic text-gray-300">Next Academy | 2017</p>
            <ul className="list-disc ml-5 mt-2 text-gray-300">
              <li>Mastered CSS, HTML, JavaScript, Ruby on Rails, and jQuery</li>
              <li>Learned Git workflows and Heroku deployment</li>
              <li>Built my first full-stack app within 10 weeks</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Bachelor of Finance</p>
            <p className="italic text-gray-300">Drake University | 2013 – 2016</p>
          </div>

        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">📜 Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: "Node.js Tutorial and Projects",
                year: "2021",
                image: "/images/udemy.pdf",
              },
              {
                title: "Full Stack Web Development Bootcamp",
                year: "2017",
                image: "/images/next degree.pdf",
              },
              {
                title: "Bachelor's of Finance",
                year: "2016",
                image: "/images/Uni certificate.pdf",
              },
            ].map((cert, index) => (
              <iframe
                src={cert.image}
                width="100%"
                height="260px"
                className="border-2 rounded-lg"
                title={cert.title}
                allow="fullscreen"  // Allowing full-screen interaction
              ></iframe>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Download */}
      <div className="flex justify-center mt-20 mb-10">
        <a
          href="/documents/YeeYangKokResume.pdf"
          download
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded"
        >
          Download Resume
        </a>
      </div>
    </main>
  );
}

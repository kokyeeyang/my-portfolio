import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <Head>
        <title>Yee Yang Kok | Portfolio</title>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-center sm:text-left">Yee Yang Kok</h1>
          <div className="mt-2 sm:mt-0 space-x-4">
            <a
              href="https://github.com/kokyeeyang"
              className="text-sm font-medium text-blue-600 hover:underline"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yee-yang-kok-116a8893/"
              className="text-sm font-medium text-blue-600 hover:underline"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {/* Hero */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">Hi, I'm Yee Yang 👋</h2>
          <p className="text-md sm:text-lg max-w-xl mx-auto">
            A full stack developer with 6 years of experience building real-world web applications. Currently enhancing systems and data platforms at Spencer Ogden.
          </p>
        </section>

        {/* About Me */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p>
            I specialize in creating user-centered applications with React, Node.js, and PHP frameworks. My journey into tech began after a finance degree from Drake University — I’ve been learning and building ever since.
          </p>
        </section>

        {/* Highlighted Project */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Highlighted Project</h3>
          <h4 className="text-lg font-semibold">🎬 Movie Booking Website</h4>
          <p className="mb-4">
            A full-featured app to browse, select, and book movie tickets. Built using React, Node.js, MongoDB, and Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://bookanymovie.netlify.app/"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
              target="_blank"
            >
              Live Site
            </a>
            <a
              href="https://github.com/kokyeeyang"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 text-center"
              target="_blank"
            >
              Source Code
            </a>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>
              <strong>Spencer Ogden (2023–Present):</strong> Developed finance KPIs, ML tools, and backend improvements.
            </li>
            <li>
              <strong>Poet Farmer:</strong> Contributed to civic engagement sites for City of Rotterdam and IDEA Democracy Tracker.
            </li>
            <li>
              <strong>PwC Malaysia:</strong> Expanded Marketplace to ASEAN with PHP, MySQL, and Azure.
            </li>
            <li>
              <strong>SagaOS:</strong> Built HR and communication platforms for internal use.
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2 text-sm sm:text-base">
            {[
              'JavaScript', 'PHP', 'MySQL', 'ReactJS', 'TailwindCSS',
              'Node.js', 'Laravel', 'Drupal', 'ExpressJS'
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 px-3 py-1 rounded-full text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p className="text-blue-600">
            <a href="mailto:yee_yang94@hotmail.com" className="hover:underline">
              yee_yang94@hotmail.com
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Yee Yang Kok. All rights reserved.
      </footer>
    </div>
  );
}

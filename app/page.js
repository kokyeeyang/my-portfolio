import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>Yee Yang Kok | Portfolio</title>
      </Head>

      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Yee Yang Kok</h1>
          <div className="space-x-4">
            <a href="https://github.com/kokyeeyang" className="text-blue-600 hover:underline" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/yee-yang-kok-116a8893/" className="text-blue-600 hover:underline" target="_blank">LinkedIn</a>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p>
            I'm a software developer with 6 years of full stack development experience, currently at Spencer Ogden. I build practical, user-centered applications using modern web technologies like React, Node.js, and PHP frameworks. I transitioned into tech after studying Finance at Drake University, and I’m passionate about continuous learning.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Highlighted Project</h2>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Movie Booking Website</h3>
            <p className="mb-2">A full-featured web app for browsing, selecting, and booking movie tickets. Built using React, Node.js, MongoDB, and Tailwind CSS.</p>
            <div className="flex space-x-4">
              <a href="https://bookanymovie.netlify.app/" className="text-blue-600 hover:underline" target="_blank">Live Site</a>
              <a href="https://github.com/kokyeeyang" className="text-blue-600 hover:underline" target="_blank">Source Code</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Spencer Ogden (2023–Present)</strong> – Developed KPIs, finance ML models, and backend optimizations.</li>
            <li><strong>Poet Farmer</strong> – Contributed to City of Rotterdam and IDEA Democracy Tracker sites using Drupal.</li>
            <li><strong>PwC Malaysia</strong> – Expanded the Marketplace platform to ASEAN regions using PHP, MySQL, and Azure.</li>
            <li><strong>SagaOS</strong> – Built and improved internal HR and communication systems.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <p>JavaScript, PHP, MySQL, ReactJS, TailwindCSS, Node.js, Laravel, Drupal, ExpressJS</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>Email: <a href="mailto:yee_yang94@hotmail.com" className="text-blue-600 hover:underline">yee_yang94@hotmail.com</a></p>
        </section>
      </main>

      <footer className="text-center p-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Yee Yang Kok. All rights reserved.
      </footer>
    </div>
  );
}
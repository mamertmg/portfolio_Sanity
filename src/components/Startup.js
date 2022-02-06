import React, {useEffect, useState} from 'react';
import sanityClient from '../client.js'

function Startup() {

  const [startupData, setStartup] = useState(null)

  useEffect(()=>{
    sanityClient
      .fetch(
        `*[_type == "startup"]{
        title,
        date,
        place,
        description,
        startupType,
        website
      }`
      )
      .then((data) => setStartup(data))
      .catch(console.error);
  }, [])

  return (
    <main className='bg-gray-200 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-4xl flex justify-center cursive'>Invested Startups</h1>
        <section className="pt-16 grid grid-cols-4">
          {startupData &&
            startupData.map((startup, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16 col-start-2 col-span-2">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={startup.website}
                    alt={startup.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {startup.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Invested on</strong>:{" "}
                    {new Date(startup.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Location</strong>:{" "}
                    {startup.place}
                  </span>
                  <spasn>
                    <strong className="font-bold">Type</strong>:{" "}
                    {startup.startupType}
                  </spasn>
                </div>
                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                  {startup.description}
                </p>
                <a
                  href={startup.website}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-red-500 font-bold hover:underline hover:text-red-400"
                >
                  View The Project{" "}
                  <span role="img" aria-label="right pointer">
                    👉
                  </span>
                </a>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

export default Startup;

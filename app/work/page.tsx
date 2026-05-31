'use client'

export default function WorkPage() {
  const projects = [
    {
      id: 1,
      title: 'Underwater Adventures',
      category: 'Animation',
      description: 'A vibrant underwater animation series exploring ocean life'
    },
    {
      id: 2,
      title: 'Urban Stories',
      category: 'Illustration',
      description: 'Character-driven illustrations depicting city life and human connections'
    },
    {
      id: 3,
      title: 'Nature Meets Tech',
      category: 'Design',
      description: 'Concept art exploring the intersection of nature and technology'
    },
    {
      id: 4,
      title: 'Dream Sequences',
      category: 'Animation',
      description: 'Surreal animated sequences inspired by dreams and imagination'
    },
    {
      id: 5,
      title: 'Character Archetypes',
      category: 'Design',
      description: 'A comprehensive character design study across different genres'
    },
    {
      id: 6,
      title: 'Environmental Storytelling',
      category: 'Illustration',
      description: 'Digital paintings that tell stories through environment design'
    },
    {
      id: 7,
      title: 'Motion Graphics',
      category: 'Animation',
      description: 'Dynamic motion graphics for digital media and advertising'
    },
    {
      id: 8,
      title: 'Creature Design',
      category: 'Design',
      description: 'Detailed creature design and illustration for various media'
    },
    {
      id: 9,
      title: 'Visual Narratives',
      category: 'Illustration',
      description: 'Sequential art and visual storytelling projects'
    },
  ]

  const categories = ['All', 'Animation', 'Illustration', 'Design']

  return (
    <div className="bg-stone-50">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-balance">
            My Work
          </h1>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl">
            A collection of creative projects spanning animation, illustration, and design
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-stone-50 py-12 px-6 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 font-semibold uppercase text-sm tracking-wider transition ${
                  category === 'All'
                    ? 'bg-teal-400 text-slate-900'
                    : 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-stone-50 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {projects.slice(0, 2).map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="h-96 bg-gradient-to-br from-slate-400 via-teal-300 to-slate-500 rounded-lg mb-6 overflow-hidden relative flex items-center justify-center">
                  <span className="text-white text-2xl font-bold text-center px-4 group-hover:scale-110 transition">{project.title}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>
                </div>
                <div>
                  <p className="text-sm text-teal-400 font-semibold uppercase mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Grid Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.slice(2).map((project) => (
                <div key={project.id} className="group cursor-pointer">
                  <div className="h-64 bg-gradient-to-br from-teal-200 to-slate-400 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                    <span className="text-center text-white font-semibold px-4">{project.title}</span>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
                  </div>
                  <p className="text-xs text-teal-400 font-semibold uppercase mb-2">{project.category}</p>
                  <h3 className="font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white border-l-4 border-teal-400 p-8 rounded-r-lg text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-700 mb-6">
              Each project is an opportunity to create something unique and meaningful.
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-block px-8 py-3 bg-teal-400 text-slate-900 font-bold rounded hover:bg-teal-300 transition"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

const projects = [
  { title: "React tutorial", img: "src/assets/studio_square_thumbnail.jpg", desc: "An ongoing video series teaching REACT.", url: "https://www.youtube.com/watch?v=68zi2Qx-WXA&list=PLxFY7k-uJsBImoIJJgoFt8xEHHXq4iN20" },
  { title: "Quiz generator", img: "src/assets/mcq.jpg", desc: "This project creates an interactive multiple choice quiz using HTML, CSS and JS.", url: "https://github.com/HeliaMozaffari/Quiz-Project" },
  { title: "Connext", img: "src/assets/socialmedia.jpg", desc: "This is an app that will unify all your social media accounts in one place .", url: "https://example.com/smart-cart" },
];

export default function Projects(){
  return (
    <section>
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Featured Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            aria-label={`Open ${p.title}`}
          >
            <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-purple-800 hover:underline">{p.title}</h2>
              <p className="text-sm text-purple-900/80 mt-1">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

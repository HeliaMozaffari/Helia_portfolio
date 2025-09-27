const services = [
  { name: "Web Development", emoji: "🧩", desc: "JS, HTML, CSS, React, Node, MongoDB" },
  { name: "AI & Data", emoji: "🤖", desc: "Data science, Data analysis, Machine learning models" },
  { name: "Teaching", emoji: "📚", desc: "Online one on one or group lessons" },
]

export default function Services(){
  return (
    <section>
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Services</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.name} className="p-5 rounded-2xl glass shadow">
            <div className="text-3xl">{s.emoji}</div>
            <h2 className="font-semibold text-purple-800 mt-2">{s.name}</h2>
            <p className="text-purple-900/80 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

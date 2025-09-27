import profile from '../assets/profile.jpg'

export default function About(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <img src={profile} alt="Helia portrait" className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"/>
      <div>
        <h1 className="text-3xl font-bold text-purple-800">Helia Mozaffari</h1>
        <p className="mt-2 text-purple-900/80">
          Hi! I’m Helia creator, coder, and unapologetic dog person. 
          By day, I build practical software and applied AI solutions that turn real problems into simple wins; 
          By night, I script, film, and edit sarcastic vlogs, brain-dumps, and tech tutorials. 
          Occasionally, I sprinkle in some puppy energy with appearances from my dog, Lucky. 
          I love translating complex AI concepts into tools anyone can use, and I care about shipping clean code, clear outcomes, and humane technology.
          </p>

        <div className="mt-4">
          <a href="https://docs.google.com/document/d/1QS4IUJzb3PAj_YHSE1AKKJ2GX_46si73sPcDOyuMsp8/edit?usp=sharing" target="_blank" className="px-5 py-2 rounded-full bg-purple-600 text-white shadow-brand">View Resume (PDF)</a>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Home(){
  const [submitted, setSubmitted] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if(params.get('submitted') === '1'){
      try{
        const data = JSON.parse(localStorage.getItem('contactForm') || '{}')
        setSubmitted(data)
      }catch{}
    }
  }, [location.search])

  return (
    <section className="space-y-6">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800">Welcome to my portfolio</h1>
        <p className="mt-2 text-purple-900/80">Building delightful apps with a dash of puppy energy.</p>
        <div className="mt-6">
          <Link to="/about" className="px-6 py-3 rounded-full bg-purple-600 text-white shadow-brand hover:opacity-95">About Me</Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-4 glass rounded-2xl">
        <h2 className="text-xl font-semibold text-purple-800">Mission</h2>
        <p className="text-purple-900/80 mt-1">Translate business goals into scalable web, software, and AI solutions.</p>
      </div>

      {submitted && (
        <div className="max-w-2xl mx-auto p-4 bg-green-50 border border-green-200 rounded-xl">
          <h3 className="font-semibold text-green-800">Thanks for your message!</h3>
          <p className="text-green-800/80 text-sm">We received it and will get back to you soon.</p>
          <ul className="mt-2 text-green-900 text-sm list-disc pl-6">
            <li><strong>Name:</strong> {submitted.firstName} {submitted.lastName}</li>
            <li><strong>Email:</strong> {submitted.email}</li>
            <li><strong>Phone:</strong> {submitted.phone}</li>
            <li><strong>Message:</strong> {submitted.message}</li>
          </ul>
        </div>
      )}
    </section>
  )
}

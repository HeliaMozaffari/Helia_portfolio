import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact(){
  const [form, setForm] = useState({ firstName:'', lastName:'', phone:'', email:'', message:'' })
  const navigate = useNavigate()

  function onChange(e){
    const { name, value } = e.target
    setForm(prev => ({...prev, [name]: value}))
  }

  function onSubmit(e){
    e.preventDefault()
    // Capture info and redirect home per assignment
    localStorage.setItem('contactForm', JSON.stringify(form))
    navigate('/?submitted=1')
  }

  return (
    <section className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">Contact Me</h1>
      <div className="p-6 rounded-2xl glass shadow">
        <div className="mb-4 text-sm text-purple-900/80">
          <p><strong>Email:</strong> helia@example.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input name="firstName" required value={form.firstName} onChange={onChange} placeholder="First Name" className="px-3 py-2 rounded-xl border border-purple-200 outline-none focus:ring-2 focus:ring-purple-300"/>
            <input name="lastName" required value={form.lastName} onChange={onChange} placeholder="Last Name" className="px-3 py-2 rounded-xl border border-purple-200 outline-none focus:ring-2 focus:ring-purple-300"/>
          </div>
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Contact Number" className="w-full px-3 py-2 rounded-xl border border-purple-200 outline-none focus:ring-2 focus:ring-purple-300"/>
          <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="Email Address" className="w-full px-3 py-2 rounded-xl border border-purple-200 outline-none focus:ring-2 focus:ring-purple-300"/>
          <textarea name="message" required rows="4" value={form.message} onChange={onChange} placeholder="Message" className="w-full px-3 py-2 rounded-xl border border-purple-200 outline-none focus:ring-2 focus:ring-purple-300"></textarea>
          <button type="submit" className="mt-2 px-5 py-2 rounded-full bg-purple-600 text-white shadow-brand">Send & Return Home</button>
        </form>
      </div>
    </section>
  )
}

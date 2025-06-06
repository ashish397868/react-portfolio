import { useState, useRef } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Contact = () => {
  // form states
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  //form reference
  const formTag = useRef()

  const handleSubmit = (e) => {
    if (name.length > 2 && email.endsWith(".com") && message.length > 2) {
      formTag.current.setAttribute("METHOD", "post")
      formTag.current.setAttribute("action", "https://getform.io/f/46adcb8d-2167-467c-9f28-66afc52b4748")
      console.log("form submit")
    }
    else{      
      e.preventDefault()
      toast.error("form not submitted!! Please Fill all Fields",{autoClose: 1000})
      console.log("form not submit")
    }
  }

  return (
    <div name="contact" className="w-full h-100 bg-gradient-to-br from-black via-[#1a0b2e] to-[#1a0b2e] p-4 text-white pt-32 relative">
      {/* subtle texture */}
      <div className="absolute opacity-5" />
      
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full relative z-10">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline bg-clip-text text-transparent bg-gradient-to-r from-[#c961de] to-[#7c3aed] pb-2">Contact</p>
          <p className="py-6 font-bold text-gray-300">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
   <form
            className="flex flex-col w-full md:w-1/2"
            ref={formTag}
          >
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              className="p-2 bg-[#261d45]/20 border-2 border-[#4a3a7a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#c961de]/50 focus:border-[#c961de] transition-all duration-300 placeholder-gray-400" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <input 
              type="text" 
              name="email" 
              placeholder="Enter your email" 
              className="my-4 p-2 bg-[#261d45]/20 border-2 border-[#4a3a7a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#c961de]/50 focus:border-[#c961de] transition-all duration-300 placeholder-gray-400" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <textarea 
              name="message" 
              placeholder="Enter your message" 
              rows="10" 
              className="p-2 bg-[#261d45]/20 border-2 border-[#4a3a7a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#c961de]/50 focus:border-[#c961de] transition-all duration-300 placeholder-gray-400"
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button 
              onClick={handleSubmit} 
              className="text-white bg-gradient-to-r from-[#c961de] to-[#7c3aed] px-8 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 font-bold"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 69Ens4w8LvQ1jwvgq
    // service_qtzwezi
    // template_1ht70vm

    emailjs.send(
      "service_qtzwezi", 
      "template_1ht70vm",
      {
        from_name: form.name,
        to_name: "Erik",
        from_email: form.email,
        to_email: "erikly11@gmail.com",
        message: form.message,
      },
      "69Ens4w8LvQ1jwvgq"
    )
    .then(() => {
      setLoading(false);
      alert("Thank you. I will get back to your as soon as possible!");

      setForm({
        name: "",
        email: "",
        message: "",
      })
    }, (error) => {
      setLoading(false);

      console.log(error);
      alert("Something went wrong.");
    })
  }
  /*const calculateRows = () => {
    const screenHeight = window.innerWidth;
    const rowHeight = 1000; // Adjust this value according to your design
    return Math.floor(screenHeight / rowHeight);
  };*/

  return (
    <div className="relative z-0 xl:mt-24 xs:mt-1 xl:flex-row flex-col-reverse justify-left items-left flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('up', "tween", 0.2, 1)}
        className="flex-[0.75] p-1 rounded-2xl mt-6 form-container"
      >
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-3 flex flex-col form-container gap-2"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#7fffd4] py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#7fffd4] py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#7fffd4] py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"      
            />
          </label>
          <input
            type="image"
            src="/src/assets/Me.gif"
            alt="Submit"
            className="image-button absolute translate-x-1/3 translate-y-3/4 bottom-20 right-0 z-10" // Apply any CSS classes for styling
          /> 
        </form>
        
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
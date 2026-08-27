import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import createContact from "../api/contactApi.js"
function ContactSection() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [loding, setLoding] = useState(false);
  const [success, setSuccess] = useState("");
  useEffect(() =>{
    const saveForm = localStorage.getItem("contactForm");
    if (saveForm) {
      setForm(JSON.parse(saveForm));
    }
  },[])
  function veliditonForm() {
    const newError = {};
    if (!formData.name.trim()) {
      newError.name = "Please enter your name."
    }

    if (!formData.email.trim()) {
      newError.email = "Please enter your email address.";
    }
    if (!formData.subject.trim()) {
      newError.subject = "Please enter a subject.";
    }
    if (!formData.message.trim()) {
      newError.message = "Please enter your message.";
    } 
    
    setError(newError);

    return Object.keys(newError).length === 0;
  }
  function handleChange(e) {
    const { name, value } = e.target;
    
    const updateForm = {
      ...formData,
      [name]: value,
    };
    setForm(updateForm);
    localStorage.setItem("contactForm", JSON.stringify(updateForm));
    setError({
        ...error,
        [name]: "",
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
        const isValid = veliditonForm();
    if (!isValid) {
      return;
    }
    try {
      setLoding(true);
      const reponse = await createContact(formData);
      console.log("api rseponse...",reponse);
      setSuccess("your mssage has been sent successfully");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("contact subtmission failed",error);
      setSuccess("Contact submission failed. Please try again.");
    } finally{
      setLoding(false);
    }
    console.log("Form data :", formData);
  };
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24 text-white sm:px-8"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Contact
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Get In Touch
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Have a project in mind or want to discuss an opportunity?
            Feel free to get in touch with me.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">
              Let's Connect
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              I'm always interested in discussing new projects,
              development opportunities, and ideas. You can reach me
              through the following platforms.
            </p>

            {/* Location */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-600" />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Location
                </p>

                <p className="mt-1 font-medium text-white">
                  Lahore, Pakistan
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sajid-habib/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-4 rounded-xl p-3 transition hover:bg-slate-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <FaLinkedin className="h-6 w-6 text-blue-600" />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  LinkedIn
                </p>

                <p className="mt-1 font-medium text-white">
                  Connect with me
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SAJID-HABIB"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-4 rounded-xl p-3 transition hover:bg-slate-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <FaGithub className="h-6 w-6 text-slate-300" />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  GitHub
                </p>

                <p className="mt-1 font-medium text-white">
                  View my projects
                </p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">
              Send Me a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              {success && (
                <p className="rounded-lg bg-green-500/10 px-4 py-3 text-sm text-green-400">{success}</p>
              )}
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-600"
                />
                 {error.name && (
                  <p className="text-red-500">
                    {error.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-600"
                />
                {error.email && (
                  <p className="text-red-500">{error.email}</p>
                ) 
                }
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-600"
                />
                {error.subject && (
                  <p className="text-red-500">
                    {error.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-600"
                />
                {error.message && (
                  <p className="text-red-500">
                    {error.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loding}
                 className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loding ? "sending...": "send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

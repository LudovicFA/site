import { useState } from "react";
import useAlert from "../hooks/useAlert";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { useI18nMode } from "../context/I18nModeContext";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false)
  const { alert, showAlert, hideAlert } = useAlert();
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [isFormValid, setisFormValid] = useState(false)
  const {lang} = useI18nMode();
  
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!form.name || !form.email || !form.message) {
      setisFormValid(false);
      return;
    }
    setIsLoading(true);
    if(currentAnimation)
    setCurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ludovic",
          from_email: form.email,
          to_email: "contact@ludovic.com",
          message: form.message,
        },

        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        // SUCCESS MESSAGE
        showAlert({ show: true, text: lang === 'FR' ? "Envoi réussi " : "Sent successfully", type: "success" });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        showAlert({ show: true, text: lang === "FR" ? "Je n'ai pas pu recevoir votre message" :"I didnt receive your message", type: "danger" });
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
      });
  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if(form.name  && form.email && form.message) {
      setisFormValid(true);
      return;
    }
  };

  return (
    <section className='max-container'>
      
      {
          lang === 'FR' && ( <h1 className="head-text">
        📧 Me {" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Contacter
          </span>
              </h1>
              )
      }
      {
          lang === 'EN' && ( <h1 className="head-text">
        📧 Contact {" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Me
          </span>
              </h1>
              )
      }
      {alert.show && <Alert {...alert} />}
      <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">{ lang === 'FR' ? 'Nom / Prénom' : "Name / Firstname"}</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
          />
          <label className="text-black-500 font-semibold">E-mail</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="john@gmail.com"
            value={form.email}
            onChange={handleChange}
          />
          <label className="text-black-500 font-semibold">{ lang === 'FR' ? 'Votre Message' : "Your Message"}</label>
          <textarea
            rows={4}
            name="message"
            className="textarea"
            placeholder={ lang === 'FR' ? 'Dites moi comment je peux vous aider' : "Let me know how i can help you"}
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn"
            disabled={isLoading || !isFormValid}

          >
            {
              isLoading ? 
                lang === "FR" ? "Envoi ... " : "Sending ..."
              :
                lang === "FR" ? "Envoyer" : "Send Message"
            }
          </button>
        </form>
    </section>
  )
}

export default Contact
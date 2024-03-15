import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/Done.json";
import contactMeAinmation from "../../animation/ContactMe.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjvnydgd");
  if (state.succeeded) {
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

  return (
    <section id="contact" className="contact-us">
      <h1 className="contact-us-title">
        <span className="icon-envelope"></span>
        Contact Me
      </h1>
      <p className="contact-us-subtitle">
        Contact Me For More Information And Get Notified When I Publish Somthing
        New.
      </p>
      <div className="contact-us-content">
        <form onSubmit={handleSubmit} className="contact-us-left">
          <div className="contact-us-email">
            <label htmlFor="email">Email Address :</label>
            <input required type="email" id="email" name="emailcls" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="contact-us-message">
            <label htmlFor="message">Your Message :</label>
            <textarea required id="message" name="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            Send
          </button>
          {state.succeeded && (
            <p
              style={{
                color: "var(--title)",
                fontSize: "17px",
                marginTop: "1.7rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Your message has been sent successfully
              <Lottie
                loop={false}
                style={{ height: 35 }}
                animationData={doneAnimation}
              />{" "}
            </p>
          )}
        </form>
        <div className="contact-us-right">
          <Lottie
            className="contact-animation"
            loop={true}
            style={{ height: 350 }}
            animationData={contactMeAinmation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

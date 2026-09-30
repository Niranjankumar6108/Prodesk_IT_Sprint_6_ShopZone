import { useState } from "react";

function Contact() {

  const [submitted, setSubmitted] =
    useState(false);

  function handleSubmit(event) {

    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <section className="page narrow-page">

      <div className="page-heading">

        <span>
          CONTACT US
        </span>

        <h1>
          Get in Touch
        </h1>

        <p>
          Have a question? Send us a message.
        </p>

      </div>

      {submitted && (
        <div className="success">
          Your message has been submitted
          successfully.
        </div>
      )}

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <label>
          Name
        </label>

        <input
          type="text"
          placeholder="Your name"
          required
        />

        <label>
          Email
        </label>

        <input
          type="email"
          placeholder="you@example.com"
          required
        />

        <label>
          Message
        </label>

        <textarea
          rows="6"
          placeholder="Write your message..."
          required
        />

        <button
          className="primary-button"
          type="submit"
        >
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;
function ContactPage() {
  return (
    <section className="panel contact-panel">
      <h1>Contact</h1>
      <p className="lead compact">
        For research collaboration or professional enquiries.
      </p>

      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="" />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="" />

        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="" />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder=""
        />

        <button type="submit" className="cta">Send</button>
      </form>

      <p className="contact-note">
        Official profile:{" "}
        <a
          href="https://www.agresearch.co.nz/about-us/our-people/jiafa-luo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NZ Bioeconomy Science Institute - Dr Jiafa Luo
        </a>
      </p>
    </section>
  );
}

export default ContactPage;

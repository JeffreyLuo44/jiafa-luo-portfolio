function ContactPage() {
  return (
    <section className="panel contact-panel">
      <h1>Contact</h1>
      <p className="lead compact">
        For research collaboration or professional enquiries.
      </p>

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

      <form className="contact-form" action="https://formsubmit.co/c65f10b8fb9f81db4272945bbb0b183a" method="POST">        
        <input type="hidden" name="_subject" value="New website contact submission" />

        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required />

        <button type="submit" className="cta">Send</button>
      </form>
    </section>
  );
}

export default ContactPage;
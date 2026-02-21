import { workSections } from "../data/workLinks";

function HomePage() {
  return (
    <>
      <section className="panel hero-panel">
        <p className="eyebrow">Principal Scientist</p>
        <h1>Dr Jiafa Luo</h1>
        <p className="lead">
          Dr Jiafa Luo is a Principal Scientist at AgResearch focused on agricultural
          greenhouse gas emissions, nutrient cycling, and mitigation strategies for
          resilient pasture-based farming systems.
        </p>
        <p>
          His work spans nitrous oxide emission reduction, nitrification inhibition,
          and practical pathways for improving environmental outcomes in livestock
          agriculture.
        </p>
        <div className="actions">
          <a className="secondary" href="#work">
            View Work
          </a>
          <a
            className="secondary"
            href="https://www.agresearch.co.nz/about-us/our-people/jiafa-luo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AgResearch Profile
          </a>
          <a className="secondary" href="#qualifications">
            Qualifications
          </a>
        </div>
        <figure className="profile-image-wrap">
          <img
            className="profile-image"
            src="/images/jiafa-luo.jpg"
            alt="Dr Jiafa Luo"
          />
        </figure>
      </section>

      <section id="work" className="panel content-section">
        <h1>Research Work</h1>
        <p className="lead compact">
          A selection of publications and profile links related to Dr Jiafa Luo's
          research in agricultural emissions and nutrient management.
        </p>

        {workSections.map((section) => (
          <section key={section.title} className="work-group">
            <h2>{section.title}</h2>
            <div className="cards">
              {section.items.map((item) => (
                <a
                  key={item.url}
                  className="card card-link"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>{item.label}</h3>
                  <p>{item.dateTimeLabel}</p>
                  <p>{item.secondaryLabel}</p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section id="qualifications" className="panel content-section">
        <h1>Qualifications</h1>
        <ul className="qualifications-list">
          <li>Doctorate, Science, Massey University, 1995</li>
          <li>Graduate Diploma, Science, Agricultural University of Norway, 1990</li>
          <li>Masters, Science, Chinese Academy of Sciences, 1989</li>
          <li>Bachelors, Science, Nanjing Agricultural University, 1984</li>
        </ul>
      </section>
    </>
  );
}

export default HomePage;

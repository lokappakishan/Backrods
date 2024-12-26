import aboutImage from '../images/about.jpeg';
import { Title } from './Title';

export const About = () => {
  return (
    <section className="section" id="about">
      <Title firstWord="about" secondWord="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImage} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Backroads Travel Tours is dedicated to providing unforgettable
            travel experiences. We curate tours that combine adventure, culture,
            and relaxation.
          </p>
          <p>
            Our mission is to help you explore the world with a fresh
            perspective, making memories that last a lifetime.
          </p>
          <a href="#services" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

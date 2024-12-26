import { Title } from './Title';

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title firstWord="featured" secondWord="tours" />
      <div className="section-center featured-center">
        <article className="tour-card">
          <div className="tour-img-container">
            <img
              src="./images/tour-1.jpeg"
              className="tour-img"
              alt="Tibet Adventure"
            />
            <p className="tour-date">August 26th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>Tibet Adventure</h4>
            <p>
              Discover the breathtaking beauty of Tibet. Explore its ancient
              temples, serene monasteries, and majestic landscapes on this
              unforgettable 6-day journey.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{' '}
                China
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img
              src="./images/tour-2.jpeg"
              className="tour-img"
              alt="Best of Java"
            />
            <p className="tour-date">October 1st, 2020</p>
          </div>
          <div className="tour-info">
            <h4>Best of Java</h4>
            <p>
              Immerse yourself in the culture and history of Java, Indonesia.
              This 11-day tour includes visits to Borobudur, lush rainforests,
              and vibrant cities.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{' '}
                Indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img
              src="./images/tour-3.jpeg"
              className="tour-img"
              alt="Explore Hong Kong"
            />
            <p className="tour-date">September 15th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>Explore Hong Kong</h4>
            <p>
              Experience the vibrant culture and stunning skyline of Hong Kong.
              This 8-day tour includes iconic landmarks, shopping, and culinary
              adventures.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{' '}
                Hong Kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img
              src="./images/tour-4.jpeg"
              className="tour-img"
              alt="Kenya Highlights"
            />
            <p className="tour-date">December 5th, 2019</p>
          </div>
          <div className="tour-info">
            <h4>Kenya Highlights</h4>
            <p>
              Embark on a 20-day safari adventure through Kenya apos&apos;s
              savannas. Witness the Great Migration, explore national parks, and
              meet local tribes.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{' '}
                Kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

import { pageLinks, socialLinks } from '../data';

export const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((item) => {
          const { id, href, text } = item;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {
          /* social links */
          socialLinks.map((item) => {
            const { id, href, icon } = item;
            return (
              <li key={id}>
                <a href={href} target="_blank" className="footer-icon">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })
        }
      </ul>
      <p className="copyright">
        copyright &copy; Backroads Travel Tours Company
        <span id="date">{new Date().getFullYear()}</span>. All rights reserved.
      </p>
    </footer>
  );
};

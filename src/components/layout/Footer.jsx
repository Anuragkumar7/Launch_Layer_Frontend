import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS, SERVICES_OVERVIEW, SOCIAL_LINKS } from '../../data/siteData';
import Icon from '../icons/Icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-card/40 backdrop-blur-xl mt-16">
      <div className="section-padding pb-8">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">L</span>
              </div>
              <span className="font-display font-bold text-xl">{COMPANY.name}</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">{COMPANY.tagline}</p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {SERVICES_OVERVIEW.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-muted hover:text-primary text-sm transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted">
                <Icon name="Mail" className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted">
                <Icon name="Phone" className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY.phone.replace(/\D/g, '')}`} className="hover:text-primary transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted">
                <Icon name="MapPin" className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-custom mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>&copy; {currentYear} {COMPANY.name}. All rights reserved.</p>
          <p>Built with passion for digital excellence.</p>
        </div>
      </div>
    </footer>
  );
}

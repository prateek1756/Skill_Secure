import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-sm">
                SB
              </div>
              <span className="font-bold text-lg">Skill Secure</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Connecting students with verified skill development programs and internships they can trust.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/internship-matching" className="text-slate-400 hover:text-primary transition-colors">
                  Find Internships
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-slate-400 hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-slate-400 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-400 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <a href="mailto:hello@skillbridge.io" className="text-slate-400 hover:text-primary transition-colors">
                  hello@skillbridge.io
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-slate-400 hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span className="text-slate-400">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 SkillBridge. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

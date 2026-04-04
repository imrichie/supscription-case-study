import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import appLogo from "../../../images/app-logo.png";

type SiteFooterProps = {
  showGithub?: boolean;
};

export default function SiteFooter({ showGithub = false }: SiteFooterProps) {
  return (
    <footer className="px-6 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={appLogo}
            alt="Supscription"
            className="w-6 h-6 rounded-lg"
          />
          <div>
            <div className="text-sm font-medium">Supscription</div>
            <div className="text-xs text-white/50">Built by Ricardo Flores</div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/privacy"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/case-study"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Case Study
          </Link>
          {showGithub && (
            <a
              href="https://github.com/imrichie/supscription"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <FaGithub size={16} />
              <span className="text-sm">View code</span>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

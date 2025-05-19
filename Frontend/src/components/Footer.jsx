import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a
            href="https://example.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            About us
          </a>
          <a
            href="https://example.com/jobs"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Jobs
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* Instagram */}
            <a
              href="https://instagram.com/prranjal_8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a1.13 1.13 0 110 2.26 1.13 1.13 0 010-2.26z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/6-Pranjal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.258.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.236 1.84 1.236 1.07 1.833 2.807 1.303 3.492.996.108-.775.418-1.303.76-1.602-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.403c1.018.004 2.043.138 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.479 5.921.43.37.823 1.103.823 2.222v3.293c0 .322.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:pranjaljatav306@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18v-9.5l7.5 6 7.5-6V18H4z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pranjal-jatav-955303220"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.5h3.414v1.571h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.267 2.37 4.267 5.448v6.331zM5.337 8.433a2.065 2.065 0 01-2.066-2.064 2.065 2.065 0 114.13 0 2.065 2.065 0 01-2.064 2.064zm1.778 12.019H3.56v-11.5h3.555v11.5zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.546C0 23.226.792 24 1.771 24h20.451C23.206 24 24 23.226 24 22.273V1.727C24 .774 23.206 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>&copy; 2025 Pranjal Jatav. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;

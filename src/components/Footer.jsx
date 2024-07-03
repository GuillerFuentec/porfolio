import logo from "../../public/logo.jpeg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
        <Image src={logo} className="foot-pic" alt="logo: Racoon Studios" />
        <p>
          Racoon Studios LLC.
          <br />
          Providing reliable tech since 2023
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-cols-3 gap-4">
          <a href="https://x.com/HackedbyGh" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-twitter cursor-pointer pr-3 text-accent transition ease-in-out duration-300 hover:scale-110"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
            </svg>
          </a>
          <a
            href="http://www.linkedin.com/in/guillermo-copello-624222230"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-linkedin cursor-pointer pr-3 text-accent transition ease-in-out duration-300 hover:scale-110"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          <a href="https://github.com/GuillerFuentec" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-github cursor-pointer pr-3 text-accent transition ease-in-out duration-300 hover:scale-110"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.38c-2.22.48-2.69-1.07-2.69-1.07-.36-.91-.88-1.15-.88-1.15-.72-.49.05-.48.05-.48.8.06 1.22.82 1.22.82.71 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.77-.2-3.64-.88-3.64-3.93 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.06-1.87 3.73-3.64 3.93.29.25.54.74.54 1.49v2.21c0 .21.15.46.55.38A8.003 8.003 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
        <span className="mt-2">
          Design and developed by{" "}
          <a
            href="https://github.com/GuillerFuentec"
            target="_blank"
            className="text-accent cursor-pointer hover:text-red-500"
          >
            Ghost
          </a>
        </span>
        <span className="mt-1">
          <a
            href="/privacity"
            className="cursor-pointer text-accent pr-5 hover:text-red-500"
          >
            Privacy
          </a>
          <a
            href="/security"
            className="cursor-pointer text-accent pr-5 hover:text-red-500"
          >
            Secury
          </a>
          <a
            href="/about"
            className="cursor-pointer text-accent hover:text-red-500"
          >
            About
          </a>
        </span>
      </nav>
    </footer>
  );
}

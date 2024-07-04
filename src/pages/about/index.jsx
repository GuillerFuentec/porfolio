import Layout from "@/styles/Layout";
import Image from "next/image";
import { logos } from "../../data/logos";
import profile from "../../../public/main_profile.jpg";
import {
  devCertifications,
  toolsAndSoftSkillsCertifications,
} from "../../data/certifications";
import { exp } from "@/data/experience";

export default function About() {
  return (
    <Layout>
      <div className="flex justify-center items-center mt-14">
        <div className="container-logo flex flex-col items-center">
          <div className="refill1"></div>
          <div className="flex flex-col items-center">
            <Image
              src={profile}
              className="pic rounded-full"
              alt="Profile picture: Guillermo Copello"
              priority
            />
            <div className="flex flex-col items-center mt-3">
              <h2 className="font-bold">Jr Software Developer</h2>
              <h4>Hi there 👋</h4>
              <h4>I am Copello, a passionate React Web developer</h4>
              <div>
                <button className="btn btn-accent join-item my-4">
                  Download CV
                </button>
              </div>
            </div>
          </div>
          <div className="refill2"></div>
        </div>
      </div>

      <main>
        <div className="hero mt-4">
          <div className="hero-content text-left">
            <div className="w-3/4 ">
              <div className="mt-8">
                <div>
                  <h2 className="text-xl font-bold mb-2">-Profile</h2>
                  <p className="mb-10">
                    I’m a self-taught software developer with two years of
                    experience in web development. As a frontend developer, I
                    work with languages such as C#, JavaScript, HTML, CSS,
                    React, Redux, NextJS, Vite, ASP.Net, and the .Net ecosystem.
                    I also work with Unity Engine, MonoBeheviour API and handle
                    tools like Blender, FL Studio, Photoshop, and Adobe
                    Premiere. Although design is not my strong suit, I strive to
                    improve every day
                  </p>
                </div>
                <div className="mb-10">
                  <h2 className="text-xl font-bold mb-2">-Education</h2>
                  <p>
                    I am self-taught, and i have learned much more by doing
                    things than by formal training, but don’t let this deceive
                    you, I have{" "}
                    <span className="font-bold">
                      invested more than 10.000 hours of my life
                    </span>{" "}
                    in learning to program and develop web applications on
                    platforms such as:
                  </p>
                  <ul className="mt-4">
                    <li className="ml-8 font-bold">
                      <a>* Udemy</a>
                    </li>
                    <li className="ml-8 font-bold">
                      <a>* FreeCodeCamp</a>
                    </li>
                    <li className="ml-8 font-bold">
                      <a>* Alura</a>
                    </li>
                    <li className="ml-8 font-bold">
                      <a>* Microsft learning</a>
                    </li>
                    <li className="ml-8 font-bold">
                      <a>* Unity Learn</a>
                    </li>
                  </ul>
                </div>
                {/* Projecto 1 */}
                <div>
                  {/* ******************** */}
                  {/* CNADTED */}
                  {/* ******************** */}
                  <h2 className="text-xl font-bold mb-4">-Experience</h2>
                  {exp.map((experience, index) => {
                    return (
                      <ul>
                        <li className="text-text-decoration-none" key={index}>
                          <h4 className="text-xl">
                            <a>-- {experience.title}</a>
                          </h4>
                          <span className="flex pl-2 text-xs my-2">
                            {experience.date}
                          </span>
                          <span className="flex text-xs mb-2 -mt-2">
                            {experience.status}
                          </span>
                          <br />
                          <h3>Overview:</h3>
                          <p className="mt-2 mb-6">
                            {experience.overview}
                          </p>
                          <h5 className="mt-2 mb-2">Technologies used:</h5>
                          <h6 className="mt-2 mb-2">
                            The project is built using a combination of
                            technologies including:
                          </h6>
                          <ul>
                          {experience.tech.map((tecnology, index) => {
                            return (<li key={index}>
                              <strong className="text-accent">
                                {tecnology}
                              </strong>
                            </li>)
                          })}                        
                          </ul>
                        </li>
                        <hr className="my-10" />
                        <div className="divider" />
                      </ul>
                    );
                  })}
                  <ul className="mt-4">
                    {}
                    <li className="">
                      <h4 className="text-xl">
                        <a>-- Developed CNADTED website</a>
                      </h4>
                      <span className="flex pl-2 text-xs my-2">Jan, 2023</span>
                      <span className="flex text-xs mb-2 -mt-2">
                        This project is still under development
                      </span>
                      <br />
                      <h3>Overview:</h3>
                      <p className="mt-2 mb-6">
                        CNADTED is a private, independent, non-profit entity, of
                        a permanent nature, autonomous, of common utility,
                        without character, affiliation, ideology or political
                        interest, which is governed by articles 633 to 652 of
                        the Colombian Civil Code, decree 2150 of 1995 and other
                        concordant norms. Therefore, at no time can its assets,
                        beneficiaries, valuations, profits or credits enter the
                        patrimony of natural or legal persons, in the capacity
                        of distribution of profits, nor in the event of
                        liquidation of the entity, neither directly nor through
                        natural or legal persons. CNADTED's resources must be
                        exclusively destined to the fulfillment of the purposes
                        it pursues, when they are not destined to increase its
                        patrimony.
                      </p>
                      <h5 className="mt-2 mb-2">Technologies used:</h5>
                      <h6 className="mt-2 mb-2">
                        The project is built using a combination of technologies
                        including:
                      </h6>
                      <ul>
                        <li>
                          <strong className="text-accent">-JavaScript</strong>
                        </li>
                        <li>
                          <strong className="text-accent">-HTML</strong>
                        </li>
                        <li>
                          <strong className="text-accent">-CSS</strong>
                        </li>
                        <li>
                          <strong className="text-accent">-Supabase</strong>
                        </li>
                        <li>
                          <strong className="text-accent">-React</strong>
                        </li>
                        <li>
                          <strong className="text-accent">-Redux</strong>
                        </li>
                      </ul>
                    </li>
                    <hr className="my-10" />
                    {/* Project 2 */}
                    <div className="divider" />
                    <li className="">
                      {/* ******************** */}
                      {/* 2D DASH JAVASCRIPT GAME */}
                      {/* ******************** */}
                      <article>
                        <h4 className="text-xl">
                          <a>-- Development of the 2D DASH JAVASCRIPT GAME</a>
                        </h4>
                        <span className="flex pl-2 text-xs my-2">
                          May, 2024
                        </span>
                        <span className="flex text-xs mb-2 -mt-2">
                          This project is finished
                        </span>
                        <h3 className="mt-8">Overview:</h3>
                        <p className="mt-2 mb-6">
                          In 2D DASH JAVASCRIPT GAME, you control a small iconic
                          character that automatically moves forward through a
                          two-dimensional level. The gameplay is
                          straightforward: tap to jump and avoid obstacles. The
                          challenge comes from the timing of your taps
                        </p>
                        <h5 className="mt-2 mb-2">Technologies used:</h5>
                        <h6 className="mt-2 mb-2">
                          The project is built using a combination of
                          technologies including:
                        </h6>
                        <ul>
                          <li>
                            <strong className="text-accent">-JavaScript</strong>
                          </li>
                          <li>
                            <strong className="text-accent">- HTML</strong>
                          </li>
                          <li>
                            <strong className="text-accent">- CSS</strong>
                          </li>
                        </ul>
                      </article>
                    </li>
                    <hr className="my-10" />
                    {/* Projecto 3 */}
                    <div className="divider" />
                    <li className="">
                      {/* ******************** */}
                      {/* CALCULATOR */}
                      {/* ******************** */}
                      <article>
                        <div className="mt-8"></div>
                        <h4 className="text-xl">
                          <a>-- UI and development of my own Calculator</a>
                        </h4>
                        <span className="flex pl-2 text-xs my-2">
                          Feb, 2024
                        </span>
                        <span className="flex text-xs mb-2 -mt-2">
                          This project is finished
                        </span>
                        <h3 className="mt-8">Overview:</h3>
                        <p className="mt-2 mb-6">
                          This project, developed by me, is a simple calculator
                          application. It is part of a larger collection of
                          projects in the Libraries-Projects repository on
                          GitHub.
                        </p>
                        <h3 className="mt-8">Design:</h3>
                        <p className="mt-2 mb-6">
                          The calculator has a user-friendly interface that
                          resembles a traditional handheld calculator. The
                          buttons are clearly labeled with numbers and
                          mathematical operations, making it easy to use even
                          for those who are not familiar with digital calculator
                          applications.
                        </p>
                        <h5 className="mt-2 mb-2">Technologies used:</h5>
                        <h6 className="mt-2 mb-2">
                          The project is built using a combination of
                          technologies including:
                        </h6>
                        <ul>
                          <li>
                            <strong className="text-accent">-JavaScript</strong>
                          </li>
                          <li>
                            <strong className="text-accent">- HTML</strong>
                          </li>
                          <li>
                            <strong className="text-accent">- CSS</strong>
                          </li>
                        </ul>
                      </article>
                    </li>
                    <hr className="my-10" />
                    {/* Project 4 */}
                    <div className="divider" />
                    <li className="">
                      <article>
                        <div className="mt-8"></div>
                        <h4 className="text-xl">
                          {/* ******************** */}
                          {/* DRUM MACHINE */}
                          {/* ******************** */}
                          <a>-- UI and development of my Drum Machine</a>
                        </h4>
                        <small className="flex pl-2 text-xs my-2">
                          Feb, 2024
                        </small>
                        <span className="flex text-xs mb-2 -mt-2">
                          This project is finished
                        </span>
                        <h3 className="mt-8">Overview:</h3>
                        <p className="mt-2 mb-6">
                          This project, developed by me, is a drum machine
                          application. It is part of a larger collection of
                          projects in the Libraries-Projects repository on
                          GitHub.
                        </p>
                        <h3 className="mt-8">Design:</h3>
                        <p className="mt-2 mb-6">
                          The application's interface is simple and easy to use.
                          Each button is clearly labeled with the drum sound it
                          triggers, and the buttons are intuitively organized to
                          facilitate rhythm creation.
                        </p>
                        <h3 className="mt-8">Functionality:</h3>
                        <p className="mt-2 mb-4">
                          The Drum Machine is an interactive application that
                          allows users to play drum sounds. Each drum sound is
                          triggered by clicking a corresponding button or
                          pressing a specific key on the keyboard. The drum
                          sounds include a variety of drum beats and cymbals,
                          allowing users to create their own percussion music.
                          But in this case, I added sounds from the Zelda video
                          game, to make it a bit more different and fun.
                        </p>
                        <h5 className="mt-2 mb-2">Technologies used:</h5>
                        <h6 className="mt-2 mb-2">
                          The project is built using a combination of
                          technologies including:
                        </h6>
                        <ul>
                          <li>
                            <strong className="text-accent">-JavaScript</strong>
                          </li>
                          <li>
                            <strong className="text-accent">- HTML</strong>
                          </li>
                          <li>
                            <strong className="text-accent">- CSS</strong>
                          </li>
                        </ul>
                      </article>
                    </li>
                  </ul>
                  <div className="my-10">
                    <h2 className="text-xl font-bold mb-2">-Certifications</h2>
                    <ul>
                      <li className="py-3">
                        <a
                          className="text-slate-500 cursor-pointer hover:text-teal-500"
                          target="_blank"
                          href="https://drive.google.com/drive/folders/1AM4s4MFnSrMCk5IBXMY5dnbr8W32OyvX?usp=sharing"
                        >
                          ---All certifications of basic develoment
                        </a>
                        <h3 className="text-xl font-bold mt-4">
                          --Software and Develoment
                        </h3>
                      </li>
                      {devCertifications.map((certification, index) => {
                        return (
                          <li className="pl-3" key={index}>
                            <a
                              className="text-slate-500 cursor-pointer hover:text-teal-500"
                              target="_blank"
                              href={certification.url}
                            >
                              ---{certification.name}
                            </a>
                          </li>
                        );
                      })}

                      <h3 className="text-xl font-bold my-4">
                        --Soft Skills & Tools
                      </h3>
                      {toolsAndSoftSkillsCertifications.map(
                        (certification, index) => {
                          return (
                            <li className="pl-3" key={index}>
                              <a
                                className="text-slate-500 cursor-pointer hover:text-teal-500"
                                target="_blank"
                                href={certification.url}
                              >
                                ---{certification.name}
                              </a>
                            </li>
                          );
                        }
                      )}
                    </ul>
                    <div className="my-8">
                      <h2 className="text-xl font-bold mb-2 py-8">-Skills</h2>
                      <div className="grid grid-cols-3 gap-3 md:grid-cols-2 max-sm:grid-cols-1">
                        {logos.map((logo, index) => (
                          <div
                            key={index}
                            className="bg-slate-500 w-auto container-logo2 rounded-md"
                          >
                            <div
                              key={index}
                              className="container-logo2 hadow-lg"
                            >
                              <a
                                href={logo.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src={logo.src}
                                  alt={logo.alt}
                                  width="60"
                                  height="60"
                                />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

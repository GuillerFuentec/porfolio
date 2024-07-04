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
              <h2 className="font-bold">Hi there 👋</h2>
              <h4>I'm Jr Software Developer</h4>
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
                  <p className="mb-4">
                    I am Copello, a passionate React Web developer and with a
                    notion of creating scripts for Unity 3D Engine, and I
                    currently work as a freelancer doing very simple jobs like
                    landing pages. I have a deep love for programming.
                  </p>
                  <p className="mb-10">
                I am currently working on <a>cnadted.com</a>, some jobs and
                orders from my esteemed clients and expanding my skills learning
                JavaScript and React. All my projects are available on
                <a>Github</a>.
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
                <div>
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
                          <p className="mt-2 mb-6">{experience.overview}</p>
                          {"design" in experience ? (
                            <>
                              <h3 className="mt-8">Design:</h3>
                              <p className="mt-2 mb-6">{experience.design}</p>
                            </>
                          ) : null}
                          {"funtionality" in experience ? (
                            <>
                              <h3 className="mt-8">Functionality:</h3>
                              <p className="mt-2 mb-6">{experience.design}</p>
                            </>
                          ) : null}
                          <h5 className="mt-2 mb-2">Technologies used:</h5>
                          <h6 className="mt-2 mb-2">
                            The project is built using a combination of
                            technologies including:
                          </h6>
                          <ul>
                            {experience.tech.map((tecnology, index) => {
                              return (
                                <li key={index}>
                                  <strong className="text-accent">
                                    {tecnology}
                                  </strong>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                        <hr className="my-10" />
                        <div className="divider" />
                      </ul>
                    );
                  })}
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

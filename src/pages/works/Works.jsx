import { webProjects } from "@/data/project";

export default function Works() {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="flex justify-center items-center mt-24 mb-24   flex-wrap flex-row">
        <div className="flex flex-col w-3/4 ">
          <h1 className="text-5xl font-bold w-full">Web Works</h1>
        </div>
      </div>
      {/* Music Player */}
      {webProjects.map((project, index) => (
        <div
          className="box flex flex-col md:flex-row mt-4 mb-10 mx-auto w-5/6 content-center transform transition-all duration-500 hover:scale-110 active:animate-bounce"
          key={index}
          onClick={() => handleClick(project.href)}
        >
          <article className="media">
            <div className="media-left h-full my-auto mx-4 order-last md:order-first">
              <figure className="image is-64x64">
                <img src={project.url} alt="" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{project.name}</strong>
                  <small> - {project.tech}</small>
                  <br />
                  {project.description}
                </p>
              </div>
            </div>
          </article>
        </div>
      ))}
      <div className="mb-36"></div>
      {/* <div className="flex justify-center items-center mt-24 flex-wrap flex-row">
        <div className="flex flex-col w-3/4 ">
          <h1 className="text-5xl font-bold w-full">Video Games</h1>
        </div>
      </div> */}
    </>
  );
}

import NewsLetter from "./NewsLetter";

export default function BodyBlogging() {
  return (
    <>
      <div className="flex justify-center items-center p-4 flex-wrap flex-row">
        <div className="flex flex-col w-3/4">
        <h1 className="text-5xl font-bold w-full my-5">Blogs</h1>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
              content
            </div>
            <div className="divider"></div>
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
              content
            </div>
            <div className="divider"></div>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                content
              </div>
              <div className="divider"></div>
              <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                content
              </div>
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    </>
  );
}

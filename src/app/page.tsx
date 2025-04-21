export default function Home() {
  return (
    <div className="bg-[var(--color-deep-purple)] flex flex-col items-center min-h-screen px-4 md:px-[15%] font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <div className="flex flex-col items-center h-screen">
        <img
          className="absolute p-4 self-start w-[30vw] md:w-[20vw]"
          src="/assets/bloingo_transp-bg_logo.png"
          alt="Bloingo logo"
          />

        <div className="flex justify-center items-center w-full sm:w-3/4 md:w-[50vw] mt-12">
          <img
            className="p-4 w-full h-auto"
            src="/assets/logo_just-snap_transp.png"
            alt="Just Snap logo"
            />
        </div>

        <div className="flex items-center justify-center w-full sm:w-3/4 md:w-[60vw] py-6">
          <a
            href="https://store.steampowered.com/app/3635700/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-3/4 md:w-1/2 lg:w-1/2 transition-transform hover:scale-105"
            >
            <img
              src="/assets/special-button-orange.svg"
              alt="Play on Steam"
              className="w-full h-auto rounded-lg shadow-md"
              />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
          <a
            href="https://www.youtube.com/watch?v=BzxMGlnC2II"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-[40vw] md:w-[15vw] lg:w-[15vw] transition-transform hover:scale-105"
            >
            <img
              src="/assets/Youtube-button_1.svg"
              alt="Play on YouTube"
              className="w-full h-auto rounded-lg shadow-md"
              />
            <span className="sr-only">Watch on YouTube</span>
          </a>
          <a
            href="https://www.kickstarter.com/projects/pn852/bloingo-games-just-snap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-[40vw] md:w-[15vw] lg:w-[15vw] transition-transform hover:scale-105"
            >
            <img
              src="/assets/Kickstarter-button_1.svg"
              alt="Back on Kickstarter"
              className="w-full h-auto rounded-lg shadow-md"
              />
            <span className="sr-only">Back our project on Kickstarter</span>
          </a>
          <a
            href="https://discord.gg/b6T3MDqW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-[40vw] md:w-[15vw] lg:w-[15vw] transition-transform hover:scale-105"
            >
            <img
              src="/assets/Discord-button_1.svg"
              alt="Join our Discord community"
              className="w-full h-auto rounded-lg shadow-md"
              />
            <span className="sr-only">Join our Discord community</span>
          </a>
        </div>
      </div>
      
      <div className="flex justify-center w-full mt-8 px-4">
        <iframe
          className="rounded-lg shadow max-w-full aspect-video m-12 w-full"
          src="https://www.youtube.com/embed/BzxMGlnC2II"
          title="Just Snap Trailer 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

    </div>
  );
}

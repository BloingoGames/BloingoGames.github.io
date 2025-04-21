export default function Home() {
  return (
    <div className="bg-[var(--color-deep-purple)] flex flex-col items-center min-h-screen px-4 md:px-[15%] font-[family-name:var(--font-geist-sans)]">
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
        <button
          className="bg-[url('/assets/special-button-orange.svg')] 
                     bg-no-repeat bg-center bg-auto 
                     text-white font-semibold
                     w-full sm:w-[50vw] h-16 sm:h-24
                     rounded-lg shadow-md transition duration-150 ease-in-out
                     hover:scale-105"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href="https://www.youtube.com/watch?v=BzxMGlnC2II"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full sm:w-[15vw] h-16 sm:h-24 bg-[url('/assets/Youtube-button_1.svg')] bg-no-repeat bg-center bg-auto rounded-lg shadow-md transition duration-150 ease-in-out hover:scale-105"
        >
          <span className="sr-only">Watch on YouTube</span>
        </a>
        <a
          href="https://www.kickstarter.com/projects/pn852/bloingo-games-just-snap"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full sm:w-[15vw] h-16 sm:h-24 bg-[url('/assets/Kickstarter-button_1.svg')] bg-no-repeat bg-center bg-auto rounded-lg shadow-md transition duration-150 ease-in-out hover:scale-105"
        >
          <span className="sr-only">Back our project on Kickstarter</span>
        </a>

        <a
          href="https://discord.gg/b6T3MDqW"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full sm:w-[15vw] h-16 sm:h-24 bg-[url('/assets/Discord-button_1.svg')] bg-no-repeat bg-center bg-auto rounded-lg shadow-md transition duration-150 ease-in-out hover:scale-105"
        >
          <span className="sr-only">Join our Discord community</span>
        </a>
      </div>
      
      <div className="flex justify-center w-full mt-8 px-4">
        <video
          className="rounded-lg shadow-lg max-w-full aspect-video"
          controls
          poster="https://cdn.cloudflare.steamstatic.com/steam/apps/YOUR_APP_ID/capsule_616x353.jpg"
        >
          <source
            src="https://video.fastly.steamstatic.com/store_trailers/257128167/movie480_vp9.webm?t=1745100212"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

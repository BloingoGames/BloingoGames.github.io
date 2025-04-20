export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen mx-[15%] font-[family-name:var(--font-geist-sans)]">
      <img
        className="absolute p-4 self-start"
        src="/bloingo_transp-bg_logo.png"
        alt="Bloingo logo"
        width={250}
        height={50}
      />

      {/* <div className="flex w-1/2 justify-center items-center py-6">
        <p className="text-center">
          We are Bloingo Games. Check back here for news on the development of
          our upcoming debut title, Just Snap. We look foward to sharing our
          progress with you all.
        </p>
      </div> */}

      <div className="flex justify-center items-center w-[50vw] mt-[5vh]">
        <img
          className="p-4"
          src="/logo_just-snap_transp.png"
          alt="Just Snap logo"
          width={1000}
          height={1000}
        />

      </div>
      <div className="flex items-center justify-center w-[60vw] py-6">
        <button
          className="bg-[url('/special-button-orange.svg')] 
                     bg-no-repeat bg-center bg-auto 
                     text-white font-semibold
                     w-[50vw] h-24
                     rounded-lg shadow-md transition duration-150 ease-in-out
                     hover:scale-105"
        />
      </div>

      <div className="flex gap-4">
        <button
          className="bg-[url('/Youtube-button_1.svg')] 
                     bg-no-repeat bg-center bg-auto 
                     text-white font-semibold
                     w-[15vw] h-24
                     rounded-lg shadow-md transition duration-150 ease-in-out
                     hover:scale-105"
        />
        <button
          className="bg-[url('/Kickstarter-button_1.svg')] 
                     bg-no-repeat bg-center bg-auto 
                     text-white font-semibold
                     w-[15vw] h-24
                     rounded-lg shadow-md transition duration-150 ease-in-out
                     hover:scale-105"
        />
        <button
          className="bg-[url('/Discord-button_1.svg')] 
                     bg-no-repeat bg-center bg-auto 
                     text-white font-semibold
                     w-[15vw] h-24
                     rounded-lg shadow-md transition duration-150 ease-in-out
                     hover:scale-105"
        />
      </div>
      <div className="text-2xl font-o4b30 text-center mt-8">
        Trailer
      </div>
      <div className="flex justify-center w-full mt-8">
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

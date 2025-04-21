export default function Home() {
  return (
    <div className="bg-[var(--color-deep-purple)] flex flex-col items-center min-h-screen px-4 sm:mx-[0%] md:px-[15%] overflow-x-hidden">
      <img
        className="absolute p-4 self-start w-[30vw] md:w-[25vw] sm:w-[30vw]"
        src="/assets/bloingo_transp-bg_logo.png"
        alt="Bloingo logo"
      />
      {/* Hero Section */}
      <div className="flex flex-col gap-4   items-center h-screen justify-between pt-[10vh] pb-[10vh]">
        <div className="flex justify-center items-center w-full sm:w-[70vw] md:w-[50vw]">  
          <img
            className="w-full h-auto"
            src="/assets/logo_just-snap_transp.png"
            alt="Just Snap logo"
          />
        </div>

        {/* Main special button */}
        <div className="flex items-center justify-center w-1/2 sm:w-[70vw] md:w-[70vw]">
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

        {/* Secondary buttons */}
        <div className="flex justify-center gap-4 md:gap-6 flex-col md:flex-row sm:flex-row w-full items-center px-24">
          <a
            href="https://www.youtube.com/watch?v=BzxMGlnC2II"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-[40vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw] transition-transform hover:scale-105"
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
            className="inline-block w-[40vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw] transition-transform hover:scale-105"
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
            className="inline-block w-[40vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw] transition-transform hover:scale-105"
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
      
      {/* About section */}
      <div className="flex mt-10 item-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-3xl text-center text-white font-bold mt-12 mb-4 font-jersey10">
            About Just Snap
          </h2>
          <p className="text-lg text-center text-white max-w-3xl font-jersey10">
            We lied. It&apos;s not just &quot;Snap&quot;!
          </p>
          <p className="text-lg text-center text-white max-w-3xl mb-8 font-jersey10">
            It&apos;s more like Snap after it spent a gap year at the Bloingo Department of Music & Acoustics (shout‑out to our resident sound sorcerers, Chris & Jake) and came back shredding 130 BPM guitar solos while juggling decks of chaos.
          </p>

          <div className="flex flex-col justify-center w-full mt-8 px-4">
            <h2 className="text-2xl font-jersey10">
              Check this out...
            </h2>
            <iframe
              className="rounded-lg shadow max-w-full aspect-video m-4 w-full"
              src="https://www.youtube.com/embed/BzxMGlnC2II"
              title="Just Snap Trailer 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              />
          </div>
        </div>

        <div>
          <h2 className="text-3xl text-center text-white font-bold mt-12 mb-4 font-jersey10">
            About the Team
          </h2>
          <p className="text-lg text-center text-white max-w-3xl mb-8 font-jersey10">
            The Bloingo Games conglomerate is made up of 5 whole humans. Each one lovingly crafted with absurd stat distributions and questionable skill trees.
          </p>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl text-white font-jersey20">
            <div className="bg-[var(--color-deeper-purple)] p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">📣 Francis Rowlands</h3>
              <p>Role: Project & Community Manager</p>
              <ul className="list-disc list-inside mt-2">
                <li>CHA: 99 — Speaks fluent Discord, Jira, and human.</li>
                <li>WIS: 92 — Time wizard who bends deadlines to his will.</li>
                <li>SPECIAL SKILL: Deadline Whisperer</li>
              </ul>
            </div>

            <div className="bg-[var(--color-deeper-purple)] p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">📊 Plato Ng</h3>
              <p>Role: Marketing Expert / Data Analyst</p>
              <ul className="list-disc list-inside mt-2">
                <li>INT: 98 — Converts chaos into marketing strategies.</li>
                <li>PER: 87 — Can smell trends before they bloink.</li>
                <li>SPECIAL SKILL: Reality Forecasting Engine</li>
              </ul>
            </div>

            <div className="bg-[var(--color-deeper-purple)] p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">🤖 Robert Ruta</h3>
              <p>Role: Game Developer / Tech Lead</p>
              <ul className="list-disc list-inside mt-2">
                <li>INT: 92 — Architecture so clean it&apos;s feng shui.</li>
                <li>DEX: 99 — Bug swatting comes at no stamina cost.</li>
                <li>SPECIAL SKILL: Coderemancey (spawns code without writing any)</li>
              </ul>
            </div>

            <div className="bg-[var(--color-deeper-purple)] p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">🎧 Chris Seadon</h3>
              <p>Role: Game Developer / Musician / Creative Director</p>
              <ul className="list-disc list-inside mt-2">
                <li>WIS: 95 — Hears colours, sees vibrations.</li>
                <li>INT: 92 — Code composer by day, track-layer by night.</li>
                <li>SPECIAL SKILL: Audio Arcana (drops the bass)</li>
              </ul>
            </div>

            <div className="bg-[var(--color-deeper-purple)] p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">🎨 Jake Abrahams</h3>
              <p>Role: Game Developer / Musician / Lead Designer</p>
              <ul className="list-disc list-inside mt-2">
                <li>WIS: 97 — Turns the ugly into the pretty.</li>
                <li>PER: 90 — Detects design flaws before they exist.</li>
                <li>SPECIAL SKILL: Vibefacturer (manufactures good vibes)</li>
              </ul>
            </div>

            {/* CTA Tile */}
            <div className="bg-[var(--color-deeper-purple)] p-4 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold">🕹️ You?</h3>
                <p>Role: ??? / Bloingo Ally</p>
                <ul className="list-disc list-inside mt-2">
                  <li>MYSTERY: 100 — We don&apos;t know you yet… but we want to.</li>
                  <li>RARITY: 💎 — Concerning.</li>
                  <li>SPECIAL SKILL: TBD by you.</li>
                </ul>
              </div>
              <a
                href="mailto:team@bloingo.com"
                className="mt-4 inline-block bg-orange-500 text-white text-center px-4 py-2 rounded-md shadow hover:bg-orange-600 transition"
              >
                Join the Squad →
              </a>
            </div>
          </div>

        </div>
        {/* End of about team */}
      </div>
      {/* End of about */}

      {/* Footer */}
      <footer className="mt-16 w-full bg-[var(--color-deeper-purple)] text-white font-jersey10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold mb-2">BloingoGames</h4>
            <p>Indie devs bloinging on one snap at a time.</p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="https://store.steampowered.com/app/3635700/" target="_blank" rel="noopener noreferrer" className="hover:underline">Play on Steam</a></li>
              <li><a href="https://discord.gg/b6T3MDqW" target="_blank" rel="noopener noreferrer" className="hover:underline">Join the Discord</a></li>
              <li><a href="https://www.kickstarter.com/projects/pn852/bloingo-games-just-snap" target="_blank" rel="noopener noreferrer" className="hover:underline">Fund us on Kickstarter</a></li>
              <li><a href="mailto:team@bloingo.com" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.youtube.com/@bloingogames" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <img src="/assets/Youtube-icon-white.svg" alt="YouTube" className="w-6 h-6" />
              </a>
              <a href="https://x.com/bloingogames" target="_blank" rel="noopener noreferrer" aria-label="X">
                <img src="/assets/X-icon-white.svg" alt="X" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/bloingo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/assets/Instagram-icon-white.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://discord.gg/ATWZ6KMYbh" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <img src="/assets/Discord-icon-white.svg" alt="Discord" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-4 text-center text-sm text-white/60">
          © {new Date().getFullYear()} BloingoGames. We&apos;re just so Bloingo.
        </div>
      </footer>

    </div>
  );
}

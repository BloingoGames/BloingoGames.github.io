export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full font-[family-name:var(--font-geist-sans)]">
      <img
        className="p-4"
        src="/bloingo_transp-bg_logo.png"
        alt="Bloingo logo"
        width={500}
        height={500}
      />
      <div className="flex w-1/2 justify-center items-center py-6">
        <p className="text-center">
          We are Bloingo Games. Check back here for news on the development of
          our upcoming debut title, Just Snap. We look foward to sharing our
          progress with you all.
        </p>
      </div>
    </div>
  );
}

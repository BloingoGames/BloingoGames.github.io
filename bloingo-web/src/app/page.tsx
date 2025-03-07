import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full font-[family-name:var(--font-geist-sans)]">
        <Image
          className="dark:invert"
          src="/bloingo.svg"
          alt="Bloingo logo"
          width={180}
          height={180}
          priority
        />
    </div>
  );
}

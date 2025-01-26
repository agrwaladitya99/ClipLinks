import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-green-50">
      <section className="grid grid-cols-2 h-[90vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p
            className={`text-2xl font-bold ${poppins.className} pb-8 pt-[-2rem]`}
          >
            Elevate Your Links: The Ultimate URL Shortener!
          </p>
          <ul className="px-24 text-justify text-xl font-serif leading-relaxed list-none">
            <li className="mb-4">
              <span className="text-green-500 font-bold">🍀</span>
              <span className="ml-4">
                We offer the best custom URL generator, allowing you to shorten
                URLs while personalizing them to your exact preference.
              </span>
            </li>
            <li className="mb-4">
              <span className="text-green-500 font-bold">🍀</span>
              <span className="ml-4">
                Unlike most URL shorteners that track your activity or require
                you to log in, we prioritize your privacy and convenience.
              </span>
            </li>
            <li className="mb-4">
              <span className="text-green-500 font-bold">🍀</span>
              <span className="ml-4">
                That&#39;s why we&#39;ve developed a straightforward solution
                that meets your needs.
              </span>
            </li>
          </ul>
          <div className="flex gap-3 justify-start">
            <Link href="/shorten">
              <button className="bg-green-400 rounded-lg shadow-lg p-8 py-3 text-2xl font-bold text-white">
                Try Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="an Image of a vector"
            src={"/vector.jpg"}
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}

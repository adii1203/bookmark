import Image from "next/image";
import logo from "../../public/logo.png";
import NaviganeButton from "@/ui/navigate-button";
import Link from "next/link";
import { megan } from "@/utils/font";

export default async function Home() {
  return (
    <main className="h-screen py-6 px-4 max-w-[70rem] mx-auto">
      <nav className="flex items-center justify-between">
        <div className="w-10">
          <NaviganeButton className="bg-white w-full p-0 hover:bg-transparent">
            <Link href="/">
              <Image
                className="w-full object-cover"
                src={logo}
                alt="logo image"
              />
            </Link>
          </NaviganeButton>
        </div>
        <div>
          <NaviganeButton>
            <Link href="/login">Get started</Link>
          </NaviganeButton>
        </div>
      </nav>
      <section className="relative flex flex-col items-center justify-around h-[calc(100%-1.5rem)]">
        <div className="absolute -z-10 w-60 h-60 top-40 sm:top-auto sm:w-72 sm:h-72 bg-purple-400 rounded-full " />
        <div
          className={`${megan.variable} font-megan font-semibold text-5xl sm:text-[4rem] tracking-wider text-center`}>
          <h2>Save everything</h2>
          <h2>Remember nothing</h2>
        </div>
        <p className="text-neutral-400 max-w-80 text-center">
          A new one of a kind bookmarking tool, that allows you to save your
          favorite sites.
        </p>
      </section>
    </main>
  );
}

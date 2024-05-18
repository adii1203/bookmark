import Image from "next/image";
import hero from "../../public/hero.svg";
import NaviganeButton from "@/components/component/navigate-button";
export default async function Home() {
  return (
    <main className="p-7 h-screen">
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 h-full">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Save,
            <br /> Share and <br /> Organize your bookmarks.
          </h1>
          <div className="space-x-4">
            <NaviganeButton text="Get Started" redirectTo="/login" />
          </div>
        </div>
        <div className="w-[26rem] md:w-[32rem]">
          <Image src={hero} alt="hero image" />
        </div>
      </div>
    </main>
  );
}

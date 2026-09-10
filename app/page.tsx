import { Navbar } from "./ui/nav/navbar";
import { Hero } from "./ui/home/hero";
import { heroImage } from "./lib/placeholder-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home | Bona Fide Pizza'
};

export default function Home() {
  return (
    <>
      <main>
        <h1>Home Page</h1>
        <section className="flex justify-center">
          <Hero heroImage={heroImage} />
        </section>
      </main>
    </>
  );
}

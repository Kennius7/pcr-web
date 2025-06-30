"use client"

import HomeSection from "@/components/HomeComponent";



export default function Home() {

  return (
    <>
      <main className="mt-6 space-y-10">
        <HomeSection title="Popular homes in Lekki" />
        <HomeSection title="Available next month in Ikeja" />
      </main>
    </>
  );
}

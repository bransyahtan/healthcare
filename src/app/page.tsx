"use client";

import doctorAnimation from "@/../public/lotties/doctor.json";
import Lottie from "lottie-react";

export default function Home() {
  return (
    <main>
      <section className="flex h-screen items-center justify-center">
        <Lottie
          animationData={doctorAnimation}
          loop
          style={{ width: 300, height: 300 }}
        />
      </section>

      <section className="min-h-screen">
        <p className="text-primarygreen font-extrabold">
          makanmakanmakanmakanmakanmakanmakanmakanmakanmakanmakanmakanmakanmakan
        </p>
      </section>
    </main>
  );
}

"use client";

import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-3 bg-neutral-200">
        <div className="flex flex-col  items-start justify-center gap-5 p-2 m-3">
          <h1 className="font-extrabold text-6xl ">
            Helping students grow better
          </h1>
          <p className="text-xl font-medium">
            re's this notion that to grow a business, you have to be ruthless.
            But we know there's a better way to grow. One where what's good for
            the bottom line is also good for customers. We believe businesses
            can grow wit
          </p>
          <Button className="m-5 p-4 w-[140px] bg-orange-500">Start now</Button>
        </div>
        <Image
          src="/homeimage.png"
          alt="desktop image"
          width={800}
          height={600}
        ></Image>
      </div>

      <div className="mt-32 flex">
        <div className="m-20 p-4 gap-4">
          <h2 className="text-6xl font-extrabold">Our mission</h2>
          <p className="text-xl mt-6">
            There's this notion that to grow a business, you have to be
            ruthless. But we know there's a better way to grow. One where what's
            good for the bottom line is also good for customers. We believe
            businesses can grow with a conscience, and succeed with a soul — and
            that they can do it with inbound. That's why we've created an
            ecosystem uniting software, education, and community to help
            businesses grow better every day.
          </p>
        </div>
        <Image
          src="/home3.png"
          alt="desktop image"
          width={500}
          height={500}
        ></Image>
      </div>
      <div className="flex gap-3 bg-neutral-200 mt-20 justify-center">
      <Image
          src="/home4.png"
          alt="desktop image"
          width={800}
          height={600}
          className=""
        ></Image>
        <div className="flex flex-col  items-start justify-center gap-5 p-2 m-3">
          <h1 className="font-extrabold text-6xl ">
            Our story
          </h1>
          <p className="text-xl font-medium m-2 p-5">
          There's this notion that to grow a business, you have to
be ruthless. But we know there's a better way to grow.
One where what's good for the bottom line is also good
for customers. We believe businesses can grow with a
conscience, and succeed with a soul — and that they
can do it with inbound. That's why we've created an
ecosystem uniting software, education, and community
to help businesses grow better every day.
          </p>
          
        </div>
        
      </div>
    </main>
  );
}

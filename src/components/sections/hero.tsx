"use client";

import { motion } from "framer-motion";

import FlickeringGrid from "@/components/magicui/flickering-grid";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";

const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.a
      // href="/blog/introducing-acme-ai"
      className="flex w-auto items-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent whitespace-pre"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="w-fit rounded-full bg-accent px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm">
        📣 Introducing New
      </div>
      <span className="text-xs font-medium text-primary sm:text-sm">
        <span className="font-bold">2025</span>{" "}
        <span className="font-normal">Challenge</span>
      </span>
      <svg
        width="12"
        height="12"
        className="ml-1 hidden"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="hsl(var(--primary))"
        />
      </svg>
    </motion.a>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-6">
      <motion.h1
        className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        {/* {["ATF", "AI", "Challenge", "2025"].map((text, index) => ( */}
        {["ATF", "AI", "Challenge"].map((text, index) => (
          <motion.span
            key={index}
            className="inline-block px-1 md:px-2 text-balance font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease,
            }}
          >
            {text}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="mx-auto max-w-xl text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9 text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        Theme:{" "}
        <span className="font-medium italic">
          {"Harnessing AI for Africa's Development"}
        </span>
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  return (
    <>
      <motion.div
        className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link
          href="#about-challenge"
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background flex gap-2"
          )}
        >
          Learn More
        </Link>
      </motion.div>
    </>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative mx-auto flex w-full rounded-lg p-1 items-center justify-center mt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      <motion.img
        // key={currentIndex}
        src={"/atf-award-ceremony-2024.png"}
        alt="atf-award-ceremony-2024"
        // className="border rounded-lg shadow-lg max-w-screen-lg"
        className="aspect-auto h-full w-full object-cover relative border rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
      {/* <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/dashboard.png"
        thumbnailAlt="Hero Video"
        className="border rounded-lg shadow-lg max-w-screen-lg mt-16=="
      /> */}
      <BorderBeam
        size={400}
        duration={12}
        delay={9}
        borderWidth={1.5}
        colorFrom="hsl(var(--primary))"
        colorTo="hsl(var(--primary)/0)"
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 pb-20 sm:px-6 sm:pt-24 md:pt-32 lg:px-8 overflow-hidden">
        {/* <div className="z-10 pointer-events-none absolute inset-x-0 -top-24 transform rotate-180 h-1/4 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4 border border-green-500"></div> */}
        <FlickeringGrid
          className="z-0 absolute inset-0= [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
          squareSize={10}
          gridGap={10}
          color="#000"
          maxOpacity={0.06}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
        <HeroImage />
        <div className="z-10 pointer-events-none absolute inset-x-0 -bottom-12 lg h-1/4 bg-gradient-to-t from-background via-background to-transparent "></div>
      </div>
    </section>
  );
}

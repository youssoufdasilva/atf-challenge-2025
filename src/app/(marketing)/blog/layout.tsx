import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4= h-[calc(100%_-_200px)]== h-[60vh]">
        <Section
          title="Did you get lost?"
          subtitle="There's nothing to see here"
        >
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full sm:w-auto text-background flex gap-2="
            )}
          >
            {/* <Icons.logo className="h-6 w-6" /> */}
            Let's go Home!
          </Link>
        </Section>
      </div>

      {/* <main>{children}</main> */}
      <Footer />
    </>
  );
}

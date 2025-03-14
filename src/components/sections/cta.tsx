import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { formLink } from "@/lib/utils";

export default function CtaSection() {
  return (
    <Section
      id="cta"
      title="Ready to get started?"
      subtitle="Register your team today."
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <Link
          // href="#participate"
          href={formLink}
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background flex gap-2"
          )}
        >
          Register now
        </Link>
      </div>
    </Section>
  );
}

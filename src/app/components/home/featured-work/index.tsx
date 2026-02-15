import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { featuredWorkData } from "@/app/data/featured-work";
import { withBasePath } from "@/lib/utils";

const FeaturedWork = () => {
  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Highlighted Projects</p>
              <Button asChild variant="outline" className="h-auto">
                <Link href="https://github.com/MenushaKatipearachchi" target="_blank" rel="noreferrer" className="py-3 px-5">
                  View GitHub
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
            {featuredWorkData.map((value, index) => {
              const isRightCol = index % 2 === 1;

              return (
                <div
                  key={value.title}
                  className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${
                    isRightCol ? "md:border-l md:border-primary/10" : ""
                  }`}
                >
                  <Link
                    href={value.href}
                    target="_blank"
                    rel="noreferrer"
                    className="overflow-hidden h-56 bg-white border border-primary/10 rounded-md"
                  >
                    <Image
                      src={withBasePath(value.image)}
                      alt={value.title}
                      width={490}
                      height={300}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                  </Link>
                  <div className="flex flex-col gap-2 px-2">
                    <Link href={value.href} target="_blank" rel="noreferrer">
                      <h4 className="min-h-12 leading-snug">{value.title}</h4>
                    </Link>
                    <p>{value.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {value.roles.map((role) => (
                        <span key={role} className="text-xs px-2 py-1 border border-primary/10 rounded-md text-primary">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;

import Image from "next/image";
import Link from "next/link";
import { projectOverviewData } from "@/app/data/page-data";
import { withBasePath } from "@/lib/utils";

const ProjectOverview = () => {
  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16">
            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                Publication
              </p>
              <div className="flex flex-col gap-2.5">
                <Link href={projectOverviewData.publication.url} className="group flex items-center gap-2" target="_blank" rel="noreferrer">
                  <h4>{projectOverviewData.publication.title}</h4>
                  <Image
                    src={withBasePath("/images/icon/tile-arrow-icon.svg")}
                    alt="arrow"
                    width={24}
                    height={24}
                    className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in"
                  />
                </Link>
                <p>{projectOverviewData.publication.venue}</p>
                <p>DOI: {projectOverviewData.publication.doi}</p>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                References
              </p>
              <div className="flex flex-col gap-4">
                {projectOverviewData.references.map((value) => (
                  <div key={value.email} className="flex flex-col gap-1 border border-primary/10 rounded-lg p-4">
                    <h5>{value.name}</h5>
                    <p>{value.role}</p>
                    <p>{value.phone}</p>
                    <Link href={`mailto:${value.email}`} className="underline underline-offset-4 break-all">
                      {value.email}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;

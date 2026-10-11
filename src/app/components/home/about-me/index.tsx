import { Badge } from "@/components/ui/badge";
import { skillGroups, softSkills } from "@/app/data/page-data";
import { withBasePath } from "@/lib/utils";

const AboutMe = () => {
  return (
    <section>
      <div className="container">
        <div
          className="border-x border-primary/10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${withBasePath("/images/about-me/about-me-bg.svg")}')` }}
        >
          <div className="flex flex-col gap-10 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                Software Engineer with <span className="font-semibold">nearly 3 years</span> of professional experience
                and a BSc (Hons) in Information Technology, specializing in Software Engineering from SLIIT.
              </h2>
              <h5 className="text-secondary font-normal">
                Passionate about full-stack development, microservices, cloud computing, and practical DevOps workflows.
                Proficient in Dotnet, C#, Angular, Java, Python, React.js, Spring Boot, and modern software delivery practices.
              </h5>
              <a href="tel:+94711306818" className="text-primary underline underline-offset-4 w-fit">
                (+94) 71 130 6818
              </a>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-sm text-primary uppercase font-medium">Technical Skills</p>
              {skillGroups.map((group) => (
                <div key={group.label} className="flex flex-col gap-3">
                  <h3 className="text-sm font-semibold text-primary">{group.label}</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {group.tools.map((tool) => (
                      <Badge variant="outline" key={tool} className="py-1.5 px-3 rounded-lg">
                        <span className="text-xs sm:text-sm font-medium text-primary">{tool}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">Soft Skills</p>
              <ul className="list-disc pl-5 space-y-2 text-secondary">
                {softSkills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">Languages</p>
              <p className="text-secondary">English (Fluent) · Sinhala (Fluent)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

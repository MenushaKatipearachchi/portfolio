import { Badge } from "@/components/ui/badge";
import { withBasePath } from "@/lib/utils";

const AboutMe = () => {
  const coreTools = [
    "Dotnet",
    "C#",
    "Angular",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Python",
    "React.js",
    "FastAPI",
    "RabbitMQ",
    "T-SQL",
    "Microsoft Azure",
    "Docker",
    "Kubernetes",
  ];

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
                Software Engineer with <span className="font-semibold">2+ years</span> of experience building scalable web systems,
                API services, and workflow automation in finance and utility domains.
              </h2>
              <h5 className="text-secondary font-normal">
                Focused on full-stack delivery, microservices, and cloud-ready engineering with strong ownership from design to deployment.
              </h5>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">Core Tools</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {coreTools.map((value) => {
                  return (
                    <Badge variant="outline" key={value} className="py-1.5 px-3 rounded-lg">
                      <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

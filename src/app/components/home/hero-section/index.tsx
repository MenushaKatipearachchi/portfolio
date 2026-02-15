import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { withBasePath } from "@/lib/utils";

const HeroSection = () => {
  const bannerImageSrc = withBasePath("/images/hero-sec/banner-bg-img.png?v=20260214-2309");

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/menusha-katipearachchi/",
      label: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      href: "https://github.com/MenushaKatipearachchi",
      label: "GitHub",
      icon: <Github className="w-5 h-5" />,
    },
    {
      href: "mailto:ekettipearachchi@gmail.com",
      label: "Email",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="w-full h-60 relative overflow-hidden">
          <Image
            src={bannerImageSrc}
            alt="banner"
            width={1080}
            height={267}
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>

        <div className="border-x border-primary/10">
          <div className="relative max-w-5xl mx-auto px-4 sm:px-7 pt-16 sm:pt-20 pb-10 sm:pb-12">
            <div className="absolute top-0 -translate-y-1/2">
              <div className="relative w-[8rem] h-[8rem] rounded-full overflow-hidden border-4 border-white shadow-sm">
                <Image
                  src={withBasePath("/images/hero-sec/user-img.png")}
                  alt="Menusha Eshan Katipearachchi"
                  width={104}
                  height={104}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-7">
              <div className="flex flex-col gap-3 min-w-0">
                <h1 className="whitespace-nowrap">Menusha Katipearachchi</h1>
                <p className="text-xl text-violet-700 font-medium leading-none">Software Engineer | IT</p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <p className="text-primary">Kelaniya, Sri Lanka</p>
                </div>
              </div>

              <div className="flex flex-nowrap items-center gap-4 md:shrink-0">
                <div className="flex items-center gap-2">
                  {socialLinks.map((value) => {
                    return (
                      <Link
                        key={value.label}
                        href={value.href}
                        target={value.href.startsWith("http") ? "_blank" : undefined}
                        rel={value.href.startsWith("http") ? "noreferrer" : undefined}
                        className="w-fit p-3.5 hover:bg-primary/5 border border-primary/10 rounded-full"
                        aria-label={value.label}
                      >
                        {value.icon}
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="https://shorturl.at/cIOsy"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] shrink-0"
                >
                  <span className="flex items-center justify-center gap-3 min-w-[190px] whitespace-nowrap bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-6 rounded-full">
                    <Image src={withBasePath("/images/icon/spark-icon.svg")} alt="spark-icon" width={14} height={14} />
                    <span className="text-base font-semibold text-white">Download CV</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

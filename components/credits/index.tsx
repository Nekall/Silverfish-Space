/* eslint-disable */

"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// Styles
import styles from "./styles.module.css";

const Credits = () => {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isSpacePressed, setIsSpacePressed] = useState(false);

  const credits = [
    {
      title: "CREATION",
      subtitle: "Original Concept & Vision",
      names: ["LilNeka"],
    },
    {
      subtitle: "Creative Direction",
      names: ["Nekall (aka LilNeka)"],
    },
    {
      subtitle: "Executive Production",
      names: ["Neko"],
    },
    {
      subtitle: "Artistic Supervision",
      names: ["LilNeka"],
    },
    {
      title: "DESIGN",
      subtitle: "UI Design (based on the default launcher)",
      names: ["LilNeka"],
    },
    {
      subtitle: "UX — What UX?",
      names: ["LilNeka"],
    },
    {
      subtitle: "Color Choice & Font Matching",
      names: ["LilNeka"],
    },
    {
      subtitle: "Accessibility Design (Ctrl+Scroll is accessibility, right?)",
      names: ["LilNeka"],
    },
    {
      subtitle: "Responsiveness (Sort of)",
      names: ["LilNeka"],
    },
    {
      subtitle: "Illustration & Icons",
      names: ["LilNeka"],
    },
    {
      title: "DEVELOPMENT",
      subtitle: "Frontend Engineering",
      names: ["Neko"],
    },
    {
      subtitle: "Component Recycling (from CodePen)",
      names: ["@joexmdq"],
    },
    {
      subtitle: "Button UI (CodePen by @joexmdq)",
      names: ["Adapted by LilNeka"],
    },
    {
      subtitle: "Bug Designer",
      names: ["LilNeka"],
    },
    {
      subtitle: "Console.log Engineer",
      names: ["LilNeka"],
    },
    {
      subtitle: "Responsiveness Debugger",
      names: ["Nekall"],
    },
    {
      subtitle: "CSS Confuser",
      names: ["LilNeka"],
    },
    {
      subtitle: "Performance Optimization (kinda)",
      names: ["LilNeka"],
    },
    {
      title: "CONTENT",
      subtitle: "Copywriting & Textual Nonsense",
      names: ["LilNeka"],
    },
    {
      subtitle: "Grammar Crimes",
      names: ["LilNeka"],
    },
    {
      subtitle: "Narrative / Tooltips / Easter eggs",
      names: ["LilNeka"],
    },
    {
      subtitle: "Documentation (coming soon™)",
      names: ["Neko"],
    },
    {
      title: "MEDIA & AUDIOVISUAL",
      subtitle: "Sound Effects",
      names: ["LilNeka", "_Jok_"],
    },
    {
      subtitle: "Visual Polish",
      names: ["LilNeka"],
    },
    {
      title: "QUALITY ASSURANCE",
      subtitle: "Tested on My Machine™",
      names: ["LilNeka"],
    },
    {
      subtitle: "Bugs Found & Adopted",
      names: ["LilNeka"],
    },
    {
      subtitle: "QA Department",
      names: ["Nekall (also LilNeka)"],
    },
    {
      subtitle: "Frustration Management",
      names: ["LilNeka (barely)"],
    },
    {
      title: "OPERATIONS",
      subtitle: "Local Hosting",
      names: ["LilNeka", "Merionis"],
    },
    {
      title: "MARKETING & COMMUNITY",
      subtitle: "Branding (Such logo. Much wow.)",
      names: ["LilNeka"],
    },
    {
      subtitle: "Social Presence (or absence)",
      names: ["LilNeka"],
    },
    {
      subtitle: "Community Engagement",
      names: ["LilNeka & future fans"],
    },
    {
      title: "LEGAL & BUSINESS",
      subtitle: "Copyright Violation Avoidance",
      names: ["LilNeka"],
    },
    {
      subtitle: "Attribution & License Respect",
      names: ["LilNeka"],
    },
    {
      subtitle: "Name Generator (Totally not AI)",
      names: ["LilNeka"],
    },
    {
      title: "SPECIAL THANKS",
      subtitle: "To those who made this possible",
      names: [
        "Coffee",
        "Open tabs",
        "@joexmdq (for the button UI on CodePen)",
        "The Ctrl+Z gods",
        "Everyone who scrolls this far",
        "Merionis for its moral support",
      ],
    },
    {
      title: "© 2025",
      subtitle: "Crafted with minimal bugs by",
      names: ["LilNeka / Neko / Nekall — All rights probably reserved"],
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.code === "Space") {
        e.preventDefault();
        setIsSpacePressed(true);
      }

      if (e.code === "Escape" || e.code === "Enter") {
        router.push("/");
      }
    };

    const handleKeyUp = (e: any) => {
      if (e.code === "Space") {
        setIsSpacePressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [router]);

  useEffect(() => {
    const scrollContainer: any = scrollContainerRef.current;
    let animationFrameId: any;
    let lastTime: any = null;
    const normalScrollSpeed = 1;
    const fastScrollSpeed = 3;

    const checkEndOfScroll = () => {
      if (!scrollContainer) return false;

      const maxScroll =
        scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const isAtEnd = scrollContainer.scrollTop >= maxScroll - 10;

      if (isAtEnd) {
        setTimeout(() => {
          router.push("/");
        }, 1000);
        return true;
      }
      return false;
    };

    const scroll = (timestamp: any) => {
      if (lastTime === null) {
        lastTime = timestamp;
      }

      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      if (scrollContainer) {
        const currentSpeed = isSpacePressed
          ? fastScrollSpeed
          : normalScrollSpeed;
        scrollContainer.scrollTop += currentSpeed * (deltaTime / 16);

        const isEnd = checkEndOfScroll();
        if (isEnd) {
          cancelAnimationFrame(animationFrameId);
          return;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isSpacePressed, router]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const preventScroll = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", preventScroll, {
        passive: false,
      });
      scrollContainer.addEventListener("touchmove", preventScroll, {
        passive: false,
      });
      scrollContainer.addEventListener("scroll", preventScroll, {
        passive: false,
      });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", preventScroll);
        scrollContainer.removeEventListener("touchmove", preventScroll);
        scrollContainer.removeEventListener("scroll", preventScroll);
      }
    };
  }, []);

  return (
    <div className={styles.credits_container}>
      <div ref={scrollContainerRef} className={styles.credits_scroller}>
        <div className={styles.credits_spacer}></div>

        <div className={styles.credits_content}>
          <Image
            src="/images/sis_mc_style.png"
            alt="Silverfish Infesting Space Minecraft version"
            width={600}
            height={400}
            priority
            quality={100}
          />
          {credits.map((section, index) => (
            <div key={index} className={styles.credits_section}>
              <h2 className={styles.credits_title}>{section.title}</h2>
              <h3 className={styles.credits_subtitle}>{section.subtitle}</h3>
              {section.names.map((name, nameIndex) => (
                <p key={nameIndex} className={styles.credits_name}>
                  {name}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.credits_spacer}></div>
      </div>
    </div>
  );
};

export default Credits;

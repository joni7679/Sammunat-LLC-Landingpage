import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Shield } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImg from "../assets/hero.png";

gsap.registerPlugin(SplitText);

const Hero = () => {
    const headingRef = useRef(null);
    const subHeadingRef = useRef(null);

    useEffect(() => {
        SplitText.create(headingRef.current, {
            type: "lines, words",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
                return gsap.from(self.words, {
                    duration: 1,
                    y: 100,
                    autoAlpha: 0,
                    stagger: 0.05,
                    ease: "power3.out",
                });
            },
        });

        SplitText.create(subHeadingRef.current, {
            type: "lines, words",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
                return gsap.from(self.words, {
                    duration: 1,
                    y: 80,
                    autoAlpha: 0,
                    stagger: 0.03,
                    delay: 0.2,
                    ease: "power3.out",
                });
            },
        });
    }, []);

    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1
                            ref={headingRef}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                        >

                            Crafting Project Specific Solutions with Expertise
                        </h1>
                        <p
                            ref={subHeadingRef}
                            className="text-lg text-muted-foreground max-w-lg"
                        >
                            We’re a creative company that focuses on establishing long-term partnership with customers.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-3 rounded-lg bg-blue-500 text-white cursor-pointer">
                                Start Your Project
                            </button>
                            <button className="px-6 py-3 rounded-lg border cursor-pointer">
                                Contact Sales
                            </button>
                        </div>

                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            No credit card required for consultation
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative">
                        <img
                            src={heroImg}
                            alt="Global IT Services"
                            className="w-full rounded-2xl shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

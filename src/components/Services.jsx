import { Cloud, Code, Shield, BarChart3 } from "lucide-react"
import { services } from "../data/serives"
import { useEffect, useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";
gsap.registerPlugin(SplitText, ScrollTrigger)
const Services = () => {
    const headingRef = useRef(null);
    const subHeadingRef = useRef(null);
    const sectionRef = useRef(null);
    const cardRef = useRef([])
    useEffect(() => {
        let split = SplitText.create(headingRef.current, { type: "words, chars" });
        let subsplit = SplitText.create(subHeadingRef.current, { type: "words, lines", mask: "lines" });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                end: "top 30%",
                scrub: 1,
                // markers: true,
            }
        }, "a")
        tl.from(split.chars, {
            duration: 1,
            y: 100,
            autoAlpha: 0,
            stagger: 0.05,
        }, "a");
        tl.from(subsplit.lines, {
            duration: 1,
            y: 100,
            autoAlpha: 0,
            stagger: 0.05,

        }, "a+=0.5");
  




    }, []);
    return (
        <section ref={sectionRef} id="services" className="py-20 bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 ref={headingRef} className="inline-block px-4 text-[#0e2a78] py-2 bg-primary/10 text-primary text-xl md:text-6xl font-semibold rounded-full mb-4">
                        OUR SERVICES
                    </h3>
                    <h2 ref={subHeadingRef} className="text-xl font-bold text-foreground mb-4">
                        Everything You Need to Scale
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive technology solutions designed to take your business
                        from concept to market leader.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const { title, description } = service
                        return (
                            <div
                                ref={(el) => (cardRef.current[index] = el)}
                                key={index}
                                className="bg-background rounded-xl cursor-pointer p-6  hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 shadow-md hover:bg-blue-700 hover:text-white"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-accent-foreground text-[#2563EB] hover:text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services

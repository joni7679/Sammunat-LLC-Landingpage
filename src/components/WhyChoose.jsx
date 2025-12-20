import { Users, Shield, Zap } from "lucide-react"
import splitTextAnimation from "../animation/splitTextAnimation"
import { useRef } from "react"
import { useGSAP } from "@gsap/react";

const features = [
    {
        icon: Users,
        title: "US-Based Support Team",
        description:
            "Real-time collaboration in your time zone without language barriers."
    },
    {
        icon: Shield,
        title: "Secure & Compliant",
        description: "SOC2 and HIPAA compliant development processes from day one."
    },
    {
        icon: Zap,
        title: "High Performance",
        description:
            "Optimized for speed and efficiency to keep your users engaged."
    }
]

const WhyChoose = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null)
    useGSAP(() => {
        splitTextAnimation(headingRef.current, sectionRef.current)
    }, [])
    return (
        <section ref={sectionRef} id="why-sammunat" className="py-20  bg-[#E6F0FF]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 ref={headingRef} className="text-3xl sm:text-4xl font-bold text-[#0e2a78] mb-4">
                            Why Innovative Companies Choose Sammunat
                        </h2>
                        <p className="text-[#1c3989] mb-8">
                            We combine technical excellence with a deep understanding of
                            business goals to deliver results that matter.
                        </p>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className="flex items-start gap-4 p-4 bg-card rounded-lg  hover:shadow-card transition-shadow shadow-lg bg-[#a9c8f6]"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="w-5 h-5 text-[#2563EB]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-card h-[30rem] rounded shadow-md overflow-hidden">
                            <img loading="lazy" className="w-full h-full object-cover" src="https://sammunat.com/assets/images/hero-slide-1.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose

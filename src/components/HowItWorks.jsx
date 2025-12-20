import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import splitTextAnimation from "../animation/splitTextAnimation";

const steps = [
    {
        number: 1,
        title: "Consultation",
        description:
            "We meet to understand your goals, requirements, and timeline in detail."
    },
    {
        number: 2,
        title: "Strategic Planning",
        description:
            "Our team designs a comprehensive roadmap with clear cut deliverables."
    },
    {
        number: 3,
        title: "Agile Execution",
        description:
            "We build, test, and deploy your solution in iterative sprints for maximum quality."
    }
]

const HowItWorks = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null)
    useGSAP(() => {
        splitTextAnimation(headingRef.current, sectionRef.current)
    }, [])

    return (
        <section ref={sectionRef} id="how-it-works" className="py-20 bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 ref={headingRef} className=" px-4 py-2 text-xl font-semibold rounded-full mb-4">
                        OUR PROCESS
                    </h2>
                    <h2  className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        How It Works
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A simple, transparent journey from idea to execution.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-border" />

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={step.number} className="relative text-center bg-white shadow-md p-5 rounded-2xl">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4 relative z-10">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks

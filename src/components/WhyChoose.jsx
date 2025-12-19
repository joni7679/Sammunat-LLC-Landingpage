import { Users, Shield, Zap } from "lucide-react"

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
    return (
        <section id="why-sammunat" className="py-20  bg-[#E6F0FF]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0e2a78] mb-4">
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
                        <div className="bg-card rounded-xl border border-border shadow-elevated overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted">
                                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-success" />
                            </div>
                            <div className="p-6 bg-foreground/5 min-h-[200px] flex items-center justify-center">
                                <div className="text-center text-muted-foreground">
                                    <p className="font-mono text-sm">// Your code here</p>
                                    <p className="mt-2 text-xs">Enterprise-grade solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose

import { Linkedin, Twitter, Github } from "lucide-react"
import logo from '../assets/logo-comp.png'
const footerLinks = {
    company: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" }
    ],
    resources: [
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Case Studies", href: "#" }
    ],
    legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" }
    ]
}

const Footer = () => {
    return (
        <footer className="bg-[#344155] py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-36 rounded-lg bg-primary flex items-center justify-center">
                               <img src={logo} alt="" />
                            </div>
                        </div>
                        <p className="text-white text-sm mb-4 max-w-xs">
                            Empowering businesses with secure, scalable, and innovative
                            technology solutions built for the modern world.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="text-white hover:text-background transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-background transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-background transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">COMPANY</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map(link => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white hover:text-background transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">RESOURCES</h4>
                        <ul className="space-y-2">
                            {footerLinks.resources.map(link => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white hover:text-background transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">LEGAL</h4>
                        <ul className="space-y-2">
                            {footerLinks.legal.map(link => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white hover:text-background transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t text-white pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-white">
                        © 2025 Sammunat, Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-white">
                        <a href="#" className="hover:text-background transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-background transition-colors">
                            Security
                        </a>
                        <a href="#" className="hover:text-background transition-colors">
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

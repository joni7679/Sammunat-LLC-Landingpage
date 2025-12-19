
import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo from '../assets/logo-comp.png'
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { label: "Home", },
        { label: "About", },
        { label: "Serivecs", },
        { label: "Why Sammunat", href: "#why-sammunat" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Contact", href: "#contact" }
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <div className="w-36 rounded-lg bg-primary flex items-center justify-center">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <button size="sm" className="px-6 py-3 rounded-lg bg-blue-500 text-white cursor-pointer">Get Started</button>
                    </div>

                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <button className="px-6 py-3 rounded-lg bg-blue-500 text-white cursor-pointer">
                                Get Started
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header


import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo from '../assets/logo-comp.png'
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMuenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

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
                    <nav className={`navbar md:flex items-center gap-8 ${mobileMenuOpen ? "activenavbar" : ""}`}>
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

                    <div className="flex items-center gap-1.5">
                        <button size="sm" className="px-6 py-3 rounded-lg bg-blue-500 text-white cursor-pointer">Get Started</button>

                        <button onClick={toggleMuenu} className="px-6 py-3 rounded-lg cursor-pointer">
                            {
                                !mobileMenuOpen ? <CiMenuFries className="text-2xl inline-block menu-toggle" /> : <RxCross1 />
                            }
                        </button>
                    </div>
                </div>


            </div>
        </header>
    )
}

export default Header

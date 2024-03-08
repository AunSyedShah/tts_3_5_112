import React from "react";

export default function Layout(props) {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header (Navbar) */}
            <header className="bg-gray-800 text-white">
                <div className="container mx-auto py-4">
                    {/* Navbar content goes here */}
                    <nav className="flex justify-between items-center">
                        <div>
                            <a href="#" className="text-xl font-bold">
                                Your Logo
                            </a>
                        </div>
                        <div>
                            {/* Navbar links go here */}
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">
                                Home
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">
                                About
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">
                                Contact
                            </a>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Main content area */}
            <main className="container mx-auto py-8">
                {/* Your main content goes here */}
                {props.children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    {/* Footer content goes here */}
                    <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

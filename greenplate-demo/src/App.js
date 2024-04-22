import React from 'react';

const Introduction = () => (
    <section id="introduction" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to GreenPlate!</h2>
        <p>
            Hey there! Welcome to GreenPlate, your go-to hub for sustainable food management. We're thrilled to have you here! GreenPlate is more than just an app; it's a movement towards a greener, healthier planet.
        </p>
    </section>
);

const DesignArchitecture = () => (
    <section id="design" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Design & Architecture</h2>
        <p>
            Dive into the behind-the-scenes magic of GreenPlate. We've carefully crafted our app's design and architecture to ensure a seamless and intuitive user experience. Take a peek behind the curtain!
        </p>
    </section>
);

const UserInterface = () => (
    <section id="ui" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Take a Tour of Our UI</h2>
        <p>
            Feast your eyes on the beautiful screens of GreenPlate! Our user interface is designed with love and care, making sustainable eating and shopping a breeze. Take a virtual stroll through our app!
        </p>
        {/* Include screenshots here */}
    </section>
);

const Functionality = () => (
    <section id="functionality" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">See Us in Action</h2>
        <p>
            Curious about how GreenPlate works? Watch our demo video to see our app in action! We'll walk you through all the amazing features and functionalities.
        </p>
        {/* Include video link here */}
    </section>
);

const Conclusions = () => (
    <section id="conclusions" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Journey & Learnings</h2>
        <p>
            Our journey with GreenPlate has been nothing short of incredible. Join us as we reflect on the challenges we've faced, the lessons we've learned, and the impact we're making on the world.
        </p>
    </section>
);

const Contributors = () => (
    <section id="contributors" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Meet Our Amazing Team</h2>
        <p>
            None of this would have been possible without our incredible team of contributors. Meet the talented individuals who poured their heart and soul into bringing GreenPlate to life!
        </p>
    </section>
);

const App = () => (
    <div className="bg-gray-100 font-sans antialiased">
        <header className="bg-green-500 text-white py-4">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold">GreenPlate</h1>
                <p className="text-lg">Fueling a Greener Tomorrow</p>
            </div>
        </header>
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <ul className="flex space-x-4">
                    <li><a href="#introduction" className="hover:text-gray-300">Welcome</a></li>
                    <li><a href="#design" className="hover:text-gray-300">Design & Architecture</a></li>
                    <li><a href="#ui" className="hover:text-gray-300">User Interface</a></li>
                    <li><a href="#functionality" className="hover:text-gray-300">Functionality</a></li>
                    <li><a href="#conclusions" className="hover:text-gray-300">Our Journey</a></li>
                    <li><a href="#contributors" className="hover:text-gray-300">Meet the Team</a></li>
                </ul>
            </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
            <Introduction />
            <DesignArchitecture />
            <UserInterface />
            <Functionality />
            <Conclusions />
            <Contributors />
        </main>
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4">
                <p>&copy; 2024 GreenPlate Team</p>
            </div>
        </footer>
    </div>
);

export default App;

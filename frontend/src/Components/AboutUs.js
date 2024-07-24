import React from 'react';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-center bg-blue-950 text-white py-16 lg:py-20">
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          About Us
        </h1>
      </header>
      
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-base sm:text-lg lg:text-xl font-medium text-center sm:text-left mb-6 shadow-lg p-8 border rounded-lg">
            JCS Smart is a smartly driven system that truly combines electrical, multimedia, and telecommunications technologies into a single user-friendly smart or automatic home solution. This smart home automation system makes living comfortable by offering seamless control of your garden or plants, lighting, security, humidity, air-conditioning, gas, flame, sprinklers amongst so much more. The user interface is not just user-friendly; it even helps you make sure your system is set up the way you want it to be, which justifies the whole point of living in an automatic house. The wireless platform and the jargon-free language enable you to be actively and easily involved from the moment you decide to install JCS Smart, providing the satisfaction that everything is exactly as you want. With an easy-to-understand interface and user-friendly control, JCS presents itself as one of the leading home automation products to transform your ordinary house into an automatic house.
          </p>
          <p className="text-base sm:text-lg lg:text-xl font-medium text-center sm:text-left mb-6 shadow-lg p-8 border rounded-lg">
            Now you can remotely monitor and control your home from anywhere in the world at any time! This system also connects you to the world far beyond the physical boundaries of your home. With JCS Smart, you can use your smartphone or tablet to monitor that everything is fine at home. Remote controlling your entire home is no longer a technology for the future. You can even enhance your sense of safety by remote video monitoring of your home or even monitoring your smart home lights.
          </p>
          <p className="text-base sm:text-lg lg:text-xl font-medium text-center sm:text-left mb-6 shadow-lg p-8 border rounded-lg">
            Experience a simple and comfortable life within automatic houses. Convert your home into a Smart Home, making every switch and appliance in your home a connected device. Control them through an app on your phone or by voice. It’s compatible with both Alexa and Google Assistant devices.
          </p>
          <p className="text-base sm:text-lg lg:text-xl font-medium text-center sm:text-left mb-6 shadow-lg p-8 border rounded-lg">
            Need JCS Smart? <br />
            We know your daily struggle, and here is our solution to help you stop struggling. <br />
            With a wide range of home automation products from JCS, you can:
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Convert your home into a Smart home.</li>
              <li>No extra or new wiring is required.</li>
              <li>It’s for everyone in your family – We have 3 interfaces – Voice, App, and the existing switch works too.</li>
              <li>We’ve got a 24x7 helpline to help you troubleshoot issues, if any.</li>
            </ul>
          </p>
        </div>
      </main>

      <footer className="pt-12 sm:pt-16">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUs;

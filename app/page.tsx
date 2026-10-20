import Hero from "./components/Hero";
import ScrollPinReveal from "./components/ScrollPinReveal";
import AnimatedToggle from "./components/AnimatedToggle";
import RevealCards from "./components/RevealCards";

import React from 'react';
import { Phone, Droplets, Leaf, Shield, Truck, Sparkles } from 'lucide-react';

export default function Home() {
  const phoneNumber = "+52 55 1234 5678"; // Replace with your actual delivery number
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;

  const flavors = [
    {
      name: "Citrus & Rosemary",
      description: "Steeped cold with fresh organic lemon, lime, and hand-picked rosemary sprigs.",
      color: "from-amber-700 to-yellow-600",
      notes: "Refreshing, crisp, aromatic"
    },
    {
      name: "Hibiscus & Mint",
      description: "Infused with whole dried hibiscus petals and fresh crushed garden mint.",
      color: "from-rose-800 to-amber-900",
      notes: "Tart, cooling, floral"
    },
    {
      name: "Cucumber & Lemongrass",
      description: "Crisp cucumber slices blended with subtle lemongrass notes.",
      color: "from-emerald-800 to-amber-800",
      notes: "Hydrating, clean, subtle"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto border-b border-stone-800">
        <div className="flex items-center space-x-2">
          <Droplets className="w-6 h-6 text-amber-500" />
          <span className="text-xl font-bold tracking-wider text-amber-400 uppercase">Amber & Essence</span>
        </div>
        <a 
          href={`tel:${phoneNumber}`} 
          className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold px-4 py-2 rounded-full transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>Order for Delivery</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-amber-950/80 border border-amber-800/50 px-3 py-1 rounded-full text-amber-400 text-sm">
            <Sparkles className="w-4 h-4" />
            <span>100% Natural • Zero Preservatives</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-100 leading-tight">
            Pure Cold Hydration in Amber Glass.
          </h1>
          <p className="text-lg text-stone-300">
            Naturally infused botanical water bottled cold in premium UV-protective amber glass to preserve every drop of flavor and freshness.
          </p>
          
          {/* CTA Box */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={`tel:${phoneNumber}`} 
              className="flex items-center justify-center space-x-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-xl text-lg shadow-lg shadow-amber-500/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call to Hire Delivery</span>
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 px-6 py-4 rounded-xl text-lg font-medium transition-all"
            >
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>

        {/* Visual Showcase Representing Amber Bottle */}
        <div className="mt-12 md:mt-0 md:w-5/12 flex justify-center">
          <div className="relative w-64 h-96 bg-gradient-to-b from-amber-700 via-amber-900 to-stone-950 rounded-t-full rounded-b-3xl border-4 border-amber-600/40 shadow-2xl shadow-amber-600/20 flex flex-col justify-between p-6 text-center overflow-hidden">
            <div className="w-12 h-6 bg-amber-950 border border-amber-600/50 mx-auto rounded-t-sm -mt-6"></div>
            <div className="my-auto space-y-2 border-y border-amber-500/30 py-6 bg-stone-950/60 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-widest text-amber-400 block">Botanical Brew</span>
              <h3 className="text-2xl font-serif font-bold text-amber-200">COLD INFUSION</h3>
              <p className="text-xs text-stone-300">355 ml • Glass Bottled</p>
            </div>
            <div className="text-xs text-amber-500/80 font-mono">SERVE ICE COLD</div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-stone-950/50 border-y border-stone-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-3 p-4">
            <div className="p-3 bg-amber-950/50 border border-amber-800/40 rounded-full text-amber-400">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-200">Amber Glass Protected</h3>
            <p className="text-sm text-stone-400">Bottled in dark amber glass like craft beer to shield natural ingredients from light and maintain peak cold flavor.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 p-4">
            <div className="p-3 bg-amber-950/50 border border-amber-800/40 rounded-full text-amber-400">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-200">100% Real Ingredients</h3>
            <p className="text-sm text-stone-400">No concentrates, artificial flavors, or added sugars. Just pure water, fruits, herbs, and cold infusion.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 p-4">
            <div className="p-3 bg-amber-950/50 border border-amber-800/40 rounded-full text-amber-400">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-200">Direct Cold Delivery</h3>
            <p className="text-sm text-stone-400">Call or message us to schedule cold-crate delivery directly to your home, office, or event venue.</p>
          </div>
        </div>
      </section>

      {/* Product Flavors Showcase */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-100">Our Flavors</h2>
          <p className="text-stone-400">Handcrafted in small batches and served strictly cold.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <div key={index} className="bg-stone-800/40 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-700/50 transition-all">
              <div className="space-y-4">
                <div className={`h-48 w-full bg-gradient-to-br ${flavor.color} rounded-xl border border-amber-600/20 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-stone-950/20 backdrop-blur-[1px]"></div>
                  <span className="relative z-10 text-xl font-serif font-bold text-amber-100 tracking-wide text-center px-4">
                    {flavor.name}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-amber-200">{flavor.name}</h3>
                <p className="text-sm text-stone-300 leading-relaxed">{flavor.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-800 flex justify-between items-center text-xs text-amber-400/80 font-mono">
                <span>{flavor.notes}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 py-16 px-6 border-t border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-amber-100">
            Ready for Fresh Delivery?
          </h2>
          <p className="text-stone-300 text-lg">
            We deliver chilled crates for events, offices, or personal stocking. Call us directly to inquire about pricing and delivery schedules.
          </p>
          <div className="pt-4 inline-block">
            <a 
              href={`tel:${phoneNumber}`} 
              className="flex items-center space-x-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-10 py-5 rounded-2xl text-xl shadow-xl shadow-amber-500/10 transition-all"
            >
              <Phone className="w-6 h-6" />
              <span>Call Now: {phoneNumber}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-stone-500 border-t border-stone-800">
        <p>© {new Date().getFullYear()} Amber & Essence Botanical Waters. All rights reserved.</p>
      </footer>

    </div>
  );
}

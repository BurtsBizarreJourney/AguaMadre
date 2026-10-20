import Hero from "./content/Hero";
import ScrollPinReveal from "./content/ScrollPinReveal";
import AnimatedToggle from "./content/AnimatedToggle";
import RevealCards from "./content/RevealCards";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="section" id="reveal">
        <div className="container section-head">
          <p className="eyebrow">The Source</p>
          <h2>Born 1,200m above sea level.</h2>
          <p>
            From a single protected aquifer to your glass. Scroll to trace the journey of every drop.
          </p>
        </div>
        <ScrollPinReveal
          scrollLengthVh={400}
          frames={[
            { 
              alt: "Mountain spring source", 
              caption: "Born 1,200m above sea level.",
              src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop"
            },
            { 
              alt: "Wild botanicals", 
              caption: "Infused with wild-harvested botanicals.",
              src: "https://images.unsplash.com/photo-1595150352785-0a3e38298789?q=80&w=2940&auto=format&fit=crop"
            },
            { 
              alt: "Bottling process", 
              caption: "Cold-bottled. Never pasteurized.",
              src: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=2940&auto=format&fit=crop"
            },
            { 
              alt: "Final product bottle", 
              caption: "Agua Madre. Taste the origin.",
              src: "https://images.unsplash.com/photo-1608885898957-a559228e8749?q=80&w=2940&auto=format&fit=crop"
            },
          ]}
        />
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The Variants</p>
            <h2>Find your balance.</h2>
            <p>Two textures. One uncompromising source. Choose your experience.</p>
          </div>
          <AnimatedToggle
            states={[
              {
                key: "still",
                label: "Still",
                title: "Silent & Smooth",
                description:
                  "Zero bubbles. Pure, unadulterated mineral water with a crisp, clean finish. Best served chilled alongside a meal.",
              },
              {
                key: "sparkling",
                label: "Sparkling",
                title: "Bright & Effervescent",
                description:
                  "Delicately carbonated to lift the botanicals. Refreshing, lively, and perfect for a midday reset.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The Difference</p>
            <h2>Nothing to hide.</h2>
          </div>
          <RevealCards
            cards={[
              {
                title: "Mineral Spring Water",
                description: "Sourced from a single protected aquifer. Naturally filtered through volcanic rock for over 30 years.",
              },
              {
                title: "Wild Botanicals",
                description: "Hand-foraged rosemary, elderflower, and citrus peel. No extracts, no essences.",
              },
              {
                title: "Zero Additives",
                description: "No sugar, no sweeteners, no preservatives. Just water and what grows beside it.",
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
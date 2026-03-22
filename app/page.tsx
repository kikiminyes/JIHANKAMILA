import { CustomCursor } from "@/components/custom-cursor";
import { GrainOverlay } from "@/components/grain-overlay";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <CustomCursor />
      <GrainOverlay />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

import About from "@/components/about";
import { ImageGrid } from "@/components/image-grid";
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

export default function Home() {
  return (
    <div className="">
      <StarsBackground
        starDensity={0.0015}
      />
      <ShootingStars/>
      
      <section className="flex items-center justify-center min-h-[90vh]">
        <main className="text-center">
          <h1>Welcome, Aussie Stargazers.</h1>
        </main>
      </section>

      <section>
        <About/>
      </section>
      
      <section>
        <ImageGrid/>
      </section>
    </div>
  );
}

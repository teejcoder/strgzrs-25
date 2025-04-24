import { GridDemo } from "@/components/grid-demo";
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
import { Star } from "lucide-react"

export default function Home() {
  return (
    <div className="relative">
      <StarsBackground
        starDensity={0.0015}
        allStarsTwinkle={true}
      />
      <ShootingStars/>
      
      <section className="flex items-center justify-center min-h-[90vh]">
        <main>
          <h1>Welcome, Aussie Stargazers.</h1>
        </main>
      </section>
      
      <section>
        <GridDemo/>
      </section>
    </div>
  );
}

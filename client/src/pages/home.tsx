import HeroSection from "@/components/HeroSection";
import ServerStatus from "@/components/ServerStatus";

export default function HomePage() {
  const serverIp = "euforiacraft.eu";

  return (
    <div className="min-h-screen">
      <HeroSection serverIp={serverIp} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServerStatus serverIp={serverIp} />
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-muted-foreground">Aktivních hráčů</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <p className="text-muted-foreground">Uptime</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-muted-foreground">Online podpora</p>
          </div>
        </div>
      </div>
    </div>
  );
}

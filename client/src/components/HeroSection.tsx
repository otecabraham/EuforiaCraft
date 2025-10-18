import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import heroImage from "@assets/stock_images/minecraft_game_scree_b1ce1421.jpg";

interface HeroSectionProps {
  serverIp: string;
}

export default function HeroSection({ serverIp }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/70 to-accent/30" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent tracking-tight leading-tight">
          EuforiaCraft
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-medium">
          Magický Minecraft server pro skutečné dobrodruhy
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="backdrop-blur-md bg-background/80 px-6 py-4 rounded-md border border-primary/30">
            <p className="text-sm text-muted-foreground mb-1">Server IP</p>
            <p className="text-2xl font-mono font-semibold text-primary" data-testid="text-hero-ip">
              {serverIp}
            </p>
          </div>
          
          <Button
            size="lg"
            onClick={copyToClipboard}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 font-semibold text-lg px-8"
            data-testid="button-copy-ip"
          >
            {copied ? (
              <>
                <Check className="mr-2 h-5 w-5" />
                Zkopírováno!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-5 w-5" />
                Kopírovat IP
              </>
            )}
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <div className="relative">
            <div className="w-4 h-4 rounded-full bg-chart-3" />
            <div className="absolute inset-0 w-4 h-4 rounded-full bg-chart-3 animate-pulse" />
          </div>
          <span className="text-lg font-semibold text-chart-3" data-testid="text-hero-status">
            Server je ONLINE
          </span>
        </div>
      </div>
    </div>
  );
}

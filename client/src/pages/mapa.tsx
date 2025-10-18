import { Card } from "@/components/ui/card";
import { MapPin, Compass, Mountain } from "lucide-react";
import mapImage from "@assets/stock_images/minecraft_server_wor_a7255543.jpg";

export default function MapaPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mapa Serveru
          </h1>
          <p className="text-xl text-muted-foreground">
            Prozkoumej naší rozsáhlý svět plný dobrodružství
          </p>
        </div>

        <Card className="overflow-hidden mb-12">
          <div className="relative h-[600px]">
            <img
              src={mapImage}
              alt="Mapa serveru"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-3xl font-bold mb-2">Interaktivní Mapa</h2>
              <p className="text-muted-foreground">
                Klikni pro otevření live mapy serveru
              </p>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 hover-elevate transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Spawn</h3>
            </div>
            <p className="text-muted-foreground">
              Hlavní spawn oblast s obchody, portály a tutoriály pro nové hráče.
            </p>
          </Card>

          <Card className="p-6 hover-elevate transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <Compass className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">PvP Aréna</h3>
            </div>
            <p className="text-muted-foreground">
              Epické bitvy v našich speciálních PvP arénách s různými módy.
            </p>
          </Card>

          <Card className="p-6 hover-elevate transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <Mountain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Resource World</h3>
            </div>
            <p className="text-muted-foreground">
              Pravidelně resetovaný svět pro těžbu surovin a materiálů.
            </p>
          </Card>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Důležité Lokace</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Spawn: /spawn</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>PvP Aréna: /warp pvp</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>VIP Zóna: /warp vip</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Resource World: /warp resources</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Statistiky Mapy</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center justify-between">
                <span>Velikost světa:</span>
                <span className="font-semibold text-foreground">20,000 x 20,000</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Verze:</span>
                <span className="font-semibold text-foreground">1.20.4</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Biomy:</span>
                <span className="font-semibold text-foreground">Všechny vanilla</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Custom struktury:</span>
                <span className="font-semibold text-foreground">50+</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

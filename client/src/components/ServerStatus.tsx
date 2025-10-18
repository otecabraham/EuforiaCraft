import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServerStatusProps {
  serverIp: string;
}

export default function ServerStatus({ serverIp }: ServerStatusProps) {
  const [isOnline, setIsOnline] = useState(true);
  const [playersOnline] = useState(42);
  const [maxPlayers] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div
              className={`w-3 h-3 rounded-full ${
                isOnline ? "bg-chart-3" : "bg-destructive"
              }`}
            />
            {isOnline && (
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-chart-3 animate-pulse" />
            )}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Status serveru</p>
            <p className="text-lg font-semibold" data-testid="text-server-status">
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {isOnline && (
          <div>
            <p className="text-sm text-muted-foreground">Hráči online</p>
            <p className="text-lg font-semibold" data-testid="text-players-online">
              {playersOnline}/{maxPlayers}
            </p>
          </div>
        )}

        <div>
          <p className="text-sm text-muted-foreground mb-1">Server IP</p>
          <Badge
            variant="secondary"
            className="font-mono text-sm px-3 py-1"
            data-testid="text-server-ip"
          >
            {serverIp}
          </Badge>
        </div>
      </div>
    </Card>
  );
}

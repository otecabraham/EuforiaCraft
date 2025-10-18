import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText: string;
  buttonLink: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function ContactCard({
  title,
  description,
  icon: Icon,
  buttonText,
  buttonLink,
}: ContactCardProps) {
  return (
    <Card className="hover-elevate transition-all">
      <CardHeader className="space-y-0 pb-4 gap-2">
        <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 w-fit">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 font-semibold"
          onClick={() => window.open(buttonLink, "_blank")}
          data-testid={`button-contact-${title.toLowerCase()}`}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}

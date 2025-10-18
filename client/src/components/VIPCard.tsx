import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface VIPCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function VIPCard({ title, price, description, features, popular }: VIPCardProps) {
  return (
    <Card
      className={`relative overflow-hidden hover-elevate transition-all ${
        popular ? "border-primary/50 shadow-lg shadow-primary/20" : ""
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <Badge className="m-4 bg-gradient-to-r from-primary to-accent">
            Nejoblíbenější
          </Badge>
        </div>
      )}
      
      <CardHeader className="space-y-0 pb-2 gap-2">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="pt-2">
          <span className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {price}
          </span>
          <span className="text-muted-foreground ml-2">/ měsíc</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className="h-5 w-5 text-chart-3 mt-0.5 flex-shrink-0" />
            <span className="text-foreground/90">{feature}</span>
          </div>
        ))}
      </CardContent>
      
      <CardFooter>
        <Button
          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 font-semibold"
          data-testid={`button-buy-${title.toLowerCase()}`}
        >
          Zakoupit {title}
        </Button>
      </CardFooter>
    </Card>
  );
}

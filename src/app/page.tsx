import "./globals.css";
import { Button } from "@/components/ui/button";
import SmoothView from "@/components/SmoothView";
import Inicio from "@/components/Inicio";
import Planifica from "@/components/Planifica";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
export default function Home() {
  return (
    <SmoothView>
      <Inicio />
      <Planifica />
    </SmoothView>
  );
}

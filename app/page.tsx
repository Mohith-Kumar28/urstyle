import { Button } from "@/components/ui/button";

import Benefit from "@/components/home/benefits/Benefit";
import Hero from "@/components/home/hero/Hero"
import Pairing from "@/components/home/pairing/Pairing"
export default function Home() {
  return (
    <div>
      <Hero />  
      <Pairing/>
  <Benefit/>
    </div>
  );
}

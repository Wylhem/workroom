import { ReactNode } from "react";
import VerticalHero from "@/components/organisms/Hero/hero.organisms";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-2 h-screen grid-rows-1">
      <div className={"bg-primary grid grid-row-subgrid"}>
        <div className={"place-self-center"}>
          <VerticalHero />
        </div>
      </div>
      <div className={"place-self-center"}>{children}</div>
    </div>
  );
}

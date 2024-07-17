import { Logo } from "@/components/atoms/logo";
import Image from "next/image";
function VerticalHero() {
  return (
    <div className={"flex flex-col gap-y-10"}>
      <Logo expanded={true} href={"/"} />

      <p className={"text-4xl max-w-96 text-white font-bold"}>
        Your place to work Plan. Create. Control.
      </p>
      <Image src={"illustration.svg"} alt={"hero"} width={500} height={500} />
    </div>
  );
}

export default VerticalHero;

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  expanded: boolean;
  href?: string;
}

function Logo ({expanded, href}: LogoProps) {
  return (
    <div>
      <Link href={href ?? ""} className={"flex flex-row items-center gap-x-4"} >
        <Image src={"logo.svg"} alt={"workroom"} width={40} height={40} />
        {expanded && (
          <h1 className={"text-4xl text-white font-bold"}>Workroom</h1>
        )}
      </Link>
    </div>
  )
}

export default Logo;
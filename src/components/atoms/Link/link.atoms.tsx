import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

function Links ({href, children, icon: Icon}: LinkProps) {
  return(
      <div className="flex flex-row items-center text-primary hover__border">
        <Link href={href}>
          {children}
        </Link>
        {Icon && (
            <div className="flex flex-row items-center">
              {Icon}
            </div>
        )}
      </div>
  )
}

export default Links;
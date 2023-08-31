import Link from "next/link";
import { clsx } from "clsx";
import links from "./links.json";

interface NavigationProps {
  navClassName: string;
  linkClassName: string;
}

export const Navigation = ({
  navClassName,
  linkClassName,
}: NavigationProps) => {
  return (
    <nav className={navClassName}>
      {links.map((link) => (
        <Link className={linkClassName} href={link.href} key={link.href}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;

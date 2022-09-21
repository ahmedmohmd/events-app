import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import classnames from "classnames";

interface NavLinkProps {
  children: any;
  activePath: string;
  href: string;
  styleName?: string;
}
const NavLink: FC<NavLinkProps> = ({
  children,
  activePath,
  href,
  styleName,
}) => {
  const { pathname: currentPath } = useRouter();

  return (
    <Link href={href}>
      <a
        className={classnames(
          styleName,
          activePath === currentPath ? "active" : ""
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;

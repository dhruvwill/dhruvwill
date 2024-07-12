import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";

type Props = {
  children?: React.ReactNode;
};

const QuickLinks = (props: Props) => {
  return (
    <div className="xl:px-6 py-6">
      <p className="text-xs uppercase tracking-wider font-mono text-gray-800 dark:text-neutral-300">
        Where you can start
      </p>
      <div>
        <ul className="my-3 flex flex-col gap-2">{props.children}</ul>
      </div>
    </div>
  );
};

type QLinkProps = {
  href: string;
  text: string;
  icon: React.ReactNode;
};
export const QLink = ({ href, text, icon }: QLinkProps) => {
  return (
    <li>
      <Link href={href} className="flex items-center gap-3">
        {icon}

        <span className="text-gray-600 dark:text-neutral-200 text-sm font-mono">
          {text}
        </span>
      </Link>
    </li>
  );
};

export default QuickLinks;

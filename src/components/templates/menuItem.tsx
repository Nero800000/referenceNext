import Link from "next/link";
import { ReactNode } from "react";

interface InternalLinkProps {
  href: string;
  children: ReactNode;
  // outras props, se houver
}

interface MenuItemProps {
  url?: string;
  texto: string;
  icone: any;
  className?: string;
  onClick?: (evento: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  function renderizarConteudo() {
    return (
      <div className={`flex flex-col justify-center items-center text-gray-600 h-20 p-5 w-20 ${props.className}`}>
        {props.icone}
        <span className={`text-xs font-light`}>{props.texto}</span>
      </div>
    );
  }

  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer`}>
      {props.url ? (
        <Link href={props.url} passHref>
          {renderizarConteudo()}
        </Link>
      ) : (
        renderizarConteudo()
      )}
    </li>
  );
}

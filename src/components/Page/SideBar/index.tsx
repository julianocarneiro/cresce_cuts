
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
    return (
        <>
            <div className="menu">

                <div className="menuLogo">
                    <Image
                        width={148}
                        height={80}
                        loading="lazy"
                        src="/assets/imgs/logo_fundo_colorido.png"
                        alt="Logo"
                    />
                </div>

                <Link href="/descontos" className="menuItemBullet">

                    <div className="menuItem">
                        <div className="menuTexto">
                            <div className="menuIcon">
                                <Image
                                    width={32}
                                    height={32}
                                    loading="lazy"
                                    src="/assets/imgs/icons/svg/menu_ico.svg"
                                    alt="Clientes"
                                />
                            </div>
                            Lista descontos
                        </div>

                        <div className="menuIconChevron">
                            <Image
                                width={24}
                                height={24}
                                loading="lazy"
                                src="/assets/imgs/icons/svg/chevron.svg"
                                alt="chevron"
                            />
                        </div>
                    </div>
                </Link>

                <Link href="/descontos" className="menuItemBullet">

                    <div className="menuItem">
                        <div className="menuTexto">
                            <div className="menuIcon">
                                <Image
                                    width={32}
                                    height={32}
                                    loading="lazy"
                                    src="/assets/imgs/icons/svg/menu_ico.svg"
                                    alt="Clientes"
                                />
                            </div>
                            Menu
                        </div>

                        <div className="menuIconChevron">
                            <Image
                                width={24}
                                height={24}
                                loading="lazy"
                                src="/assets/imgs/icons/svg/chevron.svg"
                                alt="chevron"
                            />
                        </div>
                    </div>
                </Link>

                <Link href="/descontos" className="menuItemBullet">

                    <div className="menuItem">
                        <div className="menuTexto">
                            <div className="menuIcon">
                                <Image
                                    width={32}
                                    height={32}
                                    loading="lazy"
                                    src="/assets/imgs/icons/svg/menu_ico.svg"
                                    alt="Clientes"
                                />
                            </div>
                            Menu
                        </div>

                        <div className="menuIconChevron">
                            <Image
                                width={24}
                                height={24}
                                loading="lazy"
                                src="/assets/imgs/icons/svg/chevron.svg"
                                alt="chevron"
                            />
                        </div>
                    </div>
                </Link>

                <Link href="/descontos" className="menuItemBullet">

                    <div className="menuItem">
                        <div className="menuTexto">
                            <div className="menuIcon">
                                <Image
                                    width={32}
                                    height={32}
                                    loading="lazy"
                                    src="/assets/imgs/icons/svg/menu_ico.svg"
                                    alt="Clientes"
                                />
                            </div>
                            Menu
                        </div>

                        <div className="menuIconChevron">
                            <Image
                                width={24}
                                height={24}
                                loading="lazy"
                                src="/assets/imgs/icons/svg/chevron.svg"
                                alt="chevron"
                            />
                        </div>
                    </div>
                </Link>


            </div>
        </>
    )
}

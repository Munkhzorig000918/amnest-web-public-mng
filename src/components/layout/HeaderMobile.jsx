import { useState, useEffect, useMemo } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderMobile() {
    const [showMenu, setShowMenu] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [menuTransitioning, setMenuTransitioning] = useState(false);

    const toggleMenu = () => {
        setMenuTransitioning(true);
        setShowMenu(!showMenu);
    }

    const toggleSubmenu = (id) => {
        if (activeMenu === id) {
            setShowSubmenu(false);
            setActiveMenu(null);
        } else {
            setShowSubmenu(true);
            setActiveMenu(id);
        }
    }

    useEffect(() => {
        // Add overflow hidden to body when menu is open
        if (showMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            setActiveMenu(null);
            setShowSubmenu(false);
            document.body.style.overflow = '';
        }
        
        // Clear transition state after animation completes
        const timer = setTimeout(() => {
            setMenuTransitioning(false);
        }, 300);
        
        return () => {
            clearTimeout(timer);
            document.body.style.overflow = '';
        };
    }, [showMenu]);
    
    return (
        <div className="relative h-[50px] w-full bg-white flex items-start justify-between z-10">
            <div className={`flex items-center gap-[10px] ${showMenu ? 'opacity-50' : ''} transition-opacity duration-300`}>
                <Image src="/images/logo.png" alt="logo" width={50} height={50} className="object-contain border border-[#E3E3E3]" />
                <Icon 
                    onClick={toggleMenu} 
                    icon="tabler:menu-deep" 
                    fontSize={35} 
                    style={{ transform: 'scaleX(-1)' }} 
                    className="text-[#33363F] cursor-pointer" 
                />
            </div>
            <div className={`h-full flex items-center gap-[10px] mr-[10px]`}>
                <button className="w-10 h-10 rounded-md transition-colors">
                    <Icon icon={"lucide:search"} fontSize={25} />  
                </button>
                <button className="w-10 h-10 bg-[#FFFF00] rounded-md flex items-center justify-center">
                    <Image src="/icons/bag.svg" alt="bag" width={25} height={25} />
                </button>
            </div>

            <div 
                className={`absolute top-0 left-0 w-[50px] h-screen bg-white z-20 flex flex-col items-center gap-4 transform transition-transform duration-300 ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <Image src="/images/logo.png" alt="logo" width={50} height={50} className="object-contain border border-[#E3E3E3] z-20" />
                <div className="flex flex-col items-center gap-4 mt-4">
                    {menuItems.map((menu) => (
                        <div key={menu.id} className="relative flex flex-col items-center gap-2 mb-4">
                            {menu.href ? (
                                <Link href={menu.href}>
                                    <button className={`w-10 h-10 ${activeMenu === menu.id ? 'bg-[#E3E3E380]' : ''} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110`}>
                                        <Image src={menu.icon} alt={menu.name || "menu item"} width={25} height={25} />
                                    </button>
                                </Link>
                            ) : (
                                <button 
                                    className={`w-10 h-10 ${activeMenu === menu.id ? 'bg-[#E3E3E380]' : ''} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110`} 
                                    onClick={() => toggleSubmenu(menu.id)}
                                >
                                    <Image src={menu.icon} alt={menu.name || "menu item"} width={25} height={25} />
                                </button>
                            )}
                            
                            {activeMenu === menu.id && menu.name && (
                                <p className="text-[#848382] font-bold pl-2" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>{menu.name}</p>
                            )}
                            
                            {activeMenu === menu.id && menu.submenu && menu.submenu.length > 0 && (
                                <div 
                                    className="absolute top-0 left-[46px] w-auto h-auto bg-white rounded-xl z-20 p-4"
                                    style={{ 
                                        opacity: showSubmenu ? 1 : 0,
                                        visibility: showSubmenu ? 'visible' : 'hidden',
                                        transition: 'opacity 300ms, visibility 300ms'
                                    }}
                                >
                                    <div className="flex items-start gap-2">
                                        {menu.submenu.map((submenu) => (
                                            <Link key={submenu.id} href={submenu.href} className="block">
                                                <button className="flex p-2 rounded-lg transition-colors text-left" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
                                                    <span className="text-black font-bold">{submenu.name}</span>
                                                </button>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {(showMenu || menuTransitioning) && (
                <div 
                    className={`fixed inset-0 bg-black z-10 transition-opacity duration-300 ${showMenu ? 'opacity-50' : 'opacity-0'}`}
                    style={{ top: "50px" }}
                    onClick={toggleMenu}
                />
            )}
        </div>
    )
}

const menuItems = [
    {
        id: 1,
        name: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠳᠡᠯᢉᠡᢉᠦᠷ",
        icon: "/icons/profile.svg",
        submenu: [
            {
                id: 1,
                name: "ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᠪᠦᠲᠦᠴᠡ",
                href: "#",
            },
            {
                id: 2,
                name: "ᠮᠡᠢ ᠲᠡᠦᢈᠡᠨ ᠲᠣᠪᠴᠢᠶ᠎ᠠ",
                href: "#",
            },
            {
                id: 3,
                name: "ᠲᠠᠶᠢᠯᠤᠨ",
                href: "#",
            },
            {
                id: 4,
                name: "ᠶᠡᠷᠦᠩᢈᠡᠢ ᠴᠢᠭᠤᠯᠭᠠᠨ",
                href: "#",
            },
            {
                id: 5,
                name: "ᠲᠦᢉᠡᠮᠡᠯ ᠠᠰᠠᠭᠤᠯᠲᠠ᠂ ᠬᠠᠷᠢᠭᠤᠯᠲᠠ",
                href: "#",
            },
            {
                id: 6,
                name: "ᠬᠣᠯᠪᠤᠭ᠎ᠠ ᠪᠠᠷᠢᠬᠤ",
                href: "#",
            }
        ]
    },
    {
        id: 2,
        name: "ᠬᠦᠳᠠᠯᠮᠤᠷᠢᠯᠡᠭᠡ",
        icon: "/icons/briefcase.svg",
        href: "#",
    },
    {
        id: 3,
        name: "ᠲᠤᠰᠠᠯᠠᠮᠵᠢ",
        icon: "/icons/support.svg",
        submenu: [
            {
                id: 1,
                name: "ᠲᠤᠰᠠᠯᠠᠮᠵᠢ ᠦᠵᠡᠭᠦᠯᠬᠦ",
                href: "#",
            },
            {
                id: 2,
                name: "ᠲᠤᠰᠠᠯᠠᠮᠵᠢ ᠶᠢᠨ ᠵᠠᠮ",
                href: "#",
            }
        ]
    },
    {
        id: 4,
        name: "ᠮᠡᠳᠡᠭᠡ",
        icon: "/icons/news.svg",
        href: "#",
    },
    {
        id: 5,
        name: "ᠡᠷᠬᠡ ᠶᠢᠨ ᠬᠠᠤᠯᠢ",
        icon: "/icons/balance.svg",
        href: "#",
    },
]
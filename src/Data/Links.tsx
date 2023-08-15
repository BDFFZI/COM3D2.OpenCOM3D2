
export type LinkKey =
    "KISS公司作品时间线"
    | "COM3D2产品一览"
    | "COM3D2版本更新说明和下载"
    | "COM3D2性格包一览"
    | "COM3D2商店（全DLC一览）"
    | "COM3D2动态"
    | "COM3D2性格包Preset文件"
    | "COM3D2SeesaaWiki"
    | "COM3D2SeesaaWiki_Mod制作"
    | "COM3D2Wiki"
    | "COM3D2萌娘百科"
    | "COM3D2社区_Discord"
    | "COM3D2社区_Reddit"
    | "GGBases"
    | "Sukebei"
    | "R18Manga"
    | "AnimeSharing"
    | "qBittorrent"
    | "COM3D2.5纯本体下载"
    | "COM3D2插件安装器"
    | "COM3D2插件安装器_下载"
    | "COM3D2Mod搜索_Mukuu"
    | "COM3D2Mod分享_3DM"
    | "COM3D2Mod分享_Motimoti3d"


const Links = new Map<LinkKey, string>();
Links.set("KISS公司作品时间线", "https://www.kisskiss.tv/kiss/product.html");
Links.set("COM3D2产品一览", "https://com3d2.jp/");
Links.set("COM3D2版本更新说明和下载", "https://com3d2.jp/update/");
Links.set("COM3D2商店（全DLC一览）", "https://com3d2-shop.s-court.me/top/tag/none/tc/1");
Links.set("COM3D2动态", "https://www.kisskiss.tv/kiss/");
Links.set("COM3D2性格包一览", "https://com3d2.jp/#prod03");
Links.set("COM3D2性格包Preset文件", "https://wwzc.lanzouj.com/ixYBP12k297c");
Links.set("COM3D2SeesaaWiki", "https://com3d2.game-info.wiki/")
Links.set("COM3D2SeesaaWiki_Mod制作", "https://seesaawiki.jp/com3d2mod_wiki/d/%bb%c8%cd%d1%a5%c4%a1%bc%a5%eb")
Links.set("COM3D2Wiki", "https://wiki.anime-sharing.com/hgames/index.php?title=Custom_Order_Maid_3D2")
Links.set("COM3D2萌娘百科", "https://mzh.moegirl.org.cn/3D%E5%AE%A2%E5%88%B6%E5%A5%B3%E4%BB%862")
Links.set("COM3D2社区_Discord", "https://discord.com/channels/297072643797155840/297072643797155840")
Links.set("COM3D2社区_Reddit", "https://www.reddit.com/r/com3d2/")
Links.set("GGBases", "https://ggbases.dlgal.com/");
Links.set("Sukebei", "https://sukebei.nyaa.si/");
Links.set("R18Manga", "https://r18manga.com/18h-game/");
Links.set("AnimeSharing", "https://www.anime-sharing.com/");
Links.set("qBittorrent", "https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases");
Links.set("COM3D2.5纯本体下载", "https://www.bilibili.com/read/cv21018824/");
Links.set("COM3D2插件安装器", "https://krypto5863.github.io/COM-Modular-Installer/");
Links.set("COM3D2插件安装器_下载", "https://krypto5863.github.io/COM-Modular-Installer/download.html");
Links.set("COM3D2Mod搜索_Mukuu", "https://mukuu.herokuapp.com/")
Links.set("COM3D2Mod分享_3DM", "https://mod.3dmgame.com/COM3D2")
Links.set("COM3D2Mod分享_Motimoti3d", "https://motimoti3d.jp/")

export default Links;
import { LinkOutlined } from "@ant-design/icons";
import Module from "./Module";
import Translator from "./Translator";
import LinksUI from "./LinksUI";
import NewGame from "./NewGame";

const Menu = {
    key: '/Discover',
    label: '发现',
    icon: <LinkOutlined />,
    children: [
        LinksUI,
        NewGame,
        Translator,
        Module,
    ]
}

export default Menu;
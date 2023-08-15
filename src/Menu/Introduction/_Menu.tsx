import { ImportOutlined } from "@ant-design/icons";
import Game from "./Game"
import Plugin from "./Plugin"
import Module from "./Module"
import ReadMe from "./ReadMe"
import FAQ from "./FAQ"
import BUG from "./BUG"

const Menu = {
    key: '/Introduction',
    label: '入门',
    icon: <ImportOutlined />,
    children: [
        ReadMe,
        Game,
        Plugin,
        Module,
        FAQ,
        BUG
    ]
}
export default Menu;
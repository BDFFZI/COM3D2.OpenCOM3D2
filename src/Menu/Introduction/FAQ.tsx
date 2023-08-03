import { Alert, Button, Divider, List, Typography } from "antd";
import { ButtonLink } from "../../Data/Components";
import Links from "../../Data/Links";
import { ReactNode } from "react";

const faq: { que: string, ans: ReactNode }[] = [
    {
        que: "日程中的解锁条件“阅读特定的剧本”是什么意思？",
        ans: "特定的剧本是指游戏的活动(事件)功能中的剧情，你必须阅读了其中的一些事件才可以解锁“阅读特定的剧本”这一条件，不同的日程对要求的事件也不同。"
    },
    {
        que: "装扮显示异常，装上去表面成格子状？",
        ans: <ul>
            <li>一种情况是该装扮用到了NPRShader插件，安装CMI时这个插件需要手动勾选。</li>
            <li>另外部分装扮还有额外的颜色等选项，这些也要一并选好。</li>
            <li>最糟糕的是这Mod可能缺文件，那只能凉拌了。</li>
        </ul>
    },
]

const MenuItem = {
    label: <Typography.Text type="danger">常见问题</Typography.Text>,
    key: "/Introduction/FAQ",
    page: () => <div>
        <Alert
            showIcon
            type="warning"
            message="有任何问题都请优先查看WIKI，大部分问题都可以在WIKI上查到答案！"
            description={<ButtonLink
                style={{ maxWidth: "500px" }}
                href={Links.get("COM3D2SeesaaWiki")}>
                COM3D2 WIKI（国内可用，日文，请用浏览器翻译功能查看）
            </ButtonLink>}
        />
        <br></br>
        <Alert
            showIcon
            type="warning"
            message="有任何插件问题或功能需求，都请优先查看CMI文档，你想要的基本都在里面！"
            description={
                <Button
                    ghost
                    type="primary"
                    style={{ maxWidth: "500px", pointerEvents: "none" }}>
                    文档在游戏目录“CMI Documentation”文件夹（有中文版但略旧）
                </Button>}
        />
        <Divider></Divider>
        <List
            dataSource={faq}
            renderItem={(item, index) =>
                <List.Item key={index}>
                    <List.Item.Meta
                        title={item.que}
                        description={item.ans}
                    />
                </List.Item>
            }
        />
    </div >
}
export default MenuItem;
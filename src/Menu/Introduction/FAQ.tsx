import { Alert, Button, Divider, Typography } from "antd";
import { ButtonLink } from "../../Data/Components";
import Links from "../../Data/Links";

const MenuItem = {
    label: <Typography.Text type="danger">常见问题</Typography.Text>,
    key: "/Introduction/FAQ",
    page: () => <div>
        <Divider children="自助答疑"></Divider>
        <Alert
            showIcon
            type="success"
            message="有任何游戏内容问题都请优先查看WIKI，大部分问题都可以在WIKI上查到答案！"
            description={<ButtonLink
                style={{ maxWidth: "500px" }}
                href={Links.get("COM3D2SeesaaWiki")}>
                COM3D2 WIKI（国内可用，日文，请用浏览器翻译功能查看）
            </ButtonLink>}
        />
        <br></br>
        <Alert
            showIcon
            type="success"
            message="有任何插件问题或功能需求，都请优先查看CMI文档，你想要的基本都在里面！"
            description={
                <Button
                    ghost
                    type="primary"
                    style={{ maxWidth: "500px", pointerEvents: "none" }}>
                    文档在游戏目录“CMI Documentation”文件夹（有中文版但略旧）
                </Button>}
        />
        <Divider children="人工服务"></Divider>
        <Alert
            showIcon
            type="warning"
            message={
                <div>
                    这是解决问题的终极方案
                </div>
            }
            description={

                <div>
                    <Typography.Paragraph>
                        我只是个普通人，不是这个游戏的专属客服，不可能永远一对一的解答所有人的问题，而且私聊的方式无法给后人留下任何经验，而我也终有要退坑的一天。
                        <div></div>
                        为了便于交流，也是为了给后人留下东西，请使用这个网站专门的Issue功能向我提问。凡是发在Issue的问题，我都将必定且认真的回答，而使用其他提问途径则可能被我忽略。
                    </Typography.Paragraph>

                    <ButtonLink
                        style={{ maxWidth: "500px" }}
                        href={"https://gitee.com/bdffzi/Page.OpenCOM3D2/issues"}>
                        通过Issue查看或发布你的任何问题
                    </ButtonLink>
                </div>
            }
        />
    </div>
}

export default MenuItem;

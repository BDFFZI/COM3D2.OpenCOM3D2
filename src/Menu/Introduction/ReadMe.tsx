import { Alert, Button, Typography } from "antd";
import { ButtonLink } from "../../Data/Components";
import Links from "../../Data/Links";

const MenuItem = {
    label: <Typography.Text type="success">新人必读</Typography.Text>,
    key: "/Introduction/ReadMe",
    page: () => <div>
        <Typography.Title>入门前的说明</Typography.Title>
        <Typography.Paragraph>
            本站具有强烈的个人风格，站长讨厌弯弯绕绕，所以对着直链和源头有着强烈的追求。
            <blockquote>
                为什么下东西前要加群关注？为什么非得用百度云盘？为什么一个Mod不能单独拆开来下？东西都是转载的为什么不给出处？
            </blockquote>
            我受不了这些，所以建立了本站，我希望我能最大程度的减少信息差并提供最大的自由度， 对于和我一样喜欢捣鼓的人来说，我想这是相当棒的。
            <br />
            但经过一段时间的运营后我发现，这些对我来说是天堂般的政策，对很多人来说却是一场灾难，大部分人根本不需要也不会考虑这些，提供额外的选项反而会使人们踌躇不定。
        </Typography.Paragraph>
        <Alert showIcon type="warning"
            message="所以如果你是个纯小白，请严格按照下方视频的流程安装。"
            description={<div>
                这里只是一个导航站，我没有精力去一一解答所有问题，大部分都需要靠你自己，所以除非你知道自己在干什么，不然请按下方视频操作。
                <br></br>
                如果按照视频操作但依旧遇上问题，请查看同栏目的<Typography.Text type="danger">常见问题</Typography.Text>板块，并按照指引查看或发布Issue。
            </div>}
        />
        <Typography.Title>开始入门</Typography.Title>
        <Typography.Paragraph>
            <div>
                本站是一个完整的网站，不需要任何多余的操作比如依赖特定软件，加群等，你完全可以仅借助本站就满足对游戏的基本需求。
                <br />
                那接下来，就请按顺序阅读入门专栏中的余下几篇文章，这样你就能踏出第一步，完成COM3D2游戏的基本入门操作了。
            </div>
        </Typography.Paragraph>
        <Alert showIcon type="success"
            message={
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    我已制作COM3D2的入门教程，辅助你阅读余下的文章，这样即使是小白也不用太担心了。
                    <Button type="primary" href="https://www.bilibili.com/video/BV1yp4y1V7Ej" target="_Black" >观看视频</Button>
                </div>
            }
        />
    </div>

}
export default MenuItem;
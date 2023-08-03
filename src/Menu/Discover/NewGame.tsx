import { Alert, Card, Space, Typography } from "antd";
import { ButtonLink } from "../../Data/Components";
import Links from "../../Data/Links";

const MenuItem = {
    label: "最新游戏",
    key: '/Discover/NewGame',
    page: () => <div>
        <Typography.Title level={2}>如何获取最新版本的游戏?</Typography.Title>
        <Space direction="vertical">
            <Alert
                showIcon
                message="你知道吗？官方的更新程序是可以免费的下载的哦，所以你需要升级版本时其实完全不需要重下本体。"
            />
            <Card
                style={{ width: 700 }}
                title="官方更新包"
                extra={<ButtonLink href={Links.get("COM3D2版本更新说明和下载")} >下载</ButtonLink>}>
                注意看好游戏版本别下载错了，下载完后自带安装程序，按步骤来就行。
            </Card>
        </Space>
    </div>
}
export default MenuItem;
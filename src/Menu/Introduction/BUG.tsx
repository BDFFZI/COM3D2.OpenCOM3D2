import { Alert, Divider, List, Typography } from "antd";
import { ReactNode } from "react";

const bug: { title: string, content: ReactNode }[] = [
    {
        title: "进入剧情后，游戏始终黑屏或无反应？",
        content: "一般都是因开挂导致的，要知道不是每个剧情对所有角色都可用，所以即使你开挂强行解锁了一些剧情，所选角色也不一定能执行。"
    },
    {
        title: "夜珈模式时看不见小弟弟？",
        content: "目前出现该问题的一个统一特征是都使用了非推荐游戏版本（似乎都是COM3D2.5），并且都是开挂后出现的问题，更换存档可以解决。"
    },
    {
        title: "商店里看不到购买选项？",
        content: "这是图片汉化的问题，由于图集是自动生成的，所以不同游戏版本的图集很容易有差异，可以通过移除图片汉化来解决，具体见相关汉化插件内的说明。",
    },
    {
        title: "摄影模式下“场景选择”时包含了人物就会导致游戏黑屏？",
        content: "已确定是汉化文件的问题，只要移除相关汉化文件就可解决。"
    },
]

const MenuItem = {
    label: <Typography.Text type="danger">已知漏洞</Typography.Text>,
    key: "/Introduction/BUG",
    page: () => <Typography.Text>
        <Alert
            showIcon
            type="warning"
            message="漏洞是用户在正常操作下引发的意料之外的问题，这类问题往往难以解决，且遇到就要命。"
            description="目前大部分漏洞都具有同一特征，插件和游戏版本不兼容，进行了开挂游戏等，所以要尽可能避免这些情况并注意备份防护。"
        />
        <Divider></Divider>
        <List
            dataSource={bug}
            renderItem={(item, index) =>
                <List.Item key={index}>
                    <List.Item.Meta
                        title={item.title}
                        description={item.content}
                    />
                </List.Item>
            }
        />
    </Typography.Text>
}
export default MenuItem;
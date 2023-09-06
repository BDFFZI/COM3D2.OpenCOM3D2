import { Alert, Divider, List, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
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
    {
        title: "插件全部失效，小黑窗报错 System.Exception: INTERNAL configuration error: failed to get configuration 'system.diagnostics'",
        content:
            <div>
                有不少人会遇到了该问题，原因不明。该现象会导致BepInEx插件加载器（CMI）无法使用，如果遇到这种情况那你可以研究另外一款叫Sybaris的插件加载器。
                <br></br>我在汉化插件分栏预留了一份基于Sybaris的汉化解码整合包，可以借此满足基本的游戏需求，其他插件就需要自行安装了。提示：CMI只是一个整合包，里面大部分插件Sybaris也是可以使用的。
            </div>
    },
    {
        title: "弹窗报错 Oops! The game crashed|ERROR: SymGetSymFromAddr64, GetLastError: '试图访问无效的地址。",
        content: <div>
            游戏崩溃的原因有很多，这里是一个因为内存溢出导致的崩溃，解决方法可见<a href="https://tieba.baidu.com/p/5227459178?red_tag=0523197425#109472525103l" target="_blank" rel="noreferrer" >原帖</a>。
            <br></br>总结起来就是要去注册表修改内存分配大小，如将“计算机\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\SubSystems”中“Windows”里的SharedSection参数值改为1024,20480,1024。
            <br></br>根据实验效果来看，似乎主要和第三个数字有关，如果装了更多的插件后崩溃，可以尝试再提高该值。
        </div>
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
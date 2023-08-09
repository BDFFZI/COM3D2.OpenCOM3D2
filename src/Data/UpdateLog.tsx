import { ReactNode } from "react"

const Log: { time: string, content: ReactNode }[] = [
    {
        time: "2023.8.9", content: <ul>
            <li>感谢燃烛大佬的捐赠，已验证Mod增加了10个。</li>
            <li>9，10月份要备考，所以Mod制作教程可能会出的很迟。</li>
        </ul>
    },
    {
        time: "2023.8.7", content: <ul>
            <li>成功用小号在b站重新补档，故视频换源。</li>
            <li>后续开始制作Mod教程，网站较长一段时间不会更新。</li>
        </ul>
    },
    {
        time: "2023.8.2", content: "使用OneDrive进行了视频补档，支持在线观看。"
    },
    {
        time: "2023.7.30", content: "本站的第一个教学视频，一晚上播放量破万，后遭恶意举报限流，存活时间不足一天，我记下了，后续研究解决方案，和倒狗一起互相进步。"
    },
    {
        time: "2023.7.29", content: "紧急修了些Bug"
    },
    {
        time: "2023.7.28", content: <ul>
            <li>取消了v3.5汉化的开发，将其功能拆分到v3和v4中实现。</li>
            <li>网站内容优化。</li>
        </ul>

    },
    {
        time: "2023.7.27", content: <div>
            <ul>
                <li>发现栏增加了最新游戏和相关链接栏目。</li>
                <li>取消了吃力不讨好的精装房计划（社区交互功能）。</li>
            </ul>
        </div>
    },
    {
        time: "2023.7.26", content: <div>
            <ul>
                <li>对入门分栏的内容进行了优化和补充。</li>
                <li>发现栏增加了汉化插件项目。</li>
            </ul>
        </div>
    },
    { time: "2023.7.24", content: "毛坯房变简装房啦！" },
]
export default Log
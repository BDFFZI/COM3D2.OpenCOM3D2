import { Button } from "antd";
import { CSSProperties, ReactNode } from "react";
import { ButtonType } from "antd/es/button";

export function ButtonLink({ ghost = false, disabled = false, type = "primary", href = "", children = "", block = false, style = {} }: {
    ghost?: boolean,
    disabled?: boolean,
    type?: ButtonType,
    href?: string,
    children?: ReactNode,
    block?: boolean,
    style?: CSSProperties
}) {
    return <Button
        ghost={ghost}
        disabled={disabled}
        type={type}
        href={href}
        target="_blank"
        style={style}
        block >
        {
            type === "primary" ? <div style={{ color: "white" }}>{children}</div> : children
        }
    </Button>
}


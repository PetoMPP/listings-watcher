import logo from "/logo.svg?raw";
import Icon from "./Icon";

export default function Logo(props: { className?: string }) {
    const className = props.className ?? "h-10 w-10";
    return (
        <Icon className={className} svg={logo} />
    );
}
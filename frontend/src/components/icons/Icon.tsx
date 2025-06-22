export default function Icon(props: { svg: string, className?: string }) {
    const className = props.className ?? "h-10 w-10";
    return (
        <div className={className} dangerouslySetInnerHTML={{ __html: props.svg }} />
    );
}
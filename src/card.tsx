type LinkCard = SharedCardProps & {
  kind: "Link";
  href?: string;
};

type ButtonCard = SharedCardProps & {
  kind: "Button";
  onClick?: () => void;
};

type SharedCardProps = {
  kind: "Link" | "Button";
  className?: string;
  children?: React.ReactNode;
};

export function Card(props: LinkCard | ButtonCard) {
  return (
    <div className={props.className}>
      {props.kind === "Link" && <a href={props.href}>Anchor Link</a>}
      {props.kind === "Button" && (
        <button type="button" onClick={props.onClick}>
          Button Click
        </button>
      )}
    </div>
  );
}

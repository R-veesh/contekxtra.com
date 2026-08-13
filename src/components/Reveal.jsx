import { useReveal } from "@/hooks/useReveal";

export default function Reveal({
  as: Tag = "div",
  variant,
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const [ref, visible] = useReveal();
  const classes = [
    "reveal",
    variant ? `reveal--${variant}` : "",
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

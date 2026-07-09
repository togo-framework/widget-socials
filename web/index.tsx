import { registerWidget, type WidgetContext } from "@togo-framework/widget";

interface Link { label: string; url: string }
export function Socials({ settings }: WidgetContext) {
  const links = (settings.links as Link[]) ?? [
    { label: "GitHub", url: "https://github.com/fadymondy" },
    { label: "X", url: "https://x.com/" },
    { label: "LinkedIn", url: "https://linkedin.com/" },
  ];
  return (
    <div className="wx-socials" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {links.map((l) => <a key={l.label} href={l.url} style={{ padding: "4px 10px", borderRadius: 8, background: "rgba(127,127,127,.12)" }}>{l.label}</a>)}
    </div>
  );
}
registerWidget({ key: "socials", title: "Follow me", defaultZone: "sidebar", Comp: Socials });

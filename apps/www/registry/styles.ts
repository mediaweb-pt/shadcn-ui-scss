export const styles = [
  {
    name: "default",
    label: "Default",
  },
  {
    name: "new-york",
    label: "New York",
  },
  {
    name: "scss",
    label: "SCSS",
  },
] as const

export type Style = (typeof styles)[number]

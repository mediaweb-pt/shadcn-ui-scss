export const styles = [
  {
    name: "scss",
    label: "SCSS",
  },
] as const

export type Style = (typeof styles)[number]

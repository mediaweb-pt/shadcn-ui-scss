"use client"

import * as React from "react"
import { Button, buttonVariants } from "@/shadcn-scss/components/Button"
import {
  CheckIcon,
  CopyIcon,
  InfoCircledIcon,
  MoonIcon,
  ResetIcon,
  SunIcon,
} from "@radix-ui/react-icons"
import template from "lodash.template"
import { Paintbrush } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"
import { copyToClipboardWithMeta } from "@/components/copy-button"
import { ThemeWrapper } from "@/components/theme-wrapper"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/scss/ui/dialog"
import { Drawer, DrawerContent, DrawerTrigger } from "@/registry/scss/ui/drawer"
import { Label } from "@/registry/scss/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/scss/ui/popover"
import { Skeleton } from "@/registry/scss/ui/skeleton"
import { Theme, themes } from "@/registry/themes"

import "@/styles/mdx.css"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/scss/ui/tooltip"

export function ThemeCustomizer() {
  const [config, setConfig] = useConfig()
  const { resolvedTheme: mode } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex align-items-center space-x-s">
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            className={
              buttonVariants({ variant: "outline" }) + cn(" md_hidden")
            }
          >
            <Paintbrush className="margin-right-s height-base width-base" />
            Customize
          </Button>
        </DrawerTrigger>
        <DrawerContent className="padding-l padding-top-none">
          <Customizer />
        </DrawerContent>
      </Drawer>
      <div className="hidden md_flex">
        <div className="margin-right-s hidden align-items-center space-x-xs lg_flex">
          {mounted ? (
            <>
              {["zinc", "rose", "blue", "green", "orange"].map((color) => {
                const theme = themes.find((theme) => theme.name === color)
                const isActive = config.theme === color

                if (!theme) {
                  return null
                }

                return (
                  <Tooltip key={theme.name}>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() =>
                          setConfig({
                            ...config,
                            theme: theme.name,
                          })
                        }
                        className={cn(
                          "flex height-l width-l items-center justify-center border-radius-circle font-size-s",
                          isActive
                            ? "border-size-m border-[--primary]"
                            : "border-transparent"
                        )}
                        style={
                          {
                            "--theme-primary": `hsl(${
                              theme?.activeColor[
                                mode === "dark" ? "dark" : "light"
                              ]
                            })`,
                          } as React.CSSProperties
                        }
                      >
                        <span
                          className={cn(
                            "flex height-m width-m items-center justify-center border-radius-circle bg-[--theme-primary]"
                          )}
                        >
                          {isActive && (
                            <CheckIcon className="height-base width-base text-neutral-0" />
                          )}
                        </span>
                        <span className="sr-only">{theme.label}</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      align="center"
                      className="border-radius-soft"
                    >
                      {theme.label}
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </>
          ) : (
            <div className="margin-right-xs flex items-center gap-base">
              <Skeleton className="height-m width-m rounded-full" />
              <Skeleton className="height-m width-m rounded-full" />
              <Skeleton className="height-m width-m rounded-full" />
              <Skeleton className="height-m width-m rounded-full" />
              <Skeleton className="height-m width-m rounded-full" />
            </div>
          )}
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button className={buttonVariants({ variant: "outline" }) + " "}>
              <Paintbrush className="margin-right-s height-base width-base" />
              Customize
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="center"
            className="costumizer-popover border-radius-soft bg-background padding-m"
          >
            <Customizer />
          </PopoverContent>
        </Popover>
      </div>
      <CopyCodeButton />
    </div>
  )
}

function Customizer() {
  const [mounted, setMounted] = React.useState(false)
  const { setTheme: setMode, resolvedTheme: mode } = useTheme()
  const [config, setConfig] = useConfig()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeWrapper
      defaultTheme="blue"
      className="flex flex-col space-y-base"
    >
      <div className="flex items-start margin-top-none">
        <div className="space-y-xs padding-right-s">
          <div className="semi-bold">
            Customize
          </div>
          <div className="font-size-s text-muted-foreground">
            Pick a color for your components.
          </div>
        </div>
        <Button
          className={
            buttonVariants({ variant: "ghost", size: "icon" }) +
            " margin-left-auto border-radius-soft"
          }
          onClick={() => {
            setConfig({
              ...config,
              theme: "zinc",
              radius: 0.5,
            })
          }}
        >
          <ResetIcon />
          <span className="sr-only">Reset</span>
        </Button>
      </div>
      <div className="flex flex-1 flex-col space-y-base">
        <div className="space-y-xs">
          <Label className="font-size-s">Color</Label>
          <div className="grid grid-cols-3 gap-s">
            {themes.map((theme) => {
              const isActive = config.theme === theme.name

              return mounted ? (
                <Button
                  className={
                    buttonVariants({ variant: "outline", size: "sm" }) +
                    cn("justify-start", isActive && "border-size-m")
                  }
                  key={theme.name}
                  onClick={() => {
                    setConfig({
                      ...config,
                      theme: theme.name,
                    })
                  }}
                  style={
                    {
                      "--theme-primary": `hsl(${
                        theme?.activeColor[mode === "dark" ? "dark" : "light"]
                      })`,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className={cn(
                      "flex height-base width-base flex-shrink-0 items-center justify-center border-radius-circle bg-[--theme-primary]"
                    )}
                  >
                    {isActive && <CheckIcon className="height-base width-base text-neutral-0" />}
                  </span>
                  {theme.label}
                </Button>
              ) : (
                <Skeleton className="height-l w-100" key={theme.name} />
              )
            })}
          </div>
        </div>
        <div className="space-y-xs">
          <Label className="font-size-s">Radius</Label>
          <div className="grid grid-cols-5 gap-s">
            {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
              return (
                <Button
                  className={
                    buttonVariants({ variant: "outline", size: "sm" }) +
                    cn(
                      config.radius === parseFloat(value) &&
                        "border-size-m"
                    )
                  }
                  key={value}
                  onClick={() => {
                    setConfig({
                      ...config,
                      radius: parseFloat(value),
                    })
                  }}
                >
                  {value}
                </Button>
              )
            })}
          </div>
        </div>
        <div className="space-y-xs">
          <Label className="font-size-s">Mode</Label>
          <div className="grid grid-cols-3 gap-s">
            {mounted ? (
              <>
                <Button
                  className={
                    buttonVariants({ variant: "outline", size: "sm" }) +
                    cn(mode === "light" && "border-size-m")
                  }
                  onClick={() => setMode("light")}
                >
                  <SunIcon className="margin-right-xs" />
                  Light
                </Button>
                <Button
                  className={
                    buttonVariants({ variant: "outline", size: "sm" }) +
                    cn(mode === "dark" && "border-size-m")
                  }
                  onClick={() => setMode("dark")}
                >
                  <MoonIcon className="margin-right-xs" />
                  Dark
                </Button>
              </>
            ) : (
              <>
                <Skeleton className="height-l width-100" />
                <Skeleton className="height-l width-100" />
              </>
            )}
          </div>
        </div>
      </div>
    </ThemeWrapper>
  )
}

function CopyCodeButton() {
  const [config] = useConfig()
  const activeTheme = themes.find((theme) => theme.name === config.theme)
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <>
      {activeTheme && (
        <Button
          onClick={() => {
            copyToClipboardWithMeta(getThemeCode(activeTheme, config.radius), {
              name: "copy_theme_code",
              properties: {
                theme: activeTheme.name,
                radius: config.radius,
              },
            })
            setHasCopied(true)
          }}
          className="md_hidden"
        >
          {hasCopied ? (
            <CheckIcon className="margin-right-s height-base width-base" />
          ) : (
            <CopyIcon className="margin-right-s height-base width-base" />
          )}
          Copy
        </Button>
      )}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="hidden md_flex">Copy code</Button>
        </DialogTrigger>
        <DialogContent className="customizer-popover__copy-dialog outline-none">
          <DialogHeader>
            <DialogTitle>Theme</DialogTitle>
            <DialogDescription>
              Copy and paste the following code into your CSS file.
            </DialogDescription>
          </DialogHeader>
          <ThemeWrapper defaultTheme="zinc" className="relative">
            {activeTheme && (
              <Button
                className={
                  buttonVariants({ variant: "outline", size: "sm" }) +
                  " absolute copy-code-btn bg-muted text-muted-foreground"
                }
                onClick={() => {
                  copyToClipboardWithMeta(
                    getThemeCode(activeTheme, config.radius),
                    {
                      name: "copy_theme_code",
                      properties: {
                        theme: activeTheme.name,
                        radius: config.radius,
                      },
                    }
                  )
                  setHasCopied(true)
                }}
              >
                {hasCopied ? (
                  <CheckIcon className="margin-right-s height-base width-base" />
                ) : (
                  <CopyIcon className="margin-right-s height-base width-base" />
                )}
                Copy
              </Button>
            )}
            <CustomizerCode />
          </ThemeWrapper>
        </DialogContent>
      </Dialog>
    </>
  )
}

function CustomizerCode() {
  const [config] = useConfig()
  const activeTheme = themes.find((theme) => theme.name === config.theme)

  return (
    <ThemeWrapper defaultTheme="zinc" className="relative space-y-base">
      <div data-rehype-pretty-code-fragment="">
        <pre className="customizer-popover__code-snippet">
          <code className="relative border-radius-soft padding-xs font-size-s">
            <span className="line">@layer base &#123;</span>
            <span className="line">&nbsp;&nbsp;:root &#123;</span>
            <span className="line">
              &nbsp;&nbsp;&nbsp;&nbsp;--background:{" "}
              {activeTheme?.cssVars.light["background"]};
            </span>
            <span className="line">
              &nbsp;&nbsp;&nbsp;&nbsp;--foreground:{" "}
              {activeTheme?.cssVars.light["foreground"]};
            </span>
            {[
              "card",
              "popover",
              "primary",
              "secondary",
              "muted",
              "accent",
              "destructive",
            ].map((prefix) => (
              <>
                <span className="line">
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                  {
                    activeTheme?.cssVars.light[
                      prefix as keyof typeof activeTheme.cssVars.light
                    ]
                  }
                  ;
                </span>
                <span className="line">
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                  {
                    activeTheme?.cssVars.light[
                      `${prefix}-foreground` as keyof typeof activeTheme.cssVars.light
                    ]
                  }
                  ;
                </span>
              </>
            ))}
            <span className="line">
              &nbsp;&nbsp;&nbsp;&nbsp;--border:{" "}
              {activeTheme?.cssVars.light["border"]};
            </span>
            <span className="line">
              &nbsp;&nbsp;&nbsp;&nbsp;--input:{" "}
              {activeTheme?.cssVars.light["input"]};
            </span>
            <span className="line">
              &nbsp;&nbsp;&nbsp;&nbsp;--ring:{" "}
              {activeTheme?.cssVars.light["ring"]};
            </span>
            <span className="line">
              &nbsp;&nbsp;&nbsp;&nbsp;--radius: {config.radius}rem;
            </span>
            <span className="line">&nbsp;&nbsp;&#125;</span>
            <span className="line">&nbsp;</span>
            <span className="line">&nbsp;&nbsp;.dark &#123;</span>
            <span className="line">
              &nbsp;&nbsp;&nbsp;&nbsp;--background:{" "}
              {activeTheme?.cssVars.dark["background"]};
            </span>
            <span className="line">
              &nbsp;&nbsp;&nbsp;&nbsp;--foreground:{" "}
              {activeTheme?.cssVars.dark["foreground"]};
            </span>
            {[
              "card",
              "popover",
              "primary",
              "secondary",
              "muted",
              "accent",
              "destructive",
            ].map((prefix) => (
              <>
                <span className="line">
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                  {
                    activeTheme?.cssVars.dark[
                      prefix as keyof typeof activeTheme.cssVars.dark
                    ]
                  }
                  ;
                </span>
                <span className="line">
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                  {
                    activeTheme?.cssVars.dark[
                      `${prefix}-foreground` as keyof typeof activeTheme.cssVars.dark
                    ]
                  }
                  ;
                </span>
              </>
            ))}
            <span className="line">
              &nbsp;&nbsp;&nbsp;&nbsp;--border:{" "}
              {activeTheme?.cssVars.dark["border"]};
            </span>
            <span className="line">
              &nbsp;&nbsp;&nbsp;&nbsp;--input:{" "}
              {activeTheme?.cssVars.dark["input"]};
            </span>
            <span className="line">
              &nbsp;&nbsp;&nbsp;&nbsp;--ring:{" "}
              {activeTheme?.cssVars.dark["ring"]};
            </span>
            <span className="line">&nbsp;&nbsp;&#125;</span>
            <span className="line">&#125;</span>
          </code>
        </pre>
      </div>
    </ThemeWrapper>
  )
}

function getThemeCode(theme: Theme, radius: number) {
  if (!theme) {
    return ""
  }

  return template(BASE_STYLES_WITH_VARIABLES)({
    colors: theme.cssVars,
    radius,
  })
}

const BASE_STYLES_WITH_VARIABLES = `
@layer base {
  :root {
    --background: <%- colors.light["background"] %>;
    --foreground: <%- colors.light["foreground"] %>;
    --card: <%- colors.light["card"] %>;
    --card-foreground: <%- colors.light["card-foreground"] %>;
    --popover: <%- colors.light["popover"] %>;
    --popover-foreground: <%- colors.light["popover-foreground"] %>;
    --primary: <%- colors.light["primary"] %>;
    --primary-foreground: <%- colors.light["primary-foreground"] %>;
    --secondary: <%- colors.light["secondary"] %>;
    --secondary-foreground: <%- colors.light["secondary-foreground"] %>;
    --muted: <%- colors.light["muted"] %>;
    --muted-foreground: <%- colors.light["muted-foreground"] %>;
    --accent: <%- colors.light["accent"] %>;
    --accent-foreground: <%- colors.light["accent-foreground"] %>;
    --destructive: <%- colors.light["destructive"] %>;
    --destructive-foreground: <%- colors.light["destructive-foreground"] %>;
    --border: <%- colors.light["border"] %>;
    --input: <%- colors.light["input"] %>;
    --ring: <%- colors.light["ring"] %>;
    --radius: <%- radius %>rem;
  }

  .dark {
    --background: <%- colors.dark["background"] %>;
    --foreground: <%- colors.dark["foreground"] %>;
    --card: <%- colors.dark["card"] %>;
    --card-foreground: <%- colors.dark["card-foreground"] %>;
    --popover: <%- colors.dark["popover"] %>;
    --popover-foreground: <%- colors.dark["popover-foreground"] %>;
    --primary: <%- colors.dark["primary"] %>;
    --primary-foreground: <%- colors.dark["primary-foreground"] %>;
    --secondary: <%- colors.dark["secondary"] %>;
    --secondary-foreground: <%- colors.dark["secondary-foreground"] %>;
    --muted: <%- colors.dark["muted"] %>;
    --muted-foreground: <%- colors.dark["muted-foreground"] %>;
    --accent: <%- colors.dark["accent"] %>;
    --accent-foreground: <%- colors.dark["accent-foreground"] %>;
    --destructive: <%- colors.dark["destructive"] %>;
    --destructive-foreground: <%- colors.dark["destructive-foreground"] %>;
    --border: <%- colors.dark["border"] %>;
    --input: <%- colors.dark["input"] %>;
    --ring: <%- colors.dark["ring"] %>;
  }
}
`

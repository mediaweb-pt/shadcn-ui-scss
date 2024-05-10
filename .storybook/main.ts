import { dirname, join } from "path"
import type { StorybookConfig } from "@storybook/nextjs"

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")))
}
const config: StorybookConfig = {
  stories: ["../lib/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  webpackFinal: async (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.output.publicPath = "/storybook/"
    }
    return config
  },
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
}
export default config

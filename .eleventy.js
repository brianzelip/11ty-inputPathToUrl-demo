import { InputPathToUrlTransformPlugin } from '@11ty/eleventy';

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  return {};
}

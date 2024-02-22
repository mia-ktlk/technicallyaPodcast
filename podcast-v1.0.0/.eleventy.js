module.exports = (eleventyConfig) => {
  const Image = require("@11ty/eleventy-img");
  const path = require("path");

  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    port: 3000,
    open: true,
  });

  async function imageShortcode({
    imgRoot = "./src/assets/images/",
    image,
    alt = " ",
    classes = " ",
    widths = [360, 640, 760, 1000],
    async = true,
    caption,
  }) {
    const source = `${imgRoot}${image}`;
    let metadata = await Image(source, {
      widths,
      formats: ["webp", "jpeg"],
      urlPath: "/cachedImages/",
      outputDir: "./dist/cachedImages/",
      filenameFormat: function (id, src = source, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);

        return `${name}-${width}w.${format}`;
      },
    });

    let imageAttributes = {
      alt,
      width: metadata.jpeg[0].width,
      height: metadata.jpeg[0].height,
      sizes: "100vw",
      class: classes,
      loading: async ? "lazy" : "eager",
      decoding: async ? "async" : "sync",
    };

    const finalImage = Image.generateHTML(metadata, imageAttributes, {
      whitespaceMode: "inline",
    });

    return finalImage;
  }

  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./package.json");
  eleventyConfig.addPassthroughCopy("./postcss.config.js");
  eleventyConfig.addPassthroughCopy("tailwind.config.js");
  eleventyConfig.addPassthroughCopy("./README.md");
  eleventyConfig.addPassthroughCopy("browser-sync-config.js");
  eleventyConfig.addPassthroughCopy("./.gitignore");
  eleventyConfig.addPassthroughCopy("./.eleventy.js");

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

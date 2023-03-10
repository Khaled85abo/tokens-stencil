module.exports = {
  source: ['figma-input/figma-input.json'],
  fileHeader: {
    autoGeneratedFileHeader: () => {
      return ['Do not edit directly, this file was auto-generated'];
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/global/',
      prefix: 'figma',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          //  filter: {
          //   attributes: {
          //     category: "color"
          //   }
          // },
          options: {
            fileHeader: 'autoGeneratedFileHeader',
          },
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/global/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
          options: {
            fileHeader: 'autoGeneratedFileHeader',
          },
        },
      ],
    },
  },
};

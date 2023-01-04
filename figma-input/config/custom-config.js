const StyleDictionary = require('style-dictionary').extend('./figma-input/config/figma.config.json');

StyleDictionary.registerTransform({
  type: 'value',
  transitive: true,
  name: 'figma/web/flatten-properties',
  matcher: ({ type }) => {
    return ['typography', 'composition'].includes(type);
  },
  transformer: ({ value, name, type }) => {
    console.log('Starting transform');
    if (!value) return;

    console.log('have value');

    const entries = Object.entries(value);

    const flattendedValue = entries.reduce(
      (acc, [key, v], index) =>
        `${acc ? `${acc}\n  ` : ''}--${name}-${StyleDictionary.transform['name/cti/kebab'].transformer({ path: [key] }, { prefix: '' })}: ${v}${
          index + 1 === entries.length ? '' : ';'
        }`,
      `${name.includes(type) ? '' : `${type}-`}${name}-group;`,
    );

    return flattendedValue;
  },
});
StyleDictionary.buildAllPlatforms();

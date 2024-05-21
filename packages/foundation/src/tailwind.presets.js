import styleDictionary from './tokens/js/tokens';

/**
 * Tailwind requires the values:
 *{
 *  "boxShadow": {
 *    "level-1": "value",
 *    "level-2": "...",
 *     ....
 *   },
 *  "colors": {
 *    ...
 *  },
 *  ....
 * }
 */
const flattenValue = (obj) => {
  const result = {};
  Object.keys(obj).forEach((key) => {
    // If value property does not exist
    if (!obj[key].value) {
      // Should go one level deeper
      result[key] = flattenValue(obj[key]);
    } else {
      result[key] = obj[key].value;
    }
  });

  return result;
};

export const prefix = 'ayush-';
export const theme = {
  colors: {
    ...flattenValue(styleDictionary.colors),
    transparent: 'transparent',
    current: 'currentColor',
    inherit: 'inherit',
  },
  borderRadius: flattenValue(styleDictionary.radius),
  spacing: flattenValue(styleDictionary.spacings),
  animation: flattenValue(styleDictionary.animations),
  boxShadow: flattenValue(styleDictionary.shadows),
  transitionDuration: flattenValue(styleDictionary.transitionDuration),
  transitionTimingFunction: flattenValue(
    styleDictionary.transitionTimingFunction,
  ),
  fontFamily: {
    sans: ['"Inter"'],
  },
};
export const plugins = [];

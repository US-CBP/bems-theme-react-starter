// @flow weak

/** 
 * This file is a replacement for the material-ui palette.js.
 * The material-ui palette.js does not allow overrides for text, input, action, and background from the theme JSON.
 * The TOMIS version of palette.js allows overrides of text, input, action, and background from the theme JSON.
 * 
 * See createPalette method.
 */
import warning from 'warning';
import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';
import grey from 'material-ui/colors/grey';
import red from 'material-ui/colors/red';
import common from 'material-ui/colors/common';
import { getContrastRatio } from 'material-ui/styles/colorManipulator';

export let light = {
    text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)',
        icon: 'rgba(0, 0, 0, 0.38)',
        divider: 'rgba(0, 0, 0, 0.12)',
        lightDivider: 'rgba(0, 0, 0, 0.075)'
    },
    input: {
        bottomLine: 'rgba(0, 0, 0, 0.42)',
        helperText: 'rgba(0, 0, 0, 0.54)',
        labelText: 'rgba(0, 0, 0, 0.54)',
        inputText: 'rgba(0, 0, 0, 0.87)',
        disabled: 'rgba(0, 0, 0, 0.42)'
    },
    action: {
        active: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.26)'
    },
    background: {
        default: grey[50],
        paper: common.white,
        appBar: grey[100],
        contentFrame: grey[200]
    }
};

export let dark = {
    text: {
        primary: 'rgba(255, 255, 255, 1)',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
        hint: 'rgba(255, 255, 255, 0.5)',
        icon: 'rgba(255, 255, 255, 0.5)',
        divider: 'rgba(255, 255, 255, 0.12)',
        lightDivider: 'rgba(255, 255, 255, 0.075)'
    },
    input: {
        bottomLine: 'rgba(255, 255, 255, 0.7)',
        helperText: 'rgba(255, 255, 255, 0.7)',
        labelText: 'rgba(255, 255, 255, 0.7)',
        inputText: 'rgba(255, 255, 255, 1)',
        disabled: 'rgba(255, 255, 255, 0.5)'
    },
    action: {
        active: 'rgba(255, 255, 255, 1)',
        disabled: 'rgba(255, 255, 255, 0.3)'
    },
    background: {
        default: '#303030',
        paper: grey[800],
        appBar: grey[900],
        contentFrame: grey[900],
        status: common.black
    }
};

function getContrastText(color) {
    if (getContrastRatio(color, common.black) < 7) {
        return dark.text.primary;
    }
    return light.text.primary;
}

export default function createPalette(options = {}) {
    // If theme JSON provides dark/light overrides, use those instead of defaults.
    if (options.shades) {
        dark = options.shades.dark || dark;
        light = options.shades.light || light;
    }
    const { primary = indigo, accent = pink, error = red, type = 'light' } = options;

    if (process.env.NODE_ENV !== 'production') {
        const difference = (base, compare) => {
            if (!compare) {
                compare = {};
            }

            return Object.keys(base).filter(hue => !compare[hue]);
        };

        const paletteColorError = (name, base, compare) => {
            const missing = difference(base, compare);

            if (missing.length === 0) {
                return;
            }

            warning(
                false,
                [
                    `Material-UI: ${name} color is missing the following hues: ${missing.join(',')}`,
                    'See the default colors, indigo, or pink, as exported from material-ui/colors.'
                ].join('\n')
            );
        };

        paletteColorError('primary', indigo, primary);
        paletteColorError('accent', pink, accent);
        paletteColorError('error', red, error);
    }

    const shades = { dark, light };

    warning(shades[type], `Material-UI: the palette type \`${type}\` is not supported.`);

    return {
        common,
        type,
        shades,
        text: shades[type].text,
        input: shades[type].input,
        action: shades[type].action,
        background: shades[type].background,
        primary,
        accent,
        error,
        grey,
        getContrastText
    };
}

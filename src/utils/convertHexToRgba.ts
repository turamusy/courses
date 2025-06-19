const HEX_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const DEFAULT_COLOR = 'rgba(0,0,0,1)';

/**
 * Converts a HEX color code to an RGBA string.
 * @param {string} hexCode - The HEX color code (must start with #).
 * @param {number} [opacity=1] - The opacity value (0-1 or 1-100).
 * @returns {string} RGBA color string.
 */
export const convertHexToRGBA = (hexCode: string, opacity: number = 1): string => {
    if (!HEX_REGEX.test(hexCode)) {
        return DEFAULT_COLOR;
    }

    let hex = hexCode.slice(1); // Remove #

    // Convert shorthand HEX (#abc) to full format (#aabbcc)
    if (hex.length === 3) {
        hex = [...hex].map(char => char + char).join('');
    }
    // Extract RGB values from HEX
    const [r, g, b] = [0, 2, 4].map(offset => parseInt(hex.slice(offset, offset + 2), 16));

    // Normalize opacity (convert 1-100 range to 0-1 if necessary)
    const alpha = opacity > 1 && opacity <= 100 ? opacity / 100 : opacity;

    return `rgba(${r},${g},${b},${alpha})`;
};

import {palette} from './palette';

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPU.
   */
  appTransparent: palette.transparent,
  appBackground: palette.darkBlack,
  defaultStatusBarColor: palette.darkBlack,
  defaultTextColor: palette.white,
  secondaryTextColor: palette.black,
  defaultLabelTextColor: palette.lightBlack,
  defaultButtonBackgroundColor: palette.red,
  defaultShadeBackgroundColor: palette.shadeBlack,
  defaultLoaderShadowColor: palette.shadowBlack,
};

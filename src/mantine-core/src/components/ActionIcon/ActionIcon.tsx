import React from 'react';
import {
  BoxProps,
  useProps,
  StylesApiProps,
  useStyles,
  MantineSize,
  MantineColor,
  MantineGradient,
  getRadius,
  polymorphicFactory,
  useVars,
  getSize,
  createVarsResolver,
} from '../../core';
import { UnstyledButton } from '../UnstyledButton';
import { LoaderProps, Loader } from '../Loader';
import { ActionIconGroup } from './ActionIconGroup/ActionIconGroup';
import classes from './ActionIcon.module.css';

export type ActionIconVariant =
  | 'filled'
  | 'light'
  | 'outline'
  | 'transparent'
  | 'white'
  | 'subtle'
  | 'default'
  | 'gradient';

export type ActionIconStylesNames = 'root' | 'loader';
export type ActionIconCssVariables =
  | '--ai-radius'
  | '--ai-size'
  | '--ai-bg'
  | '--ai-hover'
  | '--ai-color'
  | '--ai-bd';

export interface ActionIconStylesParams {
  color: MantineColor | string | undefined;
  size: MantineSize | string | number | undefined;
  radius: MantineSize | string | number | undefined;
  gradient: MantineGradient | undefined;
  variant: ActionIconVariant | (string & {}) | undefined;
}

export interface ActionIconProps
  extends BoxProps,
    StylesApiProps<
      ActionIconStylesNames,
      ActionIconVariant,
      ActionIconCssVariables,
      ActionIconStylesParams
    > {
  __staticSelector?: string;

  /** Determines whether Loader component should be displayed instead of the icon */
  loading?: boolean;

  /** Props added to Loader component (only visible when `loading` prop is set) */
  loaderProps?: LoaderProps;

  /** Width and height of the button. Action has predefined xs-xl values, number value (in px) ix converted to rem (1rem = 16px). `md` by default */
  size?: MantineSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: MantineColor;

  /** Key of theme.radius or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
  radius?: MantineSize | (string & {}) | number;

  /** Gradient styles used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: MantineGradient;

  /** Indicates disabled state */
  disabled?: boolean;

  /** Icon displayed inside button */
  children?: React.ReactNode;
}

export interface ActionIconFactory {
  props: ActionIconProps;
  defaultComponent: 'button';
  defaultRef: HTMLButtonElement;
  stylesNames: ActionIconStylesNames;
  variant: ActionIconVariant;
  vars: ActionIconCssVariables;
  stylesParams: ActionIconStylesParams;
  staticComponents: {
    Group: typeof ActionIconGroup;
  };
}

const defaultProps: Partial<ActionIconProps> = {
  variant: 'filled',
  size: 'md',
};

const varsResolver = createVarsResolver<ActionIconCssVariables, ActionIconStylesParams>(
  ({ size, radius, variant, gradient, color }, theme) => ({
    '--ai-size': getSize(size, 'ai-size'),
    '--ai-radius': getRadius(radius),
    ...theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant!,
      prefix: 'ai' as const,
    }),
  })
);

export const ActionIcon = polymorphicFactory<ActionIconFactory>((props, ref) => {
  const {
    className,
    unstyled,
    variant,
    classNames,
    styles,
    style,
    loading,
    loaderProps,
    size,
    color,
    radius,
    __staticSelector,
    gradient,
    vars,
    children,
    disabled,
    ...others
  } = useProps('ActionIcon', defaultProps, props);

  const _vars = useVars<ActionIconStylesParams>('ActionIcon', varsResolver, vars, {
    color,
    size,
    radius,
    gradient,
    variant,
  });

  const getStyles = useStyles({
    name: ['ActionIcon', __staticSelector],
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  return (
    <UnstyledButton
      {...getStyles('root', { active: !disabled && !loading })}
      {...others}
      unstyled={unstyled}
      variant={variant}
      size={size}
      disabled={disabled || loading}
      ref={ref}
      vars={_vars}
      mod={{
        loading,
        disabled: disabled && !loading,
        'data-action-icon': true,
      }}
    >
      {loading ? (
        <Loader {...getStyles('loader')} color="var(--ai-color)" size="70%" {...loaderProps} />
      ) : (
        children
      )}
    </UnstyledButton>
  );
});

ActionIcon.displayName = '@mantine/core/ActionIcon';
ActionIcon.Group = ActionIconGroup;

import React, { useState } from 'react';
import * as Rsa from '@radix-ui/react-scroll-area';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useDirection,
  rem,
  createVarsResolver,
  Factory,
} from '../../core';
import classes from './ScrollArea.module.css';

export type ScrollAreaStylesNames = 'root' | 'viewport' | 'scrollbar' | 'thumb' | 'corner';
export type ScrollAreaVariant = string;
export type ScrollAreaCssVariables = {
  root: '--scrollarea-scrollbar-size';
};

export interface ScrollAreaProps
  extends BoxProps,
    StylesApiProps<ScrollAreaFactory>,
    ElementProps<'div'> {
  /** Scrollbar size, any valid CSS value for width/height, numbers are converted to rem (1rem = 16px), default value is 0.75rem (12px) */
  scrollbarSize?: number | string;

  /**
   * Defines scrollbars behavior, `hover` by default
   * - `hover` – scrollbars are visible when mouse is over the scroll area
   * - `scroll` – scrollbars are visible when the scroll area is scrolled
   * - `always` – scrollbars are always visible
   * - `never` – scrollbars are always hidden
   * - `auto` – similar to `overflow: auto` – scrollbars are always visible when the content is overflowing
   * */
  type?: 'auto' | 'always' | 'scroll' | 'hover' | 'never';

  /** Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll`, `1000` by default */
  scrollHideDelay?: number;

  /** Determines whether scrollbars should be offset with padding, `false` by default */
  offsetScrollbars?: boolean;

  /** Assigns viewport element (scrollable container) ref */
  viewportRef?: React.ForwardedRef<HTMLDivElement>;

  /** Props spread to the viewport element */
  viewportProps?: React.ComponentPropsWithRef<'div'>;

  /** Called with current position (`x` and `y` coordinates) when viewport is scrolled */
  onScrollPositionChange?(position: { x: number; y: number }): void;
}

export interface ScrollAreaAutosizeProps extends ScrollAreaProps {}

export type ScrollAreaFactory = Factory<{
  props: ScrollAreaProps;
  ref: HTMLDivElement;
  stylesNames: ScrollAreaStylesNames;
  vars: ScrollAreaCssVariables;
  staticComponents: {
    Autosize: typeof ScrollAreaAutosize;
  };
}>;

const defaultProps: Partial<ScrollAreaProps> = {
  scrollbarSize: 12,
  scrollHideDelay: 1000,
  type: 'hover',
};

const varsResolver = createVarsResolver<ScrollAreaFactory>((_, { scrollbarSize }) => ({
  root: {
    '--scrollarea-scrollbar-size': rem(scrollbarSize),
  },
}));

export const ScrollArea = factory<ScrollAreaFactory>((_props, ref) => {
  const props = useProps('ScrollArea', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    scrollbarSize,
    vars,
    type,
    scrollHideDelay,
    viewportProps,
    viewportRef,
    onScrollPositionChange,
    children,
    variant,
    offsetScrollbars,
    ...others
  } = props;

  const { dir } = useDirection();
  const [scrollbarHovered, setScrollbarHovered] = useState(false);

  const getStyles = useStyles<ScrollAreaFactory>({
    name: 'ScrollArea',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <Rsa.Root
      type={type === 'never' ? 'always' : type}
      scrollHideDelay={scrollHideDelay}
      dir={dir}
      ref={ref}
      asChild
    >
      <Box {...getStyles('root')} variant={variant} {...others}>
        <Rsa.Viewport
          {...viewportProps}
          {...getStyles('viewport')}
          ref={viewportRef}
          data-offset-scrollbars={offsetScrollbars || undefined}
          onScroll={
            typeof onScrollPositionChange === 'function'
              ? ({ currentTarget }) =>
                  onScrollPositionChange({
                    x: currentTarget.scrollLeft,
                    y: currentTarget.scrollTop,
                  })
              : undefined
          }
        >
          {children}
        </Rsa.Viewport>
        <Rsa.Scrollbar
          {...getStyles('scrollbar')}
          orientation="horizontal"
          data-hidden={type === 'never' || undefined}
          forceMount
          onMouseEnter={() => setScrollbarHovered(true)}
          onMouseLeave={() => setScrollbarHovered(false)}
        >
          <Rsa.Thumb {...getStyles('thumb')} />
        </Rsa.Scrollbar>
        <Rsa.Scrollbar
          {...getStyles('scrollbar')}
          orientation="vertical"
          data-hidden={type === 'never' || undefined}
          forceMount
          onMouseEnter={() => setScrollbarHovered(true)}
          onMouseLeave={() => setScrollbarHovered(false)}
        >
          <Rsa.Thumb {...getStyles('thumb')} />
        </Rsa.Scrollbar>
        <Rsa.Corner
          {...getStyles('corner')}
          data-hovered={scrollbarHovered || undefined}
          data-hidden={type === 'never' || undefined}
        />
      </Box>
    </Rsa.Root>
  );
});

ScrollArea.displayName = '@mantine/core/ScrollArea';

export const ScrollAreaAutosize = factory<ScrollAreaFactory>((props, ref) => {
  const {
    children,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps,
    style,
    vars,
    ...others
  } = useProps('ScrollAreaAutosize', defaultProps, props);

  return (
    <Box {...others} ref={ref} style={[{ display: 'flex' }, style]}>
      <Box style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <ScrollArea
          classNames={classNames}
          styles={styles}
          scrollHideDelay={scrollHideDelay}
          scrollbarSize={scrollbarSize}
          type={type}
          dir={dir}
          offsetScrollbars={offsetScrollbars}
          viewportRef={viewportRef}
          onScrollPositionChange={onScrollPositionChange}
          unstyled={unstyled}
          variant={variant}
          viewportProps={viewportProps}
          vars={vars}
        >
          {children}
        </ScrollArea>
      </Box>
    </Box>
  );
});

ScrollAreaAutosize.displayName = '@mantine/core/ScrollAreaAutosize';
ScrollArea.Autosize = ScrollAreaAutosize;

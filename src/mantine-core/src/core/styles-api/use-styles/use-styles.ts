import { CSSProperties } from 'react';
import { useMantineTheme, useMantineClassNamesPrefix } from '../../MantineProvider';
import type { MantineStyleProp } from '../../Box';
import { FactoryPayload } from '../../factory';
import { PartialVarsResolver, VarsResolver } from '../create-vars-resolver/create-vars-resolver';
import { getClassName } from './get-class-name/get-class-name';
import { getStyle } from './get-style/get-style';
import { Styles, ClassNames, GetStylesApiOptions } from '../styles-api.types';

export interface UseStylesInput<Payload extends FactoryPayload> {
  name: string | (string | undefined)[];
  classes: Payload['stylesNames'] extends string ? Record<Payload['stylesNames'], string> : never;
  props: Payload['props'];
  stylesCtx?: Payload['ctx'];
  className?: string;
  style?: MantineStyleProp;
  rootSelector?: Payload['stylesNames'];
  unstyled?: boolean;
  classNames?: ClassNames<Payload>;
  styles?: Styles<Payload>;
  vars?: PartialVarsResolver<Payload>;
  varsResolver?: VarsResolver<Payload>;
}

export type GetStylesApi<Payload extends FactoryPayload> = (
  selector: NonNullable<Payload['stylesNames']>,
  options?: GetStylesApiOptions
) => {
  className: string;
  style: CSSProperties;
};

export function useStyles<Payload extends FactoryPayload>({
  name,
  classes,
  props,
  stylesCtx,
  className,
  style,
  rootSelector = 'root' as NonNullable<Payload['stylesNames']>,
  unstyled,
  classNames,
  styles,
  vars,
  varsResolver,
}: UseStylesInput<Payload>): GetStylesApi<Payload> {
  const theme = useMantineTheme();
  const classNamesPrefix = useMantineClassNamesPrefix();
  const themeName = (Array.isArray(name) ? name : [name]).filter((n) => n) as string[];

  return (selector, options) => ({
    className: getClassName({
      theme,
      options,
      themeName,
      selector,
      classNamesPrefix,
      classNames,
      classes,
      unstyled,
      className,
      rootSelector,
      props,
      stylesCtx,
    }),

    style: getStyle({
      theme,
      themeName,
      selector,
      options,
      props,
      stylesCtx,
      rootSelector,
      styles,
      style,
      vars,
      varsResolver,
    }),
  });
}

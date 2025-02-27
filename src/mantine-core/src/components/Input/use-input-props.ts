import { useId } from '@mantine/hooks';
import { extractStyleProps, useProps, BoxProps, StylesApiProps } from '../../core';
import { __BaseInputProps } from './Input';

interface BaseProps
  extends __BaseInputProps,
    BoxProps,
    StylesApiProps<{ props: any; stylesNames: string }> {
  __staticSelector?: string;
  __stylesApiProps?: Record<string, any>;
  id?: string;
}

export function useInputProps<T extends BaseProps, U extends Partial<T>>(
  component: string,
  defaultProps: U,
  _props: T
) {
  const props = useProps<T>(component, defaultProps, _props);
  const {
    label,
    description,
    error,
    required,
    classNames,
    styles,
    className,
    unstyled,
    __staticSelector,
    __stylesApiProps,
    errorProps,
    labelProps,
    descriptionProps,
    wrapperProps: _wrapperProps,
    id,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    vars,
    ...others
  } = props;

  const uid = useId(id);

  const { styleProps, rest } = extractStyleProps(others);

  const wrapperProps = {
    label,
    description,
    error,
    required,
    classNames,
    className,
    __staticSelector,
    __stylesApiProps: __stylesApiProps || props,
    errorProps,
    labelProps,
    descriptionProps,
    unstyled,
    styles,
    id: uid,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    ..._wrapperProps,
  };

  return {
    ...rest,
    classNames,
    styles,
    unstyled,
    wrapperProps: { ...wrapperProps, ...styleProps } as typeof wrapperProps & BoxProps,
    inputProps: {
      required,
      classNames,
      styles,
      unstyled,
      id: uid,
      size,
      __staticSelector,
      __stylesApiProps: __stylesApiProps || props,
      error,
      variant,
    },
  };
}

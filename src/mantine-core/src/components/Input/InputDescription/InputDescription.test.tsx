import { tests } from '@mantine/tests';
import {
  InputDescription,
  InputDescriptionProps,
  InputDescriptionStylesNames,
} from './InputDescription';

const defaultProps: InputDescriptionProps = {};

describe('@mantine/core/InputDescription', () => {
  tests.itSupportsSystemProps<InputDescriptionProps, InputDescriptionStylesNames>({
    component: InputDescription,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLParagraphElement,
    displayName: '@mantine/core/InputDescription',
    stylesApiName: 'InputWrapper',
    stylesApiSelectors: ['description'],
  });
});

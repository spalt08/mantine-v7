import { Frontmatter } from '@/types';

export const MDX_DATA: Record<string, Frontmatter> = {
  // ----------------------------------- Meta --------------------------------------
  NotFound: {
    title: '404',
    slug: '/404',
    hideInSearch: true,
    hideSiblings: true,
  },

  About: {
    title: 'About Mantine',
    slug: '/about',
    search: 'Browser support, releases cycle, previous versions documentation',
    hideSiblings: true,
  },

  GettingStarted: {
    title: 'Getting started',
    slug: '/getting-started',
    search: 'Get started with Mantine',
    hideInSearch: true,
    hideSiblings: true,
  },

  Maintainers: {
    title: 'Become a maintainer',
    slug: '/maintainers',
    hideInSearch: true,
    hideSiblings: true,
  },

  Overview: {
    title: 'Mantine API overview',
    slug: '/overview',
    search: 'Overview of Mantine components API',
    hideSiblings: true,
  },

  Contribute: {
    title: 'Contributing to Mantine',
    slug: '/contribute',
    search: 'Learn how to contribute to Mantine',
    hideSiblings: true,
  },

  // ----------------------------------- Theming -----------------------------------
  MantineProvider: {
    title: 'MantineProvider',
    slug: '/theming/mantine-provider',
    search: 'Theme context, CSS reset, CSS variables, context classes and styles',
  },

  ThemeObject: {
    title: 'Theme object',
    slug: '/theming/theme-object',
    search: 'use-mantine-theme, theme override, MantineTheme',
  },

  ColorSchemes: {
    title: 'Color schemes',
    slug: '/theming/color-schemes',
    search: 'use-mantine-color-scheme, color schemes management, data-mantine-color-scheme',
  },

  Colors: {
    title: 'Colors',
    slug: '/theming/colors',
    search: 'Default colors, primaryColor, primaryShade',
  },

  ColorFunctions: {
    title: 'Color functions',
    slug: '/styles/color-functions',
    search: 'Functions to manipulate colors, darken, lighten, parse',
  },

  Typography: {
    title: 'Typography',
    slug: '/theming/typography',
    search: 'Change fonts, @font-face',
  },

  DefaultProps: {
    title: 'Default props',
    slug: '/theming/default-props',
    search: 'Default props for components',
  },

  // ----------------------------------- Styles ------------------------------------
  CSSModules: {
    title: 'CSS modules',
    slug: '/styles/css-modules',
    search: 'Get started with CSS modules',
  },

  PostCSSPreset: {
    title: 'PostCSS preset',
    slug: '/styles/postcss-preset',
    search: 'postcss-preset-mantine, mixins, CSS functions',
  },

  GlobalStyles: {
    title: 'Global styles',
    slug: '/styles/global-styles',
    search: 'Global styles that are required for Mantine components to work properly',
  },

  CssVariables: {
    title: 'CSS variables',
    slug: '/styles/css-variables',
    search: 'Mantine CSS variables and resolvers',
  },

  CSSVariablesList: {
    title: 'CSS variables list',
    slug: '/styles/css-variables-list',
    search: 'List of all default CSS variables',
  },

  Rem: {
    title: 'rem, em and px units',
    slug: '/styles/rem',
    search: 'rem and em units with Mantine components, units conversion',
  },

  StyleProp: {
    title: 'style prop',
    slug: '/styles/style',
    search: 'style prop usage',
  },

  ResponsiveStyles: {
    title: 'Responsive styles',
    slug: '/styles/responsive',
    search: 'Media queries, breakpoints, inline responsive styles',
  },

  StylesApi: {
    title: 'Styles API',
    slug: '/styles/styles-api',
    search: 'classNames, styles and unstyled props',
  },

  DataAttributes: {
    title: 'data-* attributes',
    slug: '/styles/data-attributes',
    search: 'Usage of data-* attributes to apply styles',
  },

  VariantsAndSizes: {
    title: 'Variants and sizes',
    slug: '/styles/variants-sizes',
    search: 'Customize components sizes and variants',
  },

  StyleProps: {
    title: 'Style props',
    slug: '/styles/style-props',
    search: 'Props to add inline styles',
  },

  Rtl: {
    title: 'RTL (right-to-left)',
    slug: '/styles/rtl',
    search: 'Change text direction to right-to-left',
  },

  StylesPerformance: {
    title: 'Styles performance',
    slug: '/styles/styles-performance',
    search: 'Learn how to improve your styles performance',
  },

  UnstyledComponents: {
    title: 'Unstyled / headless',
    slug: '/styles/unstyled',
    search: 'Headless/unstyled components',
  },

  // ----------------------------------- Guides ------------------------------------
  Polymorphic: {
    title: 'Polymorphic components',
    slug: '/guides/polymorphic',
    search: 'createPolymorphicComponent, change root element, component prop',
  },

  NextJs: {
    title: 'Usage with Next.js',
    slug: '/guides/next',
    search: 'Get started with Next.js',
  },

  Vite: {
    title: 'Usage with Vite',
    slug: '/guides/vite',
    search: 'Get started with Vite',
  },

  Remix: {
    title: 'Usage with Remix',
    slug: '/guides/remix',
    search: 'Get started with Remix',
  },

  Gatsby: {
    title: 'Usage with Gatsby',
    slug: '/guides/gatsby',
    search: 'Get started with Gatsby',
  },

  Redwood: {
    title: 'Usage with Redwood',
    slug: '/guides/redwood',
    search: 'Get started with Redwood',
  },

  Storybook: {
    title: 'Usage with Storybook',
    slug: '/guides/storybook',
    search: 'Setup Mantine with Storybook',
  },

  TypeScript: {
    title: 'Usage with TypeScript',
    slug: '/guides/typescript',
    search: 'Usage with TypeScript',
  },

  JavaScript: {
    title: 'Usage with JavaScript',
    slug: '/guides/javascript',
    search: 'Usage with JavaScript',
  },

  Icons: {
    title: 'Icons libraries',
    slug: '/guides/icons',
    search: 'Usage of icons libraries with Mantine',
  },

  Jest: {
    title: 'Testing with Jest',
    slug: '/guides/jest',
    search: 'Testing with Jest and React Testing Library',
  },

  SixToSeven: {
    title: '6.x to 7.x migration',
    slug: '/guides/6x-to-7x',
    search: 'Styles migration guide from 6.x to 7.x',
  },

  // ------------------------------- Core components -------------------------------
  Button: {
    title: 'Button',
    package: '@mantine/core',
    slug: '/core/button',
    description: 'Button component to render button or link',
    componentPrefix: 'Button',
    props: ['Button', 'ButtonGroup'],
    styles: ['Button', 'ButtonGroup'],
    import: "import { Button } from '@mantine/core';",
    source: 'mantine-core/src/components/Button/Button.tsx',
    docs: 'core/Button.mdx',
  },
  Loader: {
    title: 'Loader',
    package: '@mantine/core',
    slug: '/core/loader',
    description: 'Indicate loading state',
    props: ['Loader'],
    styles: ['Loader'],
    import: "import { Loader } from '@mantine/core';",
    source: 'mantine-core/src/components/Loader/Loader.tsx',
    docs: 'core/Loader.mdx',
  },
  Container: {
    title: 'Container',
    package: '@mantine/core',
    slug: '/core/container',
    description: 'Center content with padding and max-width',
    props: ['Container'],
    styles: ['Container'],
    import: "import { Container } from '@mantine/core';",
    source: 'mantine-core/src/components/Container/Container.tsx',
    docs: 'core/Container.mdx',
  },
  Anchor: {
    title: 'Anchor',
    package: '@mantine/core',
    slug: '/core/anchor',
    description: 'Display link with theme styles',
    props: ['Anchor'],
    styles: ['Anchor'],
    import: "import { Anchor } from '@mantine/core';",
    source: 'mantine-core/src/components/Anchor/Anchor.tsx',
    docs: 'core/Anchor.mdx',
  },
  Input: {
    title: 'Input',
    package: '@mantine/core',
    slug: '/core/input',
    description: 'Base component to create custom inputs',
    componentPrefix: 'Input',
    props: ['Input', 'InputWrapper', 'InputLabel', 'InputDescription', 'InputError'],
    styles: ['Input', 'InputWrapper'],
    polymorphic: true,
    import: "import { Input } from '@mantine/core';",
    source: 'mantine-core/src/components/Input/Input.tsx',
    docs: 'core/Input.mdx',
  },
  ActionIcon: {
    title: 'ActionIcon',
    package: '@mantine/core',
    slug: '/core/action-icon',
    description: 'Icon button',
    componentPrefix: 'ActionIcon',
    props: ['ActionIcon', 'ActionIconGroup'],
    styles: ['ActionIcon', 'ActionIconGroup'],
    polymorphic: true,
    import: "import { ActionIcon } from '@mantine/core';",
    source: 'mantine-core/src/components/ActionIcon/ActionIcon.tsx',
    docs: 'core/ActionIcon.mdx',
  },
  CloseButton: {
    title: 'CloseButton',
    package: '@mantine/core',
    slug: '/core/close-button',
    description: 'ActionIcon with close icon',
    props: ['CloseButton'],
    styles: ['CloseButton'],
    polymorphic: true,
    import: "import { CloseButton } from '@mantine/core';",
    source: 'mantine-core/src/components/CloseButton/CloseButton.tsx',
    docs: 'core/CloseButton.mdx',
  },
  CopyButton: {
    title: 'CopyButton',
    package: '@mantine/core',
    slug: '/core/copy-button',
    description: 'Copies given text to clipboard',
    props: ['CopyButton'],
    import: "import { CopyButton } from '@mantine/core';",
    source: 'mantine-core/src/components/CopyButton/CopyButton.tsx',
    docs: 'core/CopyButton.mdx',
  },
  FileButton: {
    title: 'FileButton',
    package: '@mantine/core',
    slug: '/core/file-button',
    description: 'Open file picker with a button click',
    props: ['FileButton'],
    import: "import { FileButton } from '@mantine/core';",
    source: 'mantine-core/src/components/FileButton/FileButton.tsx',
    docs: 'core/FileButton.mdx',
  },
  UnstyledButton: {
    title: 'UnstyledButton',
    package: '@mantine/core',
    slug: '/core/unstyled-button',
    description: 'Unstyled polymorphic button',
    polymorphic: true,
    import: "import { UnstyledButton } from '@mantine/core';",
    source: 'mantine-core/src/components/UnstyledButton/UnstyledButton.tsx',
    docs: 'core/UnstyledButton.mdx',
  },
  Tabs: {
    title: 'Tabs',
    package: '@mantine/core',
    slug: '/core/tabs',
    props: ['Tabs', 'TabsList', 'TabsTab', 'TabsPanel'],
    styles: ['Tabs'],
    description: 'Switch between different views',
    import: "import { Tabs } from '@mantine/core';",
    source: 'mantine-core/src/components/Tabs/Tabs.tsx',
    docs: 'core/Tabs.mdx',
  },
  BackgroundImage: {
    title: 'BackgroundImage',
    package: '@mantine/core',
    slug: '/core/background-image',
    description: 'Displays image as background',
    polymorphic: true,
    props: ['BackgroundImage'],
    styles: ['BackgroundImage'],
    import: "import { BackgroundImage } from '@mantine/core';",
    source: 'mantine-core/src/components/BackgroundImage/BackgroundImage.tsx',
    docs: 'core/BackgroundImage.mdx',
  },
  Blockquote: {
    title: 'Blockquote',
    package: '@mantine/core',
    slug: '/core/blockquote',
    props: ['Blockquote'],
    styles: ['Blockquote'],
    description: 'Blockquote with optional cite',
    import: "import { Blockquote } from '@mantine/core';",
    source: 'mantine-core/src/components/Blockquote/Blockquote.tsx',
    docs: 'core/Blockquote.mdx',
  },
  Breadcrumbs: {
    title: 'Breadcrumbs',
    package: '@mantine/core',
    slug: '/core/breadcrumbs',
    props: ['Breadcrumbs'],
    styles: ['Breadcrumbs'],
    description: 'Separates list of react nodes with given separator',
    import: "import { Breadcrumbs } from '@mantine/core';",
    source: 'mantine-core/src/components/Breadcrumbs/Breadcrumbs.tsx',
    docs: 'core/Breadcrumbs.mdx',
  },
  Burger: {
    title: 'Burger',
    package: '@mantine/core',
    slug: '/core/burger',
    props: ['Burger'],
    styles: ['Burger'],
    description: 'Open/close navigation button',
    import: "import { Burger } from '@mantine/core';",
    source: 'mantine-core/src/components/Burger/Burger.tsx',
    docs: 'core/Burger.mdx',
  },
  Center: {
    title: 'Center',
    package: '@mantine/core',
    slug: '/core/center',
    props: ['Center'],
    styles: ['Center'],
    polymorphic: true,
    description: 'Centers content vertically and horizontally',
    import: "import { Center } from '@mantine/core';",
    source: 'mantine-core/src/components/Center/Center.tsx',
    docs: 'core/Center.mdx',
  },
  Code: {
    title: 'Code',
    package: '@mantine/core',
    slug: '/core/code',
    props: ['Code'],
    styles: ['Code'],
    description: 'Inline and block code',
    import: "import { Code } from '@mantine/core';",
    source: 'mantine-core/src/components/Code/Code.tsx',
    docs: 'core/Code.mdx',
  },
  Collapse: {
    title: 'Collapse',
    package: '@mantine/core',
    slug: '/core/collapse',
    props: ['Collapse'],
    description: 'Animate presence with slide down/up transition',
    import: "import { Collapse } from '@mantine/core';",
    source: 'mantine-core/src/components/Collapse/Collapse.tsx',
    docs: 'core/Collapse.mdx',
  },
  ColorPicker: {
    title: 'ColorPicker',
    package: '@mantine/core',
    slug: '/core/color-picker',
    props: ['ColorPicker'],
    styles: ['ColorPicker'],
    description: 'Pick colors',
    import: "import { ColorPicker } from '@mantine/core';",
    source: 'mantine-core/src/components/ColorPicker/ColorPicker.tsx',
    docs: 'core/ColorPicker.mdx',
  },
  ColorSwatch: {
    title: 'ColorSwatch',
    package: '@mantine/core',
    slug: '/core/color-swatch',
    props: ['ColorSwatch'],
    styles: ['ColorSwatch'],
    polymorphic: true,
    description: 'Displays color',
    import: "import { ColorSwatch } from '@mantine/core';",
    source: 'mantine-core/src/components/ColorSwatch/ColorSwatch.tsx',
    docs: 'core/ColorSwatch.mdx',
  },
  FocusTrap: {
    title: 'FocusTrap',
    package: '@mantine/core',
    slug: '/core/focus-trap',
    props: ['FocusTrap'],
    description: 'Trap focus at child node',
    import: "import { FocusTrap } from '@mantine/core';",
    source: 'mantine-core/src/components/FocusTrap/FocusTrap.tsx',
    docs: 'core/FocusTrap.mdx',
  },
  Group: {
    title: 'Group',
    package: '@mantine/core',
    slug: '/core/group',
    props: ['Group'],
    styles: ['Group'],
    description: 'Compose elements and components in a horizontal flex container',
    import: "import { Group } from '@mantine/core';",
    source: 'mantine-core/src/components/Group/Group.tsx',
    docs: 'core/Group.mdx',
  },
  Highlight: {
    title: 'Highlight',
    package: '@mantine/core',
    slug: '/core/highlight',
    props: ['Highlight'],
    styles: ['Highlight'],
    polymorphic: true,
    description: 'Highlight given part of a string with mark',
    import: "import { Highlight } from '@mantine/core';",
    source: 'mantine-core/src/components/Highlight/Highlight.tsx',
    docs: 'core/Highlight.mdx',
  },
  Kbd: {
    title: 'Kbd',
    package: '@mantine/core',
    slug: '/core/kbd',
    props: ['Kbd'],
    styles: ['Kbd'],
    description: 'Display keyboard key',
    import: "import { Kbd } from '@mantine/core';",
    source: 'mantine-core/src/components/Kbd/Kbd.tsx',
    docs: 'core/Kbd.mdx',
  },
  Mark: {
    title: 'Mark',
    package: '@mantine/core',
    slug: '/core/mark',
    props: ['Mark'],
    styles: ['Mark'],
    description: 'Highlight part of the text',
    import: "import { Mark } from '@mantine/core';",
    source: 'mantine-core/src/components/Mark/Mark.tsx',
    docs: 'core/Mark.mdx',
  },
  NativeSelect: {
    title: 'NativeSelect',
    package: '@mantine/core',
    slug: '/core/native-select',
    props: ['NativeSelect'],
    styles: ['NativeSelect'],
    description: 'Native select element based on Input',
    import: "import { NativeSelect } from '@mantine/core';",
    source: 'mantine-core/src/components/NativeSelect/NativeSelect.tsx',
    docs: 'core/NativeSelect.mdx',
  },
  Notification: {
    title: 'Notification',
    package: '@mantine/core',
    slug: '/core/notification',
    props: ['Notification'],
    styles: ['Notification'],
    description: 'Show dynamic notifications and alerts to user, part of notifications system',
    import: "import { Notification } from '@mantine/core';",
    source: 'mantine-core/src/components/Notification/Notification.tsx',
    docs: 'core/Notification.mdx',
  },
  Paper: {
    title: 'Paper',
    package: '@mantine/core',
    slug: '/core/paper',
    props: ['Paper'],
    styles: ['Paper'],
    description: 'Renders white or dark background depending on color scheme',
    polymorphic: true,
    import: "import { Paper } from '@mantine/core';",
    source: 'mantine-core/src/components/Paper/Paper.tsx',
    docs: 'core/Paper.mdx',
  },
  Popover: {
    title: 'Popover',
    package: '@mantine/core',
    slug: '/core/popover',
    componentPrefix: 'Popover',
    props: ['Popover', 'PopoverTarget'],
    styles: ['Popover'],
    description: 'Display popover section relative to given target element',
    import: "import { Popover } from '@mantine/core';",
    source: 'mantine-core/src/components/Popover/Popover.tsx',
    docs: 'core/Popover.mdx',
  },
  Portal: {
    title: 'Portal',
    package: '@mantine/core',
    slug: '/core/portal',
    props: ['Portal'],
    description: 'Renders component outside of parent element tree',
    import: "import { Portal } from '@mantine/core';",
    source: 'mantine-core/src/components/Portal/Portal.tsx',
    docs: 'core/Portal.mdx',
  },
  ScrollArea: {
    title: 'ScrollArea',
    package: '@mantine/core',
    slug: '/core/scroll-area',
    props: ['ScrollArea'],
    styles: ['ScrollArea'],
    description: 'Area with custom scrollbars',
    import: "import { ScrollArea } from '@mantine/core';",
    source: 'mantine-core/src/components/ScrollArea/ScrollArea.tsx',
    docs: 'core/ScrollArea.mdx',
  },
  SegmentedControl: {
    title: 'SegmentedControl',
    package: '@mantine/core',
    slug: '/core/segmented-control',
    props: ['SegmentedControl'],
    styles: ['SegmentedControl'],
    description: 'A linear set of two or more segments',
    import: "import { SegmentedControl } from '@mantine/core';",
    source: 'mantine-core/src/components/SegmentedControl/SegmentedControl.tsx',
    docs: 'core/SegmentedControl.mdx',
  },
  Slider: {
    title: 'Slider',
    package: '@mantine/core',
    slug: '/core/slider',
    props: ['Slider', 'RangeSlider'],
    styles: ['Slider'],
    description: 'Slider and RangeSlider components',
    import: "import { Slider } from '@mantine/core';",
    source: 'mantine-core/src/components/Slider/Slider.tsx',
    docs: 'core/Slider.mdx',
  },
  Stack: {
    title: 'Stack',
    package: '@mantine/core',
    slug: '/core/stack',
    props: ['Stack'],
    styles: ['Stack'],
    description: 'Compose elements and components in a vertical flex container',
    import: "import { Stack } from '@mantine/core';",
    source: 'mantine-core/src/components/Stack/Stack.tsx',
    docs: 'core/Stack.mdx',
  },
  Switch: {
    title: 'Switch',
    package: '@mantine/core',
    slug: '/core/switch',
    props: ['Switch', 'SwitchGroup'],
    styles: ['Switch'],
    description: 'Capture boolean input from user',
    import: "import { Switch } from '@mantine/core';",
    source: 'mantine-core/src/components/Switch/Switch.tsx',
    docs: 'core/Switch.mdx',
  },
  Table: {
    title: 'Table',
    package: '@mantine/core',
    slug: '/core/table',
    props: ['Table'],
    styles: ['Table'],
    description: 'Render table with theme styles',
    import: "import { Table } from '@mantine/core';",
    source: 'mantine-core/src/components/Table/Table.tsx',
    docs: 'core/Table.mdx',
  },
  Text: {
    title: 'Text',
    package: '@mantine/core',
    slug: '/core/text',
    props: ['Text'],
    styles: ['Text'],
    description: 'Display text',
    import: "import { Text } from '@mantine/core';",
    source: 'mantine-core/src/components/Text/Text.tsx',
    docs: 'core/Text.mdx',
  },
  TextInput: {
    title: 'TextInput',
    package: '@mantine/core',
    slug: '/core/text-input',
    props: ['TextInput'],
    styles: ['TextInput'],
    description: 'Capture string input from user',
    import: "import { TextInput } from '@mantine/core';",
    source: 'mantine-core/src/components/TextInput/TextInput.tsx',
    docs: 'core/TextInput.mdx',
  },
  Title: {
    title: 'Title',
    package: '@mantine/core',
    slug: '/core/title',
    props: ['Title'],
    styles: ['Title'],
    description: 'h1-h6 heading',
    import: "import { Title } from '@mantine/core';",
    source: 'mantine-core/src/components/Title/Title.tsx',
    docs: 'core/Title.mdx',
  },
  Badge: {
    title: 'Badge',
    package: '@mantine/core',
    slug: '/core/badge',
    props: ['Badge'],
    styles: ['Badge'],
    polymorphic: true,
    description: 'Display badge, pill or tag',
    import: "import { Badge } from '@mantine/core';",
    source: 'mantine-core/src/components/Badge/Badge.tsx',
    docs: 'core/Badge.mdx',
  },
  Tooltip: {
    title: 'Tooltip',
    package: '@mantine/core',
    slug: '/core/tooltip',
    props: ['Tooltip'],
    styles: ['Tooltip'],
    description: 'Renders tooltip at given element on mouse over or other event',
    import: "import { Tooltip } from '@mantine/core';",
    source: 'mantine-core/src/components/Tooltip/Tooltip.tsx',
    docs: 'core/Tooltip.mdx',
  },
  Transition: {
    title: 'Transition',
    package: '@mantine/core',
    slug: '/core/transition',
    props: ['Transition'],
    description: 'Animate presence of component with premade animations',
    import: "import { Transition } from '@mantine/core';",
    source: 'mantine-core/src/components/Transition/Transition.tsx',
    docs: 'core/Transition.mdx',
  },
  TypographyStylesProvider: {
    title: 'TypographyStylesProvider',
    package: '@mantine/core',
    slug: '/core/typography-styles-provider',
    description: 'Styles provider for html content',
    import: "import { TypographyStylesProvider } from '@mantine/core';",
    source: 'mantine-core/src/components/TypographyStylesProvider/TypographyStylesProvider.tsx',
    docs: 'core/TypographyStylesProvider.mdx',
  },
  VisuallyHidden: {
    title: 'VisuallyHidden',
    package: '@mantine/core',
    slug: '/core/visually-hidden',
    description: 'Hide element visually but keep it accessible for screen readers',
    import: "import { VisuallyHidden } from '@mantine/core';",
    source: 'mantine-core/src/components/VisuallyHidden/VisuallyHidden.tsx',
    docs: 'core/VisuallyHidden.mdx',
  },
  Divider: {
    title: 'Divider',
    package: '@mantine/core',
    slug: '/core/divider',
    props: ['Divider'],
    styles: ['Divider'],
    description: 'Horizontal line with optional label or vertical divider',
    import: "import { Divider } from '@mantine/core';",
    source: 'mantine-core/src/components/Divider/Divider.tsx',
    docs: 'core/Divider.mdx',
  },
  AspectRatio: {
    title: 'AspectRatio',
    package: '@mantine/core',
    slug: '/core/aspect-ratio',
    props: ['AspectRatio'],
    styles: ['AspectRatio'],
    description: 'Maintain responsive consistent width/height ratio',
    import: "import { AspectRatio } from '@mantine/core';",
    source: 'mantine-core/src/components/AspectRatio/AspectRatio.tsx',
    docs: 'core/AspectRatio.mdx',
  },
  Overlay: {
    title: 'Overlay',
    package: '@mantine/core',
    slug: '/core/overlay',
    props: ['Overlay'],
    styles: ['Overlay'],
    polymorphic: true,
    description: 'Overlays parent element with div element with any color and opacity',
    import: "import { Overlay } from '@mantine/core';",
    source: 'mantine-core/src/components/Overlay/Overlay.tsx',
    docs: 'core/Overlay.mdx',
  },
  Avatar: {
    title: 'Avatar',
    package: '@mantine/core',
    slug: '/core/avatar',
    props: ['Avatar'],
    styles: ['Avatar'],
    polymorphic: true,
    description: 'Display user profile image, initials or fallback icon',
    import: "import { Avatar } from '@mantine/core';",
    source: 'mantine-core/src/components/Avatar/Avatar.tsx',
    docs: 'core/Avatar.mdx',
  },

  Alert: {
    title: 'Alert',
    package: '@mantine/core',
    slug: '/core/alert',
    props: ['Alert'],
    styles: ['Alert'],
    description: 'Attract user attention with important static message',
    import: "import { Alert } from '@mantine/core';",
    source: 'mantine-core/src/components/Alert/Alert.tsx',
    docs: 'core/Alert.mdx',
  },

  Affix: {
    title: 'Affix',
    package: '@mantine/core',
    slug: '/core/affix',
    props: ['Affix'],
    styles: ['Affix'],
    description: 'Renders children inside portal at fixed position',
    import: "import { Affix } from '@mantine/core';",
    source: 'mantine-core/src/components/Affix/Affix.tsx',
    docs: 'core/Affix.mdx',
  },

  Checkbox: {
    title: 'Checkbox',
    package: '@mantine/core',
    slug: '/core/checkbox',
    componentPrefix: 'Checkbox',
    props: ['Checkbox', 'CheckboxGroup'],
    styles: ['Checkbox', 'CheckboxGroup'],
    description: 'Capture boolean input from user',
    import: "import { Checkbox } from '@mantine/core';",
    source: 'mantine-core/src/components/Checkbox/Checkbox.tsx',
    docs: 'core/Checkbox.mdx',
  },

  // ----------------------------------- Meta --------------------------------------
  Changelog700: {
    title: 'Version v7.0.0',
    slug: '/changelog/7-0-0',
    release: 'https://github.com/mantinedev/mantine/releases/tag/7.0.0',
    date: 'Some time this year',
  },
};

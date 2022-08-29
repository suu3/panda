import { Conditions } from '@css-panda/types'

export const conditions: Conditions = {
  even: { type: 'self-nesting', value: '&:even' },
  odd: { type: 'self-nesting', value: '&:odd' },

  hover: { type: 'self-nesting', value: '&:hover' },
  focus: { type: 'self-nesting', value: '&:focus' },
  disabled: { type: 'self-nesting', value: '&:disabled' },
  active: { type: 'self-nesting', value: '&:active' },

  before: { type: 'self-nesting', value: '&::before' },
  after: { type: 'self-nesting', value: '&::after' },

  open: { type: 'self-nesting', value: '&[open]' },

  motionReduce: { type: 'at-rule', value: '@media (prefers-reduced-motion: reduce)' },

  dark: { type: 'color-scheme', value: '[data-theme=dark] &', colorScheme: 'dark' },
  light: { type: 'color-scheme', value: '[data-theme=light] &', colorScheme: 'light' },
  hiConstrast: { type: 'at-rule', value: '@media (forced-colors: active)' },

  ltr: { type: 'parent-nesting', value: '[dir=ltr] &' },
  rtl: { type: 'parent-nesting', value: '[dir=rtl] &' },
}

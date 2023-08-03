import React from 'react';
import { themes } from '@storybook/theming';

import type { Preview } from '@storybook/react'
import GlobalStyles from '../src/styles/global'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'dark'
    },
    docs: {
      theme: themes.light
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <>
      <Story />
      <GlobalStyles />
      </>
    )
  ]
}

export default preview

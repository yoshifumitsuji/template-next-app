import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Loading } from './index'

export default {
  component: Loading,
} as ComponentMeta<typeof Loading>

export const Default: ComponentStoryObj<typeof Loading> = { args: { show: true } }

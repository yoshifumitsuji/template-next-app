import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Modal } from 'src/components/organisms/Modal'

export default {
  component: Modal,
} as ComponentMeta<typeof Modal>

export const Close: ComponentStoryObj<typeof Modal> = {
  args: {
    open: false,
    onClose: action('onClose'),
  },
}

export const Open: ComponentStoryObj<typeof Modal> = {
  args: {
    ...Close.args,
    open: true,
  },
}

import { mount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'
import Child from '@/components/Child.vue'

describe('Parent-Child Communication', () => {
  it('child component emits message to parent', async () => {
    const wrapper = mount(Parent)
    const childWrapper = wrapper.findComponent(Child)
    const input = childWrapper.find('input')
    const button = childWrapper.find('button')

    await input.setValue('Mensaje de prueba')
    await button.trigger('click')

    expect(wrapper.text()).toContain('Mensaje de prueba')
  })
})
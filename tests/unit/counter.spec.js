import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  let store

  beforeEach(() => {
    store = createStore({
      state: {
        counter: 0
      },
      mutations: {
        INCREMENT(state) {
          state.counter++
        },
        DECREMENT(state) {
          state.counter--
        }
      },
      actions: {
        increment({ commit }) {
          commit('INCREMENT')
        },
        decrement({ commit }) {
          commit('DECREMENT')
        }
      },
      getters: {
        getCounter: state => state.counter
      }
    })
  })

  it('renders initial counter value', () => {
    const wrapper = mount(Counter, {
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.text()).toContain('Contador: 0')
  })

  it('increments counter when increment button is clicked', async () => {
    const wrapper = mount(Counter, {
      global: {
        plugins: [store]
      }
    })
    await wrapper.find('button:first-child').trigger('click')
    expect(wrapper.text()).toContain('Contador: 1')
  })

  it('decrements counter when decrement button is clicked', async () => {
    const wrapper = mount(Counter, {
      global: {
        plugins: [store]
      }
    })
    await wrapper.find('button:last-child').trigger('click')
    expect(wrapper.text()).toContain('Contador: -1')
  })
})
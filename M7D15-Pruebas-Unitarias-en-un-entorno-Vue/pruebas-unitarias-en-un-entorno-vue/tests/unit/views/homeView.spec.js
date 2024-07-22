import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';

describe('Vista HomeView.vue', () => {
  test('Validación de match con el snapshot', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

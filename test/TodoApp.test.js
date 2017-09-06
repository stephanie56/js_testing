import {expect} from 'chai';

import TodoApp from '../src/components/TodoApp';

describe('TodoApp', () => {
  it('should render a div', () => {
    expect(TodoApp.to.contain('Todo App');
  })
});

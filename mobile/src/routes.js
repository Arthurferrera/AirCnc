import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import List from './pages/List';
import Book from './pages/Book';
import { strictEqual } from 'assert';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    List,
    Book
  })
)

site.com.br/book

export default Routes;
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import Monograms from './pages/Monograms/Monograms';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux';
import store from './redux/store';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
          {
              path: "/monograms",
              element: <Monograms />,
          },
      ]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App

import { Graph, Node } from './Graph';

describe('Sandbox with graphs', () => {
  test('react components', () => {
    const Pricing: Node<string> = { value: '<Pricing />', children: [] };
    const SubscriptionManagment: Node<string> = { value: '<SubscriptionManagment />', children: [] };
    const SubscriptinoPage: Node<string> = {
      value: '<SubscriptinoPage />',
      children: [SubscriptionManagment, Pricing],
    };

    const Landing: Node<string> = { value: '<Landing />', children: [] };
    const Login: Node<string> = { value: '<Login />', children: [] };
    const MainPage: Node<string> = { value: '<MainPage />', children: [Login, Landing] };

    const Analytics: Node<string> = { value: '<Analytics />', children: [] };
    const DashboardPage: Node<string> = { value: '<DashboardPage />', children: [Analytics] };

    const App: Node<string> = { value: '<App />', children: [DashboardPage, MainPage, SubscriptinoPage] };
    const root: Node<string> = { value: 'RootComponent', children: [App] };
    const ReactContainer = new Graph<string>([root]);

    ReactContainer.printBFS();
    console.log('----------------------');
    ReactContainer.printDFS();
  });
});

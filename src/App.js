import Container from "./Components/Container";
import { QueryClientProvider, QueryClient } from "react-query";
import ThemeContext from "./Context/ThemeContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext>
        <Container />
      </ThemeContext>
    </QueryClientProvider>
  );
}

export default App;

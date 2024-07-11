import { Header } from "$components/Header/Header";
import { ProtectedRoute } from "$components/ProtectedRoute/ProtectedRoute";
import { Container } from "@abi-labs-hexa/web-v2/components/grid";
import { Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";

import routes from "./routes";

function App() {
  return (
    <>
      <Header />

      <Container>
        <div className="py-4">
          <Routes>
            {routes.map((route) => (
              <Route key={uuid()} element={<ProtectedRoute {...route} />}>
                <Route {...route} />
              </Route>
            ))}
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;

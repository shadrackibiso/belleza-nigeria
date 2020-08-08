<<<<<<< HEAD
import React, { Suspense, lazy } from "react";
import "./css/app.css";
import "./css/bootstrap.min.css";
import SplashScreen from "./components/SplashScreen";
const AppRouter = lazy(() => import("./routes/AppRouter"));
=======
 import React, {Suspense, lazy} from "react";
import "./css/app.css";
import "./css/bootstrap.min.css";
import SplashScreen from "./components/SplashScreen"
const AppRouter = lazy(() => import("./routes/AppRouter"))
>>>>>>> 4ab618340c1caa3fe3b89682bc2db77f22ad6c8f

class App extends React.Component {
  state = {};

  render() {
    return (
<<<<<<< HEAD
      <Suspense fallback={<SplashScreen />}>
        <AppRouter />
      </Suspense>
=======
      <Suspense fallback={SplashScreen}>
        <AppRouter />
        </Suspense>
>>>>>>> 4ab618340c1caa3fe3b89682bc2db77f22ad6c8f
    );
  }
}

export default App;

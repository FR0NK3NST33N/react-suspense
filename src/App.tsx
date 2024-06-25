import { Suspense } from "react";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { Featured } from "./components/Featured";

function App() {
  return (
    <div className=" bg-slate-900 text-white flex flex-col min-h-screen">
      <Suspense fallback={<Loading />}>
        <Header />
        <Featured />
      </Suspense>
    </div>
  );
}

export default App;

import useUserStore from "./stores/userStore";
import usePandaStore from "./stores/pandaStore";
import { Button } from "@/components/ui/button";

function App() {
  const { name, grade, incrementGrade, decrementGrade, resetGrade } =
    useUserStore();
  const { panda, bornPanda, setPanda } = usePandaStore();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <p>{panda}</p>
        <Button onClick={bornPanda}>Panda++</Button>
        <Button onClick={setPanda}>Return pandas</Button>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center h-screen gap-10">
          <h1 className="text-4xl font-bold text-zinc-500">
            Zustand Playground
          </h1>
          <h2 className="text-2xl font-bold text-zinc-500">Name: {name}</h2>
          <h2 className="text-2xl font-bold text-zinc-500">Grade: {grade}</h2>
          <div>
            <Button
              variant="outline"
              className="mt-10"
              onClick={incrementGrade}
            >
              Increment Grade
            </Button>
            <Button
              variant="outline"
              className="mt-10"
              onClick={decrementGrade}
            >
              Decrement Grade
            </Button>
            <Button variant="outline" className="mt-10" onClick={resetGrade}>
              Reset Grade
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import reactLogo from "../assets/react.svg";

export const Header = () => {
  return (
    <div className=" h-96 flex flex-col justify-center items-center bg-slate-700">
      <a href="https://react.dev" target="_blank" className="mb-4">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1 className=" text-2xl">Pokemon App Example</h1>
    </div>
  );
};

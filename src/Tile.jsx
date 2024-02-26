export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-8 w-8 bg-indigo-300 text-center w-full h-full rounded-lg"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-block h-8 w-8 bg-indigo-500 text-white flex items-center rounded-lg w-full h-full">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "80%",
              verticalAlign: "top",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-block h-8 w-8 text-indigo-200 flex w-full h-full items-center justify-center">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "80%",
              verticalAlign: "top",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return <div onClick={flip} className={className}></div>;
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}

import "./styles.css";

export default function App() {
  const onChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const debounce = (cb, delay = 500) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const debouncedHandler = debounce(onChangeHandler, 2000);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" onChange={debouncedHandler} />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

function CountPlus(props) {
  return(
    <div>
  <button onClick={props.onIncrease} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg w-full">+</button>
  </div>
  );
}

export default CountPlus;
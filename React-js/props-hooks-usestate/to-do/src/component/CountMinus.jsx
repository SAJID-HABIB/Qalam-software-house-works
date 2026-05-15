function Decrease(props) {
  return (
    <div className="decre">
      <button onClick={props.decrement}   className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg w-full"
    >-</button>
      </div>
  )
}

export default Decrease;
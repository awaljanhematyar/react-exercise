function Card() {
  return (
    <div
      className="
w-80

bg-white
dark:bg-slate-900

text-black
dark:text-white

rounded-xl
p-5

shadow-xl

transition-colors
duration-300

">
      <img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        className="
w-full
h-40
object-cover
rounded-md
"
      />

      <h2
        className="
mt-5
text-lg
font-bold
">
        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
      </h2>

      <div className="flex items-center gap-2 mt-3">
        <span className="text-yellow-400">★★★★☆</span>

        <span
          className="
bg-blue-400
text-black
px-2
rounded
">
          4.0
        </span>
      </div>

      <div
        className="
flex
justify-between
items-center
mt-5
">
        <h1 className="text-2xl font-bold">$599</h1>

        <button
          className="
bg-blue-600
text-white

px-4
py-2

rounded-lg

hover:bg-blue-700

">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;

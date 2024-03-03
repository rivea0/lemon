export default function ColorDropdown({ title }: { title: string }) {
  return (
    <div className="dropdown mb-6 w-full">
      <div
        tabIndex={0}
        role="button"
        className="flex items-center gap-2 p-2 border border-neutral-500/50 hover:border-yellow-500/50 focus:border-yellow-500/50 rounded-md m-1 bg-transparent w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
        <span>{title}</span>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] bg-base-100 w-full">
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-red-300/20 label cursor-pointer flex justify-between">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-red-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Red
              </span>
              <input
                type="radio"
                name="id_color"
                value="red"
                className="radio checked:bg-red-400"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-orange-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-orange-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Orange
              </span>
              <input
                type="radio"
                name="id_color"
                value="orange"
                className="radio checked:bg-orange-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-amber-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-amber-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Amber
              </span>
              <input
                type="radio"
                name="id_color"
                value="amber"
                className="radio checked:bg-amber-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-yellow-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-yellow-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Yellow
              </span>
              <input
                type="radio"
                name="id_color"
                value="yellow"
                className="radio checked:bg-yellow-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-lime-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-lime-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Lime
              </span>
              <input
                type="radio"
                name="id_color"
                value="lime"
                className="radio checked:bg-lime-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-green-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-green-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Green
              </span>
              <input
                type="radio"
                name="id_color"
                value="green"
                className="radio checked:bg-green-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-emerald-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-emerald-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Emerald
              </span>
              <input
                type="radio"
                name="id_color"
                value="emerald"
                className="radio checked:bg-emerald-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-teal-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-teal-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Teal
              </span>
              <input
                type="radio"
                name="id_color"
                value="teal"
                className="radio checked:bg-teal-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-cyan-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-cyan-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Cyan
              </span>
              <input
                type="radio"
                name="id_color"
                value="cyan"
                className="radio checked:bg-cyan-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-sky-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-sky-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Sky
              </span>
              <input
                type="radio"
                name="id_color"
                value="sky"
                className="radio checked:bg-sky-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-blue-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-blue-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Blue
              </span>
              <input
                type="radio"
                name="id_color"
                value="blue"
                className="radio checked:bg-blue-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-indigo-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-indigo-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Indigo
              </span>
              <input
                type="radio"
                name="id_color"
                value="indigo"
                className="radio checked:bg-indigo-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-violet-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-violet-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Violet
              </span>
              <input
                type="radio"
                name="id_color"
                value="violet"
                className="radio checked:bg-violet-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-purple-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-purple-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Purple
              </span>
              <input
                type="radio"
                name="id_color"
                value="purple"
                className="radio checked:bg-purple-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-fuchsia-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-fuchsia-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Fuchsia
              </span>
              <input
                type="radio"
                name="id_color"
                value="fuchsia"
                className="radio checked:bg-fuchsia-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-pink-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-pink-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Pink
              </span>
              <input
                type="radio"
                name="id_color"
                value="pink"
                className="radio checked:bg-pink-400 group"
              />
            </label>
          </div>
        </li>
        <li>
          <div className="form-control" tabIndex={0}>
            <label className="has-[:checked]:bg-rose-300/25 label cursor-pointer">
              <span className="label-text inline-flex gap-2">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0 rounded-full fill-rose-400"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                Rose
              </span>
              <input
                type="radio"
                name="id_color"
                value="rose"
                className="radio checked:bg-rose-400 group"
              />
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default function ActionButtons() {
  return (
    <>
      <ul className="flex gap-8 mt-4 justify-center items-center portrait:gap-4 portrait:items-end">
        <li className="basis-0">
          <button>
            <input
              type="radio"
              id="not-completed"
              name="status"
              value="not-completed"
              className="hidden peer"
            />
            <label htmlFor="not-completed" className="cursor-pointer">
              <div className="flex flex-col gap-2 portrait:self-center">
                <div
                  className={`p-0.5 rounded bg-gradient-to-r from-red-300 via-red-500 to-red-700 hover:from-red-100 hover:via-red-300 hover:to-red-500`}
                >
                  <div className=" h-full w-full bg-base-200 py-4 px-8 portrait:p-2">
                    <div className="flex flex-col items-center text-base-content">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <span>Not completed</span>
              </div>
            </label>
          </button>
        </li>
        <li className="basis-0">
          <button>
            <input
              type="radio"
              id="completed"
              name="status"
              value="completed"
              className="hidden peer"
            />
            <label htmlFor="completed" className="cursor-pointer px-2">
              <div className="flex flex-col gap-2 portrait:self-center">
                <div
                  className={`p-0.5 rounded bg-gradient-to-r from-green-300 via-green-500 to-green-700 hover:from-green-100 hover:via-green-300 hover:to-green-500`}
                >
                  <div className=" h-full w-full bg-base-200 py-4 px-8 portrait:p-2">
                    <div className="flex flex-col items-center text-base-content">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <span>Completed</span>
              </div>
            </label>
          </button>
        </li>
        <li className="basis-0">
          <button>
            <input
              type="radio"
              id="postponed"
              name="status"
              value="postponed"
              className="hidden peer"
            />
            <label htmlFor="postponed" className="cursor-pointer px-2">
              <div className="flex flex-col gap-2 portrait:self-center">
                <div
                  className={`p-0.5 rounded bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 hover:from-orange-100 hover:via-orange-300 hover:to-orange-500`}
                >
                  <div className=" h-full w-full bg-base-200 py-4 px-8 portrait:p-2">
                    <div className="flex flex-col items-center text-base-content">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <span>Postponed</span>
              </div>
            </label>
          </button>
        </li>
      </ul>
    </>
  );
}

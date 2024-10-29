import React from 'react'

const Send = () => {
  return <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
          <div
              className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-xl rounded-lg"
          >
              <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-3xl font-bold text-center">Send Money</h2>
              </div>
              <div className="p-6">
              <div className="flex items-center space-x-4 pb-3">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-2xl text-white">A</span>
                  </div>
                  <h3 className="text-2xl font-semibold">Friend's Name</h3>
              </div>
              <div className="space-y-4">
                  <div className="space-y-2">
                  <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="amount"
                  >
                      Amount (in Rs)
                  </label>
                  <input
                      type="number"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      id="amount"
                      placeholder="Enter amount"
                  />
                  </div>
                  <button className="text-white w-full bg-green-500 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-950 dark:hover:bg-green-950 dark:focus:ring-green-900 dark:border-gray-700">
                      Initiate Transfer
                  </button>
              </div>
              </div>
      </div>
    </div>
  </div>
}

export default Send

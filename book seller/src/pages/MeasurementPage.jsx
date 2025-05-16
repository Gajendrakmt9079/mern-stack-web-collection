import React from 'react'

function MeasurementPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Measurement Guide</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Follow these simple steps to ensure accurate measurements for your blinds and curtains.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                1. Choose Mount Type
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Decide whether you want an inside mount (within the window frame) or outside mount (on the wall or trim).
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                2. Measure Width
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  For inside mount: Measure the width at three points - top, middle, and bottom. Use the smallest measurement.
                  For outside mount: Measure the width you want to cover, adding 3-4 inches on each side.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                3. Measure Height
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  For inside mount: Measure the height at three points. Use the longest measurement.
                  For outside mount: Measure from where you want the treatment to start to where you want it to end.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default MeasurementPage
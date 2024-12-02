function Indicator({ number }: { number: number }) {
  const category =
    number < 0.3
      ? "red"
      : number < 0.7
        ? "orange"
        : number >= 0.7
          ? "emerald"
          : "gray"

  const getBarClass = (index: number) => {
    switch (category) {
      case "red":
        return index < 1
          ? "bg-red-500 dark:bg-red-500"
          : "bg-gray-300 dark:bg-gray-800"
      case "orange":
        return index < 2
          ? "bg-orange-500 dark:bg-orange-500"
          : "bg-gray-300 dark:bg-gray-800"
      case "emerald":
        return "bg-emerald-500 dark:bg-emerald-500"
      default:
        return "bg-gray-300 dark:bg-gray-800"
    }
  }

  return (
    <div className="flex gap-0.5">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`h-3.5 w-1 rounded-sm ${getBarClass(index)}`}
        />
      ))}
    </div>
  )
}

const metrics = [
  {
    label: "Lead-to-Quote Ratio",
    value: 0.61,
    percentage: "59.8%",
    fraction: "450/752",
  },
  {
    label: "Project Load",
    value: 0.24,
    percentage: "12.9%",
    fraction: "129/1K",
  },
  {
    label: "Win Probability",
    value: 0.8,
    percentage: "85.1%",
    fraction: "280/329",
  },
]

export function MetricsCards() {
  return (
    <>
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Overview
      </h1>
      <dl className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-8">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <dt className="text-sm text-gray-500 dark:text-gray-500">
              {metric.label}
            </dt>
            <dd className="mt-1.5 flex items-center gap-2">
              <Indicator number={metric.value} />
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                {metric.percentage}{" "}
                <span className="font-medium text-gray-400 dark:text-gray-600">
                  - {metric.fraction}
                </span>
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </>
  )
}

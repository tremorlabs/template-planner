import { cx } from "@/lib/utils";
import { formatters } from "@/lib/utils";
import { TooltipProps } from "./BarChart";
import { TooltipProps as TooltipComboBarChartProps } from "./ComboChart";

export const CustomTooltip = ({ payload, active }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;

  const calculatePercentageDiff = () => {
    if (payload.length < 2) return null;

    const firstValue = payload[1].value;
    const secondValue = payload[0].value;

    if (isNaN(firstValue) || isNaN(secondValue) || firstValue === 0)
      return null;

    const percentageDiff = ((secondValue - firstValue) / firstValue) * 100;
    const sign = percentageDiff > 0 ? "+" : "";
    return `${sign}${percentageDiff.toFixed(1)}%`;
  };

  const percentageDiff = calculatePercentageDiff();

  return (
    <div className="w-56 flex items-start justify-between rounded-md border border-gray-200 bg-white p-2 text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="space-y-2">
        {payload.map((category, index) => (
          <div key={index} className="flex space-x-2.5">
            <span
              className={cx(
                index === 1
                  ? // @CHRIS: add dark mode
                    "bg-[repeating-linear-gradient(-45deg,theme(colors.gray.300)_0px,theme(colors.gray.300)_2px,theme(colors.gray.400)_2px,theme(colors.gray.400)_4px)] dark:bg-gray-700"
                  : `bg-${category.color}-500 dark:bg-${category.color}-500`,
                "w-1 rounded"
              )}
              aria-hidden={true}
            />
            <div className="space-y-0.5">
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {category.category}
              </p>
              <p className="font-medium text-gray-900 dark:text-gray-50">
                {category.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {percentageDiff && (
        <span
          className={cx(
            parseFloat(percentageDiff) >= 0
              ? "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-400/20"
              : "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-400/20",
            "text-xs font-medium px-1.5 py-1 rounded"
          )}
        >
          <p>{percentageDiff}</p>
        </span>
      )}
    </div>
  );
};

export const CustomTooltip2 = ({
  payload,
  active,
}: TooltipComboBarChartProps) => {
  if (!active || !payload || payload.length === 0) return null;

  const data = payload[0].payload;
  const ratio = (data["Quotes"] / data["Total deal size"]) * 100;

  // @SEV: couldn't make it indexable -> would look smoother, e.g.: const ratio = data[0] / data[1];
  // + @SEV: error hint in tooltip prop in <ComboChart /> -> mirrored your docs tooltip example

  const categoriesToShow = ["Quotes", "Total deal size"];

  return (
    <div className="w-56 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <ul role="list" className="p-2 grid grid-cols-2 gap-x-4">
        {categoriesToShow.map((category, idx) => (
          <li key={idx} className="flex space-x-2.5">
            <span
              className={cx(
                category === "Quotes"
                  ? "bg-blue-500 dark:bg-blue-500"
                  : "bg-gray-300 dark:bg-gray-700",
                "w-1 rounded"
              )}
              aria-hidden={true}
            />
            <div className="space-y-0.5">
              <p className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">
                {category}
              </p>
              <p className="font-medium text-gray-900 dark:text-gray-50">
                {category === "Quotes"
                  ? formatters.unit(data[category])
                  : formatters.currency({
                      number: data[category],
                      maxFractionDigits: 0,
                    })}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="p-2 border-t border-gray-200 dark:border-gray-800">
        <p className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-400/20 text-xs inline-flex justify-center w-full px-1.5 py-1 rounded">
          {/* @CHRIS: maybe complement with icons */}
          {ratio > 0.3
            ? "Critical ratio"
            : ratio > 0.25
            ? "Moderate ratio"
            : ratio > 0.22
            ? "Average ratio"
            : "Good ratio"}
        </p>
      </div>
    </div>
  );
};

export const CustomTooltip3 = ({ payload, active }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;

  const calculatePercentageDiff = () => {
    const firstValue = payload[0].value;
    const peerAverage = 6.5;

    if (isNaN(firstValue) || firstValue === 0) return null;

    const percentageDiff = ((firstValue - peerAverage) / peerAverage) * 100;
    const sign = percentageDiff > 0 ? "+" : "";
    return `${sign}${percentageDiff.toFixed(1)}%`;
  };

  // @SEV/CHRIS: double check whether it can be further simplified
  const percentageDiff = calculatePercentageDiff();
  const parsedValue = parseFloat(percentageDiff || "0");

  // capped Value, such that marker bar cannot be bigger than 100%
  const cappedValue = Math.min(Math.max(parsedValue, -100), 100);

  return (
    <div className="w-56 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <ul role="list" className="p-2 grid grid-cols-2 gap-x-4">
        {payload.map((category, index) => (
          <li key={index} className="flex space-x-2.5">
            <span
              className={cx(
                index === 1
                  ? "bg-emerald-300 dark:bg-emerald-700"
                  : `bg-${category.color}-500 dark:bg-${category.color}-500`,
                "w-1 rounded"
              )}
              aria-hidden={true}
            />
            <div className="space-y-0.5">
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {category.category}
              </p>
              <p className="font-medium text-gray-900 dark:text-gray-50">
                {category.value}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="p-2 border-t border-gray-200 dark:border-gray-800">
        <div className="mt-0.5 relative w-full bg-gray-200 h-1.5 rounded-full">
          <span className="absolute z-30 left-1/2 h-2.5 w-0.5 rounded-full bg-gray-500 dark:bg-gray-500 -translate-y-1/2 top-1/2" />
          {percentageDiff &&
            (parseFloat(percentageDiff) >= 0 ? (
              <span className="absolute z-10 left-1/2 h-1.5 w-1/2 -translate-y-1/2 top-1/2">
                <span
                  style={{ width: `${cappedValue}%` }}
                  className="absolute h-1.5 rounded-r-full bg-gradient-to-r from-gray-400 to-gray-300"
                  // @CHRIS: dark mode
                  // @CHRIS: check simpler approach for 100% cap approach
                  // className="absolute h-1.5 rounded-r-full bg-[repeating-linear-gradient(-45deg,theme(colors.gray.400)_0px,theme(colors.gray.400)_2px,theme(colors.gray.300)_2px,theme(colors.gray.300)_4px)]"
                />
              </span>
            ) : (
              <span className="absolute z-10 right-1/2 h-1.5 w-1/2 -translate-y-1/2 top-1/2">
                <span
                  style={{ width: `${cappedValue}%` }}
                  className="absolute h-1.5 right-0 rounded-l-full bg-gradient-to-l from-gray-400 to-gray-300"
                  // @CHRIS: dark mode
                  // className="absolute h-1.5 right-0 rounded-l-full bg-[repeating-linear-gradient(-45deg,theme(colors.gray.400)_0px,theme(colors.gray.400)_2px,theme(colors.gray.300)_2px,theme(colors.gray.300)_4px)]"
                />
              </span>
            ))}
        </div>
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center">
            <span
              className="mr-1 w-2.5 h-0.5 rounded-full bg-gray-500 dark:bg-gray-500"
              aria-hidden="true"
            />
            <span className="text-xs text-gray-500 dark:text-gray-500">
              Peer avg.
            </span>
          </div>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            {percentageDiff}
          </span>
        </div>
      </div>
    </div>
  );
};

export const CustomTooltip4 = ({ payload, active }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;

  const peerAverage = 0.75;

  const calculateDiff = () => {
    const difference = payload[0].value - peerAverage;
    const sign = difference > 0 ? "+" : "";
    return `${sign}${formatters.percentage({ number: difference })}`;
  };

  const peerDifference = calculateDiff();

  return (
    <div className="w-56 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <ul role="list" className="p-2 grid grid-cols-2 gap-x-4">
        <li className="flex space-x-2.5">
          <span
            className={cx(
              `bg-${payload[0].color}-500 dark:bg-${payload[0].color}-500`,
              "w-1 rounded"
            )}
            aria-hidden={true}
          />
          <div className="space-y-0.5">
            <p className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">
              {payload[0].category}
            </p>
            <p className="font-medium text-gray-900 dark:text-gray-50">
              {formatters.percentage({ number: payload[0].value })}
            </p>
          </div>
        </li>
        <li className="flex space-x-2.5">
          <span
            className="bg-gray-400 dark:bg-gray-600 w-1 rounded"
            aria-hidden={true}
          />
          <div className="space-y-0.5">
            <p className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">
              Benchmark
            </p>
            <p className="font-medium text-gray-900 dark:text-gray-50">
              {/* dummy values for showcase */}
              {formatters.percentage({ number: peerAverage })}
            </p>
          </div>
        </li>
      </ul>
      <div className="p-2 border-t border-gray-200 dark:border-gray-800">
        <p className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-400/20 text-xs inline-flex justify-center w-full px-1.5 py-1 rounded">
          <span className="mr-1">{peerDifference}</span>
          {parseFloat(peerDifference) > 0
            ? "above benchmark"
            : parseFloat(peerDifference) === 0
            ? "same as benchmark"
            : "below benchmark"}
        </p>
      </div>
    </div>
  );
};

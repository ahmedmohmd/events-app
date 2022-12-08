import { useRouter } from "next/router";
import { FC, FormEvent, useState } from "react";

const years: number[] = [
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
  2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
];

const months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const SelectList: FC = () => {
  const { push } = useRouter();
  const [month, setMonth] = useState<number>(1);
  const [year, setYear] = useState<number>(2000);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    push(`/filtered-events/${month}/${year}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-3 pt-16 pb-4"
    >
      <div>
        <label htmlFor="month"></label>
        <select
          id="month"
          onChange={(event: any) => setMonth(event.target.value)}
          className="flex items-center justify-center w-20 h-10 font-semibold text-orange-600 border-2 rounded-lg outline-none focus:border-orange-500 border-slate-300"
        >
          {months.map((month) => (
            <option key={month} value={month.toString()}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="year"></label>
        <select
          id="year"
          onChange={(event: any) => setYear(event.target.value)}
          className="flex items-center justify-center w-20 h-10 font-semibold text-orange-600 border-2 rounded-lg outline-none focus:border-orange-500 border-slate-300"
        >
          {years.map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 px-4 py-3 ml-5 text-sm font-semibold text-white transition-all bg-gray-800 border border-transparent rounded-xl hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
      >
        Search
      </button>
    </form>
  );
};

export default SelectList;

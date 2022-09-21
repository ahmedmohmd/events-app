import { useRouter } from "next/router";
import { FC, FormEvent, useState } from "react";

const SelectList: FC = () => {
  const { push } = useRouter();
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    push(`/filtered-events/${month}/${year}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="month"></label>
        <select
          id="month"
          onChange={(event: any) => setMonth(event.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>

      <div>
        <label htmlFor="year"></label>
        <select
          id="year"
          onChange={(event: any) => setYear(event.target.value)}
        >
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SelectList;

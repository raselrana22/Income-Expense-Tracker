import { NavLink } from "react-router-dom";
import Layout from "../layout/Layout";

// Create a new Date object
const currentDate = new Date();
// Array to map month names
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// Get the month (0 - 11) and use it to retrieve the month name from the array
const month = monthNames[currentDate.getMonth()];

// Get the full year (e.g., 2023)
const year = currentDate.getFullYear();

const HomePage = () => {
  return (
    <Layout>
      <div>
        <h4 className='text-xl text-center font-bold underline my-3'>Status</h4>
        <div className='flex items-center justify-center'>
          <div className='w-[350px] border border-black shadow-lg'>
            <div className='flex justify-between m-3'>
              <span>Month: {month}</span>
              <span>Year: {year}</span>
            </div>
            {/* <div className='flex justify-between m-3 font-bold'>
              <span>Income: $50000</span>
              <span>Expense: $ 30000</span>
            </div>
            <div className='flex justify-center items-center font-bold'>
              <p>Current Balanced: $20000</p>
            </div> */}
            <div className='flex justify-between mx-3 my-4'>
              <NavLink
                to={"/income"}
                className='border border-black p-1 rounded m-2
             hover:scale-105 hover:bg-black hover:text-white'
              >
                Add Income
              </NavLink>
              <NavLink
                to={"/expense"}
                className='border border-black p-1 rounded m-2
             hover:scale-105 hover:bg-black hover:text-white'
              >
                Add Expense
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

import { useState } from "react";

const ExpenseInput = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const getCurrentTime = () => {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  const currentDate = getCurrentDate();
  const currentTime = getCurrentTime();

  const initialFormData = {
    date: currentDate.toString(),
    time: currentTime.toString(),
    amount: "",
    note: "",
  };

  const [formData, setFormData] = useState([]);
  const [inputData, setInputData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = () => {
    if (
      inputData.date &&
      inputData.time &&
      inputData.amount &&
      inputData.note
    ) {
      setFormData((prevData) => [...prevData, { ...inputData }]);
      setInputData(initialFormData);
    }
  };

  const sortedFormData = formData.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateB - dateA; // Sort in descending order
  });

  // Calculate total expense
  const totalExpense = formData.reduce((total, expense) => {
    return total + Number(expense.amount);
  }, 0);

  return (
    <div className='flex justify-between'>
      <div className='w-2/3 mx-3 my-3'>
        <div className='mt-8'>
          <div className='text-xl font-bold mb-4'>Your Expenses:</div>
          {sortedFormData.length > 0 ? (
            <table className='border border-black w-full'>
              <thead>
                <tr>
                  <th className='border border-black p-2'>Date</th>
                  <th className='border border-black p-2'>Time</th>
                  <th className='border border-black p-2'>Amount</th>
                  <th className='border border-black p-2'>Note</th>
                </tr>
              </thead>
              <tbody>
                {sortedFormData.map((expense, index) => (
                  <tr key={index}>
                    <td className='border border-black p-2'>{expense.date}</td>
                    <td className='border border-black p-2'>{expense.time}</td>
                    <td className='border border-black p-2'>
                      ${expense.amount}
                    </td>
                    <td className='border border-black p-2'>{expense.note}</td>
                  </tr>
                ))}
                <div className='text-xl font-bold flex justify-center items-center'>
                  <tr>Total Expense: ${totalExpense}</tr>
                </div>
              </tbody>
            </table>
          ) : (
            <p>No expenses added yet.</p>
          )}
        </div>
      </div>
      <div className='w-1/3 my-3'>
        <div className='mx-3 my-2'>
          <div className='text-xl font-bold'>
            <p>Expense Input</p>
          </div>
          <div className='mt-4'>
            <label htmlFor='date' className='block mb-1'>
              Date:
            </label>
            <input
              type='date'
              name='date'
              value={inputData.date}
              onChange={handleChange}
              className='border w-full p-2'
            />
          </div>
          <div className='mt-4'>
            <label htmlFor='time' className='block mb-1'>
              Time:
            </label>
            <input
              type='time'
              name='time'
              value={inputData.time}
              onChange={handleChange}
              className='border w-full p-2'
            />
          </div>
          <div className='mt-4'>
            <label htmlFor='amount' className='block mb-1'>
              Amount:
            </label>
            <input
              type='number'
              name='amount'
              value={inputData.amount}
              onChange={handleChange}
              className='border w-full p-2'
            />
          </div>
          <div className='mt-4'>
            <label htmlFor='note' className='block mb-1'>
              Note:
            </label>
            <textarea
              name='note'
              value={inputData.note}
              onChange={handleChange}
              className='border w-full p-2'
              rows={3}
            />
          </div>
          <div className='mt-4'>
            <button
              onClick={handleClick}
              className='bg-blue-500 text-white px-4 py-2 rounded-lg'
            >
              Add Entry
            </button>
            <button
              onClick={() => setInputData(initialFormData)}
              className='ml-2 bg-red-500 text-white px-4 py-2 rounded-lg'
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInput;

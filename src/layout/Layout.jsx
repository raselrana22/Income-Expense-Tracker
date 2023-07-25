import PropTypes from "prop-types";

const Layout = (props) => {
  return (
    <div
      className='z-0 absolute top-0 left-0 w-screen 
                h-screen bg-gradient-to-r from-cyan-500 to-blue-500'
    >
      <h1 className='text-3xl text-center font-bold underline mb-1'>
        Income Expense Tracker
      </h1>
      {props.children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

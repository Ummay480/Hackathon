const Tabs = () => {
  return (
    <div className="mt-12">
      <div className="border-b">
        <button className="text-gray-700 font-medium px-4 py-2 border-b-2 border-black">
          Description
        </button>
        <button className="text-gray-500 px-4 py-2 hover:text-gray-700">
          Additional Information
        </button>
        <button className="text-gray-500 px-4 py-2 hover:text-gray-700">
          Reviews (5)
        </button>
      </div>

      <div className="mt-6 text-gray-700">
        <p>
          Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the Kilburn...
        </p>
      </div>
    </div>
  );
};

export default Tabs;

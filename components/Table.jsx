const Table = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b-4">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-normal text-gray-400 px-6 py-4"
                  >
                    RATING
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-normal text-gray-400 px-6 py-4"
                  >
                    APPLICATION NAME
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-normal text-gray-400 px-6 py-4"
                  >
                    HIRING PIPELINE
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-normal text-gray-400 px-6 py-4"
                  >
                    APPLICATION STATUS
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-normal text-gray-400 px-6 py-4"
                  >
                    APPLICATION ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-normal text-gray-400 px-6 py-4"
                  >
                    POSTING TITLE
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

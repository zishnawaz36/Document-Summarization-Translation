function Contact() {
  return (
    <div className="bg-gray-100 text-gray-900 p-6">
      {/* Main Heading */}
      <h1 className="text-center font-bold text-3xl mb-6">Contact Information</h1>

      <div className="max-w-4xl mx-auto">
        {/* Mentor Section */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-bold text-center mb-2">Our Respected Mentor</h2>
          <p className="text-center">
            <strong>Ms. Sayani Manna</strong>
          </p>
        </div>

        {/* Contact Table */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Team Members</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Sayani Manna</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="mailto:sayanimanna1309@gmail.com" className="text-blue-500 hover:underline">
                    sayanimanna1309@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Ayan Patra</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="mailto:ayanpatra0001@gmail.com" className="text-blue-500 hover:underline">
                    ayanpatra0001@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Zeeshan Nawaz</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="mailto:zishnawaz36@gmail.com" className="text-blue-500 hover:underline">
                    zishnawaz36@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Md. Ilham Ansari</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="mailto:ansariilham5@gmail.com" className="text-blue-500 hover:underline">
                    ansariilham5@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Shreya Sarkar</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="mailto:shreyasarkar0033@gmail.com" className="text-blue-500 hover:underline">
                    shreyasarkar0033@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Riya Kumari Shah</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="mailto:shahriyakumari387@gmail.com" className="text-blue-500 hover:underline">
                    shahriyakumari387@gmail.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Affiliations Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">Affiliations</h2>
          <p>
            <strong>B.Tech. Students:</strong> Department of Information Technology, Maulana Abul Kalam Azad
            University of Technology, West Bengal, NH-12 (Old NH-34), Simhat, Haringhata, Nadia 741249, West Bengal
          </p>
          <p className="mt-4">
            <strong>Assistant Professor:</strong> Ms. Sayani Manna, Department of Information Technology, Maulana
            Abul Kalam Azad University of Technology, West Bengal, NH-12 (Old NH-34), Simhat, Haringhata, Nadia 741249,
            West Bengal
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

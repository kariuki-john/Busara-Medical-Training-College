import React, { useState } from 'react';

const ApplyForm = () => {
  const courses = [
    "Pre-University course",
    "Caregiver Certificate",
    "Diploma In Kenya Registered Community Health Nursing",
    "Certificate in Healthcare Support Assistant",
    "Certificate In Perioperative Theatre Technology",
    "Diploma In Perioperative Theatre Technology",
    "Certificate in Health Records & IT",
    "Diploma in Health Records & IT",
    "Bridging Courses for Biology",
    "Bridging Courses for Chemistry",
    "Bridging Courses for Mathematics",
    "Computer Packages (10 Packages)",
    "Graphic Design (Photoshop, Illustrator, In-design, Pagemaker, CoreDraw)",
    "Computer Networking",
    "Webdesign (HTML, CSS, Javascript, PHP)",
    "Computer Programming (Pascal, C, C++, Visual Basic, Java, Python)",
    "Computerized Accounting Packages (QuickBooks, Sage, Tally, Pastel)",
    "Digital Marketing",
    "Mobile Phone Repair",
    "Computer Aided Design - CAD (AutoCAD, ArchiCAD)",
    "Advanced Exce",
    "Computer Repair & Maintenance",
    "CCTV installation",
    "CCTV Managemen",
    "Information Management",
    "Library Archives"
  ];

  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    email: '',
    phone: '',
    course: '',
    certification: null,
    idDocument: null,
    briefInformation: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic ( API call)
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className='bg-backgroundcolor'>
    <div className="w-fit mx-auto p-4 ">
      <div className='bg-white rounded-lg shadow-md py-4 p-5'>
      <h1 className="text-2xl font-extrabold mb-4 flex justify-center text-headercolor">APPLICATION FORM</h1>
      <p className='font-bold text-headercolor p-5'>You are about to start your online application. We are excited to accompany you on your academic journey.</p>
      <span className='text-lg font-bold text-headercolor flex justify-center'>Please ensure you have the following documents ready for upload:</span>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 m-5 bg-white p-5 rounded-3xl ">
        <div className="space-y-2">
          <label className="block font-semibold">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded required"
              required
            />
          </label>
          <label className="block font-semibold">
            ID Number:
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded required"
              required
            />
          </label>
          <label className="block font-semibold">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded required"
              required
            />
          </label>
          <label className="block font-semibold">
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded required"
              required
            />
          </label>
          <label className="block font-semibold">
            Course to Attend:
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded required"
              required
            >
              <option value="" disabled>Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>{course.replace('_', ' ')}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="space-y-2">
          <label className="block font-semibold">
            Scanned Certification Document:
            <input
              type="file"
              name="certification"
              onChange={handleFileChange}
              className="block w-full mt-1 required"
              accept=".pdf,.jpg,.jpeg,.png"
              required
            />
          </label>
          <label className="block font-semibold">
            Scanned ID Document:
            <input
              type="file"
              name="idDocument"
              onChange={handleFileChange}
              className="block w-full mt-1 required"
              accept=".pdf,.jpg,.jpeg,.png"
              required
            />
          </label>
        </div>

        
        <div className="space-y-2">
          <label className="block font-semibold">
            Brief Information of Course You Intend to Take:
            <textarea
              name="briefInformation"
              value={formData.personalStatement}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded "
              rows="4"
              required
            />
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-primary w-36 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ApplyForm;

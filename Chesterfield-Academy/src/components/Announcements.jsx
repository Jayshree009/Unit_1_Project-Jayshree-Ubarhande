import { useState } from 'react';


function Announcements() {
  const [input, setInput] = useState('');
  const [announcements, setAnnouncements] = useState([]);

  const handleAdd = () => {
    if (input.trim() !== '') {
      setAnnouncements([...announcements, input.trim()]);
      setInput('');
    }
  };

  const handleDelete = (index) => {
    const newList = announcements.filter((_, i) => i !== index);
    setAnnouncements(newList);
  };

  return (
    <section className="container my-5">
      <h2 className="mb-3">Admin Announcements</h2>

      <div className="mb-3 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter announcement"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleAdd}>Post</button>
       
      </div>

      <ul className="list-group">
        {announcements.map((note, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {note}
            <button className="btn btn-sm btn-warning" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Announcements;

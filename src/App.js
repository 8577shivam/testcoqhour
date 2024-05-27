import { useEffect, useState } from 'react';
import './App.css';
import PatientData from './Components/PatientData';
import PatientList from './Components/PatientList';
import PatientProfile from './Components/PatientProfile';
import Navbar from './Components/Navbar';

function App() {
  // https://xd.adobe.com/view/121254c9-532f-4772-a1ba-dfe529a96b39-4741/specs/
  const [data, setData] = useState(null);
  const [patientList, setPatientList] = useState([]);
  const [patientData, setPatientData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
        const apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';
        const username = 'coalition';
        const password = 'skills-test'; 
        const credentials = btoa(`${username}:${password}`);
        try {
          const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Basic ${credentials}`,
            },
          });
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              const data = await response.json();
              setData(data);
              const patientList = data?.map(({ name, gender, age,profile_picture }) => ({ name, gender, age,profile_picture }));
              const patientDatafilter=data.filter((item)=>item.name==="Jessica Taylor")
              setPatientList(patientList)
              setPatientData(patientDatafilter)
              console.log(patientList,"datatattat")
              
          } catch (error) {
              setError(error.message);
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, []);

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error}</div>;
  }


  return (
    <div className="App">
      <Navbar/>
      <div className='SectionsBody'>
      <PatientList list={patientList} />
      <PatientData data={patientData} />
      <PatientProfile profileData={patientData} />
      </div>
    </div>
  );
}

export default App;

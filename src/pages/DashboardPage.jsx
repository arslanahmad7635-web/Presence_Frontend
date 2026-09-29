import api from '../services/axios';


export default function DashboardPage() {

  async function checkAuthorization() {
    
    try {
      // Make the login request
      const response = await api.get(`/authentication/check_user_authentication`);
  
      // Handle the response
      console.log("Login successful:", response.data);

      setLoading(false);


    } catch (error) {
      // Handle errors
      console.error("Login failed:", error.response ? error.response.data : error.message);

    }
  }

  return (
    <div className="min-h-screen pt-32 px-6 text-center">
      <h1 className="text-4xl font-bold text-white">Dashboard</h1>
      <p className="text-slate-300 mt-4">Attendance insights and system activity will appear here.</p>
      <button onClick={checkAuthorization} className='w-40 h-20 mt-20 bg-emerald-600'>Check Auth</button>
    </div>
  );
}

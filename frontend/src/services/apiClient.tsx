
import axios from "axios";

// ניצור מופע של axios עם הגדרות קבועות
const apiClient = axios.create({
  baseURL: "http://localhost:5000/api", // הכתובת של ה־backend שלך
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors – מאפשרים להוסיף טוקן או לטפל בשגיאות גלובלית
apiClient.interceptors.request.use(
  (config) => {
    // לדוגמה: הוספת Authorization header אם יש טוקן בלוקאל־סטורג'
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    // אפשר להוסיף פה טיפול בשגיאות (כמו ניתוב ל-login אם יש 401)
    return Promise.reject(error);
  }
);

export default apiClient;
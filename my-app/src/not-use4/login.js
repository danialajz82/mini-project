import React, { useState } from "react";

function App() {
  // وضعیت ورود کاربر را نگهداری می‌کند
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // تابع برای تغییر وضعیت ورود کاربر
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // اگر کاربر وارد شده باشد، پیام خوش‌آمدگویی را نمایش دهید، در غیر این صورت فرم ثبت‌نام را نمایش دهید
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome User!</h1>
      ) : (
        <form>
          <label>
            Username:
            <input type="text" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default App;

import './AuthForm.css';

export default function RegisterForm() {
  return (
    <form className="auth-form">
      <h2>註冊 Register</h2>
      <input type="text" placeholder="姓名" required />
      <input type="email" placeholder="電子信箱" required />
      <input type="password" placeholder="密碼" required />
      <button type="submit">註冊</button>
    </form>
  );
}
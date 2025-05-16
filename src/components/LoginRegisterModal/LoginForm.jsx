import './AuthForm.css';

export default function LoginForm() {
  return (
    <form className="auth-form">
      <h2>登入 Login</h2>
      <input type="email" placeholder="電子信箱" required />
      <input type="password" placeholder="密碼" required />
      <button type="submit">登入</button>
    </form>
  );
}
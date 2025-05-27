import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function LoginForm({ onCloseModal }) {
    const { login, setUser } = useAuth();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);

        const name = "我愛礦礦"; // 可改為從輸入中讀取
        const avatar = "./images/S-NavBar/navicon_member.svg";
        login();
        setUser({ name, avatar });
        alert('登入成功！歡迎回來 👋');

        if (onCloseModal) onCloseModal();
        setIsSubmitting(false);
    };

    return (
        <form className="auth-form login-form" onSubmit={handleLoginSubmit}>
            <div className="social-login">
                <a href="#"><img src="./images/LoginRegister/btn-google.svg" alt="Google" /></a>
                <a href="#"><img src="./images/LoginRegister/btn-line.svg" alt="LINE" /></a>
            </div>

            <div className="divider"><span>或</span></div>

            <input type="email" placeholder="Email" required />
            <div className="password-group">
                <input
                    type="password"
                    name="password"
                    placeholder="密碼"
                    required
                    minLength="8"
                    title="密碼至少需 8 個字元"
                />
                <div className="hint-row">
                    <span className="hint">至少 8 個字元</span>
                    <a href="#" className="forgot">忘記密碼？</a>
                </div>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">記住我</label>
            </div>
            <div className="form-footer">
                <button type="submit" className="submit-button">開始購物</button>
            </div>
        </form>
    );
}

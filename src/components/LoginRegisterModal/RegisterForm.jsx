export default function RegisterForm({ onLoginSuccess }) {
    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('isLoggedIn', 'true'); //  註冊成功即登入
        alert('註冊成功！歡迎加入 ✨');

        if (onLoginSuccess) onLoginSuccess(); // 關閉 modal


        setIsSubmitting(false);
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <form className="auth-form" onSubmit={handleRegisterSubmit}>
            <div className="social-login">
                <a href="#"><img src="/images/LoginRegister/btn-google.svg" alt="Google" /></a>
                <a href="#"><img src="/images/LoginRegister/btn-line.svg" alt="LINE" /></a>
            </div>

            <div className="divider"><span>或</span></div>

            <input type="text" placeholder="用戶名" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="密碼" />
            <span className="hint">至少 8 個字元</span>

            <select required defaultValue="">
                <option value="" disabled hidden>性別</option>
                <option value="female">女性</option>
                <option value="male">男性</option>
                <option value="others">其他</option>
            </select>

            <div className="birthday">
                <select required defaultValue="">
                    <option value="" disabled hidden>年</option>
                    {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                    ))}
                </select>

                <select required defaultValue="">
                    <option value="" disabled hidden>月</option>
                    {months.map((m) => (
                        <option key={m} value={m}>{m}</option>
                    ))}
                </select>

                <select required defaultValue="">
                    <option value="" disabled hidden>日</option>
                    {days.map((d) => (
                        <option key={d} value={d}>{d}</option>
                    ))}
                </select>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="agree" required />
                <label htmlFor="agree">我同意網站服務條款及隱私權政策</label>
            </div>

            <div className="form-footer1">
                <button type="submit" className="submit-button">立即加入</button>
            </div>
        </form>
    );
}

export default function RegisterForm() {
    return (
        <form className="auth-form">
            <div className="social-login">
                <a href="#"><img src="/images/LoginRegister/btn-google.svg" alt="Google" /></a>
                <a href="#"><img src="/images/LoginRegister/btn-line.svg" alt="LINE" /></a>
            </div>

            <div className="divider"><span>或</span></div>

            <input type="text" placeholder="用戶名" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="密碼" />
            <span className="hint">至少 8 個字元</span>

            <select>
                <option value="">性別</option>
                <option value="female">女性</option>
                <option value="male">男性</option>
            </select>

            <div className="birthday">
                <select><option>年</option></select>
                <select><option>月</option></select>
                <select><option>日</option></select>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree">我同意網站服務條款及隱私權政策</label>
            </div>

            <button className="submit-button">立即加入</button>
        </form>
    );
}
export default function LoginForm() {
    return (
        <form className="auth-form">
            <div className="social-login">
                <a href="#"><img src="/images/LoginRegister/btn-google.svg" alt="Google" /></a>
                <a href="#"><img src="/images/LoginRegister/btn-line.svg" alt="LINE" /></a>
            </div>

            <div className="divider"><span>或</span></div>

            <input type="email" placeholder="Email" required />
            <div className="password-group">
                <input type="password" placeholder="密碼" required />
                <span className="hint">至少 8 個字元</span>
                <a href="#" className="forgot">忘記密碼？</a>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">記住我</label>
            </div>

            <button className="submit-button">開始購物</button>
        </form>
    );
}
export default function LoginForm({ onLoginSuccess }) {
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        // 模擬登入驗證（可加驗證邏輯）
        localStorage.setItem('isLoggedIn', 'true'); // 記住登入狀態
        alert('登入成功！歡迎回來 👋');

        // 關閉登入視窗
        if (onLoginSuccess) onLoginSuccess();


        setIsSubmitting(false); //防止誤點
    };


    return (
        <form className="auth-form login-form" onSubmit={handleLoginSubmit}>
            <div className="social-login">
                <a href="#"><img src="/images/LoginRegister/btn-google.svg" alt="Google" /></a>
                <a href="#"><img src="/images/LoginRegister/btn-line.svg" alt="LINE" /></a>
            </div>

            <div className="divider"><span>或</span></div>

            <input type="email" placeholder="Email" required />
            <div className="password-group">
                <input type="password" placeholder="密碼" required />
                <div className="hint-row">
                    <span className="hint">至少 8 個字元</span>
                    <a href="#" className="forgot">忘記密碼？</a>
                </div>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" id="remember">記住我</label>
            </div>
            <div className="form-footer">
                <button type="submit" className="submit-button">開始購物</button>
            </div>
        </form>
    );
}
import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './LoginRegisterTabs.css';

export default function LoginRegisterTabs() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="auth-tabs">
      <div className="tab-header">
        <button onClick={() => setActiveTab('login')} className={activeTab === 'login' ? 'active' : ''}>登入</button>
        <button onClick={() => setActiveTab('register')} className={activeTab === 'register' ? 'active' : ''}>註冊</button>
      </div>
      <div className="tab-content">
        {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}

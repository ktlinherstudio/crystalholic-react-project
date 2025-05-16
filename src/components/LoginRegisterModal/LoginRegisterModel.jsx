import Modal from './Modal';
import LoginRegisterTabs from './LoginRegisterTabs';
import './Modal.css';
import './LoginRegisterTabs.css';
import './AuthForm.css';

export default function LoginRegisterModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <LoginRegisterTabs />
    </Modal>
  );
}
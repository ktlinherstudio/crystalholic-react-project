import Modal from './Modal';
import LoginRegisterTabs from './LoginRegisterTabs';

export default function LoginRegisterModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <LoginRegisterTabs />
    </Modal>
  );
}
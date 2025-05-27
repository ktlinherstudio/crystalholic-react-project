// import CoverTest from "./CoverTest"
import { motion } from 'framer-motion';

export default function CoverFadein() {
    const FadeInComponent = () => {
        return (
            <>
                <CoverTest />
                <motion.div
                    initial={{ opacity: 0 }}         // 初始狀態：透明
                    animate={{ opacity: 1 }}         // 最終狀態：完全不透明
                    transition={{ duration: 1 }}     // 淡入時間 1 秒
                    style={{
                        background: '#e5eecc',
                        padding: '50px',
                        border: '1px solid #c3c3c3',
                        textAlign: 'center'
                    }}
                ></motion.div>
            </>
        )
    }
}
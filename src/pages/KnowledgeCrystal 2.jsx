#bg-container,
.gradient-bg {
  position: absolute;  
  left: 0;
  width: 100%;
  height: 100%;         
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.background-layer {
  background-color: white;
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 100vh;
}

body {
  background-color: white;
}

/* 內容 */
.arc-k-outer-content {
  margin-top: 20px;
  /* 額外保險的空間 */
  padding-top: 100px;
}

.category-k {
  display: flex;
  justify-content: center;
  gap: 100px;
  font-weight: 450;
  color: #A78DBB;
}

.category-k li {
  font-size: 16px;
  font-family: 'Noto Sans TC';
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 6px 14px;
  border-radius: 20px;
}

.category-k li:hover {
  border: 2px solid #A78DBB;
  background-color: rgba(167, 141, 187, 0.1);
}

.category-k li.active {
  border: 2px solid #A78DBB;
  background-color: rgba(167, 141, 187, 0.1);
  color: #8750BF;
}

.crystal-k {
  position: relative;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -80px;
}

.crystal-k h1 {
  position: absolute;
  z-index: 1;
  font-family: 'Lora', 'Georgia', serif;
  font-size: 160px;
  color: #5750AD;
  opacity: 0.16;
  letter-spacing: 2px;
  font-style: italic;
  text-align: center;
  width: 100%;
}

.crystal-k-img {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 325px;
  margin-top: 176px;
}

.crystal-k-arrow {
  width: 50px;
  height: 50px;
}

.crystal-k-center {
  width: 150px;
  height: 150px;
}

.arc-k-inner-content {
  position: relative;
  z-index: 3;
  padding: 60px 20px;
  color: white;
  margin-top: -130px;
}

.part1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 616px;
  margin: 0 auto;
  padding: 40px 60px;
}

.part1 h2 {
  font-family: 'LXGW WenKai Mono TC';
  font-weight: 100;
  font-size: 24px;
  line-height: 1.5rem;
  letter-spacing: 2px;
  margin-bottom: 20px;
}



.p2p3 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  text-align: center;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  gap: 120px;
  padding: 40px 20px;
}

.p2p3 h2 {
  font-family: 'LXGW WenKai Mono TC';
  font-weight: 100;
  font-size: 24px;
  width: 500px;
  line-height: 1.5rem;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.part1 p,
.p2p3 p {
  font-family: 'Noto Sans TC';
  line-height: 2rem;
}

.arc-k-inner-content {
  position: relative;
  z-index: 3;
  padding: 0px 20px;
  color: white;
}

.recommended-crystals-k {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: 'LXGW WenKai Mono TC';
  font-weight: 100;
  font-size: 24px;
  line-height: 1.5rem;
  letter-spacing: 2px;
  margin: 40px auto 120px;

}

.rc-img {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
}

.recommended-crystals-k img {
  width: 50px;
}



/* 背景 */
.arc-k-wrapper {
  margin-top: 50px;
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: transparent;
}
.bgdark-inside {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}



.arc-k-svg-bg {
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  transform: translateY(-3px);
  border: none;
}

.arc-k-svg-bg svg {
  display: block;
  width: 100%;
  height: 100%;
}


/* --------- RWD --------- */
/* ========== 平板（1024px 以下） ========== */
@media screen and (max-width: 1024px) {
  .arc-k-outer-content {
    margin-top: 100px;
    padding-top: 20px;
  }

  .category-k {
    flex-wrap: wrap;
    gap: 60px;
    font-size: 14px;
    padding: 0 20px;
  }

  .crystal-k h1 {
    font-size: 120px;
  }

  .crystal-k-img {
    gap: 180px;
    margin-top: 160px;
  }

  .part1 {
    margin: 30px auto;
    max-width: 540px;
  }

  .part1,
  .p2p3,
  .recommended-crystals-k {
    padding: 32px 20px;
   
  }

  .p2p3 {
    flex-direction: column;
    align-items: center;
    gap: 60px; 
    font-weight: 500;
  }

  .p2p3 h2 {
    font-size: 22px;
    width: 100%;
  }


  .recommended-crystals-k img {
    width: 42px;
  }
}

hr {
  border: none;
  border-top: 1px solid white;
  margin: 20px 0;
}

/* ==========大手機或平板橫向（820px 以下） ========== */
@media screen and (max-width: 820px) {
  .body {
    overflow: hidden;
  }

  .category-k {
    flex-wrap: wrap;
    gap: 36px;
    font-size: 13px;
    padding: 0 16px;
  }

  .crystal-k h1 {
    font-size: 96px;
  }

  .crystal-k-img {
    gap: 100px;
    margin-top: 140px;
  }

  .part1 {
    padding: 24px 16px;
  }

  .p2p3 {
    padding: 24px 16px;
    flex-direction: column;
    gap: 40px;
  }

  .p2p3 h2 {
    font-size: 20px;
  }

  .recommended-crystals-k {
    margin: 32px auto 80px;
    font-size: 20px;
  }

  .recommended-crystals-k img {
    width: 36px;
  }

  .footer {
    display: none;
  }
}


/* ========== 手機直向（640px 以下） ========== */
@media screen and (max-width: 640px) {
  .category-k {
    flex-wrap: wrap;
    gap: 20px;
    font-size: 14px;

  }

  .crystal-k {
    margin-bottom: -150px;
  }

  .crystal-k h1 {
    font-size: 72px;
  }

  .crystal-k-img {
    gap: 48px;
    margin-top: 120px;
  }

  .crystal-k-center {
    width: 100px;
    height: 100px;
  }

  .part1 {
    padding: 20px 12px;
    max-width: 380px;
  }

  .part1 h2,
  .p2p3 h2 {
    font-size: 18px;
  }

  .p2p3 {
    padding: 20px 12px;
    flex-direction: column;
    gap: 32px;
  }

  .recommended-crystals-k {
    margin: 24px auto 60px;
    font-size: 18px;
  }

}
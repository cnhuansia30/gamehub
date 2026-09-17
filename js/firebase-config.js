// =====================================================
// Firebase 初始化
// 請至 Firebase 主控台 > 專案設定 > 一般 > 你的應用程式
// 複製你自己的設定值貼到下面。這組設定屬於「公開用戶端設定」，
// 本來就會出現在瀏覽器原始碼／GitHub 上，這是 Firebase 的正常設計，
// 不算洩漏機密。真正的資料保護來自 firestore.rules，不是靠隱藏這組設定值。
// =====================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDu2LT6aKGR5fk8QKfDUhBVh80raivqgGM",
    authDomain: "gamehub-deb3c.firebaseapp.com",
    projectId: "gamehub-deb3c",
    storageBucket: "gamehub-deb3c.firebasestorage.app",
    messagingSenderId: "914890090069",
    appId: "1:914890090069:web:dce8660915c54ce5cf16dc"
  };

// 使用者以「自訂名稱＋密碼」註冊登入時，Firebase Authentication 內部需要一組
// Email 格式的帳號，這裡用固定的虛擬網域組合出一個內部專用 Email，
// 使用者完全看不到、也不是真實信箱，純粹是技術上讓 Firebase 運作所需。
export const INTERNAL_EMAIL_DOMAIN = "users.local-culture-platform.internal";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

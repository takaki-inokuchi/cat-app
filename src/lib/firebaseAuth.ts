import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";

const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const provider = new GoogleAuthProvider();

const loginWithGoogle = () => {
  if (isMobile()) {
    return signInWithRedirect(auth, provider);
  } else {
    return signInWithPopup(auth, provider);
  }
};

const logout = () => signOut(auth);

export { loginWithGoogle, logout };//s
import Toast from "react-native-root-toast";
import { spacing } from "../theme";

/** method used to show toast */
export const showToast = (message, delay = 0) => {
    setTimeout(() => {
      Toast.show(message, {
        duration: 1000,
        position: -spacing[10],
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: delay,
        onShow: () => {
          // calls on toast\`s appear animation start
        },
        onShown: () => {
          // calls on toast\`s appear animation end.
        },
        onHide: () => {
          // calls on toast\`s hide animation start.
        },
        onHidden: () => {
          // calls on toast\`s hide animation end.
        }
      });
    }, 700);
  };
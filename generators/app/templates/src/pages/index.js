import appy, { page } from 'wxappy';
import styles from './index.css';

@page
export default class Index {
  constructor() {
    this.data = {
      user: {},
      styles,
      button: {
        type: 'primary',
        name: 'Toast',
        onTap: 'onTap',
      },
    };
  }
  onTap() {
    appy.showToast({
      title: `Hello ${this.data.user.nickName}`,
      icon: 'success',
    });
  }
  onLoad() {
    appy.app
    .getUserInfo()
    .then((user) => {
      this.setData({ user });
    });
  }
}

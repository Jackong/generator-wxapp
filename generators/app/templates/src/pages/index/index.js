import sdk, { page } from 'wxappy';
import styles from './index.css';

@page
export default class Index {
  constructor() {
    this.data = {
      userInfo: {},
      styles,
    };
  }
  onLoad() {
    sdk.app
    .getUserInfo()
    .then(userInfo => this.setData({ userInfo }));
  }
}

import sdk, { app } from 'wxappy';

@app
export default class {
  onLaunch = () => {
  }
  getUserInfo = () => {
    return sdk
    .getUserInfo()
    .then(({ userInfo }) => userInfo);
  }
}

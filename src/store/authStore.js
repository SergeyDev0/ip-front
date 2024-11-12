import { makeAutoObservable } from "mobx";

class authStore {
  phone = null;
  accessToken = false;
  refreshToken = false;
  refreshFunc = null;

  constructor() {
    makeAutoObservable(this);
  }

  getPhone(phoneNumber) {
    this.phone = phoneNumber;
  }

  loadTokens() {
    this.accessToken = localStorage.getItem('accessToken');
    this.refreshToken = localStorage.getItem('refreshToken');
  }

  saveAccessToken(access) {
    this.accessToken = access;
    localStorage.setItem('accessToken', access);
  }

  saveRefreshToken(refresh) {
    this.refreshToken = refresh;
    localStorage.setItem('refreshToken', refresh);
  }

  logout() {
    this.accessToken = false;
    this.refreshToken = false;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  getRefreshFunc(func) {
    this.refreshFunc = func;
  }

  callRefreshFunc() {
    if(this.refreshFunc) {
      this.refreshFunc();
    }
  }
}

export default new authStore();
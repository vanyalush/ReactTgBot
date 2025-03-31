import { makeAutoObservable } from "mobx";
import axios, { AxiosError } from "axios";
import AuthService from "../services/AuthService";
import { API_URL } from "../http";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/IUser";

export default class UserStore {
    user= {} as IUser;
    isAuth = true;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            return response;
        } catch (e: unknown) {
            const error = e as AxiosError;
            console.error('Login error:', error.response?.data || error.message);
            throw error;
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            return response;
        } catch (e: unknown) {
            const error = e as AxiosError;
            console.error('Registration error:', error.response?.data || error.message);
            throw error;
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem("token");
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e: unknown) {
            const error = e as AxiosError;
            console.error('Logout error:', error.response?.data || error.message);
            throw error;
        }
    }

    async checkAuth() {
        if (!localStorage.getItem('token')) {
            this.setAuth(false);
            return;
        }

        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
                withCredentials: true
            });
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            return response;
        } catch (e) {
            this.setAuth(false);
            localStorage.removeItem('token');
        } finally {
            this.setLoading(false);
        }
    }
}
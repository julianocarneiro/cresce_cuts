import Keys from './keys';

const Storage: Storage = window.localStorage;

export default class StorageService {
    static clearAllStorage(): void {
        Storage.clear();
    }

    static clearStorage(): void {
        Storage.removeItem(Keys.TOKEN);
        Storage.removeItem(Keys.LOJA);
    }

    static setItem = async (key: string, value: any) => {
        const item = JSON.stringify(value);
        await Storage.setItem(key, item);
    };

    static getItem = async (key: string) => {
        const item = await Storage.getItem(key);
        if (!item) return;
        return JSON.parse(item);
    };

    static async setToken(token: string): Promise<void> {
        await Storage.setItem(Keys.TOKEN, token);
    }

    static getToken(): string {
        const value = Storage.getItem(Keys.TOKEN);
        return value ? value : "";
    }

    static setLoja(loja: string): void {
        Storage.setItem(Keys.LOJA, loja);
    }

    static getLoja(): string {
        const value = Storage.getItem(Keys.LOJA);
        return value ? value : "";
    }
}



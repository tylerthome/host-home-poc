import { ApiConfig } from './config'
import { Guest, Host } from '../models' //for some reason accounts wont import here?
import { Accounts } from '../models/Accounts'

class ApiFetchError extends Error { }

const getJson = async (uri: string) => {
    try {
        const response = await fetch(uri)
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        return await response.json()
    } catch (e) {
        throw new ApiFetchError(
            `error in getJson(): error fetching '${uri}': ${e}`
        )
    }
}

const putJson = async (uri: string, data: string) => {
    try {
        const response = await fetch(uri, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })
        if (response.status !== 200) {
            throw new Error(response.statusText)
        }
        return await response.json()
    } catch (e) {
        throw new ApiFetchError(
            `error in getJson(): error fetching '${uri}': ${e}`
        )
    }
}

const getAccounts = async (uri: string, data: any | undefined) => {
    console.log(data, "<------------------------data before getAccounts")
    try {
        const response = await fetch(uri, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
        console.log(data, "<------------------------data after getAccounts")
        // if (response.status !== 200) {
        //     throw new Error(response.statusText)
        // }
        return await response.json()
    } catch (e) {
        throw new ApiFetchError(
            `error in getByEmail(): error fetching '${uri}': ${e}`
        )
    }
}

export class Fetcher<T> {
    private endpoint: string

    public constructor(resourceName: string) {
        this.endpoint = `${ApiConfig.UriPrefix}/${resourceName}`
    }

    public async getAll(): Promise<Array<T>> {
        return (await getJson(this.endpoint)) as Array<T>
    }

    public async getById(id: string): Promise<T> {
        return (await getJson(`${this.endpoint}/${id}`)) as T
    }

    public async putById(id: string, item: T): Promise<string> {
        return (await putJson(
            `${this.endpoint}/${id}`,
            JSON.stringify(item)
        )) as string
    }

    public async getUserAccountByEmail(data: any): Promise<T> {
        console.log(data, "<--------------------------------getUserAccountByEmail")
        return (await getAccounts(
            `${this.endpoint}`,
            JSON.stringify(data)
        ))
    }
}

export class ApiWrapper {
    private guestFetcher: Fetcher<Guest>
    private accountsFetcher: Fetcher<Accounts>

    public constructor() {
        this.guestFetcher = new Fetcher<Guest>('guests')
        this.accountsFetcher = new Fetcher<Accounts>('checkEmail')
    }

    // Guests
    public async getAllGuests(): Promise<Array<Guest>> {
        return await this.guestFetcher.getAll()
    }

    public async getGuestById(id: string): Promise<Guest> {
        return await this.guestFetcher.getById(id)
    }

    public async getUserAccount(data: any): Promise<Accounts> {
        console.log(data, "<-----------------------------getUserAccount data")
        return await this.accountsFetcher.getUserAccountByEmail(data)
    }
}
export interface Icurrency {
    code: string,
    description: string
}

export function getValidCurrencies():Icurrency[] {
    return [
        {
            code: "UZS",
            description: "UZS O'zbek so'mi"
        },
        {
            code: "USD",
            description: "USD US Dollar"
        },
        {
            code: "EUR",
            description: "EUR Euro"
        },
        {
            code: "BTC",
            description: "BTC Bitcoin"
        },
        {
            code: "USDT",
            description: "USDT Tether"
        }

    ]
}

export async function fetchBaseExchangeRate(base: string, target: string) {
    try {
        const baseLowerCase = base.toLowerCase();
        const targetLowerCase = target.toLowerCase();
        const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseLowerCase}.json`);
        const data = await res.json();
        const result = data[baseLowerCase][targetLowerCase];
        
        return result
    } catch (error) {
        console.log(error);
    }
}

export async function fetchTargetExchangeRate(base:string, target:string) {
      try {
        const baseLowerCase = base.toLowerCase();
        const targetLowerCase = target.toLowerCase();
        const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${targetLowerCase}.json`);
        const data = await res.json();
        const result = data[targetLowerCase][baseLowerCase];
        return result

    } catch (error) {
        console.log(error);
    }
}
import { shopQuery } from "./shop"
import storefrontQuery from "../storefrontClient"
import type { Shop, ShopOperation } from "../shopTypes"

export async function getShop(): Promise<Shop> {
    const res = await storefrontQuery<ShopOperation>({ query: shopQuery })
    return res.body?.data?.shop
}

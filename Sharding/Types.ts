export type Shard = {
    id: number,
    totalShards: number,
    code?: any
}

export type ShardError = {
    code: number,
    reason: string,
    id: number,
    totalShards: number
}
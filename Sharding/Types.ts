export type Shard = {
    id: number,
    totalShards: number
}

export type ShardError = {
    code: number,
    reason: string,
    id: number,
    totalShards: number
}
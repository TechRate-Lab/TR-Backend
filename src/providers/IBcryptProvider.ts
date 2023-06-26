export interface IBcryptProvider {
    hash(password:string):Promise<void>;
    compare(password:string, hash:string):Promise<boolean>
}
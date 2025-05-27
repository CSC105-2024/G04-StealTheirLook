
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Check
 * 
 */
export type Check = $Result.DefaultSelection<Prisma.$CheckPayload>
/**
 * Model SavedPost
 * 
 */
export type SavedPost = $Result.DefaultSelection<Prisma.$SavedPostPayload>
/**
 * Model SavedCheck
 * 
 */
export type SavedCheck = $Result.DefaultSelection<Prisma.$SavedCheckPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.check`: Exposes CRUD operations for the **Check** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checks
    * const checks = await prisma.check.findMany()
    * ```
    */
  get check(): Prisma.CheckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedPost`: Exposes CRUD operations for the **SavedPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedPosts
    * const savedPosts = await prisma.savedPost.findMany()
    * ```
    */
  get savedPost(): Prisma.SavedPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedCheck`: Exposes CRUD operations for the **SavedCheck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedChecks
    * const savedChecks = await prisma.savedCheck.findMany()
    * ```
    */
  get savedCheck(): Prisma.SavedCheckDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Post: 'Post',
    Check: 'Check',
    SavedPost: 'SavedPost',
    SavedCheck: 'SavedCheck'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "post" | "check" | "savedPost" | "savedCheck"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Check: {
        payload: Prisma.$CheckPayload<ExtArgs>
        fields: Prisma.CheckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>
          }
          findFirst: {
            args: Prisma.CheckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>
          }
          findMany: {
            args: Prisma.CheckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>[]
          }
          create: {
            args: Prisma.CheckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>
          }
          createMany: {
            args: Prisma.CheckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>[]
          }
          delete: {
            args: Prisma.CheckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>
          }
          update: {
            args: Prisma.CheckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>
          }
          deleteMany: {
            args: Prisma.CheckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>[]
          }
          upsert: {
            args: Prisma.CheckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>
          }
          aggregate: {
            args: Prisma.CheckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheck>
          }
          groupBy: {
            args: Prisma.CheckGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckCountArgs<ExtArgs>
            result: $Utils.Optional<CheckCountAggregateOutputType> | number
          }
        }
      }
      SavedPost: {
        payload: Prisma.$SavedPostPayload<ExtArgs>
        fields: Prisma.SavedPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          findFirst: {
            args: Prisma.SavedPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          findMany: {
            args: Prisma.SavedPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>[]
          }
          create: {
            args: Prisma.SavedPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          createMany: {
            args: Prisma.SavedPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>[]
          }
          delete: {
            args: Prisma.SavedPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          update: {
            args: Prisma.SavedPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          deleteMany: {
            args: Prisma.SavedPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>[]
          }
          upsert: {
            args: Prisma.SavedPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          aggregate: {
            args: Prisma.SavedPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedPost>
          }
          groupBy: {
            args: Prisma.SavedPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedPostCountArgs<ExtArgs>
            result: $Utils.Optional<SavedPostCountAggregateOutputType> | number
          }
        }
      }
      SavedCheck: {
        payload: Prisma.$SavedCheckPayload<ExtArgs>
        fields: Prisma.SavedCheckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedCheckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCheckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedCheckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCheckPayload>
          }
          findFirst: {
            args: Prisma.SavedCheckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCheckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedCheckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCheckPayload>
          }
          findMany: {
            args: Prisma.SavedCheckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCheckPayload>[]
          }
          create: {
            args: Prisma.SavedCheckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCheckPayload>
          }
          createMany: {
            args: Prisma.SavedCheckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedCheckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCheckPayload>[]
          }
          delete: {
            args: Prisma.SavedCheckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCheckPayload>
          }
          update: {
            args: Prisma.SavedCheckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCheckPayload>
          }
          deleteMany: {
            args: Prisma.SavedCheckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedCheckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedCheckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCheckPayload>[]
          }
          upsert: {
            args: Prisma.SavedCheckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCheckPayload>
          }
          aggregate: {
            args: Prisma.SavedCheckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedCheck>
          }
          groupBy: {
            args: Prisma.SavedCheckGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedCheckGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedCheckCountArgs<ExtArgs>
            result: $Utils.Optional<SavedCheckCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    post?: PostOmit
    check?: CheckOmit
    savedPost?: SavedPostOmit
    savedCheck?: SavedCheckOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    savedPosts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    savedPosts?: boolean | UserCountOutputTypeCountSavedPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    checks: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checks?: boolean | PostCountOutputTypeCountChecksArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountChecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckWhereInput
  }


  /**
   * Count Type SavedPostCountOutputType
   */

  export type SavedPostCountOutputType = {
    savedChecks: number
  }

  export type SavedPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedChecks?: boolean | SavedPostCountOutputTypeCountSavedChecksArgs
  }

  // Custom InputTypes
  /**
   * SavedPostCountOutputType without action
   */
  export type SavedPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPostCountOutputType
     */
    select?: SavedPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SavedPostCountOutputType without action
   */
  export type SavedPostCountOutputTypeCountSavedChecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedCheckWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    username: string | null
    password: string | null
    displayName: string | null
    profilePicture: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    username: string | null
    password: string | null
    displayName: string | null
    profilePicture: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    username: number
    password: number
    displayName: number
    profilePicture: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    displayName?: true
    profilePicture?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    displayName?: true
    profilePicture?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    displayName?: true
    profilePicture?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: number
    username: string
    password: string
    displayName: string | null
    profilePicture: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    password?: boolean
    displayName?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    savedPosts?: boolean | User$savedPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    password?: boolean
    displayName?: boolean
    profilePicture?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    password?: boolean
    displayName?: boolean
    profilePicture?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    username?: boolean
    password?: boolean
    displayName?: boolean
    profilePicture?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "username" | "password" | "displayName" | "profilePicture" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    savedPosts?: boolean | User$savedPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      savedPosts: Prisma.$SavedPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      username: string
      password: string
      displayName: string | null
      profilePicture: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedPosts<T extends User$savedPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.savedPosts
   */
  export type User$savedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    cursor?: SavedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    postId: number | null
    userId: number | null
  }

  export type PostSumAggregateOutputType = {
    postId: number | null
    userId: number | null
  }

  export type PostMinAggregateOutputType = {
    postId: number | null
    image: string | null
    title: string | null
    tag: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type PostMaxAggregateOutputType = {
    postId: number | null
    image: string | null
    title: string | null
    tag: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type PostCountAggregateOutputType = {
    postId: number
    image: number
    title: number
    tag: number
    createdAt: number
    userId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    postId?: true
    userId?: true
  }

  export type PostSumAggregateInputType = {
    postId?: true
    userId?: true
  }

  export type PostMinAggregateInputType = {
    postId?: true
    image?: true
    title?: true
    tag?: true
    createdAt?: true
    userId?: true
  }

  export type PostMaxAggregateInputType = {
    postId?: true
    image?: true
    title?: true
    tag?: true
    createdAt?: true
    userId?: true
  }

  export type PostCountAggregateInputType = {
    postId?: true
    image?: true
    title?: true
    tag?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    postId: number
    image: string
    title: string
    tag: string
    createdAt: Date
    userId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    image?: boolean
    title?: boolean
    tag?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    checks?: boolean | Post$checksArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    image?: boolean
    title?: boolean
    tag?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    image?: boolean
    title?: boolean
    tag?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    postId?: boolean
    image?: boolean
    title?: boolean
    tag?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "image" | "title" | "tag" | "createdAt" | "userId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    checks?: boolean | Post$checksArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      checks: Prisma.$CheckPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: number
      image: string
      title: string
      tag: string
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const postWithPostIdOnly = await prisma.post.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `postId`
     * const postWithPostIdOnly = await prisma.post.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `postId`
     * const postWithPostIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { postId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checks<T extends Post$checksArgs<ExtArgs> = {}>(args?: Subset<T, Post$checksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly postId: FieldRef<"Post", 'Int'>
    readonly image: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly tag: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly userId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.checks
   */
  export type Post$checksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    where?: CheckWhereInput
    orderBy?: CheckOrderByWithRelationInput | CheckOrderByWithRelationInput[]
    cursor?: CheckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckScalarFieldEnum | CheckScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Check
   */

  export type AggregateCheck = {
    _count: CheckCountAggregateOutputType | null
    _avg: CheckAvgAggregateOutputType | null
    _sum: CheckSumAggregateOutputType | null
    _min: CheckMinAggregateOutputType | null
    _max: CheckMaxAggregateOutputType | null
  }

  export type CheckAvgAggregateOutputType = {
    checkId: number | null
    postId: number | null
  }

  export type CheckSumAggregateOutputType = {
    checkId: number | null
    postId: number | null
  }

  export type CheckMinAggregateOutputType = {
    checkId: number | null
    brand: string | null
    clothe: string | null
    postId: number | null
  }

  export type CheckMaxAggregateOutputType = {
    checkId: number | null
    brand: string | null
    clothe: string | null
    postId: number | null
  }

  export type CheckCountAggregateOutputType = {
    checkId: number
    brand: number
    clothe: number
    postId: number
    _all: number
  }


  export type CheckAvgAggregateInputType = {
    checkId?: true
    postId?: true
  }

  export type CheckSumAggregateInputType = {
    checkId?: true
    postId?: true
  }

  export type CheckMinAggregateInputType = {
    checkId?: true
    brand?: true
    clothe?: true
    postId?: true
  }

  export type CheckMaxAggregateInputType = {
    checkId?: true
    brand?: true
    clothe?: true
    postId?: true
  }

  export type CheckCountAggregateInputType = {
    checkId?: true
    brand?: true
    clothe?: true
    postId?: true
    _all?: true
  }

  export type CheckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Check to aggregate.
     */
    where?: CheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checks to fetch.
     */
    orderBy?: CheckOrderByWithRelationInput | CheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checks
    **/
    _count?: true | CheckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckMaxAggregateInputType
  }

  export type GetCheckAggregateType<T extends CheckAggregateArgs> = {
        [P in keyof T & keyof AggregateCheck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheck[P]>
      : GetScalarType<T[P], AggregateCheck[P]>
  }




  export type CheckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckWhereInput
    orderBy?: CheckOrderByWithAggregationInput | CheckOrderByWithAggregationInput[]
    by: CheckScalarFieldEnum[] | CheckScalarFieldEnum
    having?: CheckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckCountAggregateInputType | true
    _avg?: CheckAvgAggregateInputType
    _sum?: CheckSumAggregateInputType
    _min?: CheckMinAggregateInputType
    _max?: CheckMaxAggregateInputType
  }

  export type CheckGroupByOutputType = {
    checkId: number
    brand: string
    clothe: string
    postId: number
    _count: CheckCountAggregateOutputType | null
    _avg: CheckAvgAggregateOutputType | null
    _sum: CheckSumAggregateOutputType | null
    _min: CheckMinAggregateOutputType | null
    _max: CheckMaxAggregateOutputType | null
  }

  type GetCheckGroupByPayload<T extends CheckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckGroupByOutputType[P]>
            : GetScalarType<T[P], CheckGroupByOutputType[P]>
        }
      >
    >


  export type CheckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    checkId?: boolean
    brand?: boolean
    clothe?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["check"]>

  export type CheckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    checkId?: boolean
    brand?: boolean
    clothe?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["check"]>

  export type CheckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    checkId?: boolean
    brand?: boolean
    clothe?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["check"]>

  export type CheckSelectScalar = {
    checkId?: boolean
    brand?: boolean
    clothe?: boolean
    postId?: boolean
  }

  export type CheckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"checkId" | "brand" | "clothe" | "postId", ExtArgs["result"]["check"]>
  export type CheckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CheckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CheckIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $CheckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Check"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      checkId: number
      brand: string
      clothe: string
      postId: number
    }, ExtArgs["result"]["check"]>
    composites: {}
  }

  type CheckGetPayload<S extends boolean | null | undefined | CheckDefaultArgs> = $Result.GetResult<Prisma.$CheckPayload, S>

  type CheckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckCountAggregateInputType | true
    }

  export interface CheckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Check'], meta: { name: 'Check' } }
    /**
     * Find zero or one Check that matches the filter.
     * @param {CheckFindUniqueArgs} args - Arguments to find a Check
     * @example
     * // Get one Check
     * const check = await prisma.check.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckFindUniqueArgs>(args: SelectSubset<T, CheckFindUniqueArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Check that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckFindUniqueOrThrowArgs} args - Arguments to find a Check
     * @example
     * // Get one Check
     * const check = await prisma.check.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Check that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckFindFirstArgs} args - Arguments to find a Check
     * @example
     * // Get one Check
     * const check = await prisma.check.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckFindFirstArgs>(args?: SelectSubset<T, CheckFindFirstArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Check that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckFindFirstOrThrowArgs} args - Arguments to find a Check
     * @example
     * // Get one Check
     * const check = await prisma.check.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checks
     * const checks = await prisma.check.findMany()
     * 
     * // Get first 10 Checks
     * const checks = await prisma.check.findMany({ take: 10 })
     * 
     * // Only select the `checkId`
     * const checkWithCheckIdOnly = await prisma.check.findMany({ select: { checkId: true } })
     * 
     */
    findMany<T extends CheckFindManyArgs>(args?: SelectSubset<T, CheckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Check.
     * @param {CheckCreateArgs} args - Arguments to create a Check.
     * @example
     * // Create one Check
     * const Check = await prisma.check.create({
     *   data: {
     *     // ... data to create a Check
     *   }
     * })
     * 
     */
    create<T extends CheckCreateArgs>(args: SelectSubset<T, CheckCreateArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checks.
     * @param {CheckCreateManyArgs} args - Arguments to create many Checks.
     * @example
     * // Create many Checks
     * const check = await prisma.check.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckCreateManyArgs>(args?: SelectSubset<T, CheckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checks and returns the data saved in the database.
     * @param {CheckCreateManyAndReturnArgs} args - Arguments to create many Checks.
     * @example
     * // Create many Checks
     * const check = await prisma.check.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checks and only return the `checkId`
     * const checkWithCheckIdOnly = await prisma.check.createManyAndReturn({
     *   select: { checkId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Check.
     * @param {CheckDeleteArgs} args - Arguments to delete one Check.
     * @example
     * // Delete one Check
     * const Check = await prisma.check.delete({
     *   where: {
     *     // ... filter to delete one Check
     *   }
     * })
     * 
     */
    delete<T extends CheckDeleteArgs>(args: SelectSubset<T, CheckDeleteArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Check.
     * @param {CheckUpdateArgs} args - Arguments to update one Check.
     * @example
     * // Update one Check
     * const check = await prisma.check.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckUpdateArgs>(args: SelectSubset<T, CheckUpdateArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checks.
     * @param {CheckDeleteManyArgs} args - Arguments to filter Checks to delete.
     * @example
     * // Delete a few Checks
     * const { count } = await prisma.check.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckDeleteManyArgs>(args?: SelectSubset<T, CheckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checks
     * const check = await prisma.check.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckUpdateManyArgs>(args: SelectSubset<T, CheckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checks and returns the data updated in the database.
     * @param {CheckUpdateManyAndReturnArgs} args - Arguments to update many Checks.
     * @example
     * // Update many Checks
     * const check = await prisma.check.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checks and only return the `checkId`
     * const checkWithCheckIdOnly = await prisma.check.updateManyAndReturn({
     *   select: { checkId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Check.
     * @param {CheckUpsertArgs} args - Arguments to update or create a Check.
     * @example
     * // Update or create a Check
     * const check = await prisma.check.upsert({
     *   create: {
     *     // ... data to create a Check
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Check we want to update
     *   }
     * })
     */
    upsert<T extends CheckUpsertArgs>(args: SelectSubset<T, CheckUpsertArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckCountArgs} args - Arguments to filter Checks to count.
     * @example
     * // Count the number of Checks
     * const count = await prisma.check.count({
     *   where: {
     *     // ... the filter for the Checks we want to count
     *   }
     * })
    **/
    count<T extends CheckCountArgs>(
      args?: Subset<T, CheckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Check.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckAggregateArgs>(args: Subset<T, CheckAggregateArgs>): Prisma.PrismaPromise<GetCheckAggregateType<T>>

    /**
     * Group by Check.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CheckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckGroupByArgs['orderBy'] }
        : { orderBy?: CheckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Check model
   */
  readonly fields: CheckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Check.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Check model
   */
  interface CheckFieldRefs {
    readonly checkId: FieldRef<"Check", 'Int'>
    readonly brand: FieldRef<"Check", 'String'>
    readonly clothe: FieldRef<"Check", 'String'>
    readonly postId: FieldRef<"Check", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Check findUnique
   */
  export type CheckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * Filter, which Check to fetch.
     */
    where: CheckWhereUniqueInput
  }

  /**
   * Check findUniqueOrThrow
   */
  export type CheckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * Filter, which Check to fetch.
     */
    where: CheckWhereUniqueInput
  }

  /**
   * Check findFirst
   */
  export type CheckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * Filter, which Check to fetch.
     */
    where?: CheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checks to fetch.
     */
    orderBy?: CheckOrderByWithRelationInput | CheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checks.
     */
    cursor?: CheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checks.
     */
    distinct?: CheckScalarFieldEnum | CheckScalarFieldEnum[]
  }

  /**
   * Check findFirstOrThrow
   */
  export type CheckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * Filter, which Check to fetch.
     */
    where?: CheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checks to fetch.
     */
    orderBy?: CheckOrderByWithRelationInput | CheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checks.
     */
    cursor?: CheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checks.
     */
    distinct?: CheckScalarFieldEnum | CheckScalarFieldEnum[]
  }

  /**
   * Check findMany
   */
  export type CheckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * Filter, which Checks to fetch.
     */
    where?: CheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checks to fetch.
     */
    orderBy?: CheckOrderByWithRelationInput | CheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checks.
     */
    cursor?: CheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checks.
     */
    skip?: number
    distinct?: CheckScalarFieldEnum | CheckScalarFieldEnum[]
  }

  /**
   * Check create
   */
  export type CheckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * The data needed to create a Check.
     */
    data: XOR<CheckCreateInput, CheckUncheckedCreateInput>
  }

  /**
   * Check createMany
   */
  export type CheckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checks.
     */
    data: CheckCreateManyInput | CheckCreateManyInput[]
  }

  /**
   * Check createManyAndReturn
   */
  export type CheckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * The data used to create many Checks.
     */
    data: CheckCreateManyInput | CheckCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Check update
   */
  export type CheckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * The data needed to update a Check.
     */
    data: XOR<CheckUpdateInput, CheckUncheckedUpdateInput>
    /**
     * Choose, which Check to update.
     */
    where: CheckWhereUniqueInput
  }

  /**
   * Check updateMany
   */
  export type CheckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checks.
     */
    data: XOR<CheckUpdateManyMutationInput, CheckUncheckedUpdateManyInput>
    /**
     * Filter which Checks to update
     */
    where?: CheckWhereInput
    /**
     * Limit how many Checks to update.
     */
    limit?: number
  }

  /**
   * Check updateManyAndReturn
   */
  export type CheckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * The data used to update Checks.
     */
    data: XOR<CheckUpdateManyMutationInput, CheckUncheckedUpdateManyInput>
    /**
     * Filter which Checks to update
     */
    where?: CheckWhereInput
    /**
     * Limit how many Checks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Check upsert
   */
  export type CheckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * The filter to search for the Check to update in case it exists.
     */
    where: CheckWhereUniqueInput
    /**
     * In case the Check found by the `where` argument doesn't exist, create a new Check with this data.
     */
    create: XOR<CheckCreateInput, CheckUncheckedCreateInput>
    /**
     * In case the Check was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckUpdateInput, CheckUncheckedUpdateInput>
  }

  /**
   * Check delete
   */
  export type CheckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * Filter which Check to delete.
     */
    where: CheckWhereUniqueInput
  }

  /**
   * Check deleteMany
   */
  export type CheckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checks to delete
     */
    where?: CheckWhereInput
    /**
     * Limit how many Checks to delete.
     */
    limit?: number
  }

  /**
   * Check without action
   */
  export type CheckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
  }


  /**
   * Model SavedPost
   */

  export type AggregateSavedPost = {
    _count: SavedPostCountAggregateOutputType | null
    _avg: SavedPostAvgAggregateOutputType | null
    _sum: SavedPostSumAggregateOutputType | null
    _min: SavedPostMinAggregateOutputType | null
    _max: SavedPostMaxAggregateOutputType | null
  }

  export type SavedPostAvgAggregateOutputType = {
    originalPost: number | null
    userId: number | null
  }

  export type SavedPostSumAggregateOutputType = {
    originalPost: number | null
    userId: number | null
  }

  export type SavedPostMinAggregateOutputType = {
    savedPostId: string | null
    originalPost: number | null
    image: string | null
    title: string | null
    tag: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type SavedPostMaxAggregateOutputType = {
    savedPostId: string | null
    originalPost: number | null
    image: string | null
    title: string | null
    tag: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type SavedPostCountAggregateOutputType = {
    savedPostId: number
    originalPost: number
    image: number
    title: number
    tag: number
    createdAt: number
    userId: number
    _all: number
  }


  export type SavedPostAvgAggregateInputType = {
    originalPost?: true
    userId?: true
  }

  export type SavedPostSumAggregateInputType = {
    originalPost?: true
    userId?: true
  }

  export type SavedPostMinAggregateInputType = {
    savedPostId?: true
    originalPost?: true
    image?: true
    title?: true
    tag?: true
    createdAt?: true
    userId?: true
  }

  export type SavedPostMaxAggregateInputType = {
    savedPostId?: true
    originalPost?: true
    image?: true
    title?: true
    tag?: true
    createdAt?: true
    userId?: true
  }

  export type SavedPostCountAggregateInputType = {
    savedPostId?: true
    originalPost?: true
    image?: true
    title?: true
    tag?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type SavedPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedPost to aggregate.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedPosts
    **/
    _count?: true | SavedPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedPostMaxAggregateInputType
  }

  export type GetSavedPostAggregateType<T extends SavedPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedPost[P]>
      : GetScalarType<T[P], AggregateSavedPost[P]>
  }




  export type SavedPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithAggregationInput | SavedPostOrderByWithAggregationInput[]
    by: SavedPostScalarFieldEnum[] | SavedPostScalarFieldEnum
    having?: SavedPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedPostCountAggregateInputType | true
    _avg?: SavedPostAvgAggregateInputType
    _sum?: SavedPostSumAggregateInputType
    _min?: SavedPostMinAggregateInputType
    _max?: SavedPostMaxAggregateInputType
  }

  export type SavedPostGroupByOutputType = {
    savedPostId: string
    originalPost: number
    image: string
    title: string
    tag: string
    createdAt: Date
    userId: number
    _count: SavedPostCountAggregateOutputType | null
    _avg: SavedPostAvgAggregateOutputType | null
    _sum: SavedPostSumAggregateOutputType | null
    _min: SavedPostMinAggregateOutputType | null
    _max: SavedPostMaxAggregateOutputType | null
  }

  type GetSavedPostGroupByPayload<T extends SavedPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedPostGroupByOutputType[P]>
            : GetScalarType<T[P], SavedPostGroupByOutputType[P]>
        }
      >
    >


  export type SavedPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    savedPostId?: boolean
    originalPost?: boolean
    image?: boolean
    title?: boolean
    tag?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    savedChecks?: boolean | SavedPost$savedChecksArgs<ExtArgs>
    _count?: boolean | SavedPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedPost"]>

  export type SavedPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    savedPostId?: boolean
    originalPost?: boolean
    image?: boolean
    title?: boolean
    tag?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedPost"]>

  export type SavedPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    savedPostId?: boolean
    originalPost?: boolean
    image?: boolean
    title?: boolean
    tag?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedPost"]>

  export type SavedPostSelectScalar = {
    savedPostId?: boolean
    originalPost?: boolean
    image?: boolean
    title?: boolean
    tag?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type SavedPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"savedPostId" | "originalPost" | "image" | "title" | "tag" | "createdAt" | "userId", ExtArgs["result"]["savedPost"]>
  export type SavedPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    savedChecks?: boolean | SavedPost$savedChecksArgs<ExtArgs>
    _count?: boolean | SavedPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SavedPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavedPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      savedChecks: Prisma.$SavedCheckPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      savedPostId: string
      originalPost: number
      image: string
      title: string
      tag: string
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["savedPost"]>
    composites: {}
  }

  type SavedPostGetPayload<S extends boolean | null | undefined | SavedPostDefaultArgs> = $Result.GetResult<Prisma.$SavedPostPayload, S>

  type SavedPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedPostCountAggregateInputType | true
    }

  export interface SavedPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedPost'], meta: { name: 'SavedPost' } }
    /**
     * Find zero or one SavedPost that matches the filter.
     * @param {SavedPostFindUniqueArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedPostFindUniqueArgs>(args: SelectSubset<T, SavedPostFindUniqueArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedPostFindUniqueOrThrowArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedPostFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindFirstArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedPostFindFirstArgs>(args?: SelectSubset<T, SavedPostFindFirstArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindFirstOrThrowArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedPostFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedPosts
     * const savedPosts = await prisma.savedPost.findMany()
     * 
     * // Get first 10 SavedPosts
     * const savedPosts = await prisma.savedPost.findMany({ take: 10 })
     * 
     * // Only select the `savedPostId`
     * const savedPostWithSavedPostIdOnly = await prisma.savedPost.findMany({ select: { savedPostId: true } })
     * 
     */
    findMany<T extends SavedPostFindManyArgs>(args?: SelectSubset<T, SavedPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedPost.
     * @param {SavedPostCreateArgs} args - Arguments to create a SavedPost.
     * @example
     * // Create one SavedPost
     * const SavedPost = await prisma.savedPost.create({
     *   data: {
     *     // ... data to create a SavedPost
     *   }
     * })
     * 
     */
    create<T extends SavedPostCreateArgs>(args: SelectSubset<T, SavedPostCreateArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedPosts.
     * @param {SavedPostCreateManyArgs} args - Arguments to create many SavedPosts.
     * @example
     * // Create many SavedPosts
     * const savedPost = await prisma.savedPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedPostCreateManyArgs>(args?: SelectSubset<T, SavedPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedPosts and returns the data saved in the database.
     * @param {SavedPostCreateManyAndReturnArgs} args - Arguments to create many SavedPosts.
     * @example
     * // Create many SavedPosts
     * const savedPost = await prisma.savedPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedPosts and only return the `savedPostId`
     * const savedPostWithSavedPostIdOnly = await prisma.savedPost.createManyAndReturn({
     *   select: { savedPostId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedPostCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedPost.
     * @param {SavedPostDeleteArgs} args - Arguments to delete one SavedPost.
     * @example
     * // Delete one SavedPost
     * const SavedPost = await prisma.savedPost.delete({
     *   where: {
     *     // ... filter to delete one SavedPost
     *   }
     * })
     * 
     */
    delete<T extends SavedPostDeleteArgs>(args: SelectSubset<T, SavedPostDeleteArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedPost.
     * @param {SavedPostUpdateArgs} args - Arguments to update one SavedPost.
     * @example
     * // Update one SavedPost
     * const savedPost = await prisma.savedPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedPostUpdateArgs>(args: SelectSubset<T, SavedPostUpdateArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedPosts.
     * @param {SavedPostDeleteManyArgs} args - Arguments to filter SavedPosts to delete.
     * @example
     * // Delete a few SavedPosts
     * const { count } = await prisma.savedPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedPostDeleteManyArgs>(args?: SelectSubset<T, SavedPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedPosts
     * const savedPost = await prisma.savedPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedPostUpdateManyArgs>(args: SelectSubset<T, SavedPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedPosts and returns the data updated in the database.
     * @param {SavedPostUpdateManyAndReturnArgs} args - Arguments to update many SavedPosts.
     * @example
     * // Update many SavedPosts
     * const savedPost = await prisma.savedPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedPosts and only return the `savedPostId`
     * const savedPostWithSavedPostIdOnly = await prisma.savedPost.updateManyAndReturn({
     *   select: { savedPostId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedPostUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedPost.
     * @param {SavedPostUpsertArgs} args - Arguments to update or create a SavedPost.
     * @example
     * // Update or create a SavedPost
     * const savedPost = await prisma.savedPost.upsert({
     *   create: {
     *     // ... data to create a SavedPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedPost we want to update
     *   }
     * })
     */
    upsert<T extends SavedPostUpsertArgs>(args: SelectSubset<T, SavedPostUpsertArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostCountArgs} args - Arguments to filter SavedPosts to count.
     * @example
     * // Count the number of SavedPosts
     * const count = await prisma.savedPost.count({
     *   where: {
     *     // ... the filter for the SavedPosts we want to count
     *   }
     * })
    **/
    count<T extends SavedPostCountArgs>(
      args?: Subset<T, SavedPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedPostAggregateArgs>(args: Subset<T, SavedPostAggregateArgs>): Prisma.PrismaPromise<GetSavedPostAggregateType<T>>

    /**
     * Group by SavedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedPostGroupByArgs['orderBy'] }
        : { orderBy?: SavedPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedPost model
   */
  readonly fields: SavedPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    savedChecks<T extends SavedPost$savedChecksArgs<ExtArgs> = {}>(args?: Subset<T, SavedPost$savedChecksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedPost model
   */
  interface SavedPostFieldRefs {
    readonly savedPostId: FieldRef<"SavedPost", 'String'>
    readonly originalPost: FieldRef<"SavedPost", 'Int'>
    readonly image: FieldRef<"SavedPost", 'String'>
    readonly title: FieldRef<"SavedPost", 'String'>
    readonly tag: FieldRef<"SavedPost", 'String'>
    readonly createdAt: FieldRef<"SavedPost", 'DateTime'>
    readonly userId: FieldRef<"SavedPost", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SavedPost findUnique
   */
  export type SavedPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost findUniqueOrThrow
   */
  export type SavedPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost findFirst
   */
  export type SavedPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedPosts.
     */
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost findFirstOrThrow
   */
  export type SavedPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedPosts.
     */
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost findMany
   */
  export type SavedPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPosts to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost create
   */
  export type SavedPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedPost.
     */
    data: XOR<SavedPostCreateInput, SavedPostUncheckedCreateInput>
  }

  /**
   * SavedPost createMany
   */
  export type SavedPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedPosts.
     */
    data: SavedPostCreateManyInput | SavedPostCreateManyInput[]
  }

  /**
   * SavedPost createManyAndReturn
   */
  export type SavedPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * The data used to create many SavedPosts.
     */
    data: SavedPostCreateManyInput | SavedPostCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedPost update
   */
  export type SavedPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedPost.
     */
    data: XOR<SavedPostUpdateInput, SavedPostUncheckedUpdateInput>
    /**
     * Choose, which SavedPost to update.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost updateMany
   */
  export type SavedPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedPosts.
     */
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyInput>
    /**
     * Filter which SavedPosts to update
     */
    where?: SavedPostWhereInput
    /**
     * Limit how many SavedPosts to update.
     */
    limit?: number
  }

  /**
   * SavedPost updateManyAndReturn
   */
  export type SavedPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * The data used to update SavedPosts.
     */
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyInput>
    /**
     * Filter which SavedPosts to update
     */
    where?: SavedPostWhereInput
    /**
     * Limit how many SavedPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedPost upsert
   */
  export type SavedPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedPost to update in case it exists.
     */
    where: SavedPostWhereUniqueInput
    /**
     * In case the SavedPost found by the `where` argument doesn't exist, create a new SavedPost with this data.
     */
    create: XOR<SavedPostCreateInput, SavedPostUncheckedCreateInput>
    /**
     * In case the SavedPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedPostUpdateInput, SavedPostUncheckedUpdateInput>
  }

  /**
   * SavedPost delete
   */
  export type SavedPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter which SavedPost to delete.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost deleteMany
   */
  export type SavedPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedPosts to delete
     */
    where?: SavedPostWhereInput
    /**
     * Limit how many SavedPosts to delete.
     */
    limit?: number
  }

  /**
   * SavedPost.savedChecks
   */
  export type SavedPost$savedChecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCheck
     */
    select?: SavedCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCheck
     */
    omit?: SavedCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCheckInclude<ExtArgs> | null
    where?: SavedCheckWhereInput
    orderBy?: SavedCheckOrderByWithRelationInput | SavedCheckOrderByWithRelationInput[]
    cursor?: SavedCheckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedCheckScalarFieldEnum | SavedCheckScalarFieldEnum[]
  }

  /**
   * SavedPost without action
   */
  export type SavedPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
  }


  /**
   * Model SavedCheck
   */

  export type AggregateSavedCheck = {
    _count: SavedCheckCountAggregateOutputType | null
    _avg: SavedCheckAvgAggregateOutputType | null
    _sum: SavedCheckSumAggregateOutputType | null
    _min: SavedCheckMinAggregateOutputType | null
    _max: SavedCheckMaxAggregateOutputType | null
  }

  export type SavedCheckAvgAggregateOutputType = {
    originalCheck: number | null
  }

  export type SavedCheckSumAggregateOutputType = {
    originalCheck: number | null
  }

  export type SavedCheckMinAggregateOutputType = {
    savedCheckId: string | null
    originalCheck: number | null
    brand: string | null
    clothe: string | null
    completed: boolean | null
    savedPostId: string | null
  }

  export type SavedCheckMaxAggregateOutputType = {
    savedCheckId: string | null
    originalCheck: number | null
    brand: string | null
    clothe: string | null
    completed: boolean | null
    savedPostId: string | null
  }

  export type SavedCheckCountAggregateOutputType = {
    savedCheckId: number
    originalCheck: number
    brand: number
    clothe: number
    completed: number
    savedPostId: number
    _all: number
  }


  export type SavedCheckAvgAggregateInputType = {
    originalCheck?: true
  }

  export type SavedCheckSumAggregateInputType = {
    originalCheck?: true
  }

  export type SavedCheckMinAggregateInputType = {
    savedCheckId?: true
    originalCheck?: true
    brand?: true
    clothe?: true
    completed?: true
    savedPostId?: true
  }

  export type SavedCheckMaxAggregateInputType = {
    savedCheckId?: true
    originalCheck?: true
    brand?: true
    clothe?: true
    completed?: true
    savedPostId?: true
  }

  export type SavedCheckCountAggregateInputType = {
    savedCheckId?: true
    originalCheck?: true
    brand?: true
    clothe?: true
    completed?: true
    savedPostId?: true
    _all?: true
  }

  export type SavedCheckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedCheck to aggregate.
     */
    where?: SavedCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedChecks to fetch.
     */
    orderBy?: SavedCheckOrderByWithRelationInput | SavedCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedChecks
    **/
    _count?: true | SavedCheckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedCheckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedCheckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedCheckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedCheckMaxAggregateInputType
  }

  export type GetSavedCheckAggregateType<T extends SavedCheckAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedCheck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedCheck[P]>
      : GetScalarType<T[P], AggregateSavedCheck[P]>
  }




  export type SavedCheckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedCheckWhereInput
    orderBy?: SavedCheckOrderByWithAggregationInput | SavedCheckOrderByWithAggregationInput[]
    by: SavedCheckScalarFieldEnum[] | SavedCheckScalarFieldEnum
    having?: SavedCheckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedCheckCountAggregateInputType | true
    _avg?: SavedCheckAvgAggregateInputType
    _sum?: SavedCheckSumAggregateInputType
    _min?: SavedCheckMinAggregateInputType
    _max?: SavedCheckMaxAggregateInputType
  }

  export type SavedCheckGroupByOutputType = {
    savedCheckId: string
    originalCheck: number
    brand: string
    clothe: string
    completed: boolean
    savedPostId: string
    _count: SavedCheckCountAggregateOutputType | null
    _avg: SavedCheckAvgAggregateOutputType | null
    _sum: SavedCheckSumAggregateOutputType | null
    _min: SavedCheckMinAggregateOutputType | null
    _max: SavedCheckMaxAggregateOutputType | null
  }

  type GetSavedCheckGroupByPayload<T extends SavedCheckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedCheckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedCheckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedCheckGroupByOutputType[P]>
            : GetScalarType<T[P], SavedCheckGroupByOutputType[P]>
        }
      >
    >


  export type SavedCheckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    savedCheckId?: boolean
    originalCheck?: boolean
    brand?: boolean
    clothe?: boolean
    completed?: boolean
    savedPostId?: boolean
    savedPost?: boolean | SavedPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedCheck"]>

  export type SavedCheckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    savedCheckId?: boolean
    originalCheck?: boolean
    brand?: boolean
    clothe?: boolean
    completed?: boolean
    savedPostId?: boolean
    savedPost?: boolean | SavedPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedCheck"]>

  export type SavedCheckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    savedCheckId?: boolean
    originalCheck?: boolean
    brand?: boolean
    clothe?: boolean
    completed?: boolean
    savedPostId?: boolean
    savedPost?: boolean | SavedPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedCheck"]>

  export type SavedCheckSelectScalar = {
    savedCheckId?: boolean
    originalCheck?: boolean
    brand?: boolean
    clothe?: boolean
    completed?: boolean
    savedPostId?: boolean
  }

  export type SavedCheckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"savedCheckId" | "originalCheck" | "brand" | "clothe" | "completed" | "savedPostId", ExtArgs["result"]["savedCheck"]>
  export type SavedCheckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedPost?: boolean | SavedPostDefaultArgs<ExtArgs>
  }
  export type SavedCheckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedPost?: boolean | SavedPostDefaultArgs<ExtArgs>
  }
  export type SavedCheckIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedPost?: boolean | SavedPostDefaultArgs<ExtArgs>
  }

  export type $SavedCheckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedCheck"
    objects: {
      savedPost: Prisma.$SavedPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      savedCheckId: string
      originalCheck: number
      brand: string
      clothe: string
      completed: boolean
      savedPostId: string
    }, ExtArgs["result"]["savedCheck"]>
    composites: {}
  }

  type SavedCheckGetPayload<S extends boolean | null | undefined | SavedCheckDefaultArgs> = $Result.GetResult<Prisma.$SavedCheckPayload, S>

  type SavedCheckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedCheckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedCheckCountAggregateInputType | true
    }

  export interface SavedCheckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedCheck'], meta: { name: 'SavedCheck' } }
    /**
     * Find zero or one SavedCheck that matches the filter.
     * @param {SavedCheckFindUniqueArgs} args - Arguments to find a SavedCheck
     * @example
     * // Get one SavedCheck
     * const savedCheck = await prisma.savedCheck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedCheckFindUniqueArgs>(args: SelectSubset<T, SavedCheckFindUniqueArgs<ExtArgs>>): Prisma__SavedCheckClient<$Result.GetResult<Prisma.$SavedCheckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedCheck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedCheckFindUniqueOrThrowArgs} args - Arguments to find a SavedCheck
     * @example
     * // Get one SavedCheck
     * const savedCheck = await prisma.savedCheck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedCheckFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedCheckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedCheckClient<$Result.GetResult<Prisma.$SavedCheckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedCheck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCheckFindFirstArgs} args - Arguments to find a SavedCheck
     * @example
     * // Get one SavedCheck
     * const savedCheck = await prisma.savedCheck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedCheckFindFirstArgs>(args?: SelectSubset<T, SavedCheckFindFirstArgs<ExtArgs>>): Prisma__SavedCheckClient<$Result.GetResult<Prisma.$SavedCheckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedCheck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCheckFindFirstOrThrowArgs} args - Arguments to find a SavedCheck
     * @example
     * // Get one SavedCheck
     * const savedCheck = await prisma.savedCheck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedCheckFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedCheckFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedCheckClient<$Result.GetResult<Prisma.$SavedCheckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedChecks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCheckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedChecks
     * const savedChecks = await prisma.savedCheck.findMany()
     * 
     * // Get first 10 SavedChecks
     * const savedChecks = await prisma.savedCheck.findMany({ take: 10 })
     * 
     * // Only select the `savedCheckId`
     * const savedCheckWithSavedCheckIdOnly = await prisma.savedCheck.findMany({ select: { savedCheckId: true } })
     * 
     */
    findMany<T extends SavedCheckFindManyArgs>(args?: SelectSubset<T, SavedCheckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedCheck.
     * @param {SavedCheckCreateArgs} args - Arguments to create a SavedCheck.
     * @example
     * // Create one SavedCheck
     * const SavedCheck = await prisma.savedCheck.create({
     *   data: {
     *     // ... data to create a SavedCheck
     *   }
     * })
     * 
     */
    create<T extends SavedCheckCreateArgs>(args: SelectSubset<T, SavedCheckCreateArgs<ExtArgs>>): Prisma__SavedCheckClient<$Result.GetResult<Prisma.$SavedCheckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedChecks.
     * @param {SavedCheckCreateManyArgs} args - Arguments to create many SavedChecks.
     * @example
     * // Create many SavedChecks
     * const savedCheck = await prisma.savedCheck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedCheckCreateManyArgs>(args?: SelectSubset<T, SavedCheckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedChecks and returns the data saved in the database.
     * @param {SavedCheckCreateManyAndReturnArgs} args - Arguments to create many SavedChecks.
     * @example
     * // Create many SavedChecks
     * const savedCheck = await prisma.savedCheck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedChecks and only return the `savedCheckId`
     * const savedCheckWithSavedCheckIdOnly = await prisma.savedCheck.createManyAndReturn({
     *   select: { savedCheckId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedCheckCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedCheckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCheckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedCheck.
     * @param {SavedCheckDeleteArgs} args - Arguments to delete one SavedCheck.
     * @example
     * // Delete one SavedCheck
     * const SavedCheck = await prisma.savedCheck.delete({
     *   where: {
     *     // ... filter to delete one SavedCheck
     *   }
     * })
     * 
     */
    delete<T extends SavedCheckDeleteArgs>(args: SelectSubset<T, SavedCheckDeleteArgs<ExtArgs>>): Prisma__SavedCheckClient<$Result.GetResult<Prisma.$SavedCheckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedCheck.
     * @param {SavedCheckUpdateArgs} args - Arguments to update one SavedCheck.
     * @example
     * // Update one SavedCheck
     * const savedCheck = await prisma.savedCheck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedCheckUpdateArgs>(args: SelectSubset<T, SavedCheckUpdateArgs<ExtArgs>>): Prisma__SavedCheckClient<$Result.GetResult<Prisma.$SavedCheckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedChecks.
     * @param {SavedCheckDeleteManyArgs} args - Arguments to filter SavedChecks to delete.
     * @example
     * // Delete a few SavedChecks
     * const { count } = await prisma.savedCheck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedCheckDeleteManyArgs>(args?: SelectSubset<T, SavedCheckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedChecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCheckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedChecks
     * const savedCheck = await prisma.savedCheck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedCheckUpdateManyArgs>(args: SelectSubset<T, SavedCheckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedChecks and returns the data updated in the database.
     * @param {SavedCheckUpdateManyAndReturnArgs} args - Arguments to update many SavedChecks.
     * @example
     * // Update many SavedChecks
     * const savedCheck = await prisma.savedCheck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedChecks and only return the `savedCheckId`
     * const savedCheckWithSavedCheckIdOnly = await prisma.savedCheck.updateManyAndReturn({
     *   select: { savedCheckId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedCheckUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedCheckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCheckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedCheck.
     * @param {SavedCheckUpsertArgs} args - Arguments to update or create a SavedCheck.
     * @example
     * // Update or create a SavedCheck
     * const savedCheck = await prisma.savedCheck.upsert({
     *   create: {
     *     // ... data to create a SavedCheck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedCheck we want to update
     *   }
     * })
     */
    upsert<T extends SavedCheckUpsertArgs>(args: SelectSubset<T, SavedCheckUpsertArgs<ExtArgs>>): Prisma__SavedCheckClient<$Result.GetResult<Prisma.$SavedCheckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedChecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCheckCountArgs} args - Arguments to filter SavedChecks to count.
     * @example
     * // Count the number of SavedChecks
     * const count = await prisma.savedCheck.count({
     *   where: {
     *     // ... the filter for the SavedChecks we want to count
     *   }
     * })
    **/
    count<T extends SavedCheckCountArgs>(
      args?: Subset<T, SavedCheckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedCheckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedCheck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCheckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedCheckAggregateArgs>(args: Subset<T, SavedCheckAggregateArgs>): Prisma.PrismaPromise<GetSavedCheckAggregateType<T>>

    /**
     * Group by SavedCheck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCheckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedCheckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedCheckGroupByArgs['orderBy'] }
        : { orderBy?: SavedCheckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedCheckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedCheckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedCheck model
   */
  readonly fields: SavedCheckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedCheck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedCheckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedPost<T extends SavedPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SavedPostDefaultArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedCheck model
   */
  interface SavedCheckFieldRefs {
    readonly savedCheckId: FieldRef<"SavedCheck", 'String'>
    readonly originalCheck: FieldRef<"SavedCheck", 'Int'>
    readonly brand: FieldRef<"SavedCheck", 'String'>
    readonly clothe: FieldRef<"SavedCheck", 'String'>
    readonly completed: FieldRef<"SavedCheck", 'Boolean'>
    readonly savedPostId: FieldRef<"SavedCheck", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SavedCheck findUnique
   */
  export type SavedCheckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCheck
     */
    select?: SavedCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCheck
     */
    omit?: SavedCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCheckInclude<ExtArgs> | null
    /**
     * Filter, which SavedCheck to fetch.
     */
    where: SavedCheckWhereUniqueInput
  }

  /**
   * SavedCheck findUniqueOrThrow
   */
  export type SavedCheckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCheck
     */
    select?: SavedCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCheck
     */
    omit?: SavedCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCheckInclude<ExtArgs> | null
    /**
     * Filter, which SavedCheck to fetch.
     */
    where: SavedCheckWhereUniqueInput
  }

  /**
   * SavedCheck findFirst
   */
  export type SavedCheckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCheck
     */
    select?: SavedCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCheck
     */
    omit?: SavedCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCheckInclude<ExtArgs> | null
    /**
     * Filter, which SavedCheck to fetch.
     */
    where?: SavedCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedChecks to fetch.
     */
    orderBy?: SavedCheckOrderByWithRelationInput | SavedCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedChecks.
     */
    cursor?: SavedCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedChecks.
     */
    distinct?: SavedCheckScalarFieldEnum | SavedCheckScalarFieldEnum[]
  }

  /**
   * SavedCheck findFirstOrThrow
   */
  export type SavedCheckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCheck
     */
    select?: SavedCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCheck
     */
    omit?: SavedCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCheckInclude<ExtArgs> | null
    /**
     * Filter, which SavedCheck to fetch.
     */
    where?: SavedCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedChecks to fetch.
     */
    orderBy?: SavedCheckOrderByWithRelationInput | SavedCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedChecks.
     */
    cursor?: SavedCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedChecks.
     */
    distinct?: SavedCheckScalarFieldEnum | SavedCheckScalarFieldEnum[]
  }

  /**
   * SavedCheck findMany
   */
  export type SavedCheckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCheck
     */
    select?: SavedCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCheck
     */
    omit?: SavedCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCheckInclude<ExtArgs> | null
    /**
     * Filter, which SavedChecks to fetch.
     */
    where?: SavedCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedChecks to fetch.
     */
    orderBy?: SavedCheckOrderByWithRelationInput | SavedCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedChecks.
     */
    cursor?: SavedCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedChecks.
     */
    skip?: number
    distinct?: SavedCheckScalarFieldEnum | SavedCheckScalarFieldEnum[]
  }

  /**
   * SavedCheck create
   */
  export type SavedCheckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCheck
     */
    select?: SavedCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCheck
     */
    omit?: SavedCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCheckInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedCheck.
     */
    data: XOR<SavedCheckCreateInput, SavedCheckUncheckedCreateInput>
  }

  /**
   * SavedCheck createMany
   */
  export type SavedCheckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedChecks.
     */
    data: SavedCheckCreateManyInput | SavedCheckCreateManyInput[]
  }

  /**
   * SavedCheck createManyAndReturn
   */
  export type SavedCheckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCheck
     */
    select?: SavedCheckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCheck
     */
    omit?: SavedCheckOmit<ExtArgs> | null
    /**
     * The data used to create many SavedChecks.
     */
    data: SavedCheckCreateManyInput | SavedCheckCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCheckIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedCheck update
   */
  export type SavedCheckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCheck
     */
    select?: SavedCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCheck
     */
    omit?: SavedCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCheckInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedCheck.
     */
    data: XOR<SavedCheckUpdateInput, SavedCheckUncheckedUpdateInput>
    /**
     * Choose, which SavedCheck to update.
     */
    where: SavedCheckWhereUniqueInput
  }

  /**
   * SavedCheck updateMany
   */
  export type SavedCheckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedChecks.
     */
    data: XOR<SavedCheckUpdateManyMutationInput, SavedCheckUncheckedUpdateManyInput>
    /**
     * Filter which SavedChecks to update
     */
    where?: SavedCheckWhereInput
    /**
     * Limit how many SavedChecks to update.
     */
    limit?: number
  }

  /**
   * SavedCheck updateManyAndReturn
   */
  export type SavedCheckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCheck
     */
    select?: SavedCheckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCheck
     */
    omit?: SavedCheckOmit<ExtArgs> | null
    /**
     * The data used to update SavedChecks.
     */
    data: XOR<SavedCheckUpdateManyMutationInput, SavedCheckUncheckedUpdateManyInput>
    /**
     * Filter which SavedChecks to update
     */
    where?: SavedCheckWhereInput
    /**
     * Limit how many SavedChecks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCheckIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedCheck upsert
   */
  export type SavedCheckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCheck
     */
    select?: SavedCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCheck
     */
    omit?: SavedCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCheckInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedCheck to update in case it exists.
     */
    where: SavedCheckWhereUniqueInput
    /**
     * In case the SavedCheck found by the `where` argument doesn't exist, create a new SavedCheck with this data.
     */
    create: XOR<SavedCheckCreateInput, SavedCheckUncheckedCreateInput>
    /**
     * In case the SavedCheck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedCheckUpdateInput, SavedCheckUncheckedUpdateInput>
  }

  /**
   * SavedCheck delete
   */
  export type SavedCheckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCheck
     */
    select?: SavedCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCheck
     */
    omit?: SavedCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCheckInclude<ExtArgs> | null
    /**
     * Filter which SavedCheck to delete.
     */
    where: SavedCheckWhereUniqueInput
  }

  /**
   * SavedCheck deleteMany
   */
  export type SavedCheckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedChecks to delete
     */
    where?: SavedCheckWhereInput
    /**
     * Limit how many SavedChecks to delete.
     */
    limit?: number
  }

  /**
   * SavedCheck without action
   */
  export type SavedCheckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCheck
     */
    select?: SavedCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCheck
     */
    omit?: SavedCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCheckInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    username: 'username',
    password: 'password',
    displayName: 'displayName',
    profilePicture: 'profilePicture',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    postId: 'postId',
    image: 'image',
    title: 'title',
    tag: 'tag',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CheckScalarFieldEnum: {
    checkId: 'checkId',
    brand: 'brand',
    clothe: 'clothe',
    postId: 'postId'
  };

  export type CheckScalarFieldEnum = (typeof CheckScalarFieldEnum)[keyof typeof CheckScalarFieldEnum]


  export const SavedPostScalarFieldEnum: {
    savedPostId: 'savedPostId',
    originalPost: 'originalPost',
    image: 'image',
    title: 'title',
    tag: 'tag',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type SavedPostScalarFieldEnum = (typeof SavedPostScalarFieldEnum)[keyof typeof SavedPostScalarFieldEnum]


  export const SavedCheckScalarFieldEnum: {
    savedCheckId: 'savedCheckId',
    originalCheck: 'originalCheck',
    brand: 'brand',
    clothe: 'clothe',
    completed: 'completed',
    savedPostId: 'savedPostId'
  };

  export type SavedCheckScalarFieldEnum = (typeof SavedCheckScalarFieldEnum)[keyof typeof SavedCheckScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
    savedPosts?: SavedPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    savedPosts?: SavedPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
    savedPosts?: SavedPostListRelationFilter
  }, "userId" | "username">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    postId?: IntFilter<"Post"> | number
    image?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    tag?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    userId?: IntFilter<"Post"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    checks?: CheckListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    postId?: SortOrder
    image?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    checks?: CheckOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    postId?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    image?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    tag?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    userId?: IntFilter<"Post"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    checks?: CheckListRelationFilter
  }, "postId">

  export type PostOrderByWithAggregationInput = {
    postId?: SortOrder
    image?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    postId?: IntWithAggregatesFilter<"Post"> | number
    image?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    tag?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    userId?: IntWithAggregatesFilter<"Post"> | number
  }

  export type CheckWhereInput = {
    AND?: CheckWhereInput | CheckWhereInput[]
    OR?: CheckWhereInput[]
    NOT?: CheckWhereInput | CheckWhereInput[]
    checkId?: IntFilter<"Check"> | number
    brand?: StringFilter<"Check"> | string
    clothe?: StringFilter<"Check"> | string
    postId?: IntFilter<"Check"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type CheckOrderByWithRelationInput = {
    checkId?: SortOrder
    brand?: SortOrder
    clothe?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type CheckWhereUniqueInput = Prisma.AtLeast<{
    checkId?: number
    AND?: CheckWhereInput | CheckWhereInput[]
    OR?: CheckWhereInput[]
    NOT?: CheckWhereInput | CheckWhereInput[]
    brand?: StringFilter<"Check"> | string
    clothe?: StringFilter<"Check"> | string
    postId?: IntFilter<"Check"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "checkId">

  export type CheckOrderByWithAggregationInput = {
    checkId?: SortOrder
    brand?: SortOrder
    clothe?: SortOrder
    postId?: SortOrder
    _count?: CheckCountOrderByAggregateInput
    _avg?: CheckAvgOrderByAggregateInput
    _max?: CheckMaxOrderByAggregateInput
    _min?: CheckMinOrderByAggregateInput
    _sum?: CheckSumOrderByAggregateInput
  }

  export type CheckScalarWhereWithAggregatesInput = {
    AND?: CheckScalarWhereWithAggregatesInput | CheckScalarWhereWithAggregatesInput[]
    OR?: CheckScalarWhereWithAggregatesInput[]
    NOT?: CheckScalarWhereWithAggregatesInput | CheckScalarWhereWithAggregatesInput[]
    checkId?: IntWithAggregatesFilter<"Check"> | number
    brand?: StringWithAggregatesFilter<"Check"> | string
    clothe?: StringWithAggregatesFilter<"Check"> | string
    postId?: IntWithAggregatesFilter<"Check"> | number
  }

  export type SavedPostWhereInput = {
    AND?: SavedPostWhereInput | SavedPostWhereInput[]
    OR?: SavedPostWhereInput[]
    NOT?: SavedPostWhereInput | SavedPostWhereInput[]
    savedPostId?: StringFilter<"SavedPost"> | string
    originalPost?: IntFilter<"SavedPost"> | number
    image?: StringFilter<"SavedPost"> | string
    title?: StringFilter<"SavedPost"> | string
    tag?: StringFilter<"SavedPost"> | string
    createdAt?: DateTimeFilter<"SavedPost"> | Date | string
    userId?: IntFilter<"SavedPost"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    savedChecks?: SavedCheckListRelationFilter
  }

  export type SavedPostOrderByWithRelationInput = {
    savedPostId?: SortOrder
    originalPost?: SortOrder
    image?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    savedChecks?: SavedCheckOrderByRelationAggregateInput
  }

  export type SavedPostWhereUniqueInput = Prisma.AtLeast<{
    savedPostId?: string
    AND?: SavedPostWhereInput | SavedPostWhereInput[]
    OR?: SavedPostWhereInput[]
    NOT?: SavedPostWhereInput | SavedPostWhereInput[]
    originalPost?: IntFilter<"SavedPost"> | number
    image?: StringFilter<"SavedPost"> | string
    title?: StringFilter<"SavedPost"> | string
    tag?: StringFilter<"SavedPost"> | string
    createdAt?: DateTimeFilter<"SavedPost"> | Date | string
    userId?: IntFilter<"SavedPost"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    savedChecks?: SavedCheckListRelationFilter
  }, "savedPostId">

  export type SavedPostOrderByWithAggregationInput = {
    savedPostId?: SortOrder
    originalPost?: SortOrder
    image?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: SavedPostCountOrderByAggregateInput
    _avg?: SavedPostAvgOrderByAggregateInput
    _max?: SavedPostMaxOrderByAggregateInput
    _min?: SavedPostMinOrderByAggregateInput
    _sum?: SavedPostSumOrderByAggregateInput
  }

  export type SavedPostScalarWhereWithAggregatesInput = {
    AND?: SavedPostScalarWhereWithAggregatesInput | SavedPostScalarWhereWithAggregatesInput[]
    OR?: SavedPostScalarWhereWithAggregatesInput[]
    NOT?: SavedPostScalarWhereWithAggregatesInput | SavedPostScalarWhereWithAggregatesInput[]
    savedPostId?: StringWithAggregatesFilter<"SavedPost"> | string
    originalPost?: IntWithAggregatesFilter<"SavedPost"> | number
    image?: StringWithAggregatesFilter<"SavedPost"> | string
    title?: StringWithAggregatesFilter<"SavedPost"> | string
    tag?: StringWithAggregatesFilter<"SavedPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedPost"> | Date | string
    userId?: IntWithAggregatesFilter<"SavedPost"> | number
  }

  export type SavedCheckWhereInput = {
    AND?: SavedCheckWhereInput | SavedCheckWhereInput[]
    OR?: SavedCheckWhereInput[]
    NOT?: SavedCheckWhereInput | SavedCheckWhereInput[]
    savedCheckId?: StringFilter<"SavedCheck"> | string
    originalCheck?: IntFilter<"SavedCheck"> | number
    brand?: StringFilter<"SavedCheck"> | string
    clothe?: StringFilter<"SavedCheck"> | string
    completed?: BoolFilter<"SavedCheck"> | boolean
    savedPostId?: StringFilter<"SavedCheck"> | string
    savedPost?: XOR<SavedPostScalarRelationFilter, SavedPostWhereInput>
  }

  export type SavedCheckOrderByWithRelationInput = {
    savedCheckId?: SortOrder
    originalCheck?: SortOrder
    brand?: SortOrder
    clothe?: SortOrder
    completed?: SortOrder
    savedPostId?: SortOrder
    savedPost?: SavedPostOrderByWithRelationInput
  }

  export type SavedCheckWhereUniqueInput = Prisma.AtLeast<{
    savedCheckId?: string
    AND?: SavedCheckWhereInput | SavedCheckWhereInput[]
    OR?: SavedCheckWhereInput[]
    NOT?: SavedCheckWhereInput | SavedCheckWhereInput[]
    originalCheck?: IntFilter<"SavedCheck"> | number
    brand?: StringFilter<"SavedCheck"> | string
    clothe?: StringFilter<"SavedCheck"> | string
    completed?: BoolFilter<"SavedCheck"> | boolean
    savedPostId?: StringFilter<"SavedCheck"> | string
    savedPost?: XOR<SavedPostScalarRelationFilter, SavedPostWhereInput>
  }, "savedCheckId">

  export type SavedCheckOrderByWithAggregationInput = {
    savedCheckId?: SortOrder
    originalCheck?: SortOrder
    brand?: SortOrder
    clothe?: SortOrder
    completed?: SortOrder
    savedPostId?: SortOrder
    _count?: SavedCheckCountOrderByAggregateInput
    _avg?: SavedCheckAvgOrderByAggregateInput
    _max?: SavedCheckMaxOrderByAggregateInput
    _min?: SavedCheckMinOrderByAggregateInput
    _sum?: SavedCheckSumOrderByAggregateInput
  }

  export type SavedCheckScalarWhereWithAggregatesInput = {
    AND?: SavedCheckScalarWhereWithAggregatesInput | SavedCheckScalarWhereWithAggregatesInput[]
    OR?: SavedCheckScalarWhereWithAggregatesInput[]
    NOT?: SavedCheckScalarWhereWithAggregatesInput | SavedCheckScalarWhereWithAggregatesInput[]
    savedCheckId?: StringWithAggregatesFilter<"SavedCheck"> | string
    originalCheck?: IntWithAggregatesFilter<"SavedCheck"> | number
    brand?: StringWithAggregatesFilter<"SavedCheck"> | string
    clothe?: StringWithAggregatesFilter<"SavedCheck"> | string
    completed?: BoolWithAggregatesFilter<"SavedCheck"> | boolean
    savedPostId?: StringWithAggregatesFilter<"SavedCheck"> | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    displayName?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    savedPosts?: SavedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    username: string
    password: string
    displayName?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    savedPosts?: SavedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    savedPosts?: SavedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    savedPosts?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: number
    username: string
    password: string
    displayName?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    checks?: CheckCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    postId?: number
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    userId: number
    checks?: CheckUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    checks?: CheckUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    postId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    checks?: CheckUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    postId?: number
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    userId: number
  }

  export type PostUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    postId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CheckCreateInput = {
    brand: string
    clothe: string
    post: PostCreateNestedOneWithoutChecksInput
  }

  export type CheckUncheckedCreateInput = {
    checkId?: number
    brand: string
    clothe: string
    postId: number
  }

  export type CheckUpdateInput = {
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneRequiredWithoutChecksNestedInput
  }

  export type CheckUncheckedUpdateInput = {
    checkId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type CheckCreateManyInput = {
    checkId?: number
    brand: string
    clothe: string
    postId: number
  }

  export type CheckUpdateManyMutationInput = {
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
  }

  export type CheckUncheckedUpdateManyInput = {
    checkId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type SavedPostCreateInput = {
    savedPostId: string
    originalPost: number
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedPostsInput
    savedChecks?: SavedCheckCreateNestedManyWithoutSavedPostInput
  }

  export type SavedPostUncheckedCreateInput = {
    savedPostId: string
    originalPost: number
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    userId: number
    savedChecks?: SavedCheckUncheckedCreateNestedManyWithoutSavedPostInput
  }

  export type SavedPostUpdateInput = {
    savedPostId?: StringFieldUpdateOperationsInput | string
    originalPost?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedPostsNestedInput
    savedChecks?: SavedCheckUpdateManyWithoutSavedPostNestedInput
  }

  export type SavedPostUncheckedUpdateInput = {
    savedPostId?: StringFieldUpdateOperationsInput | string
    originalPost?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    savedChecks?: SavedCheckUncheckedUpdateManyWithoutSavedPostNestedInput
  }

  export type SavedPostCreateManyInput = {
    savedPostId: string
    originalPost: number
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    userId: number
  }

  export type SavedPostUpdateManyMutationInput = {
    savedPostId?: StringFieldUpdateOperationsInput | string
    originalPost?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUncheckedUpdateManyInput = {
    savedPostId?: StringFieldUpdateOperationsInput | string
    originalPost?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SavedCheckCreateInput = {
    savedCheckId: string
    originalCheck: number
    brand: string
    clothe: string
    completed?: boolean
    savedPost: SavedPostCreateNestedOneWithoutSavedChecksInput
  }

  export type SavedCheckUncheckedCreateInput = {
    savedCheckId: string
    originalCheck: number
    brand: string
    clothe: string
    completed?: boolean
    savedPostId: string
  }

  export type SavedCheckUpdateInput = {
    savedCheckId?: StringFieldUpdateOperationsInput | string
    originalCheck?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    savedPost?: SavedPostUpdateOneRequiredWithoutSavedChecksNestedInput
  }

  export type SavedCheckUncheckedUpdateInput = {
    savedCheckId?: StringFieldUpdateOperationsInput | string
    originalCheck?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    savedPostId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedCheckCreateManyInput = {
    savedCheckId: string
    originalCheck: number
    brand: string
    clothe: string
    completed?: boolean
    savedPostId: string
  }

  export type SavedCheckUpdateManyMutationInput = {
    savedCheckId?: StringFieldUpdateOperationsInput | string
    originalCheck?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SavedCheckUncheckedUpdateManyInput = {
    savedCheckId?: StringFieldUpdateOperationsInput | string
    originalCheck?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    savedPostId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SavedPostListRelationFilter = {
    every?: SavedPostWhereInput
    some?: SavedPostWhereInput
    none?: SavedPostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CheckListRelationFilter = {
    every?: CheckWhereInput
    some?: CheckWhereInput
    none?: CheckWhereInput
  }

  export type CheckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    postId?: SortOrder
    image?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    postId?: SortOrder
    image?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    postId?: SortOrder
    image?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CheckCountOrderByAggregateInput = {
    checkId?: SortOrder
    brand?: SortOrder
    clothe?: SortOrder
    postId?: SortOrder
  }

  export type CheckAvgOrderByAggregateInput = {
    checkId?: SortOrder
    postId?: SortOrder
  }

  export type CheckMaxOrderByAggregateInput = {
    checkId?: SortOrder
    brand?: SortOrder
    clothe?: SortOrder
    postId?: SortOrder
  }

  export type CheckMinOrderByAggregateInput = {
    checkId?: SortOrder
    brand?: SortOrder
    clothe?: SortOrder
    postId?: SortOrder
  }

  export type CheckSumOrderByAggregateInput = {
    checkId?: SortOrder
    postId?: SortOrder
  }

  export type SavedCheckListRelationFilter = {
    every?: SavedCheckWhereInput
    some?: SavedCheckWhereInput
    none?: SavedCheckWhereInput
  }

  export type SavedCheckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedPostCountOrderByAggregateInput = {
    savedPostId?: SortOrder
    originalPost?: SortOrder
    image?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SavedPostAvgOrderByAggregateInput = {
    originalPost?: SortOrder
    userId?: SortOrder
  }

  export type SavedPostMaxOrderByAggregateInput = {
    savedPostId?: SortOrder
    originalPost?: SortOrder
    image?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SavedPostMinOrderByAggregateInput = {
    savedPostId?: SortOrder
    originalPost?: SortOrder
    image?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SavedPostSumOrderByAggregateInput = {
    originalPost?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SavedPostScalarRelationFilter = {
    is?: SavedPostWhereInput
    isNot?: SavedPostWhereInput
  }

  export type SavedCheckCountOrderByAggregateInput = {
    savedCheckId?: SortOrder
    originalCheck?: SortOrder
    brand?: SortOrder
    clothe?: SortOrder
    completed?: SortOrder
    savedPostId?: SortOrder
  }

  export type SavedCheckAvgOrderByAggregateInput = {
    originalCheck?: SortOrder
  }

  export type SavedCheckMaxOrderByAggregateInput = {
    savedCheckId?: SortOrder
    originalCheck?: SortOrder
    brand?: SortOrder
    clothe?: SortOrder
    completed?: SortOrder
    savedPostId?: SortOrder
  }

  export type SavedCheckMinOrderByAggregateInput = {
    savedCheckId?: SortOrder
    originalCheck?: SortOrder
    brand?: SortOrder
    clothe?: SortOrder
    completed?: SortOrder
    savedPostId?: SortOrder
  }

  export type SavedCheckSumOrderByAggregateInput = {
    originalCheck?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type SavedPostCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type SavedPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SavedPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutUserInput | SavedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutUserInput | SavedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutUserInput | SavedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SavedPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutUserInput | SavedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutUserInput | SavedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutUserInput | SavedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CheckCreateNestedManyWithoutPostInput = {
    create?: XOR<CheckCreateWithoutPostInput, CheckUncheckedCreateWithoutPostInput> | CheckCreateWithoutPostInput[] | CheckUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CheckCreateOrConnectWithoutPostInput | CheckCreateOrConnectWithoutPostInput[]
    createMany?: CheckCreateManyPostInputEnvelope
    connect?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
  }

  export type CheckUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CheckCreateWithoutPostInput, CheckUncheckedCreateWithoutPostInput> | CheckCreateWithoutPostInput[] | CheckUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CheckCreateOrConnectWithoutPostInput | CheckCreateOrConnectWithoutPostInput[]
    createMany?: CheckCreateManyPostInputEnvelope
    connect?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CheckUpdateManyWithoutPostNestedInput = {
    create?: XOR<CheckCreateWithoutPostInput, CheckUncheckedCreateWithoutPostInput> | CheckCreateWithoutPostInput[] | CheckUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CheckCreateOrConnectWithoutPostInput | CheckCreateOrConnectWithoutPostInput[]
    upsert?: CheckUpsertWithWhereUniqueWithoutPostInput | CheckUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CheckCreateManyPostInputEnvelope
    set?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    disconnect?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    delete?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    connect?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    update?: CheckUpdateWithWhereUniqueWithoutPostInput | CheckUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CheckUpdateManyWithWhereWithoutPostInput | CheckUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CheckScalarWhereInput | CheckScalarWhereInput[]
  }

  export type CheckUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CheckCreateWithoutPostInput, CheckUncheckedCreateWithoutPostInput> | CheckCreateWithoutPostInput[] | CheckUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CheckCreateOrConnectWithoutPostInput | CheckCreateOrConnectWithoutPostInput[]
    upsert?: CheckUpsertWithWhereUniqueWithoutPostInput | CheckUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CheckCreateManyPostInputEnvelope
    set?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    disconnect?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    delete?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    connect?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    update?: CheckUpdateWithWhereUniqueWithoutPostInput | CheckUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CheckUpdateManyWithWhereWithoutPostInput | CheckUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CheckScalarWhereInput | CheckScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutChecksInput = {
    create?: XOR<PostCreateWithoutChecksInput, PostUncheckedCreateWithoutChecksInput>
    connectOrCreate?: PostCreateOrConnectWithoutChecksInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutChecksNestedInput = {
    create?: XOR<PostCreateWithoutChecksInput, PostUncheckedCreateWithoutChecksInput>
    connectOrCreate?: PostCreateOrConnectWithoutChecksInput
    upsert?: PostUpsertWithoutChecksInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutChecksInput, PostUpdateWithoutChecksInput>, PostUncheckedUpdateWithoutChecksInput>
  }

  export type UserCreateNestedOneWithoutSavedPostsInput = {
    create?: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostsInput
    connect?: UserWhereUniqueInput
  }

  export type SavedCheckCreateNestedManyWithoutSavedPostInput = {
    create?: XOR<SavedCheckCreateWithoutSavedPostInput, SavedCheckUncheckedCreateWithoutSavedPostInput> | SavedCheckCreateWithoutSavedPostInput[] | SavedCheckUncheckedCreateWithoutSavedPostInput[]
    connectOrCreate?: SavedCheckCreateOrConnectWithoutSavedPostInput | SavedCheckCreateOrConnectWithoutSavedPostInput[]
    createMany?: SavedCheckCreateManySavedPostInputEnvelope
    connect?: SavedCheckWhereUniqueInput | SavedCheckWhereUniqueInput[]
  }

  export type SavedCheckUncheckedCreateNestedManyWithoutSavedPostInput = {
    create?: XOR<SavedCheckCreateWithoutSavedPostInput, SavedCheckUncheckedCreateWithoutSavedPostInput> | SavedCheckCreateWithoutSavedPostInput[] | SavedCheckUncheckedCreateWithoutSavedPostInput[]
    connectOrCreate?: SavedCheckCreateOrConnectWithoutSavedPostInput | SavedCheckCreateOrConnectWithoutSavedPostInput[]
    createMany?: SavedCheckCreateManySavedPostInputEnvelope
    connect?: SavedCheckWhereUniqueInput | SavedCheckWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSavedPostsNestedInput = {
    create?: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostsInput
    upsert?: UserUpsertWithoutSavedPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedPostsInput, UserUpdateWithoutSavedPostsInput>, UserUncheckedUpdateWithoutSavedPostsInput>
  }

  export type SavedCheckUpdateManyWithoutSavedPostNestedInput = {
    create?: XOR<SavedCheckCreateWithoutSavedPostInput, SavedCheckUncheckedCreateWithoutSavedPostInput> | SavedCheckCreateWithoutSavedPostInput[] | SavedCheckUncheckedCreateWithoutSavedPostInput[]
    connectOrCreate?: SavedCheckCreateOrConnectWithoutSavedPostInput | SavedCheckCreateOrConnectWithoutSavedPostInput[]
    upsert?: SavedCheckUpsertWithWhereUniqueWithoutSavedPostInput | SavedCheckUpsertWithWhereUniqueWithoutSavedPostInput[]
    createMany?: SavedCheckCreateManySavedPostInputEnvelope
    set?: SavedCheckWhereUniqueInput | SavedCheckWhereUniqueInput[]
    disconnect?: SavedCheckWhereUniqueInput | SavedCheckWhereUniqueInput[]
    delete?: SavedCheckWhereUniqueInput | SavedCheckWhereUniqueInput[]
    connect?: SavedCheckWhereUniqueInput | SavedCheckWhereUniqueInput[]
    update?: SavedCheckUpdateWithWhereUniqueWithoutSavedPostInput | SavedCheckUpdateWithWhereUniqueWithoutSavedPostInput[]
    updateMany?: SavedCheckUpdateManyWithWhereWithoutSavedPostInput | SavedCheckUpdateManyWithWhereWithoutSavedPostInput[]
    deleteMany?: SavedCheckScalarWhereInput | SavedCheckScalarWhereInput[]
  }

  export type SavedCheckUncheckedUpdateManyWithoutSavedPostNestedInput = {
    create?: XOR<SavedCheckCreateWithoutSavedPostInput, SavedCheckUncheckedCreateWithoutSavedPostInput> | SavedCheckCreateWithoutSavedPostInput[] | SavedCheckUncheckedCreateWithoutSavedPostInput[]
    connectOrCreate?: SavedCheckCreateOrConnectWithoutSavedPostInput | SavedCheckCreateOrConnectWithoutSavedPostInput[]
    upsert?: SavedCheckUpsertWithWhereUniqueWithoutSavedPostInput | SavedCheckUpsertWithWhereUniqueWithoutSavedPostInput[]
    createMany?: SavedCheckCreateManySavedPostInputEnvelope
    set?: SavedCheckWhereUniqueInput | SavedCheckWhereUniqueInput[]
    disconnect?: SavedCheckWhereUniqueInput | SavedCheckWhereUniqueInput[]
    delete?: SavedCheckWhereUniqueInput | SavedCheckWhereUniqueInput[]
    connect?: SavedCheckWhereUniqueInput | SavedCheckWhereUniqueInput[]
    update?: SavedCheckUpdateWithWhereUniqueWithoutSavedPostInput | SavedCheckUpdateWithWhereUniqueWithoutSavedPostInput[]
    updateMany?: SavedCheckUpdateManyWithWhereWithoutSavedPostInput | SavedCheckUpdateManyWithWhereWithoutSavedPostInput[]
    deleteMany?: SavedCheckScalarWhereInput | SavedCheckScalarWhereInput[]
  }

  export type SavedPostCreateNestedOneWithoutSavedChecksInput = {
    create?: XOR<SavedPostCreateWithoutSavedChecksInput, SavedPostUncheckedCreateWithoutSavedChecksInput>
    connectOrCreate?: SavedPostCreateOrConnectWithoutSavedChecksInput
    connect?: SavedPostWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SavedPostUpdateOneRequiredWithoutSavedChecksNestedInput = {
    create?: XOR<SavedPostCreateWithoutSavedChecksInput, SavedPostUncheckedCreateWithoutSavedChecksInput>
    connectOrCreate?: SavedPostCreateOrConnectWithoutSavedChecksInput
    upsert?: SavedPostUpsertWithoutSavedChecksInput
    connect?: SavedPostWhereUniqueInput
    update?: XOR<XOR<SavedPostUpdateToOneWithWhereWithoutSavedChecksInput, SavedPostUpdateWithoutSavedChecksInput>, SavedPostUncheckedUpdateWithoutSavedChecksInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostCreateWithoutUserInput = {
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    checks?: CheckCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    postId?: number
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    checks?: CheckUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
  }

  export type SavedPostCreateWithoutUserInput = {
    savedPostId: string
    originalPost: number
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    savedChecks?: SavedCheckCreateNestedManyWithoutSavedPostInput
  }

  export type SavedPostUncheckedCreateWithoutUserInput = {
    savedPostId: string
    originalPost: number
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    savedChecks?: SavedCheckUncheckedCreateNestedManyWithoutSavedPostInput
  }

  export type SavedPostCreateOrConnectWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    create: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput>
  }

  export type SavedPostCreateManyUserInputEnvelope = {
    data: SavedPostCreateManyUserInput | SavedPostCreateManyUserInput[]
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    postId?: IntFilter<"Post"> | number
    image?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    tag?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    userId?: IntFilter<"Post"> | number
  }

  export type SavedPostUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    update: XOR<SavedPostUpdateWithoutUserInput, SavedPostUncheckedUpdateWithoutUserInput>
    create: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput>
  }

  export type SavedPostUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    data: XOR<SavedPostUpdateWithoutUserInput, SavedPostUncheckedUpdateWithoutUserInput>
  }

  export type SavedPostUpdateManyWithWhereWithoutUserInput = {
    where: SavedPostScalarWhereInput
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedPostScalarWhereInput = {
    AND?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
    OR?: SavedPostScalarWhereInput[]
    NOT?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
    savedPostId?: StringFilter<"SavedPost"> | string
    originalPost?: IntFilter<"SavedPost"> | number
    image?: StringFilter<"SavedPost"> | string
    title?: StringFilter<"SavedPost"> | string
    tag?: StringFilter<"SavedPost"> | string
    createdAt?: DateTimeFilter<"SavedPost"> | Date | string
    userId?: IntFilter<"SavedPost"> | number
  }

  export type UserCreateWithoutPostsInput = {
    username: string
    password: string
    displayName?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    savedPosts?: SavedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    userId?: number
    username: string
    password: string
    displayName?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    savedPosts?: SavedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CheckCreateWithoutPostInput = {
    brand: string
    clothe: string
  }

  export type CheckUncheckedCreateWithoutPostInput = {
    checkId?: number
    brand: string
    clothe: string
  }

  export type CheckCreateOrConnectWithoutPostInput = {
    where: CheckWhereUniqueInput
    create: XOR<CheckCreateWithoutPostInput, CheckUncheckedCreateWithoutPostInput>
  }

  export type CheckCreateManyPostInputEnvelope = {
    data: CheckCreateManyPostInput | CheckCreateManyPostInput[]
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedPosts?: SavedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedPosts?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CheckUpsertWithWhereUniqueWithoutPostInput = {
    where: CheckWhereUniqueInput
    update: XOR<CheckUpdateWithoutPostInput, CheckUncheckedUpdateWithoutPostInput>
    create: XOR<CheckCreateWithoutPostInput, CheckUncheckedCreateWithoutPostInput>
  }

  export type CheckUpdateWithWhereUniqueWithoutPostInput = {
    where: CheckWhereUniqueInput
    data: XOR<CheckUpdateWithoutPostInput, CheckUncheckedUpdateWithoutPostInput>
  }

  export type CheckUpdateManyWithWhereWithoutPostInput = {
    where: CheckScalarWhereInput
    data: XOR<CheckUpdateManyMutationInput, CheckUncheckedUpdateManyWithoutPostInput>
  }

  export type CheckScalarWhereInput = {
    AND?: CheckScalarWhereInput | CheckScalarWhereInput[]
    OR?: CheckScalarWhereInput[]
    NOT?: CheckScalarWhereInput | CheckScalarWhereInput[]
    checkId?: IntFilter<"Check"> | number
    brand?: StringFilter<"Check"> | string
    clothe?: StringFilter<"Check"> | string
    postId?: IntFilter<"Check"> | number
  }

  export type PostCreateWithoutChecksInput = {
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutChecksInput = {
    postId?: number
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    userId: number
  }

  export type PostCreateOrConnectWithoutChecksInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutChecksInput, PostUncheckedCreateWithoutChecksInput>
  }

  export type PostUpsertWithoutChecksInput = {
    update: XOR<PostUpdateWithoutChecksInput, PostUncheckedUpdateWithoutChecksInput>
    create: XOR<PostCreateWithoutChecksInput, PostUncheckedCreateWithoutChecksInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutChecksInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutChecksInput, PostUncheckedUpdateWithoutChecksInput>
  }

  export type PostUpdateWithoutChecksInput = {
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutChecksInput = {
    postId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutSavedPostsInput = {
    username: string
    password: string
    displayName?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedPostsInput = {
    userId?: number
    username: string
    password: string
    displayName?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
  }

  export type SavedCheckCreateWithoutSavedPostInput = {
    savedCheckId: string
    originalCheck: number
    brand: string
    clothe: string
    completed?: boolean
  }

  export type SavedCheckUncheckedCreateWithoutSavedPostInput = {
    savedCheckId: string
    originalCheck: number
    brand: string
    clothe: string
    completed?: boolean
  }

  export type SavedCheckCreateOrConnectWithoutSavedPostInput = {
    where: SavedCheckWhereUniqueInput
    create: XOR<SavedCheckCreateWithoutSavedPostInput, SavedCheckUncheckedCreateWithoutSavedPostInput>
  }

  export type SavedCheckCreateManySavedPostInputEnvelope = {
    data: SavedCheckCreateManySavedPostInput | SavedCheckCreateManySavedPostInput[]
  }

  export type UserUpsertWithoutSavedPostsInput = {
    update: XOR<UserUpdateWithoutSavedPostsInput, UserUncheckedUpdateWithoutSavedPostsInput>
    create: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedPostsInput, UserUncheckedUpdateWithoutSavedPostsInput>
  }

  export type UserUpdateWithoutSavedPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedPostsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SavedCheckUpsertWithWhereUniqueWithoutSavedPostInput = {
    where: SavedCheckWhereUniqueInput
    update: XOR<SavedCheckUpdateWithoutSavedPostInput, SavedCheckUncheckedUpdateWithoutSavedPostInput>
    create: XOR<SavedCheckCreateWithoutSavedPostInput, SavedCheckUncheckedCreateWithoutSavedPostInput>
  }

  export type SavedCheckUpdateWithWhereUniqueWithoutSavedPostInput = {
    where: SavedCheckWhereUniqueInput
    data: XOR<SavedCheckUpdateWithoutSavedPostInput, SavedCheckUncheckedUpdateWithoutSavedPostInput>
  }

  export type SavedCheckUpdateManyWithWhereWithoutSavedPostInput = {
    where: SavedCheckScalarWhereInput
    data: XOR<SavedCheckUpdateManyMutationInput, SavedCheckUncheckedUpdateManyWithoutSavedPostInput>
  }

  export type SavedCheckScalarWhereInput = {
    AND?: SavedCheckScalarWhereInput | SavedCheckScalarWhereInput[]
    OR?: SavedCheckScalarWhereInput[]
    NOT?: SavedCheckScalarWhereInput | SavedCheckScalarWhereInput[]
    savedCheckId?: StringFilter<"SavedCheck"> | string
    originalCheck?: IntFilter<"SavedCheck"> | number
    brand?: StringFilter<"SavedCheck"> | string
    clothe?: StringFilter<"SavedCheck"> | string
    completed?: BoolFilter<"SavedCheck"> | boolean
    savedPostId?: StringFilter<"SavedCheck"> | string
  }

  export type SavedPostCreateWithoutSavedChecksInput = {
    savedPostId: string
    originalPost: number
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedPostsInput
  }

  export type SavedPostUncheckedCreateWithoutSavedChecksInput = {
    savedPostId: string
    originalPost: number
    image: string
    title: string
    tag: string
    createdAt?: Date | string
    userId: number
  }

  export type SavedPostCreateOrConnectWithoutSavedChecksInput = {
    where: SavedPostWhereUniqueInput
    create: XOR<SavedPostCreateWithoutSavedChecksInput, SavedPostUncheckedCreateWithoutSavedChecksInput>
  }

  export type SavedPostUpsertWithoutSavedChecksInput = {
    update: XOR<SavedPostUpdateWithoutSavedChecksInput, SavedPostUncheckedUpdateWithoutSavedChecksInput>
    create: XOR<SavedPostCreateWithoutSavedChecksInput, SavedPostUncheckedCreateWithoutSavedChecksInput>
    where?: SavedPostWhereInput
  }

  export type SavedPostUpdateToOneWithWhereWithoutSavedChecksInput = {
    where?: SavedPostWhereInput
    data: XOR<SavedPostUpdateWithoutSavedChecksInput, SavedPostUncheckedUpdateWithoutSavedChecksInput>
  }

  export type SavedPostUpdateWithoutSavedChecksInput = {
    savedPostId?: StringFieldUpdateOperationsInput | string
    originalPost?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedPostsNestedInput
  }

  export type SavedPostUncheckedUpdateWithoutSavedChecksInput = {
    savedPostId?: StringFieldUpdateOperationsInput | string
    originalPost?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyUserInput = {
    postId?: number
    image: string
    title: string
    tag: string
    createdAt?: Date | string
  }

  export type SavedPostCreateManyUserInput = {
    savedPostId: string
    originalPost: number
    image: string
    title: string
    tag: string
    createdAt?: Date | string
  }

  export type PostUpdateWithoutUserInput = {
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checks?: CheckUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    postId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checks?: CheckUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    postId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUpdateWithoutUserInput = {
    savedPostId?: StringFieldUpdateOperationsInput | string
    originalPost?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedChecks?: SavedCheckUpdateManyWithoutSavedPostNestedInput
  }

  export type SavedPostUncheckedUpdateWithoutUserInput = {
    savedPostId?: StringFieldUpdateOperationsInput | string
    originalPost?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedChecks?: SavedCheckUncheckedUpdateManyWithoutSavedPostNestedInput
  }

  export type SavedPostUncheckedUpdateManyWithoutUserInput = {
    savedPostId?: StringFieldUpdateOperationsInput | string
    originalPost?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckCreateManyPostInput = {
    checkId?: number
    brand: string
    clothe: string
  }

  export type CheckUpdateWithoutPostInput = {
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
  }

  export type CheckUncheckedUpdateWithoutPostInput = {
    checkId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
  }

  export type CheckUncheckedUpdateManyWithoutPostInput = {
    checkId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
  }

  export type SavedCheckCreateManySavedPostInput = {
    savedCheckId: string
    originalCheck: number
    brand: string
    clothe: string
    completed?: boolean
  }

  export type SavedCheckUpdateWithoutSavedPostInput = {
    savedCheckId?: StringFieldUpdateOperationsInput | string
    originalCheck?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SavedCheckUncheckedUpdateWithoutSavedPostInput = {
    savedCheckId?: StringFieldUpdateOperationsInput | string
    originalCheck?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SavedCheckUncheckedUpdateManyWithoutSavedPostInput = {
    savedCheckId?: StringFieldUpdateOperationsInput | string
    originalCheck?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    clothe?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
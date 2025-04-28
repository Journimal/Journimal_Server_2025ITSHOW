
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
 * Model UserAnimal
 * 
 */
export type UserAnimal = $Result.DefaultSelection<Prisma.$UserAnimalPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model Animal
 * 
 */
export type Animal = $Result.DefaultSelection<Prisma.$AnimalPayload>
/**
 * Model Airport
 * 
 */
export type Airport = $Result.DefaultSelection<Prisma.$AirportPayload>

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
   * `prisma.userAnimal`: Exposes CRUD operations for the **UserAnimal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAnimals
    * const userAnimals = await prisma.userAnimal.findMany()
    * ```
    */
  get userAnimal(): Prisma.UserAnimalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animal`: Exposes CRUD operations for the **Animal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animals
    * const animals = await prisma.animal.findMany()
    * ```
    */
  get animal(): Prisma.AnimalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.airport`: Exposes CRUD operations for the **Airport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Airports
    * const airports = await prisma.airport.findMany()
    * ```
    */
  get airport(): Prisma.AirportDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    UserAnimal: 'UserAnimal',
    Trip: 'Trip',
    Mission: 'Mission',
    Animal: 'Animal',
    Airport: 'Airport'
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
      modelProps: "user" | "userAnimal" | "trip" | "mission" | "animal" | "airport"
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
      UserAnimal: {
        payload: Prisma.$UserAnimalPayload<ExtArgs>
        fields: Prisma.UserAnimalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAnimalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnimalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAnimalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnimalPayload>
          }
          findFirst: {
            args: Prisma.UserAnimalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnimalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAnimalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnimalPayload>
          }
          findMany: {
            args: Prisma.UserAnimalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnimalPayload>[]
          }
          create: {
            args: Prisma.UserAnimalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnimalPayload>
          }
          createMany: {
            args: Prisma.UserAnimalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserAnimalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnimalPayload>
          }
          update: {
            args: Prisma.UserAnimalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnimalPayload>
          }
          deleteMany: {
            args: Prisma.UserAnimalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAnimalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAnimalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnimalPayload>
          }
          aggregate: {
            args: Prisma.UserAnimalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAnimal>
          }
          groupBy: {
            args: Prisma.UserAnimalGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAnimalGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAnimalCountArgs<ExtArgs>
            result: $Utils.Optional<UserAnimalCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      Animal: {
        payload: Prisma.$AnimalPayload<ExtArgs>
        fields: Prisma.AnimalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findFirst: {
            args: Prisma.AnimalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findMany: {
            args: Prisma.AnimalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          create: {
            args: Prisma.AnimalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          createMany: {
            args: Prisma.AnimalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AnimalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          update: {
            args: Prisma.AnimalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          deleteMany: {
            args: Prisma.AnimalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnimalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          aggregate: {
            args: Prisma.AnimalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimal>
          }
          groupBy: {
            args: Prisma.AnimalGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimalGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimalCountArgs<ExtArgs>
            result: $Utils.Optional<AnimalCountAggregateOutputType> | number
          }
        }
      }
      Airport: {
        payload: Prisma.$AirportPayload<ExtArgs>
        fields: Prisma.AirportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AirportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AirportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          findFirst: {
            args: Prisma.AirportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AirportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          findMany: {
            args: Prisma.AirportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>[]
          }
          create: {
            args: Prisma.AirportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          createMany: {
            args: Prisma.AirportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AirportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          update: {
            args: Prisma.AirportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          deleteMany: {
            args: Prisma.AirportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AirportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AirportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          aggregate: {
            args: Prisma.AirportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirport>
          }
          groupBy: {
            args: Prisma.AirportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AirportCountArgs<ExtArgs>
            result: $Utils.Optional<AirportCountAggregateOutputType> | number
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
    userAnimal?: UserAnimalOmit
    trip?: TripOmit
    mission?: MissionOmit
    animal?: AnimalOmit
    airport?: AirportOmit
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
    userAnimal: number
    trip: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAnimal?: boolean | UserCountOutputTypeCountUserAnimalArgs
    trip?: boolean | UserCountOutputTypeCountTripArgs
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
  export type UserCountOutputTypeCountUserAnimalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnimalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * Count Type AnimalCountOutputType
   */

  export type AnimalCountOutputType = {
    userAnimals: number
    trips: number
    lastAnimalInTrips: number
  }

  export type AnimalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAnimals?: boolean | AnimalCountOutputTypeCountUserAnimalsArgs
    trips?: boolean | AnimalCountOutputTypeCountTripsArgs
    lastAnimalInTrips?: boolean | AnimalCountOutputTypeCountLastAnimalInTripsArgs
  }

  // Custom InputTypes
  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimalCountOutputType
     */
    select?: AnimalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountUserAnimalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnimalWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountLastAnimalInTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userId: string | null
    userPassword: string | null
    userNickname: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    userPassword: string | null
    userNickname: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    userPassword: number
    userNickname: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    userPassword?: true
    userNickname?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    userPassword?: true
    userNickname?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    userPassword?: true
    userNickname?: true
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
    id: number
    userId: string
    userPassword: string
    userNickname: string
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
    id?: boolean
    userId?: boolean
    userPassword?: boolean
    userNickname?: boolean
    userAnimal?: boolean | User$userAnimalArgs<ExtArgs>
    trip?: boolean | User$tripArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    userPassword?: boolean
    userNickname?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userPassword" | "userNickname", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAnimal?: boolean | User$userAnimalArgs<ExtArgs>
    trip?: boolean | User$tripArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userAnimal: Prisma.$UserAnimalPayload<ExtArgs>[]
      trip: Prisma.$TripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      userPassword: string
      userNickname: string
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
    userAnimal<T extends User$userAnimalArgs<ExtArgs> = {}>(args?: Subset<T, User$userAnimalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trip<T extends User$tripArgs<ExtArgs> = {}>(args?: Subset<T, User$tripArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly userId: FieldRef<"User", 'String'>
    readonly userPassword: FieldRef<"User", 'String'>
    readonly userNickname: FieldRef<"User", 'String'>
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
    skipDuplicates?: boolean
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
   * User.userAnimal
   */
  export type User$userAnimalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnimal
     */
    select?: UserAnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnimal
     */
    omit?: UserAnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnimalInclude<ExtArgs> | null
    where?: UserAnimalWhereInput
    orderBy?: UserAnimalOrderByWithRelationInput | UserAnimalOrderByWithRelationInput[]
    cursor?: UserAnimalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAnimalScalarFieldEnum | UserAnimalScalarFieldEnum[]
  }

  /**
   * User.trip
   */
  export type User$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
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
   * Model UserAnimal
   */

  export type AggregateUserAnimal = {
    _count: UserAnimalCountAggregateOutputType | null
    _avg: UserAnimalAvgAggregateOutputType | null
    _sum: UserAnimalSumAggregateOutputType | null
    _min: UserAnimalMinAggregateOutputType | null
    _max: UserAnimalMaxAggregateOutputType | null
  }

  export type UserAnimalAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    animalId: number | null
    count: number | null
  }

  export type UserAnimalSumAggregateOutputType = {
    id: number | null
    userId: number | null
    animalId: number | null
    count: number | null
  }

  export type UserAnimalMinAggregateOutputType = {
    id: number | null
    userId: number | null
    animalId: number | null
    count: number | null
  }

  export type UserAnimalMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    animalId: number | null
    count: number | null
  }

  export type UserAnimalCountAggregateOutputType = {
    id: number
    userId: number
    animalId: number
    count: number
    _all: number
  }


  export type UserAnimalAvgAggregateInputType = {
    id?: true
    userId?: true
    animalId?: true
    count?: true
  }

  export type UserAnimalSumAggregateInputType = {
    id?: true
    userId?: true
    animalId?: true
    count?: true
  }

  export type UserAnimalMinAggregateInputType = {
    id?: true
    userId?: true
    animalId?: true
    count?: true
  }

  export type UserAnimalMaxAggregateInputType = {
    id?: true
    userId?: true
    animalId?: true
    count?: true
  }

  export type UserAnimalCountAggregateInputType = {
    id?: true
    userId?: true
    animalId?: true
    count?: true
    _all?: true
  }

  export type UserAnimalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnimal to aggregate.
     */
    where?: UserAnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnimals to fetch.
     */
    orderBy?: UserAnimalOrderByWithRelationInput | UserAnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnimals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnimals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAnimals
    **/
    _count?: true | UserAnimalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAnimalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAnimalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAnimalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAnimalMaxAggregateInputType
  }

  export type GetUserAnimalAggregateType<T extends UserAnimalAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAnimal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAnimal[P]>
      : GetScalarType<T[P], AggregateUserAnimal[P]>
  }




  export type UserAnimalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnimalWhereInput
    orderBy?: UserAnimalOrderByWithAggregationInput | UserAnimalOrderByWithAggregationInput[]
    by: UserAnimalScalarFieldEnum[] | UserAnimalScalarFieldEnum
    having?: UserAnimalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAnimalCountAggregateInputType | true
    _avg?: UserAnimalAvgAggregateInputType
    _sum?: UserAnimalSumAggregateInputType
    _min?: UserAnimalMinAggregateInputType
    _max?: UserAnimalMaxAggregateInputType
  }

  export type UserAnimalGroupByOutputType = {
    id: number
    userId: number
    animalId: number
    count: number
    _count: UserAnimalCountAggregateOutputType | null
    _avg: UserAnimalAvgAggregateOutputType | null
    _sum: UserAnimalSumAggregateOutputType | null
    _min: UserAnimalMinAggregateOutputType | null
    _max: UserAnimalMaxAggregateOutputType | null
  }

  type GetUserAnimalGroupByPayload<T extends UserAnimalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAnimalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAnimalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAnimalGroupByOutputType[P]>
            : GetScalarType<T[P], UserAnimalGroupByOutputType[P]>
        }
      >
    >


  export type UserAnimalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    animalId?: boolean
    count?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnimal"]>



  export type UserAnimalSelectScalar = {
    id?: boolean
    userId?: boolean
    animalId?: boolean
    count?: boolean
  }

  export type UserAnimalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "animalId" | "count", ExtArgs["result"]["userAnimal"]>
  export type UserAnimalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }

  export type $UserAnimalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAnimal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      animal: Prisma.$AnimalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      animalId: number
      count: number
    }, ExtArgs["result"]["userAnimal"]>
    composites: {}
  }

  type UserAnimalGetPayload<S extends boolean | null | undefined | UserAnimalDefaultArgs> = $Result.GetResult<Prisma.$UserAnimalPayload, S>

  type UserAnimalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAnimalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAnimalCountAggregateInputType | true
    }

  export interface UserAnimalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAnimal'], meta: { name: 'UserAnimal' } }
    /**
     * Find zero or one UserAnimal that matches the filter.
     * @param {UserAnimalFindUniqueArgs} args - Arguments to find a UserAnimal
     * @example
     * // Get one UserAnimal
     * const userAnimal = await prisma.userAnimal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAnimalFindUniqueArgs>(args: SelectSubset<T, UserAnimalFindUniqueArgs<ExtArgs>>): Prisma__UserAnimalClient<$Result.GetResult<Prisma.$UserAnimalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAnimal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAnimalFindUniqueOrThrowArgs} args - Arguments to find a UserAnimal
     * @example
     * // Get one UserAnimal
     * const userAnimal = await prisma.userAnimal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAnimalFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAnimalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAnimalClient<$Result.GetResult<Prisma.$UserAnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnimal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnimalFindFirstArgs} args - Arguments to find a UserAnimal
     * @example
     * // Get one UserAnimal
     * const userAnimal = await prisma.userAnimal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAnimalFindFirstArgs>(args?: SelectSubset<T, UserAnimalFindFirstArgs<ExtArgs>>): Prisma__UserAnimalClient<$Result.GetResult<Prisma.$UserAnimalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnimal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnimalFindFirstOrThrowArgs} args - Arguments to find a UserAnimal
     * @example
     * // Get one UserAnimal
     * const userAnimal = await prisma.userAnimal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAnimalFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAnimalFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAnimalClient<$Result.GetResult<Prisma.$UserAnimalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAnimals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnimalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAnimals
     * const userAnimals = await prisma.userAnimal.findMany()
     * 
     * // Get first 10 UserAnimals
     * const userAnimals = await prisma.userAnimal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAnimalWithIdOnly = await prisma.userAnimal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAnimalFindManyArgs>(args?: SelectSubset<T, UserAnimalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAnimal.
     * @param {UserAnimalCreateArgs} args - Arguments to create a UserAnimal.
     * @example
     * // Create one UserAnimal
     * const UserAnimal = await prisma.userAnimal.create({
     *   data: {
     *     // ... data to create a UserAnimal
     *   }
     * })
     * 
     */
    create<T extends UserAnimalCreateArgs>(args: SelectSubset<T, UserAnimalCreateArgs<ExtArgs>>): Prisma__UserAnimalClient<$Result.GetResult<Prisma.$UserAnimalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAnimals.
     * @param {UserAnimalCreateManyArgs} args - Arguments to create many UserAnimals.
     * @example
     * // Create many UserAnimals
     * const userAnimal = await prisma.userAnimal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAnimalCreateManyArgs>(args?: SelectSubset<T, UserAnimalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAnimal.
     * @param {UserAnimalDeleteArgs} args - Arguments to delete one UserAnimal.
     * @example
     * // Delete one UserAnimal
     * const UserAnimal = await prisma.userAnimal.delete({
     *   where: {
     *     // ... filter to delete one UserAnimal
     *   }
     * })
     * 
     */
    delete<T extends UserAnimalDeleteArgs>(args: SelectSubset<T, UserAnimalDeleteArgs<ExtArgs>>): Prisma__UserAnimalClient<$Result.GetResult<Prisma.$UserAnimalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAnimal.
     * @param {UserAnimalUpdateArgs} args - Arguments to update one UserAnimal.
     * @example
     * // Update one UserAnimal
     * const userAnimal = await prisma.userAnimal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAnimalUpdateArgs>(args: SelectSubset<T, UserAnimalUpdateArgs<ExtArgs>>): Prisma__UserAnimalClient<$Result.GetResult<Prisma.$UserAnimalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAnimals.
     * @param {UserAnimalDeleteManyArgs} args - Arguments to filter UserAnimals to delete.
     * @example
     * // Delete a few UserAnimals
     * const { count } = await prisma.userAnimal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAnimalDeleteManyArgs>(args?: SelectSubset<T, UserAnimalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnimals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnimalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAnimals
     * const userAnimal = await prisma.userAnimal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAnimalUpdateManyArgs>(args: SelectSubset<T, UserAnimalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAnimal.
     * @param {UserAnimalUpsertArgs} args - Arguments to update or create a UserAnimal.
     * @example
     * // Update or create a UserAnimal
     * const userAnimal = await prisma.userAnimal.upsert({
     *   create: {
     *     // ... data to create a UserAnimal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAnimal we want to update
     *   }
     * })
     */
    upsert<T extends UserAnimalUpsertArgs>(args: SelectSubset<T, UserAnimalUpsertArgs<ExtArgs>>): Prisma__UserAnimalClient<$Result.GetResult<Prisma.$UserAnimalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAnimals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnimalCountArgs} args - Arguments to filter UserAnimals to count.
     * @example
     * // Count the number of UserAnimals
     * const count = await prisma.userAnimal.count({
     *   where: {
     *     // ... the filter for the UserAnimals we want to count
     *   }
     * })
    **/
    count<T extends UserAnimalCountArgs>(
      args?: Subset<T, UserAnimalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAnimalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAnimal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnimalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAnimalAggregateArgs>(args: Subset<T, UserAnimalAggregateArgs>): Prisma.PrismaPromise<GetUserAnimalAggregateType<T>>

    /**
     * Group by UserAnimal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnimalGroupByArgs} args - Group by arguments.
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
      T extends UserAnimalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAnimalGroupByArgs['orderBy'] }
        : { orderBy?: UserAnimalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAnimalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAnimalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAnimal model
   */
  readonly fields: UserAnimalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAnimal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAnimalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    animal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAnimal model
   */
  interface UserAnimalFieldRefs {
    readonly id: FieldRef<"UserAnimal", 'Int'>
    readonly userId: FieldRef<"UserAnimal", 'Int'>
    readonly animalId: FieldRef<"UserAnimal", 'Int'>
    readonly count: FieldRef<"UserAnimal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserAnimal findUnique
   */
  export type UserAnimalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnimal
     */
    select?: UserAnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnimal
     */
    omit?: UserAnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnimalInclude<ExtArgs> | null
    /**
     * Filter, which UserAnimal to fetch.
     */
    where: UserAnimalWhereUniqueInput
  }

  /**
   * UserAnimal findUniqueOrThrow
   */
  export type UserAnimalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnimal
     */
    select?: UserAnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnimal
     */
    omit?: UserAnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnimalInclude<ExtArgs> | null
    /**
     * Filter, which UserAnimal to fetch.
     */
    where: UserAnimalWhereUniqueInput
  }

  /**
   * UserAnimal findFirst
   */
  export type UserAnimalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnimal
     */
    select?: UserAnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnimal
     */
    omit?: UserAnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnimalInclude<ExtArgs> | null
    /**
     * Filter, which UserAnimal to fetch.
     */
    where?: UserAnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnimals to fetch.
     */
    orderBy?: UserAnimalOrderByWithRelationInput | UserAnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnimals.
     */
    cursor?: UserAnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnimals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnimals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnimals.
     */
    distinct?: UserAnimalScalarFieldEnum | UserAnimalScalarFieldEnum[]
  }

  /**
   * UserAnimal findFirstOrThrow
   */
  export type UserAnimalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnimal
     */
    select?: UserAnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnimal
     */
    omit?: UserAnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnimalInclude<ExtArgs> | null
    /**
     * Filter, which UserAnimal to fetch.
     */
    where?: UserAnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnimals to fetch.
     */
    orderBy?: UserAnimalOrderByWithRelationInput | UserAnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnimals.
     */
    cursor?: UserAnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnimals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnimals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnimals.
     */
    distinct?: UserAnimalScalarFieldEnum | UserAnimalScalarFieldEnum[]
  }

  /**
   * UserAnimal findMany
   */
  export type UserAnimalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnimal
     */
    select?: UserAnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnimal
     */
    omit?: UserAnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnimalInclude<ExtArgs> | null
    /**
     * Filter, which UserAnimals to fetch.
     */
    where?: UserAnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnimals to fetch.
     */
    orderBy?: UserAnimalOrderByWithRelationInput | UserAnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAnimals.
     */
    cursor?: UserAnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnimals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnimals.
     */
    skip?: number
    distinct?: UserAnimalScalarFieldEnum | UserAnimalScalarFieldEnum[]
  }

  /**
   * UserAnimal create
   */
  export type UserAnimalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnimal
     */
    select?: UserAnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnimal
     */
    omit?: UserAnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnimalInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAnimal.
     */
    data: XOR<UserAnimalCreateInput, UserAnimalUncheckedCreateInput>
  }

  /**
   * UserAnimal createMany
   */
  export type UserAnimalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAnimals.
     */
    data: UserAnimalCreateManyInput | UserAnimalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAnimal update
   */
  export type UserAnimalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnimal
     */
    select?: UserAnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnimal
     */
    omit?: UserAnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnimalInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAnimal.
     */
    data: XOR<UserAnimalUpdateInput, UserAnimalUncheckedUpdateInput>
    /**
     * Choose, which UserAnimal to update.
     */
    where: UserAnimalWhereUniqueInput
  }

  /**
   * UserAnimal updateMany
   */
  export type UserAnimalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAnimals.
     */
    data: XOR<UserAnimalUpdateManyMutationInput, UserAnimalUncheckedUpdateManyInput>
    /**
     * Filter which UserAnimals to update
     */
    where?: UserAnimalWhereInput
    /**
     * Limit how many UserAnimals to update.
     */
    limit?: number
  }

  /**
   * UserAnimal upsert
   */
  export type UserAnimalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnimal
     */
    select?: UserAnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnimal
     */
    omit?: UserAnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnimalInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAnimal to update in case it exists.
     */
    where: UserAnimalWhereUniqueInput
    /**
     * In case the UserAnimal found by the `where` argument doesn't exist, create a new UserAnimal with this data.
     */
    create: XOR<UserAnimalCreateInput, UserAnimalUncheckedCreateInput>
    /**
     * In case the UserAnimal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAnimalUpdateInput, UserAnimalUncheckedUpdateInput>
  }

  /**
   * UserAnimal delete
   */
  export type UserAnimalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnimal
     */
    select?: UserAnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnimal
     */
    omit?: UserAnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnimalInclude<ExtArgs> | null
    /**
     * Filter which UserAnimal to delete.
     */
    where: UserAnimalWhereUniqueInput
  }

  /**
   * UserAnimal deleteMany
   */
  export type UserAnimalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnimals to delete
     */
    where?: UserAnimalWhereInput
    /**
     * Limit how many UserAnimals to delete.
     */
    limit?: number
  }

  /**
   * UserAnimal without action
   */
  export type UserAnimalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnimal
     */
    select?: UserAnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnimal
     */
    omit?: UserAnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnimalInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    id: number | null
    completeMission: number | null
    lastAnimalId: number | null
    userId: number | null
    animalId: number | null
  }

  export type TripSumAggregateOutputType = {
    id: number | null
    completeMission: number | null
    lastAnimalId: number | null
    userId: number | null
    animalId: number | null
  }

  export type TripMinAggregateOutputType = {
    id: number | null
    departure: string | null
    arrival: string | null
    first_day: Date | null
    last_day: Date | null
    completeMission: number | null
    lastAnimalId: number | null
    userId: number | null
    animalId: number | null
  }

  export type TripMaxAggregateOutputType = {
    id: number | null
    departure: string | null
    arrival: string | null
    first_day: Date | null
    last_day: Date | null
    completeMission: number | null
    lastAnimalId: number | null
    userId: number | null
    animalId: number | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    departure: number
    arrival: number
    first_day: number
    last_day: number
    completeMission: number
    lastAnimalId: number
    userId: number
    animalId: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    id?: true
    completeMission?: true
    lastAnimalId?: true
    userId?: true
    animalId?: true
  }

  export type TripSumAggregateInputType = {
    id?: true
    completeMission?: true
    lastAnimalId?: true
    userId?: true
    animalId?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    departure?: true
    arrival?: true
    first_day?: true
    last_day?: true
    completeMission?: true
    lastAnimalId?: true
    userId?: true
    animalId?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    departure?: true
    arrival?: true
    first_day?: true
    last_day?: true
    completeMission?: true
    lastAnimalId?: true
    userId?: true
    animalId?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    departure?: true
    arrival?: true
    first_day?: true
    last_day?: true
    completeMission?: true
    lastAnimalId?: true
    userId?: true
    animalId?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: number
    departure: string
    arrival: string
    first_day: Date
    last_day: Date
    completeMission: number
    lastAnimalId: number | null
    userId: number | null
    animalId: number | null
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departure?: boolean
    arrival?: boolean
    first_day?: boolean
    last_day?: boolean
    completeMission?: boolean
    lastAnimalId?: boolean
    userId?: boolean
    animalId?: boolean
    lastAnimal?: boolean | Trip$lastAnimalArgs<ExtArgs>
    user?: boolean | Trip$userArgs<ExtArgs>
    animal?: boolean | Trip$animalArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>



  export type TripSelectScalar = {
    id?: boolean
    departure?: boolean
    arrival?: boolean
    first_day?: boolean
    last_day?: boolean
    completeMission?: boolean
    lastAnimalId?: boolean
    userId?: boolean
    animalId?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "departure" | "arrival" | "first_day" | "last_day" | "completeMission" | "lastAnimalId" | "userId" | "animalId", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lastAnimal?: boolean | Trip$lastAnimalArgs<ExtArgs>
    user?: boolean | Trip$userArgs<ExtArgs>
    animal?: boolean | Trip$animalArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      lastAnimal: Prisma.$AnimalPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      animal: Prisma.$AnimalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      departure: string
      arrival: string
      first_day: Date
      last_day: Date
      completeMission: number
      lastAnimalId: number | null
      userId: number | null
      animalId: number | null
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lastAnimal<T extends Trip$lastAnimalArgs<ExtArgs> = {}>(args?: Subset<T, Trip$lastAnimalArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Trip$userArgs<ExtArgs> = {}>(args?: Subset<T, Trip$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    animal<T extends Trip$animalArgs<ExtArgs> = {}>(args?: Subset<T, Trip$animalArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'Int'>
    readonly departure: FieldRef<"Trip", 'String'>
    readonly arrival: FieldRef<"Trip", 'String'>
    readonly first_day: FieldRef<"Trip", 'DateTime'>
    readonly last_day: FieldRef<"Trip", 'DateTime'>
    readonly completeMission: FieldRef<"Trip", 'Int'>
    readonly lastAnimalId: FieldRef<"Trip", 'Int'>
    readonly userId: FieldRef<"Trip", 'Int'>
    readonly animalId: FieldRef<"Trip", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.lastAnimal
   */
  export type Trip$lastAnimalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
  }

  /**
   * Trip.user
   */
  export type Trip$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Trip.animal
   */
  export type Trip$animalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    id: number | null
  }

  export type MissionSumAggregateOutputType = {
    id: number | null
  }

  export type MissionMinAggregateOutputType = {
    id: number | null
    mission_name: string | null
    missionLevel: string | null
    thumbnail: string | null
    missionImage: string | null
    description: string | null
  }

  export type MissionMaxAggregateOutputType = {
    id: number | null
    mission_name: string | null
    missionLevel: string | null
    thumbnail: string | null
    missionImage: string | null
    description: string | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    mission_name: number
    missionLevel: number
    thumbnail: number
    missionImage: number
    description: number
    _all: number
  }


  export type MissionAvgAggregateInputType = {
    id?: true
  }

  export type MissionSumAggregateInputType = {
    id?: true
  }

  export type MissionMinAggregateInputType = {
    id?: true
    mission_name?: true
    missionLevel?: true
    thumbnail?: true
    missionImage?: true
    description?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    mission_name?: true
    missionLevel?: true
    thumbnail?: true
    missionImage?: true
    description?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    mission_name?: true
    missionLevel?: true
    thumbnail?: true
    missionImage?: true
    description?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: number
    mission_name: string
    missionLevel: string
    thumbnail: string
    missionImage: string
    description: string
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mission_name?: boolean
    missionLevel?: boolean
    thumbnail?: boolean
    missionImage?: boolean
    description?: boolean
  }, ExtArgs["result"]["mission"]>



  export type MissionSelectScalar = {
    id?: boolean
    mission_name?: boolean
    missionLevel?: boolean
    thumbnail?: boolean
    missionImage?: boolean
    description?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mission_name" | "missionLevel" | "thumbnail" | "missionImage" | "description", ExtArgs["result"]["mission"]>

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mission_name: string
      missionLevel: string
      thumbnail: string
      missionImage: string
      description: string
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
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
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'Int'>
    readonly mission_name: FieldRef<"Mission", 'String'>
    readonly missionLevel: FieldRef<"Mission", 'String'>
    readonly thumbnail: FieldRef<"Mission", 'String'>
    readonly missionImage: FieldRef<"Mission", 'String'>
    readonly description: FieldRef<"Mission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
  }


  /**
   * Model Animal
   */

  export type AggregateAnimal = {
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  export type AnimalAvgAggregateOutputType = {
    id: number | null
  }

  export type AnimalSumAggregateOutputType = {
    id: number | null
  }

  export type AnimalMinAggregateOutputType = {
    id: number | null
    aniImage: string | null
    aniName: string | null
    aniLevel: string | null
  }

  export type AnimalMaxAggregateOutputType = {
    id: number | null
    aniImage: string | null
    aniName: string | null
    aniLevel: string | null
  }

  export type AnimalCountAggregateOutputType = {
    id: number
    aniImage: number
    aniName: number
    aniLevel: number
    _all: number
  }


  export type AnimalAvgAggregateInputType = {
    id?: true
  }

  export type AnimalSumAggregateInputType = {
    id?: true
  }

  export type AnimalMinAggregateInputType = {
    id?: true
    aniImage?: true
    aniName?: true
    aniLevel?: true
  }

  export type AnimalMaxAggregateInputType = {
    id?: true
    aniImage?: true
    aniName?: true
    aniLevel?: true
  }

  export type AnimalCountAggregateInputType = {
    id?: true
    aniImage?: true
    aniName?: true
    aniLevel?: true
    _all?: true
  }

  export type AnimalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animal to aggregate.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animals
    **/
    _count?: true | AnimalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimalMaxAggregateInputType
  }

  export type GetAnimalAggregateType<T extends AnimalAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimal[P]>
      : GetScalarType<T[P], AggregateAnimal[P]>
  }




  export type AnimalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithAggregationInput | AnimalOrderByWithAggregationInput[]
    by: AnimalScalarFieldEnum[] | AnimalScalarFieldEnum
    having?: AnimalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimalCountAggregateInputType | true
    _avg?: AnimalAvgAggregateInputType
    _sum?: AnimalSumAggregateInputType
    _min?: AnimalMinAggregateInputType
    _max?: AnimalMaxAggregateInputType
  }

  export type AnimalGroupByOutputType = {
    id: number
    aniImage: string
    aniName: string
    aniLevel: string
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  type GetAnimalGroupByPayload<T extends AnimalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimalGroupByOutputType[P]>
            : GetScalarType<T[P], AnimalGroupByOutputType[P]>
        }
      >
    >


  export type AnimalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aniImage?: boolean
    aniName?: boolean
    aniLevel?: boolean
    userAnimals?: boolean | Animal$userAnimalsArgs<ExtArgs>
    trips?: boolean | Animal$tripsArgs<ExtArgs>
    lastAnimalInTrips?: boolean | Animal$lastAnimalInTripsArgs<ExtArgs>
    _count?: boolean | AnimalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>



  export type AnimalSelectScalar = {
    id?: boolean
    aniImage?: boolean
    aniName?: boolean
    aniLevel?: boolean
  }

  export type AnimalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aniImage" | "aniName" | "aniLevel", ExtArgs["result"]["animal"]>
  export type AnimalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAnimals?: boolean | Animal$userAnimalsArgs<ExtArgs>
    trips?: boolean | Animal$tripsArgs<ExtArgs>
    lastAnimalInTrips?: boolean | Animal$lastAnimalInTripsArgs<ExtArgs>
    _count?: boolean | AnimalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AnimalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animal"
    objects: {
      userAnimals: Prisma.$UserAnimalPayload<ExtArgs>[]
      trips: Prisma.$TripPayload<ExtArgs>[]
      lastAnimalInTrips: Prisma.$TripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aniImage: string
      aniName: string
      aniLevel: string
    }, ExtArgs["result"]["animal"]>
    composites: {}
  }

  type AnimalGetPayload<S extends boolean | null | undefined | AnimalDefaultArgs> = $Result.GetResult<Prisma.$AnimalPayload, S>

  type AnimalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimalCountAggregateInputType | true
    }

  export interface AnimalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animal'], meta: { name: 'Animal' } }
    /**
     * Find zero or one Animal that matches the filter.
     * @param {AnimalFindUniqueArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimalFindUniqueArgs>(args: SelectSubset<T, AnimalFindUniqueArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Animal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimalFindUniqueOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimalFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimalFindFirstArgs>(args?: SelectSubset<T, AnimalFindFirstArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimalFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimalFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Animals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animals
     * const animals = await prisma.animal.findMany()
     * 
     * // Get first 10 Animals
     * const animals = await prisma.animal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animalWithIdOnly = await prisma.animal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimalFindManyArgs>(args?: SelectSubset<T, AnimalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Animal.
     * @param {AnimalCreateArgs} args - Arguments to create a Animal.
     * @example
     * // Create one Animal
     * const Animal = await prisma.animal.create({
     *   data: {
     *     // ... data to create a Animal
     *   }
     * })
     * 
     */
    create<T extends AnimalCreateArgs>(args: SelectSubset<T, AnimalCreateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Animals.
     * @param {AnimalCreateManyArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimalCreateManyArgs>(args?: SelectSubset<T, AnimalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Animal.
     * @param {AnimalDeleteArgs} args - Arguments to delete one Animal.
     * @example
     * // Delete one Animal
     * const Animal = await prisma.animal.delete({
     *   where: {
     *     // ... filter to delete one Animal
     *   }
     * })
     * 
     */
    delete<T extends AnimalDeleteArgs>(args: SelectSubset<T, AnimalDeleteArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Animal.
     * @param {AnimalUpdateArgs} args - Arguments to update one Animal.
     * @example
     * // Update one Animal
     * const animal = await prisma.animal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimalUpdateArgs>(args: SelectSubset<T, AnimalUpdateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Animals.
     * @param {AnimalDeleteManyArgs} args - Arguments to filter Animals to delete.
     * @example
     * // Delete a few Animals
     * const { count } = await prisma.animal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimalDeleteManyArgs>(args?: SelectSubset<T, AnimalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimalUpdateManyArgs>(args: SelectSubset<T, AnimalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Animal.
     * @param {AnimalUpsertArgs} args - Arguments to update or create a Animal.
     * @example
     * // Update or create a Animal
     * const animal = await prisma.animal.upsert({
     *   create: {
     *     // ... data to create a Animal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animal we want to update
     *   }
     * })
     */
    upsert<T extends AnimalUpsertArgs>(args: SelectSubset<T, AnimalUpsertArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalCountArgs} args - Arguments to filter Animals to count.
     * @example
     * // Count the number of Animals
     * const count = await prisma.animal.count({
     *   where: {
     *     // ... the filter for the Animals we want to count
     *   }
     * })
    **/
    count<T extends AnimalCountArgs>(
      args?: Subset<T, AnimalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimalAggregateArgs>(args: Subset<T, AnimalAggregateArgs>): Prisma.PrismaPromise<GetAnimalAggregateType<T>>

    /**
     * Group by Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalGroupByArgs} args - Group by arguments.
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
      T extends AnimalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimalGroupByArgs['orderBy'] }
        : { orderBy?: AnimalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animal model
   */
  readonly fields: AnimalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userAnimals<T extends Animal$userAnimalsArgs<ExtArgs> = {}>(args?: Subset<T, Animal$userAnimalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trips<T extends Animal$tripsArgs<ExtArgs> = {}>(args?: Subset<T, Animal$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lastAnimalInTrips<T extends Animal$lastAnimalInTripsArgs<ExtArgs> = {}>(args?: Subset<T, Animal$lastAnimalInTripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Animal model
   */
  interface AnimalFieldRefs {
    readonly id: FieldRef<"Animal", 'Int'>
    readonly aniImage: FieldRef<"Animal", 'String'>
    readonly aniName: FieldRef<"Animal", 'String'>
    readonly aniLevel: FieldRef<"Animal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Animal findUnique
   */
  export type AnimalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findUniqueOrThrow
   */
  export type AnimalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findFirst
   */
  export type AnimalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findFirstOrThrow
   */
  export type AnimalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findMany
   */
  export type AnimalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal create
   */
  export type AnimalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to create a Animal.
     */
    data: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
  }

  /**
   * Animal createMany
   */
  export type AnimalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animal update
   */
  export type AnimalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to update a Animal.
     */
    data: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
    /**
     * Choose, which Animal to update.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal updateMany
   */
  export type AnimalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
  }

  /**
   * Animal upsert
   */
  export type AnimalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The filter to search for the Animal to update in case it exists.
     */
    where: AnimalWhereUniqueInput
    /**
     * In case the Animal found by the `where` argument doesn't exist, create a new Animal with this data.
     */
    create: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
    /**
     * In case the Animal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
  }

  /**
   * Animal delete
   */
  export type AnimalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter which Animal to delete.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal deleteMany
   */
  export type AnimalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animals to delete
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to delete.
     */
    limit?: number
  }

  /**
   * Animal.userAnimals
   */
  export type Animal$userAnimalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnimal
     */
    select?: UserAnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnimal
     */
    omit?: UserAnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnimalInclude<ExtArgs> | null
    where?: UserAnimalWhereInput
    orderBy?: UserAnimalOrderByWithRelationInput | UserAnimalOrderByWithRelationInput[]
    cursor?: UserAnimalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAnimalScalarFieldEnum | UserAnimalScalarFieldEnum[]
  }

  /**
   * Animal.trips
   */
  export type Animal$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Animal.lastAnimalInTrips
   */
  export type Animal$lastAnimalInTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Animal without action
   */
  export type AnimalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
  }


  /**
   * Model Airport
   */

  export type AggregateAirport = {
    _count: AirportCountAggregateOutputType | null
    _avg: AirportAvgAggregateOutputType | null
    _sum: AirportSumAggregateOutputType | null
    _min: AirportMinAggregateOutputType | null
    _max: AirportMaxAggregateOutputType | null
  }

  export type AirportAvgAggregateOutputType = {
    id: number | null
  }

  export type AirportSumAggregateOutputType = {
    id: number | null
  }

  export type AirportMinAggregateOutputType = {
    id: number | null
    airportName: string | null
    country: string | null
    city: string | null
    code: string | null
  }

  export type AirportMaxAggregateOutputType = {
    id: number | null
    airportName: string | null
    country: string | null
    city: string | null
    code: string | null
  }

  export type AirportCountAggregateOutputType = {
    id: number
    airportName: number
    country: number
    city: number
    code: number
    _all: number
  }


  export type AirportAvgAggregateInputType = {
    id?: true
  }

  export type AirportSumAggregateInputType = {
    id?: true
  }

  export type AirportMinAggregateInputType = {
    id?: true
    airportName?: true
    country?: true
    city?: true
    code?: true
  }

  export type AirportMaxAggregateInputType = {
    id?: true
    airportName?: true
    country?: true
    city?: true
    code?: true
  }

  export type AirportCountAggregateInputType = {
    id?: true
    airportName?: true
    country?: true
    city?: true
    code?: true
    _all?: true
  }

  export type AirportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airport to aggregate.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Airports
    **/
    _count?: true | AirportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AirportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AirportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirportMaxAggregateInputType
  }

  export type GetAirportAggregateType<T extends AirportAggregateArgs> = {
        [P in keyof T & keyof AggregateAirport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirport[P]>
      : GetScalarType<T[P], AggregateAirport[P]>
  }




  export type AirportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirportWhereInput
    orderBy?: AirportOrderByWithAggregationInput | AirportOrderByWithAggregationInput[]
    by: AirportScalarFieldEnum[] | AirportScalarFieldEnum
    having?: AirportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirportCountAggregateInputType | true
    _avg?: AirportAvgAggregateInputType
    _sum?: AirportSumAggregateInputType
    _min?: AirportMinAggregateInputType
    _max?: AirportMaxAggregateInputType
  }

  export type AirportGroupByOutputType = {
    id: number
    airportName: string
    country: string
    city: string
    code: string
    _count: AirportCountAggregateOutputType | null
    _avg: AirportAvgAggregateOutputType | null
    _sum: AirportSumAggregateOutputType | null
    _min: AirportMinAggregateOutputType | null
    _max: AirportMaxAggregateOutputType | null
  }

  type GetAirportGroupByPayload<T extends AirportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirportGroupByOutputType[P]>
            : GetScalarType<T[P], AirportGroupByOutputType[P]>
        }
      >
    >


  export type AirportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    airportName?: boolean
    country?: boolean
    city?: boolean
    code?: boolean
  }, ExtArgs["result"]["airport"]>



  export type AirportSelectScalar = {
    id?: boolean
    airportName?: boolean
    country?: boolean
    city?: boolean
    code?: boolean
  }

  export type AirportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "airportName" | "country" | "city" | "code", ExtArgs["result"]["airport"]>

  export type $AirportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Airport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      airportName: string
      country: string
      city: string
      code: string
    }, ExtArgs["result"]["airport"]>
    composites: {}
  }

  type AirportGetPayload<S extends boolean | null | undefined | AirportDefaultArgs> = $Result.GetResult<Prisma.$AirportPayload, S>

  type AirportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AirportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AirportCountAggregateInputType | true
    }

  export interface AirportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Airport'], meta: { name: 'Airport' } }
    /**
     * Find zero or one Airport that matches the filter.
     * @param {AirportFindUniqueArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AirportFindUniqueArgs>(args: SelectSubset<T, AirportFindUniqueArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Airport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AirportFindUniqueOrThrowArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AirportFindUniqueOrThrowArgs>(args: SelectSubset<T, AirportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindFirstArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AirportFindFirstArgs>(args?: SelectSubset<T, AirportFindFirstArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindFirstOrThrowArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AirportFindFirstOrThrowArgs>(args?: SelectSubset<T, AirportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Airports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Airports
     * const airports = await prisma.airport.findMany()
     * 
     * // Get first 10 Airports
     * const airports = await prisma.airport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const airportWithIdOnly = await prisma.airport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AirportFindManyArgs>(args?: SelectSubset<T, AirportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Airport.
     * @param {AirportCreateArgs} args - Arguments to create a Airport.
     * @example
     * // Create one Airport
     * const Airport = await prisma.airport.create({
     *   data: {
     *     // ... data to create a Airport
     *   }
     * })
     * 
     */
    create<T extends AirportCreateArgs>(args: SelectSubset<T, AirportCreateArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Airports.
     * @param {AirportCreateManyArgs} args - Arguments to create many Airports.
     * @example
     * // Create many Airports
     * const airport = await prisma.airport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AirportCreateManyArgs>(args?: SelectSubset<T, AirportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Airport.
     * @param {AirportDeleteArgs} args - Arguments to delete one Airport.
     * @example
     * // Delete one Airport
     * const Airport = await prisma.airport.delete({
     *   where: {
     *     // ... filter to delete one Airport
     *   }
     * })
     * 
     */
    delete<T extends AirportDeleteArgs>(args: SelectSubset<T, AirportDeleteArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Airport.
     * @param {AirportUpdateArgs} args - Arguments to update one Airport.
     * @example
     * // Update one Airport
     * const airport = await prisma.airport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AirportUpdateArgs>(args: SelectSubset<T, AirportUpdateArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Airports.
     * @param {AirportDeleteManyArgs} args - Arguments to filter Airports to delete.
     * @example
     * // Delete a few Airports
     * const { count } = await prisma.airport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AirportDeleteManyArgs>(args?: SelectSubset<T, AirportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Airports
     * const airport = await prisma.airport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AirportUpdateManyArgs>(args: SelectSubset<T, AirportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Airport.
     * @param {AirportUpsertArgs} args - Arguments to update or create a Airport.
     * @example
     * // Update or create a Airport
     * const airport = await prisma.airport.upsert({
     *   create: {
     *     // ... data to create a Airport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Airport we want to update
     *   }
     * })
     */
    upsert<T extends AirportUpsertArgs>(args: SelectSubset<T, AirportUpsertArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportCountArgs} args - Arguments to filter Airports to count.
     * @example
     * // Count the number of Airports
     * const count = await prisma.airport.count({
     *   where: {
     *     // ... the filter for the Airports we want to count
     *   }
     * })
    **/
    count<T extends AirportCountArgs>(
      args?: Subset<T, AirportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Airport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AirportAggregateArgs>(args: Subset<T, AirportAggregateArgs>): Prisma.PrismaPromise<GetAirportAggregateType<T>>

    /**
     * Group by Airport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportGroupByArgs} args - Group by arguments.
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
      T extends AirportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AirportGroupByArgs['orderBy'] }
        : { orderBy?: AirportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AirportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Airport model
   */
  readonly fields: AirportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Airport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AirportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Airport model
   */
  interface AirportFieldRefs {
    readonly id: FieldRef<"Airport", 'Int'>
    readonly airportName: FieldRef<"Airport", 'String'>
    readonly country: FieldRef<"Airport", 'String'>
    readonly city: FieldRef<"Airport", 'String'>
    readonly code: FieldRef<"Airport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Airport findUnique
   */
  export type AirportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport findUniqueOrThrow
   */
  export type AirportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport findFirst
   */
  export type AirportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airports.
     */
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport findFirstOrThrow
   */
  export type AirportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airports.
     */
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport findMany
   */
  export type AirportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Filter, which Airports to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport create
   */
  export type AirportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * The data needed to create a Airport.
     */
    data: XOR<AirportCreateInput, AirportUncheckedCreateInput>
  }

  /**
   * Airport createMany
   */
  export type AirportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Airports.
     */
    data: AirportCreateManyInput | AirportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Airport update
   */
  export type AirportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * The data needed to update a Airport.
     */
    data: XOR<AirportUpdateInput, AirportUncheckedUpdateInput>
    /**
     * Choose, which Airport to update.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport updateMany
   */
  export type AirportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Airports.
     */
    data: XOR<AirportUpdateManyMutationInput, AirportUncheckedUpdateManyInput>
    /**
     * Filter which Airports to update
     */
    where?: AirportWhereInput
    /**
     * Limit how many Airports to update.
     */
    limit?: number
  }

  /**
   * Airport upsert
   */
  export type AirportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * The filter to search for the Airport to update in case it exists.
     */
    where: AirportWhereUniqueInput
    /**
     * In case the Airport found by the `where` argument doesn't exist, create a new Airport with this data.
     */
    create: XOR<AirportCreateInput, AirportUncheckedCreateInput>
    /**
     * In case the Airport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AirportUpdateInput, AirportUncheckedUpdateInput>
  }

  /**
   * Airport delete
   */
  export type AirportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Filter which Airport to delete.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport deleteMany
   */
  export type AirportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airports to delete
     */
    where?: AirportWhereInput
    /**
     * Limit how many Airports to delete.
     */
    limit?: number
  }

  /**
   * Airport without action
   */
  export type AirportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userPassword: 'userPassword',
    userNickname: 'userNickname'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserAnimalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    animalId: 'animalId',
    count: 'count'
  };

  export type UserAnimalScalarFieldEnum = (typeof UserAnimalScalarFieldEnum)[keyof typeof UserAnimalScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    departure: 'departure',
    arrival: 'arrival',
    first_day: 'first_day',
    last_day: 'last_day',
    completeMission: 'completeMission',
    lastAnimalId: 'lastAnimalId',
    userId: 'userId',
    animalId: 'animalId'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    mission_name: 'mission_name',
    missionLevel: 'missionLevel',
    thumbnail: 'thumbnail',
    missionImage: 'missionImage',
    description: 'description'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const AnimalScalarFieldEnum: {
    id: 'id',
    aniImage: 'aniImage',
    aniName: 'aniName',
    aniLevel: 'aniLevel'
  };

  export type AnimalScalarFieldEnum = (typeof AnimalScalarFieldEnum)[keyof typeof AnimalScalarFieldEnum]


  export const AirportScalarFieldEnum: {
    id: 'id',
    airportName: 'airportName',
    country: 'country',
    city: 'city',
    code: 'code'
  };

  export type AirportScalarFieldEnum = (typeof AirportScalarFieldEnum)[keyof typeof AirportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    userId: 'userId',
    userPassword: 'userPassword',
    userNickname: 'userNickname'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TripOrderByRelevanceFieldEnum: {
    departure: 'departure',
    arrival: 'arrival'
  };

  export type TripOrderByRelevanceFieldEnum = (typeof TripOrderByRelevanceFieldEnum)[keyof typeof TripOrderByRelevanceFieldEnum]


  export const MissionOrderByRelevanceFieldEnum: {
    mission_name: 'mission_name',
    missionLevel: 'missionLevel',
    thumbnail: 'thumbnail',
    missionImage: 'missionImage',
    description: 'description'
  };

  export type MissionOrderByRelevanceFieldEnum = (typeof MissionOrderByRelevanceFieldEnum)[keyof typeof MissionOrderByRelevanceFieldEnum]


  export const AnimalOrderByRelevanceFieldEnum: {
    aniImage: 'aniImage',
    aniName: 'aniName',
    aniLevel: 'aniLevel'
  };

  export type AnimalOrderByRelevanceFieldEnum = (typeof AnimalOrderByRelevanceFieldEnum)[keyof typeof AnimalOrderByRelevanceFieldEnum]


  export const AirportOrderByRelevanceFieldEnum: {
    airportName: 'airportName',
    country: 'country',
    city: 'city',
    code: 'code'
  };

  export type AirportOrderByRelevanceFieldEnum = (typeof AirportOrderByRelevanceFieldEnum)[keyof typeof AirportOrderByRelevanceFieldEnum]


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
    id?: IntFilter<"User"> | number
    userId?: StringFilter<"User"> | string
    userPassword?: StringFilter<"User"> | string
    userNickname?: StringFilter<"User"> | string
    userAnimal?: UserAnimalListRelationFilter
    trip?: TripListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userPassword?: SortOrder
    userNickname?: SortOrder
    userAnimal?: UserAnimalOrderByRelationAggregateInput
    trip?: TripOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userPassword?: StringFilter<"User"> | string
    userNickname?: StringFilter<"User"> | string
    userAnimal?: UserAnimalListRelationFilter
    trip?: TripListRelationFilter
  }, "id" | "userId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userPassword?: SortOrder
    userNickname?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    userId?: StringWithAggregatesFilter<"User"> | string
    userPassword?: StringWithAggregatesFilter<"User"> | string
    userNickname?: StringWithAggregatesFilter<"User"> | string
  }

  export type UserAnimalWhereInput = {
    AND?: UserAnimalWhereInput | UserAnimalWhereInput[]
    OR?: UserAnimalWhereInput[]
    NOT?: UserAnimalWhereInput | UserAnimalWhereInput[]
    id?: IntFilter<"UserAnimal"> | number
    userId?: IntFilter<"UserAnimal"> | number
    animalId?: IntFilter<"UserAnimal"> | number
    count?: IntFilter<"UserAnimal"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }

  export type UserAnimalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    animalId?: SortOrder
    count?: SortOrder
    user?: UserOrderByWithRelationInput
    animal?: AnimalOrderByWithRelationInput
  }

  export type UserAnimalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserAnimalWhereInput | UserAnimalWhereInput[]
    OR?: UserAnimalWhereInput[]
    NOT?: UserAnimalWhereInput | UserAnimalWhereInput[]
    userId?: IntFilter<"UserAnimal"> | number
    animalId?: IntFilter<"UserAnimal"> | number
    count?: IntFilter<"UserAnimal"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }, "id">

  export type UserAnimalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    animalId?: SortOrder
    count?: SortOrder
    _count?: UserAnimalCountOrderByAggregateInput
    _avg?: UserAnimalAvgOrderByAggregateInput
    _max?: UserAnimalMaxOrderByAggregateInput
    _min?: UserAnimalMinOrderByAggregateInput
    _sum?: UserAnimalSumOrderByAggregateInput
  }

  export type UserAnimalScalarWhereWithAggregatesInput = {
    AND?: UserAnimalScalarWhereWithAggregatesInput | UserAnimalScalarWhereWithAggregatesInput[]
    OR?: UserAnimalScalarWhereWithAggregatesInput[]
    NOT?: UserAnimalScalarWhereWithAggregatesInput | UserAnimalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserAnimal"> | number
    userId?: IntWithAggregatesFilter<"UserAnimal"> | number
    animalId?: IntWithAggregatesFilter<"UserAnimal"> | number
    count?: IntWithAggregatesFilter<"UserAnimal"> | number
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: IntFilter<"Trip"> | number
    departure?: StringFilter<"Trip"> | string
    arrival?: StringFilter<"Trip"> | string
    first_day?: DateTimeFilter<"Trip"> | Date | string
    last_day?: DateTimeFilter<"Trip"> | Date | string
    completeMission?: IntFilter<"Trip"> | number
    lastAnimalId?: IntNullableFilter<"Trip"> | number | null
    userId?: IntNullableFilter<"Trip"> | number | null
    animalId?: IntNullableFilter<"Trip"> | number | null
    lastAnimal?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    animal?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    departure?: SortOrder
    arrival?: SortOrder
    first_day?: SortOrder
    last_day?: SortOrder
    completeMission?: SortOrder
    lastAnimalId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    animalId?: SortOrderInput | SortOrder
    lastAnimal?: AnimalOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    animal?: AnimalOrderByWithRelationInput
    _relevance?: TripOrderByRelevanceInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    departure?: StringFilter<"Trip"> | string
    arrival?: StringFilter<"Trip"> | string
    first_day?: DateTimeFilter<"Trip"> | Date | string
    last_day?: DateTimeFilter<"Trip"> | Date | string
    completeMission?: IntFilter<"Trip"> | number
    lastAnimalId?: IntNullableFilter<"Trip"> | number | null
    userId?: IntNullableFilter<"Trip"> | number | null
    animalId?: IntNullableFilter<"Trip"> | number | null
    lastAnimal?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    animal?: XOR<AnimalNullableScalarRelationFilter, AnimalWhereInput> | null
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    departure?: SortOrder
    arrival?: SortOrder
    first_day?: SortOrder
    last_day?: SortOrder
    completeMission?: SortOrder
    lastAnimalId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    animalId?: SortOrderInput | SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trip"> | number
    departure?: StringWithAggregatesFilter<"Trip"> | string
    arrival?: StringWithAggregatesFilter<"Trip"> | string
    first_day?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    last_day?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    completeMission?: IntWithAggregatesFilter<"Trip"> | number
    lastAnimalId?: IntNullableWithAggregatesFilter<"Trip"> | number | null
    userId?: IntNullableWithAggregatesFilter<"Trip"> | number | null
    animalId?: IntNullableWithAggregatesFilter<"Trip"> | number | null
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: IntFilter<"Mission"> | number
    mission_name?: StringFilter<"Mission"> | string
    missionLevel?: StringFilter<"Mission"> | string
    thumbnail?: StringFilter<"Mission"> | string
    missionImage?: StringFilter<"Mission"> | string
    description?: StringFilter<"Mission"> | string
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    mission_name?: SortOrder
    missionLevel?: SortOrder
    thumbnail?: SortOrder
    missionImage?: SortOrder
    description?: SortOrder
    _relevance?: MissionOrderByRelevanceInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    mission_name?: StringFilter<"Mission"> | string
    missionLevel?: StringFilter<"Mission"> | string
    thumbnail?: StringFilter<"Mission"> | string
    missionImage?: StringFilter<"Mission"> | string
    description?: StringFilter<"Mission"> | string
  }, "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    mission_name?: SortOrder
    missionLevel?: SortOrder
    thumbnail?: SortOrder
    missionImage?: SortOrder
    description?: SortOrder
    _count?: MissionCountOrderByAggregateInput
    _avg?: MissionAvgOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
    _sum?: MissionSumOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mission"> | number
    mission_name?: StringWithAggregatesFilter<"Mission"> | string
    missionLevel?: StringWithAggregatesFilter<"Mission"> | string
    thumbnail?: StringWithAggregatesFilter<"Mission"> | string
    missionImage?: StringWithAggregatesFilter<"Mission"> | string
    description?: StringWithAggregatesFilter<"Mission"> | string
  }

  export type AnimalWhereInput = {
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    id?: IntFilter<"Animal"> | number
    aniImage?: StringFilter<"Animal"> | string
    aniName?: StringFilter<"Animal"> | string
    aniLevel?: StringFilter<"Animal"> | string
    userAnimals?: UserAnimalListRelationFilter
    trips?: TripListRelationFilter
    lastAnimalInTrips?: TripListRelationFilter
  }

  export type AnimalOrderByWithRelationInput = {
    id?: SortOrder
    aniImage?: SortOrder
    aniName?: SortOrder
    aniLevel?: SortOrder
    userAnimals?: UserAnimalOrderByRelationAggregateInput
    trips?: TripOrderByRelationAggregateInput
    lastAnimalInTrips?: TripOrderByRelationAggregateInput
    _relevance?: AnimalOrderByRelevanceInput
  }

  export type AnimalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    aniImage?: StringFilter<"Animal"> | string
    aniName?: StringFilter<"Animal"> | string
    aniLevel?: StringFilter<"Animal"> | string
    userAnimals?: UserAnimalListRelationFilter
    trips?: TripListRelationFilter
    lastAnimalInTrips?: TripListRelationFilter
  }, "id">

  export type AnimalOrderByWithAggregationInput = {
    id?: SortOrder
    aniImage?: SortOrder
    aniName?: SortOrder
    aniLevel?: SortOrder
    _count?: AnimalCountOrderByAggregateInput
    _avg?: AnimalAvgOrderByAggregateInput
    _max?: AnimalMaxOrderByAggregateInput
    _min?: AnimalMinOrderByAggregateInput
    _sum?: AnimalSumOrderByAggregateInput
  }

  export type AnimalScalarWhereWithAggregatesInput = {
    AND?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    OR?: AnimalScalarWhereWithAggregatesInput[]
    NOT?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Animal"> | number
    aniImage?: StringWithAggregatesFilter<"Animal"> | string
    aniName?: StringWithAggregatesFilter<"Animal"> | string
    aniLevel?: StringWithAggregatesFilter<"Animal"> | string
  }

  export type AirportWhereInput = {
    AND?: AirportWhereInput | AirportWhereInput[]
    OR?: AirportWhereInput[]
    NOT?: AirportWhereInput | AirportWhereInput[]
    id?: IntFilter<"Airport"> | number
    airportName?: StringFilter<"Airport"> | string
    country?: StringFilter<"Airport"> | string
    city?: StringFilter<"Airport"> | string
    code?: StringFilter<"Airport"> | string
  }

  export type AirportOrderByWithRelationInput = {
    id?: SortOrder
    airportName?: SortOrder
    country?: SortOrder
    city?: SortOrder
    code?: SortOrder
    _relevance?: AirportOrderByRelevanceInput
  }

  export type AirportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: AirportWhereInput | AirportWhereInput[]
    OR?: AirportWhereInput[]
    NOT?: AirportWhereInput | AirportWhereInput[]
    airportName?: StringFilter<"Airport"> | string
    country?: StringFilter<"Airport"> | string
    city?: StringFilter<"Airport"> | string
  }, "id" | "code">

  export type AirportOrderByWithAggregationInput = {
    id?: SortOrder
    airportName?: SortOrder
    country?: SortOrder
    city?: SortOrder
    code?: SortOrder
    _count?: AirportCountOrderByAggregateInput
    _avg?: AirportAvgOrderByAggregateInput
    _max?: AirportMaxOrderByAggregateInput
    _min?: AirportMinOrderByAggregateInput
    _sum?: AirportSumOrderByAggregateInput
  }

  export type AirportScalarWhereWithAggregatesInput = {
    AND?: AirportScalarWhereWithAggregatesInput | AirportScalarWhereWithAggregatesInput[]
    OR?: AirportScalarWhereWithAggregatesInput[]
    NOT?: AirportScalarWhereWithAggregatesInput | AirportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Airport"> | number
    airportName?: StringWithAggregatesFilter<"Airport"> | string
    country?: StringWithAggregatesFilter<"Airport"> | string
    city?: StringWithAggregatesFilter<"Airport"> | string
    code?: StringWithAggregatesFilter<"Airport"> | string
  }

  export type UserCreateInput = {
    userId: string
    userPassword: string
    userNickname: string
    userAnimal?: UserAnimalCreateNestedManyWithoutUserInput
    trip?: TripCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userId: string
    userPassword: string
    userNickname: string
    userAnimal?: UserAnimalUncheckedCreateNestedManyWithoutUserInput
    trip?: TripUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userNickname?: StringFieldUpdateOperationsInput | string
    userAnimal?: UserAnimalUpdateManyWithoutUserNestedInput
    trip?: TripUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userNickname?: StringFieldUpdateOperationsInput | string
    userAnimal?: UserAnimalUncheckedUpdateManyWithoutUserNestedInput
    trip?: TripUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userId: string
    userPassword: string
    userNickname: string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userNickname?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userNickname?: StringFieldUpdateOperationsInput | string
  }

  export type UserAnimalCreateInput = {
    count?: number
    user: UserCreateNestedOneWithoutUserAnimalInput
    animal: AnimalCreateNestedOneWithoutUserAnimalsInput
  }

  export type UserAnimalUncheckedCreateInput = {
    id?: number
    userId: number
    animalId: number
    count?: number
  }

  export type UserAnimalUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserAnimalNestedInput
    animal?: AnimalUpdateOneRequiredWithoutUserAnimalsNestedInput
  }

  export type UserAnimalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    animalId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type UserAnimalCreateManyInput = {
    id?: number
    userId: number
    animalId: number
    count?: number
  }

  export type UserAnimalUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
  }

  export type UserAnimalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    animalId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type TripCreateInput = {
    departure: string
    arrival: string
    first_day: Date | string
    last_day: Date | string
    completeMission: number
    lastAnimal?: AnimalCreateNestedOneWithoutLastAnimalInTripsInput
    user?: UserCreateNestedOneWithoutTripInput
    animal?: AnimalCreateNestedOneWithoutTripsInput
  }

  export type TripUncheckedCreateInput = {
    id?: number
    departure: string
    arrival: string
    first_day: Date | string
    last_day: Date | string
    completeMission: number
    lastAnimalId?: number | null
    userId?: number | null
    animalId?: number | null
  }

  export type TripUpdateInput = {
    departure?: StringFieldUpdateOperationsInput | string
    arrival?: StringFieldUpdateOperationsInput | string
    first_day?: DateTimeFieldUpdateOperationsInput | Date | string
    last_day?: DateTimeFieldUpdateOperationsInput | Date | string
    completeMission?: IntFieldUpdateOperationsInput | number
    lastAnimal?: AnimalUpdateOneWithoutLastAnimalInTripsNestedInput
    user?: UserUpdateOneWithoutTripNestedInput
    animal?: AnimalUpdateOneWithoutTripsNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    departure?: StringFieldUpdateOperationsInput | string
    arrival?: StringFieldUpdateOperationsInput | string
    first_day?: DateTimeFieldUpdateOperationsInput | Date | string
    last_day?: DateTimeFieldUpdateOperationsInput | Date | string
    completeMission?: IntFieldUpdateOperationsInput | number
    lastAnimalId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TripCreateManyInput = {
    id?: number
    departure: string
    arrival: string
    first_day: Date | string
    last_day: Date | string
    completeMission: number
    lastAnimalId?: number | null
    userId?: number | null
    animalId?: number | null
  }

  export type TripUpdateManyMutationInput = {
    departure?: StringFieldUpdateOperationsInput | string
    arrival?: StringFieldUpdateOperationsInput | string
    first_day?: DateTimeFieldUpdateOperationsInput | Date | string
    last_day?: DateTimeFieldUpdateOperationsInput | Date | string
    completeMission?: IntFieldUpdateOperationsInput | number
  }

  export type TripUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    departure?: StringFieldUpdateOperationsInput | string
    arrival?: StringFieldUpdateOperationsInput | string
    first_day?: DateTimeFieldUpdateOperationsInput | Date | string
    last_day?: DateTimeFieldUpdateOperationsInput | Date | string
    completeMission?: IntFieldUpdateOperationsInput | number
    lastAnimalId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MissionCreateInput = {
    mission_name: string
    missionLevel: string
    thumbnail: string
    missionImage: string
    description: string
  }

  export type MissionUncheckedCreateInput = {
    id?: number
    mission_name: string
    missionLevel: string
    thumbnail: string
    missionImage: string
    description: string
  }

  export type MissionUpdateInput = {
    mission_name?: StringFieldUpdateOperationsInput | string
    missionLevel?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    missionImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mission_name?: StringFieldUpdateOperationsInput | string
    missionLevel?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    missionImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MissionCreateManyInput = {
    id?: number
    mission_name: string
    missionLevel: string
    thumbnail: string
    missionImage: string
    description: string
  }

  export type MissionUpdateManyMutationInput = {
    mission_name?: StringFieldUpdateOperationsInput | string
    missionLevel?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    missionImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mission_name?: StringFieldUpdateOperationsInput | string
    missionLevel?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    missionImage?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalCreateInput = {
    aniImage: string
    aniName: string
    aniLevel: string
    userAnimals?: UserAnimalCreateNestedManyWithoutAnimalInput
    trips?: TripCreateNestedManyWithoutAnimalInput
    lastAnimalInTrips?: TripCreateNestedManyWithoutLastAnimalInput
  }

  export type AnimalUncheckedCreateInput = {
    id?: number
    aniImage: string
    aniName: string
    aniLevel: string
    userAnimals?: UserAnimalUncheckedCreateNestedManyWithoutAnimalInput
    trips?: TripUncheckedCreateNestedManyWithoutAnimalInput
    lastAnimalInTrips?: TripUncheckedCreateNestedManyWithoutLastAnimalInput
  }

  export type AnimalUpdateInput = {
    aniImage?: StringFieldUpdateOperationsInput | string
    aniName?: StringFieldUpdateOperationsInput | string
    aniLevel?: StringFieldUpdateOperationsInput | string
    userAnimals?: UserAnimalUpdateManyWithoutAnimalNestedInput
    trips?: TripUpdateManyWithoutAnimalNestedInput
    lastAnimalInTrips?: TripUpdateManyWithoutLastAnimalNestedInput
  }

  export type AnimalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aniImage?: StringFieldUpdateOperationsInput | string
    aniName?: StringFieldUpdateOperationsInput | string
    aniLevel?: StringFieldUpdateOperationsInput | string
    userAnimals?: UserAnimalUncheckedUpdateManyWithoutAnimalNestedInput
    trips?: TripUncheckedUpdateManyWithoutAnimalNestedInput
    lastAnimalInTrips?: TripUncheckedUpdateManyWithoutLastAnimalNestedInput
  }

  export type AnimalCreateManyInput = {
    id?: number
    aniImage: string
    aniName: string
    aniLevel: string
  }

  export type AnimalUpdateManyMutationInput = {
    aniImage?: StringFieldUpdateOperationsInput | string
    aniName?: StringFieldUpdateOperationsInput | string
    aniLevel?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aniImage?: StringFieldUpdateOperationsInput | string
    aniName?: StringFieldUpdateOperationsInput | string
    aniLevel?: StringFieldUpdateOperationsInput | string
  }

  export type AirportCreateInput = {
    airportName: string
    country: string
    city: string
    code: string
  }

  export type AirportUncheckedCreateInput = {
    id?: number
    airportName: string
    country: string
    city: string
    code: string
  }

  export type AirportUpdateInput = {
    airportName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type AirportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    airportName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type AirportCreateManyInput = {
    id?: number
    airportName: string
    country: string
    city: string
    code: string
  }

  export type AirportUpdateManyMutationInput = {
    airportName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type AirportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    airportName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserAnimalListRelationFilter = {
    every?: UserAnimalWhereInput
    some?: UserAnimalWhereInput
    none?: UserAnimalWhereInput
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type UserAnimalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userPassword?: SortOrder
    userNickname?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userPassword?: SortOrder
    userNickname?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userPassword?: SortOrder
    userNickname?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AnimalScalarRelationFilter = {
    is?: AnimalWhereInput
    isNot?: AnimalWhereInput
  }

  export type UserAnimalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    animalId?: SortOrder
    count?: SortOrder
  }

  export type UserAnimalAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    animalId?: SortOrder
    count?: SortOrder
  }

  export type UserAnimalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    animalId?: SortOrder
    count?: SortOrder
  }

  export type UserAnimalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    animalId?: SortOrder
    count?: SortOrder
  }

  export type UserAnimalSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    animalId?: SortOrder
    count?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AnimalNullableScalarRelationFilter = {
    is?: AnimalWhereInput | null
    isNot?: AnimalWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TripOrderByRelevanceInput = {
    fields: TripOrderByRelevanceFieldEnum | TripOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    departure?: SortOrder
    arrival?: SortOrder
    first_day?: SortOrder
    last_day?: SortOrder
    completeMission?: SortOrder
    lastAnimalId?: SortOrder
    userId?: SortOrder
    animalId?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    id?: SortOrder
    completeMission?: SortOrder
    lastAnimalId?: SortOrder
    userId?: SortOrder
    animalId?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    departure?: SortOrder
    arrival?: SortOrder
    first_day?: SortOrder
    last_day?: SortOrder
    completeMission?: SortOrder
    lastAnimalId?: SortOrder
    userId?: SortOrder
    animalId?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    departure?: SortOrder
    arrival?: SortOrder
    first_day?: SortOrder
    last_day?: SortOrder
    completeMission?: SortOrder
    lastAnimalId?: SortOrder
    userId?: SortOrder
    animalId?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    id?: SortOrder
    completeMission?: SortOrder
    lastAnimalId?: SortOrder
    userId?: SortOrder
    animalId?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MissionOrderByRelevanceInput = {
    fields: MissionOrderByRelevanceFieldEnum | MissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    mission_name?: SortOrder
    missionLevel?: SortOrder
    thumbnail?: SortOrder
    missionImage?: SortOrder
    description?: SortOrder
  }

  export type MissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    mission_name?: SortOrder
    missionLevel?: SortOrder
    thumbnail?: SortOrder
    missionImage?: SortOrder
    description?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    mission_name?: SortOrder
    missionLevel?: SortOrder
    thumbnail?: SortOrder
    missionImage?: SortOrder
    description?: SortOrder
  }

  export type MissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnimalOrderByRelevanceInput = {
    fields: AnimalOrderByRelevanceFieldEnum | AnimalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AnimalCountOrderByAggregateInput = {
    id?: SortOrder
    aniImage?: SortOrder
    aniName?: SortOrder
    aniLevel?: SortOrder
  }

  export type AnimalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnimalMaxOrderByAggregateInput = {
    id?: SortOrder
    aniImage?: SortOrder
    aniName?: SortOrder
    aniLevel?: SortOrder
  }

  export type AnimalMinOrderByAggregateInput = {
    id?: SortOrder
    aniImage?: SortOrder
    aniName?: SortOrder
    aniLevel?: SortOrder
  }

  export type AnimalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AirportOrderByRelevanceInput = {
    fields: AirportOrderByRelevanceFieldEnum | AirportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AirportCountOrderByAggregateInput = {
    id?: SortOrder
    airportName?: SortOrder
    country?: SortOrder
    city?: SortOrder
    code?: SortOrder
  }

  export type AirportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AirportMaxOrderByAggregateInput = {
    id?: SortOrder
    airportName?: SortOrder
    country?: SortOrder
    city?: SortOrder
    code?: SortOrder
  }

  export type AirportMinOrderByAggregateInput = {
    id?: SortOrder
    airportName?: SortOrder
    country?: SortOrder
    city?: SortOrder
    code?: SortOrder
  }

  export type AirportSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserAnimalCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAnimalCreateWithoutUserInput, UserAnimalUncheckedCreateWithoutUserInput> | UserAnimalCreateWithoutUserInput[] | UserAnimalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnimalCreateOrConnectWithoutUserInput | UserAnimalCreateOrConnectWithoutUserInput[]
    createMany?: UserAnimalCreateManyUserInputEnvelope
    connect?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
  }

  export type TripCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type UserAnimalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAnimalCreateWithoutUserInput, UserAnimalUncheckedCreateWithoutUserInput> | UserAnimalCreateWithoutUserInput[] | UserAnimalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnimalCreateOrConnectWithoutUserInput | UserAnimalCreateOrConnectWithoutUserInput[]
    createMany?: UserAnimalCreateManyUserInputEnvelope
    connect?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserAnimalUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAnimalCreateWithoutUserInput, UserAnimalUncheckedCreateWithoutUserInput> | UserAnimalCreateWithoutUserInput[] | UserAnimalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnimalCreateOrConnectWithoutUserInput | UserAnimalCreateOrConnectWithoutUserInput[]
    upsert?: UserAnimalUpsertWithWhereUniqueWithoutUserInput | UserAnimalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAnimalCreateManyUserInputEnvelope
    set?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    disconnect?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    delete?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    connect?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    update?: UserAnimalUpdateWithWhereUniqueWithoutUserInput | UserAnimalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAnimalUpdateManyWithWhereWithoutUserInput | UserAnimalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAnimalScalarWhereInput | UserAnimalScalarWhereInput[]
  }

  export type TripUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserAnimalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAnimalCreateWithoutUserInput, UserAnimalUncheckedCreateWithoutUserInput> | UserAnimalCreateWithoutUserInput[] | UserAnimalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnimalCreateOrConnectWithoutUserInput | UserAnimalCreateOrConnectWithoutUserInput[]
    upsert?: UserAnimalUpsertWithWhereUniqueWithoutUserInput | UserAnimalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAnimalCreateManyUserInputEnvelope
    set?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    disconnect?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    delete?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    connect?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    update?: UserAnimalUpdateWithWhereUniqueWithoutUserInput | UserAnimalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAnimalUpdateManyWithWhereWithoutUserInput | UserAnimalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAnimalScalarWhereInput | UserAnimalScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserAnimalInput = {
    create?: XOR<UserCreateWithoutUserAnimalInput, UserUncheckedCreateWithoutUserAnimalInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAnimalInput
    connect?: UserWhereUniqueInput
  }

  export type AnimalCreateNestedOneWithoutUserAnimalsInput = {
    create?: XOR<AnimalCreateWithoutUserAnimalsInput, AnimalUncheckedCreateWithoutUserAnimalsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutUserAnimalsInput
    connect?: AnimalWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserAnimalNestedInput = {
    create?: XOR<UserCreateWithoutUserAnimalInput, UserUncheckedCreateWithoutUserAnimalInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAnimalInput
    upsert?: UserUpsertWithoutUserAnimalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAnimalInput, UserUpdateWithoutUserAnimalInput>, UserUncheckedUpdateWithoutUserAnimalInput>
  }

  export type AnimalUpdateOneRequiredWithoutUserAnimalsNestedInput = {
    create?: XOR<AnimalCreateWithoutUserAnimalsInput, AnimalUncheckedCreateWithoutUserAnimalsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutUserAnimalsInput
    upsert?: AnimalUpsertWithoutUserAnimalsInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutUserAnimalsInput, AnimalUpdateWithoutUserAnimalsInput>, AnimalUncheckedUpdateWithoutUserAnimalsInput>
  }

  export type AnimalCreateNestedOneWithoutLastAnimalInTripsInput = {
    create?: XOR<AnimalCreateWithoutLastAnimalInTripsInput, AnimalUncheckedCreateWithoutLastAnimalInTripsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutLastAnimalInTripsInput
    connect?: AnimalWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTripInput = {
    create?: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripInput
    connect?: UserWhereUniqueInput
  }

  export type AnimalCreateNestedOneWithoutTripsInput = {
    create?: XOR<AnimalCreateWithoutTripsInput, AnimalUncheckedCreateWithoutTripsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutTripsInput
    connect?: AnimalWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnimalUpdateOneWithoutLastAnimalInTripsNestedInput = {
    create?: XOR<AnimalCreateWithoutLastAnimalInTripsInput, AnimalUncheckedCreateWithoutLastAnimalInTripsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutLastAnimalInTripsInput
    upsert?: AnimalUpsertWithoutLastAnimalInTripsInput
    disconnect?: AnimalWhereInput | boolean
    delete?: AnimalWhereInput | boolean
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutLastAnimalInTripsInput, AnimalUpdateWithoutLastAnimalInTripsInput>, AnimalUncheckedUpdateWithoutLastAnimalInTripsInput>
  }

  export type UserUpdateOneWithoutTripNestedInput = {
    create?: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripInput
    upsert?: UserUpsertWithoutTripInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripInput, UserUpdateWithoutTripInput>, UserUncheckedUpdateWithoutTripInput>
  }

  export type AnimalUpdateOneWithoutTripsNestedInput = {
    create?: XOR<AnimalCreateWithoutTripsInput, AnimalUncheckedCreateWithoutTripsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutTripsInput
    upsert?: AnimalUpsertWithoutTripsInput
    disconnect?: AnimalWhereInput | boolean
    delete?: AnimalWhereInput | boolean
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutTripsInput, AnimalUpdateWithoutTripsInput>, AnimalUncheckedUpdateWithoutTripsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserAnimalCreateNestedManyWithoutAnimalInput = {
    create?: XOR<UserAnimalCreateWithoutAnimalInput, UserAnimalUncheckedCreateWithoutAnimalInput> | UserAnimalCreateWithoutAnimalInput[] | UserAnimalUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: UserAnimalCreateOrConnectWithoutAnimalInput | UserAnimalCreateOrConnectWithoutAnimalInput[]
    createMany?: UserAnimalCreateManyAnimalInputEnvelope
    connect?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
  }

  export type TripCreateNestedManyWithoutAnimalInput = {
    create?: XOR<TripCreateWithoutAnimalInput, TripUncheckedCreateWithoutAnimalInput> | TripCreateWithoutAnimalInput[] | TripUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: TripCreateOrConnectWithoutAnimalInput | TripCreateOrConnectWithoutAnimalInput[]
    createMany?: TripCreateManyAnimalInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripCreateNestedManyWithoutLastAnimalInput = {
    create?: XOR<TripCreateWithoutLastAnimalInput, TripUncheckedCreateWithoutLastAnimalInput> | TripCreateWithoutLastAnimalInput[] | TripUncheckedCreateWithoutLastAnimalInput[]
    connectOrCreate?: TripCreateOrConnectWithoutLastAnimalInput | TripCreateOrConnectWithoutLastAnimalInput[]
    createMany?: TripCreateManyLastAnimalInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type UserAnimalUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<UserAnimalCreateWithoutAnimalInput, UserAnimalUncheckedCreateWithoutAnimalInput> | UserAnimalCreateWithoutAnimalInput[] | UserAnimalUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: UserAnimalCreateOrConnectWithoutAnimalInput | UserAnimalCreateOrConnectWithoutAnimalInput[]
    createMany?: UserAnimalCreateManyAnimalInputEnvelope
    connect?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<TripCreateWithoutAnimalInput, TripUncheckedCreateWithoutAnimalInput> | TripCreateWithoutAnimalInput[] | TripUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: TripCreateOrConnectWithoutAnimalInput | TripCreateOrConnectWithoutAnimalInput[]
    createMany?: TripCreateManyAnimalInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutLastAnimalInput = {
    create?: XOR<TripCreateWithoutLastAnimalInput, TripUncheckedCreateWithoutLastAnimalInput> | TripCreateWithoutLastAnimalInput[] | TripUncheckedCreateWithoutLastAnimalInput[]
    connectOrCreate?: TripCreateOrConnectWithoutLastAnimalInput | TripCreateOrConnectWithoutLastAnimalInput[]
    createMany?: TripCreateManyLastAnimalInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type UserAnimalUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<UserAnimalCreateWithoutAnimalInput, UserAnimalUncheckedCreateWithoutAnimalInput> | UserAnimalCreateWithoutAnimalInput[] | UserAnimalUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: UserAnimalCreateOrConnectWithoutAnimalInput | UserAnimalCreateOrConnectWithoutAnimalInput[]
    upsert?: UserAnimalUpsertWithWhereUniqueWithoutAnimalInput | UserAnimalUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: UserAnimalCreateManyAnimalInputEnvelope
    set?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    disconnect?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    delete?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    connect?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    update?: UserAnimalUpdateWithWhereUniqueWithoutAnimalInput | UserAnimalUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: UserAnimalUpdateManyWithWhereWithoutAnimalInput | UserAnimalUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: UserAnimalScalarWhereInput | UserAnimalScalarWhereInput[]
  }

  export type TripUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<TripCreateWithoutAnimalInput, TripUncheckedCreateWithoutAnimalInput> | TripCreateWithoutAnimalInput[] | TripUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: TripCreateOrConnectWithoutAnimalInput | TripCreateOrConnectWithoutAnimalInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutAnimalInput | TripUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: TripCreateManyAnimalInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutAnimalInput | TripUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: TripUpdateManyWithWhereWithoutAnimalInput | TripUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripUpdateManyWithoutLastAnimalNestedInput = {
    create?: XOR<TripCreateWithoutLastAnimalInput, TripUncheckedCreateWithoutLastAnimalInput> | TripCreateWithoutLastAnimalInput[] | TripUncheckedCreateWithoutLastAnimalInput[]
    connectOrCreate?: TripCreateOrConnectWithoutLastAnimalInput | TripCreateOrConnectWithoutLastAnimalInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutLastAnimalInput | TripUpsertWithWhereUniqueWithoutLastAnimalInput[]
    createMany?: TripCreateManyLastAnimalInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutLastAnimalInput | TripUpdateWithWhereUniqueWithoutLastAnimalInput[]
    updateMany?: TripUpdateManyWithWhereWithoutLastAnimalInput | TripUpdateManyWithWhereWithoutLastAnimalInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type UserAnimalUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<UserAnimalCreateWithoutAnimalInput, UserAnimalUncheckedCreateWithoutAnimalInput> | UserAnimalCreateWithoutAnimalInput[] | UserAnimalUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: UserAnimalCreateOrConnectWithoutAnimalInput | UserAnimalCreateOrConnectWithoutAnimalInput[]
    upsert?: UserAnimalUpsertWithWhereUniqueWithoutAnimalInput | UserAnimalUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: UserAnimalCreateManyAnimalInputEnvelope
    set?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    disconnect?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    delete?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    connect?: UserAnimalWhereUniqueInput | UserAnimalWhereUniqueInput[]
    update?: UserAnimalUpdateWithWhereUniqueWithoutAnimalInput | UserAnimalUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: UserAnimalUpdateManyWithWhereWithoutAnimalInput | UserAnimalUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: UserAnimalScalarWhereInput | UserAnimalScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<TripCreateWithoutAnimalInput, TripUncheckedCreateWithoutAnimalInput> | TripCreateWithoutAnimalInput[] | TripUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: TripCreateOrConnectWithoutAnimalInput | TripCreateOrConnectWithoutAnimalInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutAnimalInput | TripUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: TripCreateManyAnimalInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutAnimalInput | TripUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: TripUpdateManyWithWhereWithoutAnimalInput | TripUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutLastAnimalNestedInput = {
    create?: XOR<TripCreateWithoutLastAnimalInput, TripUncheckedCreateWithoutLastAnimalInput> | TripCreateWithoutLastAnimalInput[] | TripUncheckedCreateWithoutLastAnimalInput[]
    connectOrCreate?: TripCreateOrConnectWithoutLastAnimalInput | TripCreateOrConnectWithoutLastAnimalInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutLastAnimalInput | TripUpsertWithWhereUniqueWithoutLastAnimalInput[]
    createMany?: TripCreateManyLastAnimalInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutLastAnimalInput | TripUpdateWithWhereUniqueWithoutLastAnimalInput[]
    updateMany?: TripUpdateManyWithWhereWithoutLastAnimalInput | TripUpdateManyWithWhereWithoutLastAnimalInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserAnimalCreateWithoutUserInput = {
    count?: number
    animal: AnimalCreateNestedOneWithoutUserAnimalsInput
  }

  export type UserAnimalUncheckedCreateWithoutUserInput = {
    id?: number
    animalId: number
    count?: number
  }

  export type UserAnimalCreateOrConnectWithoutUserInput = {
    where: UserAnimalWhereUniqueInput
    create: XOR<UserAnimalCreateWithoutUserInput, UserAnimalUncheckedCreateWithoutUserInput>
  }

  export type UserAnimalCreateManyUserInputEnvelope = {
    data: UserAnimalCreateManyUserInput | UserAnimalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutUserInput = {
    departure: string
    arrival: string
    first_day: Date | string
    last_day: Date | string
    completeMission: number
    lastAnimal?: AnimalCreateNestedOneWithoutLastAnimalInTripsInput
    animal?: AnimalCreateNestedOneWithoutTripsInput
  }

  export type TripUncheckedCreateWithoutUserInput = {
    id?: number
    departure: string
    arrival: string
    first_day: Date | string
    last_day: Date | string
    completeMission: number
    lastAnimalId?: number | null
    animalId?: number | null
  }

  export type TripCreateOrConnectWithoutUserInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripCreateManyUserInputEnvelope = {
    data: TripCreateManyUserInput | TripCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAnimalUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAnimalWhereUniqueInput
    update: XOR<UserAnimalUpdateWithoutUserInput, UserAnimalUncheckedUpdateWithoutUserInput>
    create: XOR<UserAnimalCreateWithoutUserInput, UserAnimalUncheckedCreateWithoutUserInput>
  }

  export type UserAnimalUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAnimalWhereUniqueInput
    data: XOR<UserAnimalUpdateWithoutUserInput, UserAnimalUncheckedUpdateWithoutUserInput>
  }

  export type UserAnimalUpdateManyWithWhereWithoutUserInput = {
    where: UserAnimalScalarWhereInput
    data: XOR<UserAnimalUpdateManyMutationInput, UserAnimalUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAnimalScalarWhereInput = {
    AND?: UserAnimalScalarWhereInput | UserAnimalScalarWhereInput[]
    OR?: UserAnimalScalarWhereInput[]
    NOT?: UserAnimalScalarWhereInput | UserAnimalScalarWhereInput[]
    id?: IntFilter<"UserAnimal"> | number
    userId?: IntFilter<"UserAnimal"> | number
    animalId?: IntFilter<"UserAnimal"> | number
    count?: IntFilter<"UserAnimal"> | number
  }

  export type TripUpsertWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripUpdateWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
  }

  export type TripUpdateManyWithWhereWithoutUserInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutUserInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: IntFilter<"Trip"> | number
    departure?: StringFilter<"Trip"> | string
    arrival?: StringFilter<"Trip"> | string
    first_day?: DateTimeFilter<"Trip"> | Date | string
    last_day?: DateTimeFilter<"Trip"> | Date | string
    completeMission?: IntFilter<"Trip"> | number
    lastAnimalId?: IntNullableFilter<"Trip"> | number | null
    userId?: IntNullableFilter<"Trip"> | number | null
    animalId?: IntNullableFilter<"Trip"> | number | null
  }

  export type UserCreateWithoutUserAnimalInput = {
    userId: string
    userPassword: string
    userNickname: string
    trip?: TripCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserAnimalInput = {
    id?: number
    userId: string
    userPassword: string
    userNickname: string
    trip?: TripUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserAnimalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAnimalInput, UserUncheckedCreateWithoutUserAnimalInput>
  }

  export type AnimalCreateWithoutUserAnimalsInput = {
    aniImage: string
    aniName: string
    aniLevel: string
    trips?: TripCreateNestedManyWithoutAnimalInput
    lastAnimalInTrips?: TripCreateNestedManyWithoutLastAnimalInput
  }

  export type AnimalUncheckedCreateWithoutUserAnimalsInput = {
    id?: number
    aniImage: string
    aniName: string
    aniLevel: string
    trips?: TripUncheckedCreateNestedManyWithoutAnimalInput
    lastAnimalInTrips?: TripUncheckedCreateNestedManyWithoutLastAnimalInput
  }

  export type AnimalCreateOrConnectWithoutUserAnimalsInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutUserAnimalsInput, AnimalUncheckedCreateWithoutUserAnimalsInput>
  }

  export type UserUpsertWithoutUserAnimalInput = {
    update: XOR<UserUpdateWithoutUserAnimalInput, UserUncheckedUpdateWithoutUserAnimalInput>
    create: XOR<UserCreateWithoutUserAnimalInput, UserUncheckedCreateWithoutUserAnimalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAnimalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAnimalInput, UserUncheckedUpdateWithoutUserAnimalInput>
  }

  export type UserUpdateWithoutUserAnimalInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userNickname?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userNickname?: StringFieldUpdateOperationsInput | string
    trip?: TripUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnimalUpsertWithoutUserAnimalsInput = {
    update: XOR<AnimalUpdateWithoutUserAnimalsInput, AnimalUncheckedUpdateWithoutUserAnimalsInput>
    create: XOR<AnimalCreateWithoutUserAnimalsInput, AnimalUncheckedCreateWithoutUserAnimalsInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutUserAnimalsInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutUserAnimalsInput, AnimalUncheckedUpdateWithoutUserAnimalsInput>
  }

  export type AnimalUpdateWithoutUserAnimalsInput = {
    aniImage?: StringFieldUpdateOperationsInput | string
    aniName?: StringFieldUpdateOperationsInput | string
    aniLevel?: StringFieldUpdateOperationsInput | string
    trips?: TripUpdateManyWithoutAnimalNestedInput
    lastAnimalInTrips?: TripUpdateManyWithoutLastAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutUserAnimalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    aniImage?: StringFieldUpdateOperationsInput | string
    aniName?: StringFieldUpdateOperationsInput | string
    aniLevel?: StringFieldUpdateOperationsInput | string
    trips?: TripUncheckedUpdateManyWithoutAnimalNestedInput
    lastAnimalInTrips?: TripUncheckedUpdateManyWithoutLastAnimalNestedInput
  }

  export type AnimalCreateWithoutLastAnimalInTripsInput = {
    aniImage: string
    aniName: string
    aniLevel: string
    userAnimals?: UserAnimalCreateNestedManyWithoutAnimalInput
    trips?: TripCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutLastAnimalInTripsInput = {
    id?: number
    aniImage: string
    aniName: string
    aniLevel: string
    userAnimals?: UserAnimalUncheckedCreateNestedManyWithoutAnimalInput
    trips?: TripUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutLastAnimalInTripsInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutLastAnimalInTripsInput, AnimalUncheckedCreateWithoutLastAnimalInTripsInput>
  }

  export type UserCreateWithoutTripInput = {
    userId: string
    userPassword: string
    userNickname: string
    userAnimal?: UserAnimalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripInput = {
    id?: number
    userId: string
    userPassword: string
    userNickname: string
    userAnimal?: UserAnimalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput>
  }

  export type AnimalCreateWithoutTripsInput = {
    aniImage: string
    aniName: string
    aniLevel: string
    userAnimals?: UserAnimalCreateNestedManyWithoutAnimalInput
    lastAnimalInTrips?: TripCreateNestedManyWithoutLastAnimalInput
  }

  export type AnimalUncheckedCreateWithoutTripsInput = {
    id?: number
    aniImage: string
    aniName: string
    aniLevel: string
    userAnimals?: UserAnimalUncheckedCreateNestedManyWithoutAnimalInput
    lastAnimalInTrips?: TripUncheckedCreateNestedManyWithoutLastAnimalInput
  }

  export type AnimalCreateOrConnectWithoutTripsInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutTripsInput, AnimalUncheckedCreateWithoutTripsInput>
  }

  export type AnimalUpsertWithoutLastAnimalInTripsInput = {
    update: XOR<AnimalUpdateWithoutLastAnimalInTripsInput, AnimalUncheckedUpdateWithoutLastAnimalInTripsInput>
    create: XOR<AnimalCreateWithoutLastAnimalInTripsInput, AnimalUncheckedCreateWithoutLastAnimalInTripsInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutLastAnimalInTripsInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutLastAnimalInTripsInput, AnimalUncheckedUpdateWithoutLastAnimalInTripsInput>
  }

  export type AnimalUpdateWithoutLastAnimalInTripsInput = {
    aniImage?: StringFieldUpdateOperationsInput | string
    aniName?: StringFieldUpdateOperationsInput | string
    aniLevel?: StringFieldUpdateOperationsInput | string
    userAnimals?: UserAnimalUpdateManyWithoutAnimalNestedInput
    trips?: TripUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutLastAnimalInTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    aniImage?: StringFieldUpdateOperationsInput | string
    aniName?: StringFieldUpdateOperationsInput | string
    aniLevel?: StringFieldUpdateOperationsInput | string
    userAnimals?: UserAnimalUncheckedUpdateManyWithoutAnimalNestedInput
    trips?: TripUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type UserUpsertWithoutTripInput = {
    update: XOR<UserUpdateWithoutTripInput, UserUncheckedUpdateWithoutTripInput>
    create: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripInput, UserUncheckedUpdateWithoutTripInput>
  }

  export type UserUpdateWithoutTripInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userNickname?: StringFieldUpdateOperationsInput | string
    userAnimal?: UserAnimalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userNickname?: StringFieldUpdateOperationsInput | string
    userAnimal?: UserAnimalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnimalUpsertWithoutTripsInput = {
    update: XOR<AnimalUpdateWithoutTripsInput, AnimalUncheckedUpdateWithoutTripsInput>
    create: XOR<AnimalCreateWithoutTripsInput, AnimalUncheckedCreateWithoutTripsInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutTripsInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutTripsInput, AnimalUncheckedUpdateWithoutTripsInput>
  }

  export type AnimalUpdateWithoutTripsInput = {
    aniImage?: StringFieldUpdateOperationsInput | string
    aniName?: StringFieldUpdateOperationsInput | string
    aniLevel?: StringFieldUpdateOperationsInput | string
    userAnimals?: UserAnimalUpdateManyWithoutAnimalNestedInput
    lastAnimalInTrips?: TripUpdateManyWithoutLastAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    aniImage?: StringFieldUpdateOperationsInput | string
    aniName?: StringFieldUpdateOperationsInput | string
    aniLevel?: StringFieldUpdateOperationsInput | string
    userAnimals?: UserAnimalUncheckedUpdateManyWithoutAnimalNestedInput
    lastAnimalInTrips?: TripUncheckedUpdateManyWithoutLastAnimalNestedInput
  }

  export type UserAnimalCreateWithoutAnimalInput = {
    count?: number
    user: UserCreateNestedOneWithoutUserAnimalInput
  }

  export type UserAnimalUncheckedCreateWithoutAnimalInput = {
    id?: number
    userId: number
    count?: number
  }

  export type UserAnimalCreateOrConnectWithoutAnimalInput = {
    where: UserAnimalWhereUniqueInput
    create: XOR<UserAnimalCreateWithoutAnimalInput, UserAnimalUncheckedCreateWithoutAnimalInput>
  }

  export type UserAnimalCreateManyAnimalInputEnvelope = {
    data: UserAnimalCreateManyAnimalInput | UserAnimalCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutAnimalInput = {
    departure: string
    arrival: string
    first_day: Date | string
    last_day: Date | string
    completeMission: number
    lastAnimal?: AnimalCreateNestedOneWithoutLastAnimalInTripsInput
    user?: UserCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutAnimalInput = {
    id?: number
    departure: string
    arrival: string
    first_day: Date | string
    last_day: Date | string
    completeMission: number
    lastAnimalId?: number | null
    userId?: number | null
  }

  export type TripCreateOrConnectWithoutAnimalInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutAnimalInput, TripUncheckedCreateWithoutAnimalInput>
  }

  export type TripCreateManyAnimalInputEnvelope = {
    data: TripCreateManyAnimalInput | TripCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutLastAnimalInput = {
    departure: string
    arrival: string
    first_day: Date | string
    last_day: Date | string
    completeMission: number
    user?: UserCreateNestedOneWithoutTripInput
    animal?: AnimalCreateNestedOneWithoutTripsInput
  }

  export type TripUncheckedCreateWithoutLastAnimalInput = {
    id?: number
    departure: string
    arrival: string
    first_day: Date | string
    last_day: Date | string
    completeMission: number
    userId?: number | null
    animalId?: number | null
  }

  export type TripCreateOrConnectWithoutLastAnimalInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutLastAnimalInput, TripUncheckedCreateWithoutLastAnimalInput>
  }

  export type TripCreateManyLastAnimalInputEnvelope = {
    data: TripCreateManyLastAnimalInput | TripCreateManyLastAnimalInput[]
    skipDuplicates?: boolean
  }

  export type UserAnimalUpsertWithWhereUniqueWithoutAnimalInput = {
    where: UserAnimalWhereUniqueInput
    update: XOR<UserAnimalUpdateWithoutAnimalInput, UserAnimalUncheckedUpdateWithoutAnimalInput>
    create: XOR<UserAnimalCreateWithoutAnimalInput, UserAnimalUncheckedCreateWithoutAnimalInput>
  }

  export type UserAnimalUpdateWithWhereUniqueWithoutAnimalInput = {
    where: UserAnimalWhereUniqueInput
    data: XOR<UserAnimalUpdateWithoutAnimalInput, UserAnimalUncheckedUpdateWithoutAnimalInput>
  }

  export type UserAnimalUpdateManyWithWhereWithoutAnimalInput = {
    where: UserAnimalScalarWhereInput
    data: XOR<UserAnimalUpdateManyMutationInput, UserAnimalUncheckedUpdateManyWithoutAnimalInput>
  }

  export type TripUpsertWithWhereUniqueWithoutAnimalInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutAnimalInput, TripUncheckedUpdateWithoutAnimalInput>
    create: XOR<TripCreateWithoutAnimalInput, TripUncheckedCreateWithoutAnimalInput>
  }

  export type TripUpdateWithWhereUniqueWithoutAnimalInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutAnimalInput, TripUncheckedUpdateWithoutAnimalInput>
  }

  export type TripUpdateManyWithWhereWithoutAnimalInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutAnimalInput>
  }

  export type TripUpsertWithWhereUniqueWithoutLastAnimalInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutLastAnimalInput, TripUncheckedUpdateWithoutLastAnimalInput>
    create: XOR<TripCreateWithoutLastAnimalInput, TripUncheckedCreateWithoutLastAnimalInput>
  }

  export type TripUpdateWithWhereUniqueWithoutLastAnimalInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutLastAnimalInput, TripUncheckedUpdateWithoutLastAnimalInput>
  }

  export type TripUpdateManyWithWhereWithoutLastAnimalInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutLastAnimalInput>
  }

  export type UserAnimalCreateManyUserInput = {
    id?: number
    animalId: number
    count?: number
  }

  export type TripCreateManyUserInput = {
    id?: number
    departure: string
    arrival: string
    first_day: Date | string
    last_day: Date | string
    completeMission: number
    lastAnimalId?: number | null
    animalId?: number | null
  }

  export type UserAnimalUpdateWithoutUserInput = {
    count?: IntFieldUpdateOperationsInput | number
    animal?: AnimalUpdateOneRequiredWithoutUserAnimalsNestedInput
  }

  export type UserAnimalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    animalId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type UserAnimalUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    animalId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type TripUpdateWithoutUserInput = {
    departure?: StringFieldUpdateOperationsInput | string
    arrival?: StringFieldUpdateOperationsInput | string
    first_day?: DateTimeFieldUpdateOperationsInput | Date | string
    last_day?: DateTimeFieldUpdateOperationsInput | Date | string
    completeMission?: IntFieldUpdateOperationsInput | number
    lastAnimal?: AnimalUpdateOneWithoutLastAnimalInTripsNestedInput
    animal?: AnimalUpdateOneWithoutTripsNestedInput
  }

  export type TripUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    departure?: StringFieldUpdateOperationsInput | string
    arrival?: StringFieldUpdateOperationsInput | string
    first_day?: DateTimeFieldUpdateOperationsInput | Date | string
    last_day?: DateTimeFieldUpdateOperationsInput | Date | string
    completeMission?: IntFieldUpdateOperationsInput | number
    lastAnimalId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TripUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    departure?: StringFieldUpdateOperationsInput | string
    arrival?: StringFieldUpdateOperationsInput | string
    first_day?: DateTimeFieldUpdateOperationsInput | Date | string
    last_day?: DateTimeFieldUpdateOperationsInput | Date | string
    completeMission?: IntFieldUpdateOperationsInput | number
    lastAnimalId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserAnimalCreateManyAnimalInput = {
    id?: number
    userId: number
    count?: number
  }

  export type TripCreateManyAnimalInput = {
    id?: number
    departure: string
    arrival: string
    first_day: Date | string
    last_day: Date | string
    completeMission: number
    lastAnimalId?: number | null
    userId?: number | null
  }

  export type TripCreateManyLastAnimalInput = {
    id?: number
    departure: string
    arrival: string
    first_day: Date | string
    last_day: Date | string
    completeMission: number
    userId?: number | null
    animalId?: number | null
  }

  export type UserAnimalUpdateWithoutAnimalInput = {
    count?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserAnimalNestedInput
  }

  export type UserAnimalUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type UserAnimalUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type TripUpdateWithoutAnimalInput = {
    departure?: StringFieldUpdateOperationsInput | string
    arrival?: StringFieldUpdateOperationsInput | string
    first_day?: DateTimeFieldUpdateOperationsInput | Date | string
    last_day?: DateTimeFieldUpdateOperationsInput | Date | string
    completeMission?: IntFieldUpdateOperationsInput | number
    lastAnimal?: AnimalUpdateOneWithoutLastAnimalInTripsNestedInput
    user?: UserUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    departure?: StringFieldUpdateOperationsInput | string
    arrival?: StringFieldUpdateOperationsInput | string
    first_day?: DateTimeFieldUpdateOperationsInput | Date | string
    last_day?: DateTimeFieldUpdateOperationsInput | Date | string
    completeMission?: IntFieldUpdateOperationsInput | number
    lastAnimalId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TripUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    departure?: StringFieldUpdateOperationsInput | string
    arrival?: StringFieldUpdateOperationsInput | string
    first_day?: DateTimeFieldUpdateOperationsInput | Date | string
    last_day?: DateTimeFieldUpdateOperationsInput | Date | string
    completeMission?: IntFieldUpdateOperationsInput | number
    lastAnimalId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TripUpdateWithoutLastAnimalInput = {
    departure?: StringFieldUpdateOperationsInput | string
    arrival?: StringFieldUpdateOperationsInput | string
    first_day?: DateTimeFieldUpdateOperationsInput | Date | string
    last_day?: DateTimeFieldUpdateOperationsInput | Date | string
    completeMission?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutTripNestedInput
    animal?: AnimalUpdateOneWithoutTripsNestedInput
  }

  export type TripUncheckedUpdateWithoutLastAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    departure?: StringFieldUpdateOperationsInput | string
    arrival?: StringFieldUpdateOperationsInput | string
    first_day?: DateTimeFieldUpdateOperationsInput | Date | string
    last_day?: DateTimeFieldUpdateOperationsInput | Date | string
    completeMission?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TripUncheckedUpdateManyWithoutLastAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    departure?: StringFieldUpdateOperationsInput | string
    arrival?: StringFieldUpdateOperationsInput | string
    first_day?: DateTimeFieldUpdateOperationsInput | Date | string
    last_day?: DateTimeFieldUpdateOperationsInput | Date | string
    completeMission?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    animalId?: NullableIntFieldUpdateOperationsInput | number | null
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
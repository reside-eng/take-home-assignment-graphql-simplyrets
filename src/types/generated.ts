import { GraphQLResolveInfo } from "graphql";
import { Context } from "../types";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Address = {
  __typename?: "Address";
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  crossStreet?: Maybe<Scalars["String"]>;
  full?: Maybe<Scalars["String"]>;
  postalCode?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  streetName?: Maybe<Scalars["String"]>;
  streetNumber?: Maybe<Scalars["Int"]>;
  streetNumberText?: Maybe<Scalars["String"]>;
  unit?: Maybe<Scalars["String"]>;
};

export type Agent = {
  __typename?: "Agent";
  address?: Maybe<Scalars["String"]>;
  contact?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
};

export type Association = {
  __typename?: "Association";
  amenities?: Maybe<Scalars["String"]>;
  fee?: Maybe<Scalars["Int"]>;
  frequency?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type CoAgent = {
  __typename?: "CoAgent";
  address?: Maybe<Scalars["String"]>;
  contact?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
};

export type Geo = {
  __typename?: "Geo";
  county?: Maybe<Scalars["String"]>;
  directions?: Maybe<Scalars["String"]>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
  marketArea?: Maybe<Scalars["String"]>;
};

export type Listing = {
  __typename?: "Listing";
  address?: Maybe<Address>;
  agent?: Maybe<Agent>;
  agreement?: Maybe<Scalars["String"]>;
  association?: Maybe<Association>;
  coAgent?: Maybe<CoAgent>;
  disclaimer?: Maybe<Scalars["String"]>;
  favoriteCount?: Maybe<Scalars["Int"]>;
  geo?: Maybe<Geo>;
  internetAddressDisplay?: Maybe<Scalars["String"]>;
  internetEntireListingDisplay?: Maybe<Scalars["String"]>;
  leaseTerm?: Maybe<Scalars["String"]>;
  leaseType?: Maybe<Scalars["String"]>;
  listDate?: Maybe<Scalars["String"]>;
  listPrice?: Maybe<Scalars["Int"]>;
  listingId?: Maybe<Scalars["String"]>;
  mls?: Maybe<Mls>;
  mlsId?: Maybe<Scalars["Int"]>;
  modified?: Maybe<Scalars["String"]>;
  office?: Maybe<Office>;
  originalListPrice?: Maybe<Scalars["String"]>;
  photos?: Maybe<Array<Maybe<Scalars["String"]>>>;
  privateRemarks?: Maybe<Scalars["String"]>;
  property?: Maybe<Property>;
  remarks?: Maybe<Scalars["String"]>;
  sales?: Maybe<Sales>;
  school?: Maybe<School>;
  showingContactName?: Maybe<Scalars["String"]>;
  showingContactPhone?: Maybe<Scalars["String"]>;
  showingInstructions?: Maybe<Scalars["String"]>;
  tax?: Maybe<Tax>;
  terms?: Maybe<Scalars["String"]>;
  virtualTourUrl?: Maybe<Scalars["String"]>;
};

export type Mls = {
  __typename?: "Mls";
  area?: Maybe<Scalars["String"]>;
  areaMinor?: Maybe<Scalars["String"]>;
  daysOnMarket?: Maybe<Scalars["Int"]>;
  originalEntryTimestamp?: Maybe<Scalars["String"]>;
  originatingSystemName?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  statusText?: Maybe<Scalars["String"]>;
};

export type Office = {
  __typename?: "Office";
  brokerid?: Maybe<Scalars["String"]>;
  contact?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  servingName?: Maybe<Scalars["String"]>;
};

export type Parking = {
  __typename?: "Parking";
  description?: Maybe<Scalars["String"]>;
  leased?: Maybe<Scalars["String"]>;
  spaces?: Maybe<Scalars["Int"]>;
};

export type Property = {
  __typename?: "Property";
  accessibility?: Maybe<Scalars["String"]>;
  acres?: Maybe<Scalars["String"]>;
  additionalRooms?: Maybe<Scalars["String"]>;
  area?: Maybe<Scalars["Int"]>;
  areaSource?: Maybe<Scalars["String"]>;
  bathrooms?: Maybe<Scalars["String"]>;
  bathsFull?: Maybe<Scalars["Int"]>;
  bathsHalf?: Maybe<Scalars["Int"]>;
  bathsThreeQuarter?: Maybe<Scalars["String"]>;
  bedrooms?: Maybe<Scalars["Int"]>;
  construction?: Maybe<Scalars["String"]>;
  cooling?: Maybe<Scalars["String"]>;
  exteriorFeatures?: Maybe<Scalars["String"]>;
  fireplaces?: Maybe<Scalars["Int"]>;
  flooring?: Maybe<Scalars["String"]>;
  foundation?: Maybe<Scalars["String"]>;
  garageSpaces?: Maybe<Scalars["Float"]>;
  heating?: Maybe<Scalars["String"]>;
  interiorFeatures?: Maybe<Scalars["String"]>;
  laundryFeatures?: Maybe<Scalars["String"]>;
  lotDescription?: Maybe<Scalars["String"]>;
  lotSize?: Maybe<Scalars["String"]>;
  lotSizeArea?: Maybe<Scalars["String"]>;
  lotSizeAreaUnits?: Maybe<Scalars["String"]>;
  maintenanceExpense?: Maybe<Scalars["String"]>;
  occupantName?: Maybe<Scalars["String"]>;
  occupantType?: Maybe<Scalars["String"]>;
  ownerName?: Maybe<Scalars["String"]>;
  parking?: Maybe<Parking>;
  pool?: Maybe<Scalars["String"]>;
  roof?: Maybe<Scalars["String"]>;
  stories?: Maybe<Scalars["Int"]>;
  style?: Maybe<Scalars["String"]>;
  subType?: Maybe<Scalars["String"]>;
  subTypeText?: Maybe<Scalars["String"]>;
  subdivision?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  view?: Maybe<Scalars["String"]>;
  water?: Maybe<Scalars["String"]>;
  yearBuilt?: Maybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  /** A simple type for getting started! */
  hello?: Maybe<Scalars["String"]>;
  /** List of properties for a given city */
  properties?: Maybe<Array<Maybe<Property>>>;
};

export type QueryPropertiesArgs = {
  city: Scalars["String"];
};

export type Sales = {
  __typename?: "Sales";
  agent?: Maybe<Agent>;
  closeDate?: Maybe<Scalars["String"]>;
  closePrice?: Maybe<Scalars["Int"]>;
  contractDate?: Maybe<Scalars["String"]>;
  office?: Maybe<Office>;
};

export type School = {
  __typename?: "School";
  district?: Maybe<Scalars["String"]>;
  elementarySchool?: Maybe<Scalars["String"]>;
  highSchool?: Maybe<Scalars["String"]>;
  middleSchool?: Maybe<Scalars["String"]>;
};

export type Tax = {
  __typename?: "Tax";
  id?: Maybe<Scalars["String"]>;
  taxAnnualAmount?: Maybe<Scalars["Int"]>;
  taxYear?: Maybe<Scalars["Int"]>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Address: ResolverTypeWrapper<Address>;
  Agent: ResolverTypeWrapper<Agent>;
  Association: ResolverTypeWrapper<Association>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  CoAgent: ResolverTypeWrapper<CoAgent>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  Geo: ResolverTypeWrapper<Geo>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Listing: ResolverTypeWrapper<Listing>;
  Mls: ResolverTypeWrapper<Mls>;
  Office: ResolverTypeWrapper<Office>;
  Parking: ResolverTypeWrapper<Parking>;
  Property: ResolverTypeWrapper<Property>;
  Query: ResolverTypeWrapper<{}>;
  Sales: ResolverTypeWrapper<Sales>;
  School: ResolverTypeWrapper<School>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Tax: ResolverTypeWrapper<Tax>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Address: Address;
  Agent: Agent;
  Association: Association;
  Boolean: Scalars["Boolean"];
  CoAgent: CoAgent;
  Float: Scalars["Float"];
  Geo: Geo;
  Int: Scalars["Int"];
  Listing: Listing;
  Mls: Mls;
  Office: Office;
  Parking: Parking;
  Property: Property;
  Query: {};
  Sales: Sales;
  School: School;
  String: Scalars["String"];
  Tax: Tax;
}>;

export type AddressResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Address"] = ResolversParentTypes["Address"]
> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  crossStreet?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  full?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  postalCode?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  state?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  streetName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  streetNumber?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  streetNumberText?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  unit?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AgentResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Agent"] = ResolversParentTypes["Agent"]
> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssociationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Association"] = ResolversParentTypes["Association"]
> = ResolversObject<{
  amenities?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  fee?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  frequency?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoAgentResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["CoAgent"] = ResolversParentTypes["CoAgent"]
> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GeoResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Geo"] = ResolversParentTypes["Geo"]
> = ResolversObject<{
  county?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  directions?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lat?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  marketArea?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ListingResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Listing"] = ResolversParentTypes["Listing"]
> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes["Address"]>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes["Agent"]>, ParentType, ContextType>;
  agreement?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  association?: Resolver<
    Maybe<ResolversTypes["Association"]>,
    ParentType,
    ContextType
  >;
  coAgent?: Resolver<Maybe<ResolversTypes["CoAgent"]>, ParentType, ContextType>;
  disclaimer?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  favoriteCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  geo?: Resolver<Maybe<ResolversTypes["Geo"]>, ParentType, ContextType>;
  internetAddressDisplay?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  internetEntireListingDisplay?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  leaseTerm?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  leaseType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  listDate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  listPrice?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  listingId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  mls?: Resolver<Maybe<ResolversTypes["Mls"]>, ParentType, ContextType>;
  mlsId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes["Office"]>, ParentType, ContextType>;
  originalListPrice?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  photos?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  privateRemarks?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  property?: Resolver<
    Maybe<ResolversTypes["Property"]>,
    ParentType,
    ContextType
  >;
  remarks?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sales?: Resolver<Maybe<ResolversTypes["Sales"]>, ParentType, ContextType>;
  school?: Resolver<Maybe<ResolversTypes["School"]>, ParentType, ContextType>;
  showingContactName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  showingContactPhone?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  showingInstructions?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  tax?: Resolver<Maybe<ResolversTypes["Tax"]>, ParentType, ContextType>;
  terms?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  virtualTourUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MlsResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Mls"] = ResolversParentTypes["Mls"]
> = ResolversObject<{
  area?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  areaMinor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  daysOnMarket?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  originalEntryTimestamp?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  originatingSystemName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  statusText?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OfficeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Office"] = ResolversParentTypes["Office"]
> = ResolversObject<{
  brokerid?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  servingName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParkingResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Parking"] = ResolversParentTypes["Parking"]
> = ResolversObject<{
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  leased?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  spaces?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PropertyResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Property"] = ResolversParentTypes["Property"]
> = ResolversObject<{
  accessibility?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  acres?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  additionalRooms?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  area?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  areaSource?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  bathrooms?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  bathsFull?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  bathsHalf?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  bathsThreeQuarter?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  bedrooms?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  construction?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  cooling?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  exteriorFeatures?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  fireplaces?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  flooring?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  foundation?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  garageSpaces?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  heating?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  interiorFeatures?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  laundryFeatures?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lotDescription?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lotSize?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  lotSizeArea?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lotSizeAreaUnits?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  maintenanceExpense?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  occupantName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  occupantType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  ownerName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  parking?: Resolver<Maybe<ResolversTypes["Parking"]>, ParentType, ContextType>;
  pool?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  roof?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  stories?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  style?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  subType?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  subTypeText?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  subdivision?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  view?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  water?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  yearBuilt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  hello?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  properties?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Property"]>>>,
    ParentType,
    ContextType,
    RequireFields<QueryPropertiesArgs, "city">
  >;
}>;

export type SalesResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Sales"] = ResolversParentTypes["Sales"]
> = ResolversObject<{
  agent?: Resolver<Maybe<ResolversTypes["Agent"]>, ParentType, ContextType>;
  closeDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  closePrice?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  contractDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  office?: Resolver<Maybe<ResolversTypes["Office"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SchoolResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["School"] = ResolversParentTypes["School"]
> = ResolversObject<{
  district?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  elementarySchool?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  highSchool?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  middleSchool?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaxResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Tax"] = ResolversParentTypes["Tax"]
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  taxAnnualAmount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  taxYear?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Address?: AddressResolvers<ContextType>;
  Agent?: AgentResolvers<ContextType>;
  Association?: AssociationResolvers<ContextType>;
  CoAgent?: CoAgentResolvers<ContextType>;
  Geo?: GeoResolvers<ContextType>;
  Listing?: ListingResolvers<ContextType>;
  Mls?: MlsResolvers<ContextType>;
  Office?: OfficeResolvers<ContextType>;
  Parking?: ParkingResolvers<ContextType>;
  Property?: PropertyResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sales?: SalesResolvers<ContextType>;
  School?: SchoolResolvers<ContextType>;
  Tax?: TaxResolvers<ContextType>;
}>;

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RestaurantsQuery
// ====================================================

export interface RestaurantsQuery_search_business_categories {
  __typename: "Category";
  /**
   * Title of a category for display purposes.
   */
  title: string | null;
}

export interface RestaurantsQuery_search_business_coordinates {
  __typename: "Coordinates";
  /**
   * The latitude of this business.
   */
  latitude: number | null;
  /**
   * The longitude of this business.
   */
  longitude: number | null;
}

export interface RestaurantsQuery_search_business {
  __typename: "Business";
  /**
   * Yelp ID of this business.
   */
  id: string | null;
  /**
   * Name of this business.
   */
  name: string | null;
  /**
   * URLs of up to three photos of the business.
   */
  photos: (string | null)[] | null;
  /**
   * Number of reviews for this business.
   */
  review_count: number | null;
  /**
   * Rating for this business (value ranges from 1, 1.5, ... 4.5, 5).
   */
  rating: number | null;
  /**
   * Price level of the business. Value is one of $, $$, $$$ and $$$$ or null if we
   * don't have price available for the business.
   */
  price: string | null;
  /**
   * A list of category title and alias pairs associated with this business.
   */
  categories: (RestaurantsQuery_search_business_categories | null)[] | null;
  /**
   * The coordinates of this business.
   */
  coordinates: RestaurantsQuery_search_business_coordinates | null;
}

export interface RestaurantsQuery_search {
  __typename: "Businesses";
  /**
   * A list of business Yelp finds based on the search criteria.
   */
  business: (RestaurantsQuery_search_business | null)[] | null;
}

export interface RestaurantsQuery {
  /**
   * Search for businesses on Yelp.
   */
  search: RestaurantsQuery_search | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MarkerInfoQuery
// ====================================================

export interface MarkerInfoQuery_business_location {
  __typename: "Location";
  /**
   * Street address of this business.
   */
  address1: string | null;
  /**
   * Street address of this business, continued.
   */
  address2: string | null;
  /**
   * Street address of this business, continued.
   */
  address3: string | null;
  /**
   * City of this business.
   */
  city: string | null;
  /**
   * ISO 3166-2 (with a few exceptions) state code of this business.
   */
  state: string | null;
  /**
   * Postal code of this business.
   */
  postal_code: string | null;
  /**
   * ISO 3166-1 alpha-2 country code of this business.
   */
  country: string | null;
  /**
   * Array of strings that if organized vertically give an address that is in the
   * standard address format for the business's country.
   */
  formatted_address: string | null;
}

export interface MarkerInfoQuery_business {
  __typename: "Business";
  /**
   * Yelp ID of this business.
   */
  id: string | null;
  /**
   * Name of this business.
   */
  name: string | null;
  /**
   * The location of this business, including address, city, state, postal code and country.
   */
  location: MarkerInfoQuery_business_location | null;
}

export interface MarkerInfoQuery {
  /**
   * Load information about a specific business.
   */
  business: MarkerInfoQuery_business | null;
}

export interface MarkerInfoQueryVariables {
  businessId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ResultItemBusinessFragment
// ====================================================

export interface ResultItemBusinessFragment_categories {
  __typename: "Category";
  /**
   * Title of a category for display purposes.
   */
  title: string | null;
}

export interface ResultItemBusinessFragment {
  __typename: "Business";
  /**
   * Yelp ID of this business.
   */
  id: string | null;
  /**
   * Name of this business.
   */
  name: string | null;
  /**
   * URLs of up to three photos of the business.
   */
  photos: (string | null)[] | null;
  /**
   * Number of reviews for this business.
   */
  review_count: number | null;
  /**
   * Rating for this business (value ranges from 1, 1.5, ... 4.5, 5).
   */
  rating: number | null;
  /**
   * Price level of the business. Value is one of $, $$, $$$ and $$$$ or null if we
   * don't have price available for the business.
   */
  price: string | null;
  /**
   * A list of category title and alias pairs associated with this business.
   */
  categories: (ResultItemBusinessFragment_categories | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ResultsMapBusinessFragment
// ====================================================

export interface ResultsMapBusinessFragment_coordinates {
  __typename: "Coordinates";
  /**
   * The latitude of this business.
   */
  latitude: number | null;
  /**
   * The longitude of this business.
   */
  longitude: number | null;
}

export interface ResultsMapBusinessFragment {
  __typename: "Business";
  /**
   * Yelp ID of this business.
   */
  id: string | null;
  /**
   * The coordinates of this business.
   */
  coordinates: ResultsMapBusinessFragment_coordinates | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================

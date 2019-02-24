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

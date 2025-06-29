import axios, { AxiosResponse } from 'axios';

//tipagem

export interface listProps {
  total: number,
  objectIDs: number[];
}

export interface Constituent {
  constituentID: number;
  role: string;
  name: string;
  constituentULAN_URL?: string;
  constituentWikidata_URL?: string;
  gender?: string;
}

export interface ElementMeasurements {
  Height?: number;
  Width?: number;
  Length?: number;
  Depth?: number;
  Diameter?: number;
  [key: string]: number | undefined;
}

export interface Measurement {
  elementName: string;
  elementDescription?: string | null;
  elementMeasurements: ElementMeasurements;
}

export interface Tag {
  term: string;
  AAT_URL?: string;
  Wikidata_URL?: string;
}

export interface objectProps {
  objectID: number;
  isHighlight: boolean;
  accessionNumber: string;
  accessionYear: string;
  isPublicDomain: boolean;
  primaryImage: string;
  primaryImageSmall: string;
  additionalImages?: string[];
  constituents?: Constituent[];
  department: string;
  objectName: string;
  title: string;
  culture?: string;
  period?: string;
  dynasty?: string;
  reign?: string;
  portfolio?: string;
  artistRole?: string;
  artistPrefix?: string;
  artistDisplayName?: string;
  artistDisplayBio?: string;
  artistSuffix?: string;
  artistAlphaSort?: string;
  artistNationality?: string;
  artistBeginDate?: string;
  artistEndDate?: string;
  artistGender?: string;
  artistWikidata_URL?: string;
  artistULAN_URL?: string;
  objectDate?: string;
  objectBeginDate?: number;
  objectEndDate?: number;
  medium?: string;
  dimensions?: string;
  measurements?: Measurement[];
  creditLine?: string;
  geographyType?: string;
  city?: string;
  state?: string;
  county?: string;
  country?: string;
  region?: string;
  subregion?: string;
  locale?: string;
  locus?: string;
  excavation?: string;
  river?: string;
  classification?: string;
  rightsAndReproduction?: string;
  linkResource?: string;
  metadataDate?: string;
  repository?: string;
  objectURL?: string;
  objectWikidata_URL?: string;
  tags?: Tag[];
  isTimelineWork?: boolean;
  GalleryNumber?: string;
  [key: string]: any;
}

// API

const apiMuseum = axios.create({
  baseURL: "https://collectionapi.metmuseum.org/public/collection/v1/",
});

export const getMuseumObjects = () => {
  const url = "objects";
  return apiMuseum.get(url);
};

export const getMuseumObjectsByDepartmentId = (id: number):
  Promise<AxiosResponse<listProps, any>> => {
  const url = "objects?departmentIds=" + id;
  return apiMuseum.get(url);
};

export const getMuseumObjectById = (id: number):
  Promise<AxiosResponse<objectProps, any>> => {
  const url = "objects/" + id;
  return apiMuseum.get(url);
};

// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);

export interface Welcome {
  results: PersonalInformation[]
  info: Info
}

export interface Info {
  seed: string
  results: number
  page: number
  version: string
}

export interface PersonalInformation {
  gender: string
  name: Name
  location: Location
  email: string
  login: Login
  dob: Dob
  registered: Dob
  phone: string
  cell: string
  id: ID
  picture: Picture
  nat: string
}

export interface Dob {
  date: Date
  age: number
}

export interface ID {
  name: string
  value: string
}

export interface Location {
  street: Street
  city: string
  state: string
  country: string
  postcode: string
  coordinates: Coordinates
  timezone: Timezone
}

export interface Coordinates {
  latitude: string
  longitude: string
}

export interface Street {
  number: number
  name: string
}

export interface Timezone {
  offset: string
  description: string
}

export interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

export interface Name {
  title: string
  first: string
  last: string
}

export interface Picture {
  large: string
  medium: string
  thumbnail: string
}

// Converts JSON strings to/from your types
export class Convert {
  public static toWelcome(json: string): Welcome {
    return JSON.parse(json)
  }

  public static welcomeToJson(value: Welcome): string {
    return JSON.stringify(value)
  }
}

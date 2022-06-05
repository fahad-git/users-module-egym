export interface Name {
  title: string,
  first: string,
  last: string
  }
  
  export interface Address {
  number: number,
  name: string
  }
  
  
  export interface Coordinates {
  latitude: string,
  longitude: string
  }
  
  export interface TimeZone {
  offset: string,
  description: string
  }
  
  export interface Location {
  street: Address
  city: string,
  state: string,
  country: string,
  postcode: number,
  coordicates: Coordinates,
  timezone: TimeZone
  }
  
  export interface Login {
  uuid: string,
  username: string,
  password: string,
  salt: string,
  md5: string,
  sha1: string,
  sha256: string
  }
  
  export interface DOB {
  date: string,
  age: number
  }
  
  export interface Registered {
  date: string,
  age: number
  }
  
  export interface ID {
  name: string,
  value: string
  }
  
  export interface Picture { 
    large: string,
    medium: string,
    thumbnail:string
  }
  
  export interface IUser{
  gender: string,
  name: Name,
  location: Location,
  email: string,
  login: Login,
  dob: DOB,
  registered: Registered,
  phone: string,
  cell: string,
  id: ID,
  picture: Picture,
  nat: string
  }

// export interface IUser {
//   userId: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   userGroup: string;
//   invationPending: boolean;
//   userImgName: string;
//   userImgKey: string;
//   userImgUrl: string;
//   isLoggedIn?: boolean;
// }

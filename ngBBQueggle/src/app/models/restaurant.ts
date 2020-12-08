export class Restaurant {
  id: number;
  name: string;
  phoneNumber: string;
  description: string;
  website: string;
  logo: string;
  dineIn: boolean;
  hours: string;
  enabled: boolean;

  constructor(
  id?: number,
  name?: string,
  phoneNumber?: string,
  description?: string,
  website?: string,
  logo?: string,
  dineIn?: boolean,
  hours?: string,
  enabled?: boolean,
  ){
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.description = description;
    this.website = website;
    this.logo = logo;
    this.dineIn = dineIn;
    this.hours = hours;
    this.enabled = enabled;
  }
}
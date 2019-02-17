import { IDetails } from './IDetails';
import { IAddress } from './IAddress';
import { INote } from './INote';

export interface IProfile
{
    details: IDetails;
    address: IAddress;
    notes: INote[];
}
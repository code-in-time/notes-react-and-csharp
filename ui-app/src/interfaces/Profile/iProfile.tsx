import { IDetails } from './IDetails';
import { IAddress } from './IAddress';
import { INote } from './INote';

export interface IProfile
{
    Details: IDetails;
    Address: IAddress;
    Notes: INote[];
}